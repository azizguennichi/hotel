const jwt = require('jsonwebtoken')

exports.verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token
    if(!token){
        return res.status(401).send('plz login')
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err){
            return res.status(401).send('token mahoush mawjoud')   
        }
        req.user = user
        next()
    })
}


exports.verifyUser = (req,res,next)=>{
    this.verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return res.status(401).send('makesh authorized')   
        }
    })
}

exports.verifyAdmin = (req,res,next)=>{
    this.verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            return res.status(401).send('makesh authorized')   
        }
    })
}