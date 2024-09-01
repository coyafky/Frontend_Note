const { body } = require("express-validator");

// 引入统一的错误处理的方法
const validate = require("./errorBack");

const {User} = require('../../model/index')

module.exports.register = validate([
  body("username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .isLength({ min: 2 })
    .withMessage("用户名不能小于2位"),

  body("email")
    .notEmpty().withMessage("邮箱不能为空").bail()
    .isEmail().withMessage("邮箱格式不正确").bail()
    .custom(async val=>{
        const emailValidate = await User.findOne({email:val})
        if(emailValidate){
            return Promise.reject("邮箱已被注册")
        }
    }).bail(),
    body("phone")
    .notEmpty().withMessage("手机号不能为空").bail()
    .isMobilePhone('any').withMessage("手机格式不正确").bail()
    .custom(async (val) => {
      const phoneValidate = await User.findOne({ phone: val });
      if (phoneValidate) {
        return Promise.reject("手机号已被注册");
      }
    }).bail()

]);

module.exports.login = validate([
    body('email')
    .notEmpty().withMessage('邮箱不能为空').bail()
    .isEmail().withMessage('邮箱格式不正确').bail(),

    body('password')
    .notEmpty().withMessage('密码不能为空').bail()
])


