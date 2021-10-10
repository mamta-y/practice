require('dotenv').config();
const express = require('express');
const cors=require('cors');
const app = express();
const mongoose=require('mongoose');
const Joi=require('joi');
const items= require('./routes/books');
const users=require('./routes/users')
const login=require('./routes/login')


mongoose.connect("mongodb://localhost/books")
.then(()=>console.log('connected to db'))
.catch(()=>console.log('not conneccted to db'))
app.use(express.json());
app.use(cors());

app.use('/api/items',items);
app.use('/api/register',users);
app.use('/api/login',login);


const port=process.env.PORT || 4000
app.listen(port,()=> console.log(`listening to ${port}`));
