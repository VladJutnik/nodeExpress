const { Router } = require('express'),
    router = Router()

router.get('/', (rea, res) =>{
    res.render('add', {
        title: 'Добавление курса',
        isAdd: true
    })
})
router.post('/', (rea, res) =>{
    console.log(rea.body)
    res.redirect('/courses')
})
module.exports = router