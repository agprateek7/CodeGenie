const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors');
// express -> node.js app framework that provide features like request, response etc.

const app = express();


const corsOptions = {
    origin: 'https://ai-code-reviewer-theta-taupe.vercel.app', // Use your "Domains" URL
    methods: ['GET', 'POST'],
    credentials: true,  // If you're using cookies or sessions
  };

app.use(cors(corsOptions));

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is now working');
})

app.use('/ai', aiRoutes)

module.exports = app;