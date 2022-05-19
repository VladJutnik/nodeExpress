const { Router } = require('express'),
    router = Router()

router.get('/', (rea, res) =>{
    res.render('index', {
        title: 'Главная страница',
        isHome: true
    })
})
module.exports = router