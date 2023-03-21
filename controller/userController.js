
const asyncHandler = require('express-async-handler');
const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async (req,res) => {
    const {username , email, password } = req.body;
    if (!username || !email || !password) {
        res.status(404);
        throw new Error('All feild are mandetory')
    }
    const userAvailable = await User.findOne({email});
    if (userAvailable) {
        res.status(404);
        throw new Error('User already register')
    }
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("Hash Password",hashPassword);
    const user = await User.create({
        username,
        email,
        password:hashPassword
    });
    console.log(`user created  ${user}`)
    if(user){
    res.status(201).send({_id: user.id, email:user.email})
    }else{
        res.send(404);
        throw new Error('User data is not valid')
    }
    res.send({message: "Register the user "})
});
const loginUser = asyncHandler(async  (req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
     res.send(400)
     throw new Error('All field required')
    };
    const user = await User.findOne({email});
    // compare password with  HashP
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET );
      res.status(200).json({accessToken})
    }else{
        res.send(401);
        throw new Error('email or password is not valid ')
    }
})
const currentUser = asyncHandler(async  (req,res) => {
    res.send({message: "current the user "})
})






module.exports = {
    registerUser,
    loginUser,
    currentUser
    
}