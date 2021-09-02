import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';

import cors from  'cors' ;

dotenv.config()


const app = express();
app.use(express.json());
app.use( cors() );

app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
}).then(() => {
	console.log("connection to mongoose is successeful");
}).catch((e) => {
	console.log("Connection Fail");
})


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/', (req, res) => {
	res.send('Node server is Serve here');
});

const port = process.env.PORT || 5000;

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

app.listen(5000, () => {
	console.log(`serve at http://localhost/${port}`)
});