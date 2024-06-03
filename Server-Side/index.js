
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const cartRoutes = require('./routes/cart');
// const userRoute = require('./routes/userRoutes');
// const productRotes = require('./routes/product');
 
// const app = express();
// app.use(express.json());
// app.use(cors());
// require('dotenv').config();

// const connect = async() => {
//     try {
//         await mongoose.connect(process.env.MONGOOSE_URL);
//         console.log('connected');
//     } catch (error) {
//         console.log(error);
//     }
// }

// app.use("/user" , userRoute)
// app.use("/cart", cartRoutes)
// app.use("/product", productRotes)

// app.listen(2000, () => {
//     connect();
//     console.log('server is connecting');
// })


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cartRoutes = require('./routes/cart');
const userRoute = require('./routes/userRoutes');
const productRoutes = require('./routes/product'); // Corrected typo: productRotes to productRoutes

const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error); // More detailed error message
  }
};

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to Apna Shop!');
});


app.use("/user", userRoute);
app.use("/cart", cartRoutes);
app.use("/product", productRoutes);

app.listen(2000, () => {
  connect();
  console.log('Server is running on port 2000');
});
