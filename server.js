const express = require("express");
const mongoose =require("mongoose")
require("dotenv").config();
const app = express();



app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT,()=>{
  console.log("server is runnig");
} );
mongoose.connect(process.env.URL)
.then(()=>console.log("connected with database"))
.catch(()=>console.log("connection failed"))
