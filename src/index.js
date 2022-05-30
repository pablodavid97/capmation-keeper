const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');

const app = express();
app.use(cors());

const username = config.get('db.user');
const password = config.get('db.pwd');

const db = mongoose.connect(`mongodb+srv://${username}:${password}@capmation-keeper.hpvo5.mongodb.net/capmation-keeper`, { useNewUrlParser: true, useUnifiedTopology: true });

const environment = config.get('server.env');
const host = config.get('server.host');
const port = config.get('server.port');
const Card = require('./models/card');
const cardRouter = require('./routes/card_router')(Card);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', cardRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
    console.log(environment);
    console.log(`Server is running on ${host}:${port}`);
});

module.exports = app;