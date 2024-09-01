// db.js
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'mytest';

let client;

async function connect() {
    if (!client) {
        client = new MongoClient(url);
        await client.connect();
    }
    return client.db(dbName);
}

async function close() {
    if (client) {
        await client.close();
        client = null;
    }
}

module.exports = {
    connect,
    close
};