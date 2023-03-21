const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    // user_id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    // }, 
    fname:{
        type: String,
        required:[true,'please add the contact name']
    },
    lname:{
        type: String,
        required:[true,'please add the contact name']
    },
   dob:{
        type: Date,
        required:[true,'please add the contact dob']

    },
     phone:{
        type: String,
        required:[true,'please add the contact phone number']
    }, 
    address:{
        type: String,
        required:[true,'please add the contact address']
    },
    email:{
        type: String,
        required:[true,'please add the contact email']
    },
    gender:{
        type: String,
        required:[true,'please add the contact gender']
    },
} , {
    timestamps: true
}
)


module.exports = mongoose.model('contact', contactSchema)


