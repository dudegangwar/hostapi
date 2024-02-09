require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;

const products_routes = require('./routes/products');

app.get('/', (req, res) => {
  res.send('Hello World I am Live Baby!');
});

// middleware or set route

app.use('/api/products', products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT,() =>{
            console.log(`${PORT} Yes I am connected to the server!`)
        })
    } catch (error){
        console.log(error);
    }
    }


start();