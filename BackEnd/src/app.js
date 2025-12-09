// const express = require('express');
// const aiRoutes = require('./routes/ai.routes');

// const app = express();



// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.use('/ai', aiRoutes);

// module.exports = app;



// import express from 'express';
// import aiRoutes from './routes/ai.routes.js'; // ⚠️ IMPORTANT: Don't forget the .js

// const app = express();

// // Good practice to allow JSON parsing
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.use('/ai', aiRoutes);

// export default app;


import express from 'express';
import aiRoutes from './routes/ai.routes.js';
import cors from 'cors';

const app = express();

// ✅ Add CORS so your frontend can talk to this backend
app.use(cors());

// ✅ Enable JSON parsing (Required for req.body.code)
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/ai', aiRoutes);

export default app;