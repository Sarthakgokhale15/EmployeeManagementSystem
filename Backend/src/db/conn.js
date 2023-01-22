const mongoose=require("mongoose");
mongoose.set('strictQuery', false);

mongodb://localhost:27017
mongoose.connect("mongodb://localhost:27017/Management").then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log("no connection");
});