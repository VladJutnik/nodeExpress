const { Router } = require('express'),
    Course = require('../models/courseModal'),
    router = Router()

router.get('/', async (rea, res) =>{
    const courses = await Course.getAll()
    res.render('courses', {
        title: 'Страница курсов',
        isCours: true,
        courses
    })
})
module.exports = router