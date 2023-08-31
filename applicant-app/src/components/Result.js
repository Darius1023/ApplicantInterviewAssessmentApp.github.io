import { Alert, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { createAPIEndpoint, ENDPOINTS } from '../api'
import { getFormatedTime } from '../helper';
import useStateContext from '../hooks/useStateContext'
import { green } from '@mui/material/colors';
import Answer from './Answer';

export default function Result() {
  const { context, setContext } = useStateContext()
  const [score, setScore] = useState(0)
  const [qnAnswers, setQnAnswers] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const ids = context.selectedOptions.map(x => x.qnId)
    createAPIEndpoint(ENDPOINTS.getAnswers)
      .post(ids)
      .then(res => {
        const qna = context.selectedOptions
          .map(x => ({
            ...x,
            ...(res.data.find(y => y.qnId == x.qnId))//merge the answers
          }))
        setQnAnswers(qna)
        calculateScore(qna)

      })
      .catch(err => console.log(err))
  }, [])

  const calculateScore = qna => {
    let tempScore = qna.reduce((acc, curr) => {
      return curr.answer == curr.selected ? acc + 1 : acc; //calculate the correct answers
    }, 0)
    setScore(tempScore)
  }

  const restart = () => {
    setContext({
      timeTaken: 0,
      selectedOptions: []
    })
    navigate("/question")
  }

  const submitScore = () => {
    createAPIEndpoint(ENDPOINTS.participant)
      .put(context.participantId, {
        participantId: context.participantId,
        score: score,
        timeTaken: context.timeTaken
      })
      .then(res => {
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false)
        }, 4000); //the alert will vanish.
      })
      .catch(err => { console.log(err) })
  }

  return (
    <>
      <Card sx={{ mt: 10, display: 'flex', width: '100%', maxWidth: 640, mx: 'auto' }}> 
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardContent sx={{ flex: '30 auto', textAlign: 'center' }}>
            <Typography variant="h4">Congratulations!</Typography>
            <Typography variant="h6">
              His/Her Grade is
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              <Typography variant="span" color={green[500]}>
                {score}
              </Typography>/10
            </Typography>
            <Typography variant="h6">
              Took {getFormatedTime(context.timeTaken) + ' mins'}
            </Typography>
            <Button variant="contained"
              sx={{ mx: 1 }}
              size="small"
              onClick={submitScore}>
              Submit
            </Button>
            <Button variant="contained"
              sx={{ mx: 1 }}
              size="small"
              onClick={restart}>
              Re-try
            </Button>
            <Alert
              severity="success"
              variant="string"
              sx={{
                width: '60%',
                m: 'auto',
                visibility: showAlert ? 'visible' : 'hidden'
              }}>
              Grade Updated.
            </Alert>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 220 }}
          image="./result2.jpg"
        />
      </Card>
      <Answer qnAnswers={qnAnswers} />
    </>
  )
}
