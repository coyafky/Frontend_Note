const express= require('express');
const mongoose = require('mongoose');
const bodypaser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/BOOK', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// 定义书籍模型
const bookSchema = new mongoose.Schema({
    id: Number,
    bookName: String,
    authorName: String
});

const Book = mongoose.model('Book', bookSchema);
// 使用中间件

app.use(bodypaser.json());
app.use(cors());




// 获取所有书籍
app.get('/api/books', async (req, res) => {
    try {
      const books = await Book.find();
      console.log(books);
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // 根据查询参数获取书籍
  app.get('/api/books/search', async (req, res) => {
    const { bookName, authorName } = req.query;
    try {
      let query = {};
      if (bookName) query.bookName = bookName;
      if (authorName) query.authorName = authorName;
  
      const books = await Book.find(query);
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });