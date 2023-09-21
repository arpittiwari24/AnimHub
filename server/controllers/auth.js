const userModel = require("../models/user.model");

// Signup Controller for Registering USers
exports.signup = async (req, res) => {

    // try {
    //     // Destructure fields from the request body
    //     const {
    //         name,
    //         username,
    //         email,
    //         password,
    //         confirmPassword,
    //     } = req.body;
    //     // Check if All Details are there or not
    //     if (
    //         !name ||
    //         !username ||
    //         !email ||
    //         !password ||
    //         !confirmPassword
    //     ) {
    //         return res.status(403).send({
    //             success: false,
    //             message: "All Fields are required",
    //         });
    //     }
    //     // Check if password and confirm password match
    //     if (password !== confirmPassword) {
    //         return res.status(400).json({
    //             success: false,
    //             message:
    //                 "Password and Confirm Password do not match. Please try again.",
    //         });
    //     }
    //     // Check if user already exists
    //     const existingUser = await User.findOne({ email });
    //     if (existingUser) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "User already exists. Please Log in to continue.",
    //         });
    //     }
    //     // Check if username already exists
    //     const existingUsername = await User.findOne({ username });
    //     if (existingUser) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "Username already exists. Please Log in to continue.",
    //         });
    //     }
    //     // Hash the password
    //     const hashedPassword = await bcrypt.hash(password, 10);
    //     // Create the Additional Profile For User
    //     // {
    //     //    this is to be coded soon...  
    //     // }
    //     const user = await User.create({
    //         name,
    //         username,
    //         email,
    //         password: hashedPassword,
    //     });
    //     return res.status(200).json({
    //         success: true,
    //         user,
    //         message: "User registered successfully",
    //     });
    // } catch (error) {
    //     console.error(error);
    //     return res.status(500).json({
    //         success: false,
    //         message: "User cannot be registered. Please try again.",
    //     });
    // }

    try {
        console.log(req.body);
        const user = new userModel(req.body);
        const userExists = await userModel.findOne({ email: req.body.email }).exec();

        if (!userExists) {
            user.save()
            res.status(200).send(req.body);
        }
        else {
            console.log("User already exists");
            return res.json({
                success: false,
                error: "User already exists",
                message: "User already exists",
            })
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again.",
        });

    }
};

// Login controller for authenticating users
exports.login = async (req, res) => {
    try {
        // Get email and password from request body
        const { email, password } = req.body;

        console.log("Email Pass", email, password);
        // Find user with provided email
        const user = await userModel.findOne({ email });
        console.log("User", user);

        // If user not found with provided email
        if (!user) {
            // Return 401 Unauthorized status code with error message
            return res.status(401).json({
                success: false,
                message: `User is not Registered with Us Please SignUp to Continue`,
            });
        }

        // Generate JWT token and Compare Password
        // if (await bcrypt.compare(password, user.password)) {
        //     const token = jwt.sign(
        //         { email: user.email, id: user._id, isAdmin: user.isAdmin },
        //         process.env.JWT_SECRET,
        //         {
        //             expiresIn: "24h",
        //         }
        //     );

        // Save token to user document in database
        // const userAfterUpdation = await User.findOneAndUpdate(
        //     { email: user.email },
        //     { $set: { token: token } },
        //     { new: true },
        // );

        //set user password to undefined , before sending the data to the frontend
        // userAfterUpdation.password = undefined;

        //The following code can be implemented if we want to use cookies for
        //transferring the token to the frontend

        // Set cookie for token and return success response

        // const options = {
        //     expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        //     httpOnly: true,
        // };
        // res.cookie("token", token, options).status(200).json({
        //     success: true,
        //     token,
        //     user,
        //     message: `User Login Success`,
        // });
        if (user) {
            res.status(200).json({
                success: true,
                // token,
                // userAfterUpdation,
                message: `User Login Success`,
            });

        } else {
            return res.status(401).json({
                success: false,
                message: `Password is incorrect`,
            });
        }
    } catch (error) {
        console.error(error);
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
            success: false,
            message: `Login Failure Please Try Again`,
        });
    }
};