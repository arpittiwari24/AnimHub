const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a 'User' model
    required: true,
  },
  category: {
    type: String,
  },
  code: {
    html: {
      type: String,
    },
    css: {
      type: String,
    },
    js: {
      type: String,
    },
    react: {
      type: String,
    },
    // Add more fields for other code types as needed
  },
  likeCounter: {
    type: Number,
    default: 0,
  },
  likedUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  verified: {
    type: Boolean,
    default:false,
  },
});

module.exports = mongoose.model("Component", componentSchema);
