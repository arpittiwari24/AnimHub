  const mongoose = require('mongoose');
  const mailSender = require("../utils/mailSender");
  const emailTemplate = require("../constants/signupmail");

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
    password: {
      type: String,
      required: true,
    },
    token:{
      type: String,
    },
    username: {
      type: String,
      required: true,
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
        ref: "Component", 
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

  async function sendRegistrationMail(email, body) {
    // Create a transporter to send emails

    // Define the email options

    // Send the email
    try {
      const mailResponse = await mailSender(
        email,"Successful Registration",body
      );
      console.log("Email sent successfully: ", mailResponse.response);
    } catch (error) {
      console.log("Error occurred while sending email: ", error);
      throw error;
    }
  }

  userSchema.post("validate", async function (doc){
          if(this.isNew){
              let textBody = await emailTemplate();
              let mailResponse = await sendRegistrationMail(this.email,textBody);
              console.log("Email sent successfully");
          }
  })

  module.exports = mongoose.model("User", userSchema);
