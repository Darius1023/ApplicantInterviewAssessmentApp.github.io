import React, { useEffect, useState } from 'react'
import { createAPIEndpoint, ENDPOINTS, BASE_URL } from '../api'
import useStateContext from '../hooks/useStateContext'
import { Card, CardContent, CardMedia, CardHeader, List, ListItemButton, Typography, Box, LinearProgress } from '@mui/material'
import { getFormatedTime } from '../helper'
import { useNavigate } from 'react-router'

export default function Question() {

    const [qns, setQns] = useState([])
    const [qnIndex, setQnIndex] = useState(0)
    const [timeTaken, setTimeTaken] = useState(0) //This is for Timer.
    const { context, setContext } = useStateContext()
    const navigate = useNavigate()

    let timer;

    const startTimer = () => {
        timer = setInterval(() => {
            setTimeTaken(prev => prev + 1) //continue the timer//you can change here.
        }, [1000]) //milliseconds = 1 second
    }

    useEffect(() => {
        setContext({
            timeTaken: 0,
            selectedOptions: []
        })
        createAPIEndpoint(ENDPOINTS.question) //make a request from list of questions
            .fetch() 
            .then(res => {
                setQns(res.data)
                startTimer() //for timer to start 
            })
            .catch(err => { console.log(err); })//continue for every questions

        return () => { clearInterval(timer) }
    }, [])

    const updateAnswer = (qnId, optionIdx) => {
        const temp = [...context.selectedOptions] //passing the answer to the same id.
        temp.push({
            qnId,
            selected: optionIdx
        })
        if (qnIndex < 9) {//this part can change the number of questionaires.
            setContext({ selectedOptions: [...temp] })
            setQnIndex(qnIndex + 1) 
        }
        else {
            setContext({ selectedOptions: [...temp], timeTaken })
            navigate("/result") //if clicking the last question the result page will appear.
        }
    }

    return (
        qns.length != 0
            ? <Card
                sx={{
                    maxWidth: 640, mx: 'auto', mt: 10,//this part can change the number of questionaires. Also display the questions
                    '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' } //to make the timer aligned with the Question of 1 to 10
                }}>
                <CardHeader
                    title={'Question ' + (qnIndex + 1) + ' of 10'}//Header of the questions. Below it the linearprogress copied from mui.com
                    action={<Typography>{getFormatedTime(timeTaken)}</Typography>} /> 
                <Box>
                    <LinearProgress variant="determinate" value={(qnIndex + 1) * 100 / 10} /> 
                </Box>    
                {qns[qnIndex].imageName != null
                    ? <CardMedia
                        component="img"
                        image={BASE_URL + 'images/' + qns[qnIndex].imageName}
                        sx={{ width: 'auto', m: '10px auto' }} /> //If there is an image in a question
                    : null}
                <CardContent>
                    <Typography variant="h6">
                        {qns[qnIndex].qnInWords}
                    </Typography>
                    <List>
                        {qns[qnIndex].options.map((item, idx) =>//makes the questions in list. Below onClick, means capturing the answer.
                            <ListItemButton disableRipple key={idx} onClick={() => updateAnswer(qns[qnIndex].qnId, idx)}>
                                <div>
                                    <b>{String.fromCharCode(65 + idx) + " . "}</b>{item}
                                </div>

                            </ListItemButton>//65 means Capital Letter A. idx for increment
                        )}

                    </List>
                </CardContent>
            </Card>
            : null
    )
}
