const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const Card = require('./models/card');
const cardRouter = require('./routes/card_router');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', cardRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
    console.log(`Process.env.ENV: ${process.env.ENV}`);
    console.log(`Running on port ${port}`);
});

module.exports = app;