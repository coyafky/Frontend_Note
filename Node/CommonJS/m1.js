let val =  ' this is commonjs';

let foo ='foo'
// module.exports.val = val //只导入了一个对象
// module.exports.foo = foo

exports.val = val
exports.foo = foo