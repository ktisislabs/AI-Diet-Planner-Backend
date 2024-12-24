const {KafkaClient , Consumer , Producer } = require('kafka-node') ; 


// middleware 

const KakfkaMiddleware=()=>{
    const kafkaClient  = new KafkaClient({kafkaHost:'localhost:9092'}) ; 
    
    //frontdata receiver 
    const producer = new Producer(kafkaClient) ;
    const consumer = new Consumer(
        kafkaClient,
        [{topic:'dietRequests',partition:0}] , 
        {autoCommit:true} 
    ) ;

    return {producer,consumer} ; 

}

module.exports = KakfkaMiddleware;