const express = require('express'),
    path = require('path'),
    exhds = require('express-handlebars')
const app = express()

const hbs = exhds.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine)//регестрируем что используем хандербарс
app.set('view engine', 'hbs')//тут мы уже говорим что начали его использовать
app.set('views', 'views')
app.get('/', (req, res,next)=>{
    res.render('index')
})
app.get('/about', (req, res,next)=>{
    res.render('about')
})
/*
//Тут простой пример как работать с html страницами, однако они не денамические мы не можем что то перадать туда хз кнч
app.get('/', (req, res,next)=>{
    res.sendFile(path.join(__dirname, 'views','index.html'))
})
app.get('/about', (req, res,next)=>{
    res.sendFile(path.join(__dirname, 'views','about.html'))
})*/
const PORT = process.env.PORT || 3002
app.listen(PORT, ()=>{
    console.log(`Сервер запущен ${PORT}`)
})
