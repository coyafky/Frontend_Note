const express = require('express');

const router = express.Router();

router.use('/user',require('../../express_project/router/user'))
router.use('/video',require('./video'))

module.exports = router