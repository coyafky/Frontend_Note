const {User} = require('../model/index'); // 引入模型 ,可以使用按需导入的方式


exports.list = async (req, res, next) => {
    console.log(req.method);
    res.send("/user-list");
};

// 根据不同的路由来处理不同的业务逻辑

exports.delete = async (req, res, next) => {
    console.log(req.method);
    res.send("/user-delete");
}

exports.register = async (req, res, next) => {
    console.log(req.method);
    console.log(req.body);
    // return ;
    const userModel =new User(req.body)
    const dbBack = await userModel.save()
    let user = dbBack.toJSON()
    delete user.password;
    res.status(200).json({
        user
    })

    // res.send("/user-register");
}

exports.login = async (req, res, next) => {
    // 客户端数据验证，连接数据库查询
    console.log(req.method);
    let dbBack = await User.findOne(req.body)
    // 不暴露用户存储在数据库中的密码的密码

    res.status(200).json(dbBack)

}