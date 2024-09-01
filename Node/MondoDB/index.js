const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const main = async () => {
    await client.connect(); // 链接是异步的
    const db =client.db('mytest');
    const cc = db.collection('mytest')
    let d =await cc.find();
    const documents = await d.toArray();

    for (const document of documents) {
        for (const user of document.users) {
            console.log(user); // Access the properties of each user object
        }
    }
}
    
    // [
    //     {
    //       _id: new ObjectId('66cc955c1e8082313fe96211'),
    //       users: [ [Object], [Object], [Object], [Object], [Object] ],
    //       video: []
    //     }
    //   ]
    // 获取到具体的users 数据


main().finally(() => client.close()) // 断开

// 使用NodeJS中对MongoDB的数据进行增删改查

