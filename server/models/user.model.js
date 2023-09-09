import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  bio: {
    type: String,
  },
  country: {
    type: String,
  },
  profilePicUrl: {
    type: String,
  },
  gradientBg: {
    type: String,
  },
  socialLinks: {
    type: [String],
  },
  components: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Component", // Assuming you have a 'Component' model
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
