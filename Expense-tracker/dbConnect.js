const mongoose=require('mongoose');
//pass=process.env.PASSWORD
const url='mongodb+srv://suniljatiitism:gmihdZUMQ7rISnCs@expense-tracker.qzturxv.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url,{useUnifiedTopology: true});

const connection=mongoose.connection;

connection.on('error', err=>console.log(err));
connection.on('connected', ()=>console.log('MongoDB connected'));