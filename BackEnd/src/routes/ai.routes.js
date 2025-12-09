// const express = require('express');
// const aicontroller = require('../controllers/ai.controller');

// const router = express.Router();

// router.get('/get-response', aicontroller.getResponse);

// module.exports = router;



// import express from 'express';
// // ✅ Import the specific controller function
// import { getResponse } from '../controllers/ai.controller.js';

// const router = express.Router();

// router.post('/get-review', getReview);

// // ✅ Use 'export default' instead of module.exports
// export default router;


import express from 'express';
import { getReview } from '../controllers/ai.controller.js';

const router = express.Router();

router.post('/get-review', getReview);

export default router;