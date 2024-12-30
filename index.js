const express = require("express") ; 
const dotenv = require('dotenv') ; 
const Limiter = require('../server/Middlewares/limiter')
const cors = require('cors') ; 
const DietRouter = require("./Routes/dietGenerate");
const AdminKafka = require('../server/Kafka/admin')

dotenv.config() ; 

//decalrations
const app = express() ; 
const PORT = process.env.PORTNUMBER ; 


//middlewares
app.use(express.json()) ; 
app.use(express.urlencoded({extended:false})) ; 
app.use('/api',Limiter) ; 
app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE']
}))


//apis
app.use('/api/diet-planner',DietRouter)



app.listen(PORT,()=>{
    console.log(`Server is running on port number ${PORT}`) ; 
})