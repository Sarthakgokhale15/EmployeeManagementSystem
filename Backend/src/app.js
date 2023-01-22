const express=require("express");
const { response } = require("express");

const app =express();
const port=process.env.PORT || 3000;

require("../src/db/conn")
const router=require("../src/routers/employee")


app.use(express.json());

app.use(router);

app.get("/",async (req,res)=>{
    res.send("API Working");
});



app.listen(port,()=>{
    console.log(`connection is live at port ${port}`);
});