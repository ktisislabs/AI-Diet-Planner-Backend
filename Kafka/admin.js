const { Kafka,logLevel } = require("kafkajs");

async function AdminKafka() {
  const kafka = new Kafka({
    clientId: "Ai-Diet-Planner",
    brokers: ["192.168.1.44:9092"], 
    logLevel:logLevel.DEBUG
  });

  const admin = kafka.admin();

  try {
    // Connect to Kafka Admin
    await admin.connect();
    console.log("Admin connected to Kafka cluster.");

    // Check if the topic already exists
    const existingTopics = await admin.listTopics();
    const topicName = "diet-planner";

    if (existingTopics.includes(topicName)) {
      console.log(`Topic "${topicName}" already exists. Skipping creation.`);
    } else {
      // Create the topic
      await admin.createTopics({
        topics: [
          {
            topic: topicName,
            numPartitions: 10, 
            replicationFactor: 2, 
          },
        ],
      });

      console.log(`Topic "${topicName}" created successfully.`);
    }
  } catch (err) {
    console.error("Error while managing Kafka topics:", err.message);
  } finally {
    // Disconnect from Admin
    await admin.disconnect();
    console.log("Admin disconnected from Kafka cluster.");
  }
}



module.exports = AdminKafka;
