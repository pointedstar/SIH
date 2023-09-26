const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body } = require('express-validator');

const JWT_SECRET_CODE = 'titans06';

router.post('/sign-in',[
    body('email','Enter valid email').isEmail(),
    body('password','Password cannot be empty').exists()
], async (req,res)=>{
    console.log('req body -->', req?.body)
    const user = await userRegistrationSchema.findOne({email: req?.body?.email})
    const comparePassword = await bcrypt.compare(req?.body?.password, user?.password)
    if(comparePassword){
        const token = jwt.sign({
            email: user?.email,
            password: user?.password
        },JWT_SECRET_CODE)
        //localStorage.setItem('token',token)
        res.json({
            success: true,
            message: 'SignIn Successful',
            token: token
        })
    }
    else{
        console.log('Enter valid creentials')
        res.json({
            message: 'Invalid Creentials'
        })
    }

})