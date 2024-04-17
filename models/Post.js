const mongoose = require("mongoose");
const postShema = new mongoose.Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  images: [],
});
module.exports = mongoose.model("Post", postShema);
