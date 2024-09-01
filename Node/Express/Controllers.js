// userController.js
const { readJsonFile, writeJsonFile } = require('./fileUtils');

async function getUsers(req, res) {
    try {
        let back = await readJsonFile('./db.json');
        res.send(back.users);
    } catch (error) {
        console.log('读取失败');
        res.status(500).json({ error });
    }
}

async function addUser(req, res) {
    let body = req.body;
    if (!body) {
        return res.status(403).json({
            error: '缺少用户信息'
        });
    }

    try {
        let back = await readJsonFile('./db.json');
        let id = back.users[back.users.length - 1].id + 1;
        body.id = id;
        back.users.push(body);
        await writeJsonFile('./db.json', back);
        res.send(body);
    } catch (error) {
        console.log('写入失败');
        res.status(500).json({ error });
    }
}

async function updateUser(req, res) {
    let body = req.body;
    let userId = parseInt(req.params.id);

    if (!body || !userId) {
        return res.status(403).json({
            error: '缺少用户信息或用户ID'
        });
    }

    try {
        let back = await readJsonFile('./db.json');
        let userIndex = back.users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            return res.status(404).json({
                error: '用户不存在'
            });
        }

        back.users[userIndex] = { ...back.users[userIndex], ...body };
        await writeJsonFile('./db.json', back);
        res.send(back.users[userIndex]);
    } catch (error) {
        console.log('更新失败');
        res.status(500).json({ error });
    }
}


module.exports = {
    getUsers,
    addUser,
    updateUser
};