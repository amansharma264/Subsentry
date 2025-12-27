import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './DB/connect.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 9000, () => {
            console.log(`server is running at port: ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed!!!", err);
    })
