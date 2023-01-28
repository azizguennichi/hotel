
const User = require('../models/User')


exports.update = async(req,res,next)=>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateUser)

    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteOne = async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('deleted')

    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getOne = async(req,res,next)=>{
    const user = await User.findById(req.params.id)
    try {    
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAll = async(req,res,next)=>{
    const users = await User.find()
    try {    
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}