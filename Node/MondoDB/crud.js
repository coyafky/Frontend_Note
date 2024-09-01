// crud.js
const { connect } = require('./db');

async function findDocuments(collectionName) {
    const db = await connect();
    const collection = db.collection(collectionName);
    const cursor = await collection.find();
    return await cursor.toArray();
}

async function insertDocument(collectionName, document) {
    const db = await connect();
    const collection = db.collection(collectionName);
    return await collection.insertOne(document);
}

async function updateDocument(collectionName, filter, update) {
    const db = await connect();
    const collection = db.collection(collectionName);
    return await collection.updateOne(filter, { $set: update });
}

async function deleteDocument(collectionName, filter) {
    const db = await connect();
    const collection = db.collection(collectionName);
    return await collection.deleteOne(filter);
}

module.exports = {
    findDocuments,
    insertDocument,
    updateDocument,
    deleteDocument
};