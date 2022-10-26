const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    

    Fullname: {
        type: String,
        required: true,
        trim: true
    },
    Age: {

        type: Number,
        required: true
    },
    description:{
        type:String,
        required: true
    }
    

})

const User = mongoose.model('User',UserSchema)
module.exports = User