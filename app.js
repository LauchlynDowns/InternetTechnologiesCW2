// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const events = require('./routes/api/events');


const app = express();

app.use(express.static(path.join(__dirname, 'festivalapp', 'build')))




connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get('*', async (req, res) =>{
    res.sendFile(path.join(__dirname, 'festivalapp', 'build', 'index.html'));

});


app.use('/api/events', events);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));