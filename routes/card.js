const { Router } = require('express'),
    Card = require('../models/cardModal'),
    Course = require('../models/courseModal'),
    router = Router()

router.post('/add',  async(rea, res) =>{
    const course = await Course.getOne(rea.body.id)
    await Card.add(course)
    rea.redirect('/card')
})
router.get('/', async (rea, res) =>{
    const card = await Card.fethCard()
    res.render('card', {
        title: 'Корзина',
        isCard: true,
        card
    })
})

module.exports = router