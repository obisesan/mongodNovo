const { 
  getContacts,
  getContact,
  createContact,
  upadteContact,
  deleteContact} = require('../controller/contactController');
// const validateToken = require('../middleWare/validateTokenHandler');
module.exports = app => {
  // app.use(validateToken)
  app.get('/contact', getContacts ).post('/contact', createContact );
  
  app.get('/contact/:id',getContact).put('/contact/:id',upadteContact).delete('/contact/:id',deleteContact );

  // app.post('/api', (req,res) => {
  // //  console.log(req.body)
  // }); 

};