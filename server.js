require('dotenv').config()

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const connectToDb = require("./connection");
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const errorHandler = require('./middleWare/errorHandler');

const PORT = process.env.PORT || 5000 ;

const app = express();

// Helmet
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());

const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler)

/** Configure Routes */
require('./routes/routes', )(app);
require('./routes/userRoutes', )(app);
// app.use('/api/user', require('./routes/userRoutes'))
// require('./routes/userRoutes', )(app);

app.use(bodyParser, urlencoded({extended:true}))
/** Connect to DB */
app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
  connectToDb().then(() => {
    console.log("MongoDb connected");
  });
});
