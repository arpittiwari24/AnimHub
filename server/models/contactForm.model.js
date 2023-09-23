const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim:true
  },
  mobile:{
    type:String,
    unique:true,
    trim:true
  },
  message:{
    type:String,
    trim:true,
    required:true
  },
  topic:{
    type:String,
    enum:["Fun","Feedback","Maintainer","Help"],
    required:true
  },
  replied:{
    type:Boolean,
    default:false
  }
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ContactForm", contactFormSchema);
