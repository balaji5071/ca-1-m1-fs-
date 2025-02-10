const express=require('express')
const cors =require('cors')
port = 5888
const app=express()


app.get('/',(req,res)=>{
    res.status(200).send("server is running now ")
})
app.post('/signup',(req,res)=>{
    const {Username,Email,Password,DOB} =req.body
    if (!Username)
        return res.status(400).json({message:"username can not be empty"})
    if(!Email)
        return res.status(400).json({message:" Email can not be empty"})
    if(Password<8 || password>=16)
        return res.status(400).json({message:"Password length should be greater that 8 or less than or equal to 16"})
    if(!DOB)
        return res.status(400).json({message:"please enter  your Date of birth"})
    else
        return res.status(200).json({message:"everithing is fine now you can login"})
})  

app.listen(port,()=>{
    console.log(`server runnning successfully now ${port} `)
})