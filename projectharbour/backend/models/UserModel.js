const mongoose = require('mongoose')
const {Schema} = mongoose

const userRegistrationSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    timeStamp:{
        type:String,
        default:Date.now,
    }
})

const userRegistration = mongoose.model('userRegistration',userRegistrationSchema)

module.exports = userRegistration