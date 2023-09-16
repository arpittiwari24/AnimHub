const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

require('dotenv').config();

//importing routes
const userRoutes = require('./routes/user');
const componentRoutes = require('./routes/component');

//importing db instance
const {dbConnect} = require('./config/database');
dbConnect();    


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
    credentials: true,  
}));

app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/component",componentRoutes);

app.get('/',(req,res)=>{
    return res.json({
        success:true,
        message:"server is running and up ...."
    })
});

app.get('/dashboard',(req,res)=>{
    console.log("dashboard");
    return res.json({
        success:true,
        message:"dashboard is running and up ...."
    })
})

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Port running on ${PORT}`);
})