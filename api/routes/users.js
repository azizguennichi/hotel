const { update, deleteOne, getOne, getAll } = require('../controllers/user')
const { verifyToken, verifyUser, verifyAdmin } = require('../verifUser/verifyToken')

const router = require('express').Router()

// router.get('/checkLogin',verifyToken,(req,res,next)=>{
//     res.send('you are login')
// })
// router.get('/checkUser/:id',verifyUser,(req,res,next)=>{
//     res.send('hello user')
// })
// router.get('/checkAdmin/:id',verifyAdmin,(req,res,next)=>{
//     res.send('hello Admin')
// })
router.put('/:id',verifyUser,update)

router.delete('/:id',verifyUser,deleteOne)

router.get('/:id',verifyUser,getOne)

router.get('/',verifyAdmin,getAll)


module.exports = router