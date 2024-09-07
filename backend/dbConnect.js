const mongoose=require('mongoose');
//pass=process.env.PASSWORD
const url = "mongodb+srv://suniljdh2021:sunil123@check-spense.yygzbwv.mongodb.net/?retryWrites=true&w=majority&appName=check-spense";

mongoose.connect(url,{useUnifiedTopology: true});

const connection=mongoose.connection;

connection.on('error', err=>console.log(err));
connection.on('connected', ()=>console.log('MongoDB connected'));