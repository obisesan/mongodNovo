const Contact = require('../models/contactModels')
const asyncHandler = require('express-async-handler')


const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();//{user_id:req.user.id}
    res.status(200).send(contacts);
  });

const createContact = asyncHandler( async (req, res) => {
    console.log('the request body is ' , req.body);
    const {fname,lname,dob,phone, address, email,gender} = req.body
    if (!fname || !lname ||!dob||!phone ||!address || !gender|| !email ) {
        res.status(400)
        throw new Error ('All field is mandetory');
    }

    const contacts = await Contact.create({
      fname,
      lname,
      dob,
      phone,
      address,
      email,
      gender
      // user_id:req.user.id
    })
    res.status(201).send(contacts);
  });


const getContact = asyncHandler (async (req, res) => {
  const contacts = await Contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("contact not found")
  }
  res.status(200).send(contacts);
  });
const upadteContact =asyncHandler ( async  (req, res) => {
  const contacts = await Contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("contact not found")
  }
  
  const upadteContact = await Contact.findOneAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  )

    res.status(200).send(upadteContact);
  });
const deleteContact = asyncHandler( async (req, res) => {
  const contacts = await Contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("contact not found")
  }

  await Contact.deleteOne({_id:req.params.id})
    res.status(200).send(contacts);
  });


  module.exports = {
    getContacts,
    getContact,
    createContact,
    upadteContact,
    deleteContact
}