const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// 中间件
app.use(cors());
app.use(express.json());

// 连接MongoDB
mongoose.connect('mongodb://localhost:27017/Text', {
    useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// 定义Schema和Model
const todoSchema = new mongoose.Schema({
    id: String,
    name: String,
    quantity: Number,
});

const Todo = mongoose.model('Todo', todoSchema);

// 路由
app.get('/', (req, res) => {
    res.send('Welcome to the Todo API');
});

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/todos', async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.json(newTodo);
});

app.put('/todos/:id', async (req, res) => {
    const updatedTodo = await Todo.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    res.json(updatedTodo);
});

app.delete('/todos/:id', async (req, res) => {
    await Todo.findOneAndDelete({ id: req.params.id });
    res.json({ message: 'Todo deleted' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});