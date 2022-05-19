const { Router } = require('express'),
    router = Router()

router.get('/add', (rea, res) =>{
    res.render('add', {
        title: 'Добавление курса',
        isAdd: true
    })
})
module.exports = router