const express = require("express");
const mongoose =require("mongoose")
require("dotenv").config();
const userRoute = require('./routes/userroutes')
const adminRoute = require('./routes/adminroutes')
const app = express();
const cors = require('cors')

app.use(express.json)
app.use("/users",userRoute)
app.use("/admin",adminRoute)


app.listen(process.env.PORT,()=>{
  console.log("server is runnig");
} );
mongoose.connect(process.env.URL)
.then(()=>console.log("connected with database"))
.catch(()=>console.log("connection failed"))
