const express = require('express'),
    path = require('path'),
    exhds = require('express-handlebars'),
    homeRoute = require('./routes/home'),
    addRoute = require('./routes/add'),
    addCard = require('./routes/card'),
    coursesRoute = require('./routes/courses'),
    mongoose = require('mongoose')
const app = express()

const hbs = exhds.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine)//регестрируем что используем хандербарс
app.set('view engine', 'hbs')//тут мы уже говорим что начали его использовать
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
})) //для того что бы обработать наши запросы и получить результат
app.use('/',homeRoute)
app.use('/add',addRoute)
app.use('/courses', coursesRoute)
app.use('/card', addCard)
//

/*
//Тут простой пример как работать с html страницами, однако они не денамические мы не можем что то перадать туда хз кнч
app.get('/', (req, res,next)=>{
    res.sendFile(path.join(__dirname, 'views','index.html'))
})
app.get('/about', (req, res,next)=>{
    res.sendFile(path.join(__dirname, 'views','about.html'))
})*/
const PORT = process.env.PORT || 5000
async function start() {
    try {

        const {
            MONGO_INITDB_ROOT_USERNAME: username,
            MONGO_INITDB_ROOT_PASSWORD: password,
            MONGO_HOST: host,
        } = process.env
        const uri = `mongodb://${username}:${password}@${host}/notes?authSource=admin`
        //mongodb - Название контейнера !!!
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        //это если без networka работать
        /*await mongoose.connect(`mongodb://host.docker.internal:27017/notes`, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })*/
        console.log(1111)
        app.listen(
            PORT,
            console.log.bind(console, `Server has been started on port ${PORT}`)
        )
    } catch (e) {
        console.log(e)
    }
}
start()
/*const PORT2 = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Сервер запущен ${PORT}`)
})*/
