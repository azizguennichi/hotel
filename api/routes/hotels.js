const { createHotel, update, deleteOne, getOne, getAll, countByCity } = require('../controllers/hotel')
const { verifyAdmin } = require('../verifUser/verifyToken')

const router = require('express').Router()

router.post('/',verifyAdmin, createHotel)

router.put('/:id',verifyAdmin,update)

router.delete('/:id',verifyAdmin,deleteOne)

router.get('/:id',getOne)

router.get('/',getAll)
router.get('/countByCity',countByCity)
router.get('/countByType',getAll)





module.exports = router