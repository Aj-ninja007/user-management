//create http server

const express=require('express');
const dotenv =require('dotenv');
const morgan =require('morgan');
const bodyparser =require("body-parser");
const path=require("path");
const app=express();


const connectDB=require('./server/database/connection')

dotenv.config({path:'config.env'})
const PORT=process.env.PORT||8080

//log request
app.use(morgan('tiny'));

//mongodb connection
connectDB()
//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//setview engine
app.set('view engine','ejs')

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})