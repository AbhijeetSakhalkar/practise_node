const express = require('express');
const app = express();

const dotenv = require('dotenv');

const connectDatabase = require('./config/database');

// setting up config.env file variables
dotenv.config({path: './config/config.env'})

//Connect to Database
connectDatabase();

// importing all routes
const jobs = require('./routes/jobs')

// this is like adding 
app.use('/api/v1', jobs); 

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Node JS : JOBEE-API server startrd at port: ${process.env.port} in ${process.env.NODE_ENV} mode.`);
});