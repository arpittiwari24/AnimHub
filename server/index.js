const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

require('dotenv').config();

//importing routes
const authRoutes = require('./routes/auth');
const componentRoutes = require('./routes/component');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const statsRoutes = require('./routes/statistics');
const categoryRoutes = require('./routes/category');
const tagRoutes = require('./routes/tag')

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

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/component",componentRoutes);
app.use("/api/v1/admin",adminRoutes);
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/stats",statsRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/tag',tagRoutes);

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

const PORT = process.env.PORT || 6000;

app.listen(PORT,()=>{
    console.log(`Port running on ${PORT}`);
})