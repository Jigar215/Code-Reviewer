// require('dotenv').config();
// const app = require('./src/app');



// app.listen(3000, () => {
//   console.log('Server is running on https://localhost:3000');
// });

import dotenv from 'dotenv';
import app from './src/app.js'; // ⚠️ IMPORTANT: Don't forget the .js

dotenv.config();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});