const express = require("express") ; 
const dotenv = require('dotenv') ; 
const KafkaMiddleware = require("../server/Middlewares/kafka")

dotenv.config() ; 

//decalrations
const app = express() ; 
const PORT = process.env.PORTNUMBER ; 






//middlewares
app.use(express.json()) ; 
app.use(express.urlencoded({extended:false})) ; 

//kafka initialize 
const {producer , consumer} = KafkaMiddleware() ; 




//server initialization
app.listen(PORT,()=>{
    console.log(`Server is running on port number ${PORT}`) ; 
})