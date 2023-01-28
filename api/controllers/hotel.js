
const hotel = require('../models/hotel')

exports.createHotel = async(req,res,next)=>{
    const Hotel = await new hotel(req.body)
    try {
        const saveHotel = Hotel.save()
        res.status(200).json(saveHotel)

    } catch (error) {
        res.status(500).json(error)
    }
}

exports.update = async(req,res,next)=>{
    try {
        const updateHotel = await hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateHotel)

    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteOne = async(req,res,next)=>{
    try {
        await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('deleted')

    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getOne = async(req,res,next)=>{
    const Hotel = await hotel.findById(req.params.id)
    try {    
        res.status(200).json(Hotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAll = async(req,res,next)=>{
    const Hotels = await hotel.find()
    try {    
        res.status(200).json(Hotels)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.countByCity = async(req,res,next)=>{
    const cities = req.query.cities.split(",")
    try {    
        const list = await Promise.all(cities.map(city=>{
            return hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json(error)
    }
}