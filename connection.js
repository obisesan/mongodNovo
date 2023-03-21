// connection.js
const mongoose = require("mongoose");
const connection = process.env.MONGO_LIVE_CONNECTION_URL ;
const connectDb = () => {
 return mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true,
	useCreateIndex: true });
	
};
module.exports = connectDb;