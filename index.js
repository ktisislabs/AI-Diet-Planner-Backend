const express = require("express") ; 
const dotenv = require('dotenv') ; 


dotenv.config() ; 

//decalrations
const app = express() ; 
const PORT = process.env.PORTNUMBER




//middlewares
app.use(express.json()) ; 
app.use(express.urlencoded({extended:false})) ; 





//server initialization
app.listen(PORT,()=>{
    console.log(`Server is running on port number ${PORT}`) ; 
})