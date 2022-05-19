const { Router } = require('express'),
    router = Router()

router.get('/', (rea, res) =>{
    res.render('add', {
        title: 'Добавление курса',
        isAdd: true
    })
})
module.exports = router