const express=require("express")
const router=new express.Router(); 

const Employee=require("../models/employee")

router.post("/employees",async (req,res)=>{
    try{
        const addingEmployeeRecords= new Employee(req.body)
        console.log(req.body)
        const inertEmployee=await addingEmployeeRecords.save();
        res.status(201).send(inertEmployee);
    }
    catch(e){
        res.status(400).send(e)
    }
});

// get all eployees data
router.get("/employees",async (req,res)=>{
    try{
        const getEmployees=await Employee.find({}).sort({"Empid":1});
        res.send(getEmployees);
    }
    catch(e){
        res.status(400).send(e)
    }
});

// get indvidual employee data
router.get("/employees/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const getEmployee=await Employee.findById(_id);
        res.send(getEmployee);
    }
    catch(e){
        res.status(400).send(e)
    }
});

// update indvidual employee data

router.patch("/employees/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const updateEmployee=await Employee.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updateEmployee);
    }
    catch(e){
        res.status(500).send(e)
    }
});

// delete indvidual employee data
router.delete("/employees/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const deletedEmployee=await Employee.findByIdAndDelete(_id);
        res.send(deletedEmployee);
    }
    catch(e){
        res.status(500).send(e)
    }
});

module.exports=router