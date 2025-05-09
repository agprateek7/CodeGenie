const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors');
// express -> node.js app framework that provide features like request, response etc.

const app = express();
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is now working');
})

app.use('/ai', aiRoutes)

module.exports = app;