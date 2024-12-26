const {KafkaClient , Consumer , Producer, Admin } = require('kafka-node') ; 


// middleware 

const KafkaMiddleware=()=>{

    const kafkaClient = new KafkaClient({kafkaHost:'localhost:9092'}) ; 

    //admin and topic creation
    const admin = new Admin(kafkaClient); // admin creates topic programmatically 
    const topicName = 'dietRequests' ; 



    const topicsToCreate=[
        {
        topic:topicName,
        partitions:15,
        replicationFactor:3,
        }
    ]; 


    admin.createTopics(topicsToCreate,(err,res)=>{
        if(err&&err.messahe!=='TopicExistsException'){
            console.error('Error Creating topics',err) ; 
        }else{
            console.log('Topic Created!')
        }
    })
  

//Producer for sending data to the queue
const producer = new Producer(kafkaClient) ; 

producer.on('ready',()=>{
    console.log("Producer Ready to send data")
});

producer.on('error',()=>{
    console.err('Producer error:',err) ; 
})


//Consumer for receiveing the data from kafka
const consumer = new Consumer(
    kafkaClient,
    [{topic:topicName}],
    {autoCommit:true}
)

consumer.on('message', (message) => {
    console.log('Received message:', message);
  });

  consumer.on('error', (err) => {
    console.error('Consumer error:', err);
  });


return {producer,consumer} ; 




}

module.exports = KafkaMiddleware;   