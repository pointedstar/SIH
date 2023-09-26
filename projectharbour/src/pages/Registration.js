import { Button, TextField } from "@mui/material";
import React from "react";
import axios from 'axios';
import { useState } from 'react';

function Registration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSubmit = ()=>{
      console.log(name, email, password)
      const url = 'http://localhost:5000/auth/sign-up'
      axios.post(url,{
        name: name,
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
      <TextField label="Enter name here" variant="outlined" style={{margin: '1rem'}} value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
      <TextField label="Enter email here" variant="outlined" style={{margin: '1rem'}} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <br />
      <TextField type="password" label="Enter password here" variant="outlined" style={{margin: '1rem'}} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <br />
      <Button variant="contained" color='primary' style={{margin: '1rem'}} onClick={handleSubmit}>
        Register
      </Button><br />
      <a href="/login" style={{margin: '1rem'}}>Already register? Login here</a>
    </div>
  );
}

export default Registration;
