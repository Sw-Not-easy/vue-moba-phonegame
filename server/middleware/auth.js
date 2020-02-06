module.exports = options =>{
    return async(req,res,next) =>{
        const jwt = require("jsonwebtoken")
        const assert = require("http-assert")
        const AdminUser = require('../models/AdminUser')
        //通过前端请求头得到token
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token,401,'请先登录')
        //解密得到id
        const { id } = jwt.verify(token, req.app.get('secret'))
        assert(id,401,'请先登录')
        //再找到用户，并把用户挂载到req中
        req.user = await AdminUser.findById(id)
        assert(req.user,401,'请先登录')

        await next()
    }
}