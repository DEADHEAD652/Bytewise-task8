const express = require('express')
const User = require('../model/model')

const router = express.Router()
//create
router.post('/create', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

})
//read all
router.get('/allusers', async (req, res) => {
    try {

        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }


})
//read one 
router.get('/user/:id', async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(404).send()
        }
        res.send(user)



    } catch (e) {
        res.status(500).send()
    }


})




module.exports = router