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
router.get('/:id/edit',  async(rea, res) =>{
    console.log(rea.query.allow)
    const course = await Course.getOne(rea.params.id)
    if(rea.query.allow){
        res.render('course-edit', {
            title: `Редактирование курса ${course.title}`,
            course
        })
    } else {
        return res.redirect('/')
    }
})
router.post('/edit',  async(rea, res) =>{
    await Course.update(rea.body)
    return res.redirect('/courses')
})
module.exports = router