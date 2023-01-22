const express=require("express");

const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({

  firstName: { type: String, required: true ,trim:true},
  lastName: { type: String, required: true,trim:true },
  email: { type: String, required: true},
  Empid: { type: Number, required: true,unique:true },
  contactNumber: { type: String, required: true },
});


module.exports = mongoose.model('Employee', employeeSchema);