const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.register = async (req,res)=>{
    try {

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })

        await newUser.save()
        res.status(200).send('is created')
    } catch (error) {
        res.send(error)
        
    }
}

exports.login = async (req,res,next)=>{
    try {
        const user = await User.findOne({username:req.body.username})
        if(!user) return res.status(404).send('user not found')

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return res.status(400).send('invalid password or email')

        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT)

        const {password, isAdmin, ...otherDetails} = user._doc
        res.cookie("access_token", token,{
            httpOnly:true,
        }).status(200).send({...otherDetails})
    } catch (error) {
        res.send(error)
        
    }
}