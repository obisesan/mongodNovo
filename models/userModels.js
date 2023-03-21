const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add user name"]
    },
    email:{
        type:String,
        required:[true, 'please add email address'],
        unique:[true, "email address is already taken"]
    },
    password:{
        type:String,
        required:[true, 'please add a strong user password'],
    },
},
{
    timestamps: true
});


module.exports = mongoose.model("user", userSchema);