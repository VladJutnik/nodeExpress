const { Router } = require('express'),
    Course = require('../models/courseModal')
    router = Router()

router.get('/', (rea, res) =>{
    res.render('add', {
        title: 'Добавление курса',
        isAdd: true
    })
})
router.post('/', async (rea, res) =>{
    const course = new Course(rea.body.title, rea.body.price, rea.body.img)
    await course.save()
    res.redirect('/courses')
})
module.exports = router