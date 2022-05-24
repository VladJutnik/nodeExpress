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
router.get('/:id', async (rea, res) =>{
    const course = await Course.getOne(rea.params.id)
    res.render('course', {
        layout: 'empty',
        title: `Курс по ${course.title}`,
        course
    })
})
module.exports = router