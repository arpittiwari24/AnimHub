const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnect = async ()=>{
    await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('Database connected successfully'))
    .catch((err)=>{
        console.log('DB connection unsuccessfull');
        console.log(err);
        process.exit(1);
    });
}