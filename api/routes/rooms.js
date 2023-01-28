const { createRoom, updateRoom, deleteRoom, getRoom, getRooms } = require('../controllers/room')
const { verifyAdmin } = require('../verifUser/verifyToken')

const router = require('express').Router()

router.post('/room/:hotelid',verifyAdmin, createRoom)

router.put('/:id',verifyAdmin,updateRoom)

router.delete('/room/:id/:hotelid',verifyAdmin,deleteRoom)

router.get('/:id',getRoom)

router.get('/',getRooms)


module.exports = router