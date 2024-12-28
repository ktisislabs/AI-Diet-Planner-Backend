async function handleGenerateDiet(req, res) {
    const { tdee, fitnessGoal, timePeriod, allergicTo, customPrompt } = req.body;
  
    // Validate that the required fields are provided
    if (!tdee || !fitnessGoal || !timePeriod) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }
  
    console.log('Received TDEE:', tdee);
    console.log('Fitness Goal:', fitnessGoal);
    console.log('Time Period:', timePeriod);
    console.log('Allergic To:', allergicTo);
    console.log('Custom Prompt:', customPrompt);

    const Prompt = `Imagine youre a pro fitness trainer and your client wants to get a tailored top quality diet based on the following parameters 
     His Maintaince calories is ${tdee} , his fitness goal is to ${fitnessGoal} within ${timePeriod} weeks ,he is allergic to ${allergicTo} . Tailor the diet around his custom preferences i.e ${customPrompt} , 

    `
    console.log(Prompt)
  
    // Now you can process the TDEE and other inputs as needed
    res.status(200).json({ message: 'Request received successfully.' });
  }
  
  
  module.exports = {
    handleGenerateDiet,
  };
  