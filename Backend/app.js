const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Connecting to Mongodb Atlas
mongoose
  .connect(
    'mongodb://127.0.0.1:27017/ProjectModule'
  )
  .then(result => {
    console.log('Connected to Atlas');
    // console.log(result); //for self analysis tha
  })
  .catch(err => {
    console.log(err);
  });


  //Creating Routes
  const studentRouter = require('./routes/student');
  app.use('/student' , studentRouter);

  const trainerRouter = require('./routes/trainer');
  app.use('/trainer' , trainerRouter);

  const userRouter = require('./routes/user');
  app.use('/user' , userRouter);

  const adminRouter = require('./routes/admin');
  app.use('/admin' , adminRouter);


  //Connecting to Server
  app.listen(3000, () => {
    console.log(`Server Started at port ${3000}`);
  });


  
