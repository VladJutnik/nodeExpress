const { Router } = require('express'),
    router = Router()

router.get('/', (rea, res) =>{
    res.render('courses', {
        title: 'Страница курсов',
        isCours: true
    })
})
module.exports = router