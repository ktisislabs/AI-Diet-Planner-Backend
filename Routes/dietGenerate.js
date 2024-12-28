const express = require('express');
const { handleGenerateDiet } = require('../Controllers/DietGenerator');

const DietRouter = express.Router();

// POST: Submit diet request
DietRouter.post('/submit-diet-req', handleGenerateDiet);

module.exports = DietRouter;