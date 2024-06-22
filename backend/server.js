const express=require('express');
require('dotenv').config();
const workoutRoutes=require('./routes/workouts');
const mongoose=require('mongoose');
const userModel = require('./models/userModel');
const userRoutes = require('./routes/user');

//express app
const app=express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//routes
app.use('/api/workouts',workoutRoutes) 
app.use('/api/user', userRoutes)

//connect to DB(asynchronous and return a promise)
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        //listen for request ---- (listen for requests only when connected to db)
        app.listen(process.env.PORT,()=>{
            console.log('connected to db & listening on port 4000')
        })
    })
    .catch((error)=>{
        console.log(error)
    })

