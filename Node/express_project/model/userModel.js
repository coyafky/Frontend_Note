const mongoose = require("mongoose");

const md5 = require("../util/md5");

const baselModel = require("./baselModel");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (value) => md5(value),
    // 如何对密码进行加密
    select: false,
    // 查询中不返回密码的字段
  },
  phone: {
    type: String,
    required: true,
  },

  //用户头像
  image: {
    type: String, //传的是图片地址
    default: null,
  },

  ...baselModel,
});
module.exports = userSchema;
