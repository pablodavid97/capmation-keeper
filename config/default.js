require('dotenv').config();

const server = {
    port: process.env.PORT,
    host: 'http://localhost',
    env: process.env.ENV,
}

const db = {
    user: process.env.MONGO_USER,
    pwd: process.env.MONGO_PWD,
}

module.exports = {
    server: server,
    db: db,
};