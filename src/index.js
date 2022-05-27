const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('../react/node_modules/dotenv/lib/main').config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PWD;

const db = mongoose.connect(`mongodb+srv://${username}:${password}@capmation-keeper.hpvo5.mongodb.net/capmation-keeper`, { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 3000;
const Card = require('./models/card');
const cardRouter = require('./routes/card_router')(Card);


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