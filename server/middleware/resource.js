module.exports = options =>{
    return async(req,res,next)=>{
        //require('inflection').classify 将xxx_xxx_xxx的字符串转换为xxXxxxXxx
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelName}`)
        next()
    }
}