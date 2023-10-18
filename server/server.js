const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const cors = require('cors');
const bodyParser = require('body-parser')


const PORT = 8080;

const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(productRoutes);
app.use(express.json());
app.use(cors());

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://Kirusha:7822011@cluster0.4zdmcdq.mongodb.net/Products',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
    )
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}
  
start();