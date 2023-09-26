import { Button, TextField } from "@mui/material";
import React from "react";
import axios from 'axios';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSubmit = ()=>{
      console.log(email, password)
      const url = 'http://localhost:5000/auth/sign-in'
      axios.post(url,{
        email: email,
        password: password
      },{
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then((res)=>{
        console.log(res?.data)
        if(res?.data?.success){
          localStorage.setItem('token',res?.data?.token)
          window.location.href = '/dashboard'
          
        }
      })
      .catch((error)=>{
        console.log('error -->', error)
      })
    }
  return (
    <div className="container">
      <TextField label="Enter email here" variant="outlined" style={{margin: '1rem'}} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <br />
      <TextField type="password" label="Enter password here" variant="outlined" style={{margin: '1rem'}} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <br />
      <Button variant="contained" color='primary' style={{margin: '1rem'}} onClick={handleSubmit}>
        Login
      </Button><br />
      <a href="/register" style={{margin: '1rem'}}>New user? Register here</a>
    </div>
  );
}

export default Login
