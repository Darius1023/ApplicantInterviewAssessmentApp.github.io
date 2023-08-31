import React, { useEffect } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center'
import useForm from '../hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import useStateContext from '../hooks/useStateContext'
import { useNavigate } from 'react-router'

const getFreshModel = () => ({
    name: '',
    email: ''
})

export default function Login() {

    const { context, setContext, resetContext } = useStateContext();
    const navigate = useNavigate()

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    useEffect(() => {
        resetContext()
    }, [])//Prevent from accressing again when question pages appears


    const login = e => {
        e.preventDefault();
        if (validate())
            createAPIEndpoint(ENDPOINTS.participant) //connect to API
                .post(values)
                .then(res => {
                    setContext({ participantId: res.data.participantId }) 
                    navigate('/question')
                })
                .catch(err => console.log(err))
    }

    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid." //error message
        temp.name = values.name != "" ? "" : "This field is required." //error message
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }

    return (
        <Center>
            <Card sx={{ width: 400 }}> 
                <CardContent sx={{ textAlign: 'center' }}> 
                    <Typography variant="h3" sx={{ my: 3 }}>
                        Applicant Interview Assessment 
                    </Typography> 
                    <Box sx={{
                        '& .MuiTextField-root': { //a class/ //property of the box, go to mui.com
                            m: 1, //margin
                            width: '90%' //attribute
                        }
                    }}>
                        <form noValidate autoComplete="off" onSubmit={login}> 
                            <TextField
                                label="Email" //textbox for email
                                name="email"
                                value={values.email} //email only
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.email && { error: true, helperText: errors.email })} />
                            <TextField
                                label="Name" //textbox for Name
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.name && { error: true, helperText: errors.name })} />
                            <Button
                                type="submit" //button for starting
                                variant="contained" 
                                size="large"
                                sx={{ width: '90%' }}>Start</Button>
                        </form>
                    </Box> 
                </CardContent>
            </Card>
        </Center>


    )
}
