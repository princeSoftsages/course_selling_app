const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
const secretKey = "secretkey";
const adminAuthToken = (req,res,next) => {
    const {email,password} = req.body;
    jwt.sign({email,password},secretKey,{expiresIn : "1h"});
}
app.post("/admin/signup",adminAuthToken,(req,res)=>{
    const {email,password} = req.body;
    return res.status(200).json({email,password});
})

app.post("/admin/login",(req,res)=>{
    const {email,password} = req.body;
    return res.status(200).json({email,password});
})

app.listen(5000);