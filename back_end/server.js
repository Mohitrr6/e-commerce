import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import './config/db.js'
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).send("Working");
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is up and running at ${process.env.PORT}`);
});