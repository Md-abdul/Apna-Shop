
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cartRoutes = require('./routes/cart');
const userRoute = require('./routes/userRoutes');
const productRotes = require('./routes/product');
 
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log('connected');
    } catch (error) {
        console.log(error);
    }
}

app.use("/user" , userRoute)
app.use("/cart", cartRoutes)
app.use("/product", productRotes)

app.listen(2000, () => {
    connect();
    console.log('server is connecting');
})