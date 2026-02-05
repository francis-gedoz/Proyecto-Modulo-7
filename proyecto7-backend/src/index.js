require('dotenv').config();
const cors = require('cors');
const express = require('express');

const connectDB = require('./config/db');

const userRouter = require('./routes/user.routes');
const dishRouter = require('./routes/dish.routes');
const cartRouter = require('./routes/cart.routes');

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());

// Middleware
app.use(express.json());
app.get('/', (req, res) => {
    return res.status(200).json({ message: 'OK' });
});

app.use ('/users', userRouter);
app.use('/dishes', dishRouter);
app.use('/carts', cartRouter);

app.listen(PORT, () => {
    console.log('El servidor está corriendo en el puerto', PORT);
});