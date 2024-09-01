const express = require("express");

// 设置路由前缀

const router = express.Router();
const userController = require("../controller/user");
const { body, validationResult } = require("express-validator");

const validator = require("../middleware/validator/userValidator");

router
  .get("/list", userController.list)
  .delete("/delete", userController.delete)
  .post(
    "/register",
    validator.register
    ,userController.register
  )
  .post("/logins",userController.login)
  

// .delete("/delete",userController.delete);
module.exports = router;
