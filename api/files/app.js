const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import routes
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/getProfile')

dotenv.config();

// Connect to db
mongoose.connect(process.env.DB_CONNECT, 
    {useUnifiedTopology: true, useNewUrlParser: true},   
    () => console.log("connected to DB")
);

// Middlewares
app.use(express.json());

// Routes middlewares
app.use('/api/user', authRouter);
app.use('/api/user/getProfile', profileRouter);

app.listen(4000, () => console.log("my server is running"))