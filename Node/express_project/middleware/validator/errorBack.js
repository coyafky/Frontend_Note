const {validationResult} =require('express-validator');

module.exports = validator =>{
    return async (req,res,next)=>{
        await Promise.all(validator.map(validate=>validate.run(req)))
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(401).json({errors:errors.array()}) // 401表示客户端传入的数据存在问题
        }
        next()
    }
}