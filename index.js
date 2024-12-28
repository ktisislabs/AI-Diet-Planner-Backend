const express = require("express") ; 
const dotenv = require('dotenv') ; 
const KafkaMiddleware = require("../server/Middlewares/kafka")
const Limiter = require('../server/Middlewares/limiter')

dotenv.config() ; 

//decalrations
const app = express() ; 
const PORT = process.env.PORTNUMBER ; 






//middlewares
app.use(express.json()) ; 
app.use(express.urlencoded({extended:false})) ; 
app.use('/api',Limiter) ; 

//kafka initialize 
const initialzeKafka=()=>{
    const {producer,sendata} = KafkaMiddleware() ; 
    app.set('sendata',sendata) ; 
    console.log('Kafka Initialized Sucessfully!');
}


initialzeKafka() ; 
//server initialization
app.listen(PORT,()=>{
    console.log(`Server is running on port number ${PORT}`) ; 
})