const Ratelimiter = require('express-rate-limit') ; 

const Limiter =  Ratelimiter({
    windowMs:60 * 1000, 
    max:10 , 
    keyGenerator:(req)=>req.ip,
    handler:(req,res)=>{
        res.status(429).json({message:"Too many requests"}) ; 
    },

}

) ; 


module.exports = Limiter ; 