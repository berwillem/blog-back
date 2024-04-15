const mongoose = require("mongoose");
const postShema = new mongoose.Schema({
 text: {
    type: String,
  },
  likes: {
    type:Number,
    default:0,
  },
  author: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  }
 
});
module.exports =mongoose.model("Post",postShema)
