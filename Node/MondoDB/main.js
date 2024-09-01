// main.js
const { findDocuments, insertDocument, updateDocument, deleteDocument } = require('./crud');
const { close } = require('./db');

const main = async () => {
    try {
        // 查询文档
        const documents = await findDocuments('mytest');
        for (const document of documents) {
            for (const user of document.users) {
                console.log(user); // Access the properties of each user object
            }
        }

        // 插入文档
        const newDocument = { name: 'New User', age: 30 };
        const insertResult = await insertDocument('mytest', newDocument);
        console.log('Insert Result:', insertResult);

        // 更新文档
        const filter = { name: 'New User' };
        const update = { age: 31 };
        const updateResult = await updateDocument('mytest', filter, update);
        console.log('Update Result:', updateResult);

        // 删除文档
        const deleteFilter = { name: 'New User' };
        const deleteResult = await deleteDocument('mytest', deleteFilter);
        console.log('Delete Result:', deleteResult);
    } finally {
        await close();
    }
};

main().catch(console.error);