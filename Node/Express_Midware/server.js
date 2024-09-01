const express = require ('express');

const app = express();

const PORT = process.env.PORT ||3000


app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url} ${Date.now()}`);
    next()
})

// express 中 中间件的位置十分重要，中间在路由匹配规则的前面才起作用



app.get('/',(req,res)=>{
    res.end('./index');
})

app.get ('/home', (req, res) => {
    res.send('./home');
})

app.get('/login', (req, res) => {
    res.send('./login');
})

app.get ('./register',(req, res) => {
    res.send('./register');
})

app.listen(PORT, () => {
    console.log('sever is run at http://localhost:3000');
    
})