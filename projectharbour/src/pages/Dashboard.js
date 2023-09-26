import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode'

function Dashboard() {
    const [userName, setUserName] = useState('')
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt(token)
            setUserName(user?.email)
            console.log(user)
            if(!user){
                localStorage.removeItem('token')
                window.location.href = '/login'
            }
            else{
                console.log('user Login')
               // populateQuote()
            }
        }
    },[])
  return (
    <div>
      This is dashboard
    </div>
  )
}

export default Dashboard
