const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const Joi=require('joi');
const { Book,validateBook}=require('../models/books-model');
const role=require('../middleware/role');
const auth=require('../middleware/auth');
const roleuser=require('../middleware/roleuser');

router.get('/',async(req,res)=>{
    const books=await Book.find();
    res.send(books);
})
router.get('/:id',async(req,res)=>{
    const books=await Book.findById(req.params.id);
    res.send(books);

})
router.post('/',async(req,res)=>{
   const result= validateBook(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message)
    }
    let book= new Book({
        name:req.body.name,
        price:req.body.price,
        imageURL:req.body.imageURL
        // date:req.body.date,
        // ispublished:req.body.ispublished
    })
    book=await book.save();
    res.send(book);
})

router.put('/:id',async(req,res)=>{
// const result=validateBook(req.body);
// if(result.error){
//     res.status(400).send(result.error.details[0].message)
// }
// const book=await Book.findByIdAndUpdate(req.params.id,{name:req.body.name,date:req.body.date,
//     ispublished:req.body.ispublished},{new:true})
const book=await Book.findByIdAndUpdate(req.params.id,{name:req.body.name,price:req.body.price,
        imageURL:req.body.imageURL},{new:true});
    
    res.send(book);
})
router.delete('/:id',async(req,res)=>{
     const book=await Book.findByIdAndRemove(req.params.id);
    if(!book) res.status(404).send('book not found')
    res.send(book);
})
module.exports=router;