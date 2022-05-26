const path = require('path'),
    fs = require('fs')

//заренее генрируем путь для того что бы не определять путь каждый раз зоного
const p = path.join(
    require.main.filename,
    'data',
    'card.json'
)
const p2 = path.join(__dirname, '..', 'data', 'card.json')

class CardModal {

    static async add(course){
        const card = await CardModal.fethCard()
        const ind = card.courses.findIndex(c=>c.id === course.id)
        const candidate = card.courses[ind]

        if(candidate){
            //если курс уже есть
            candidate.count++
            card.courses[ind] = candidate
        } else {
           //добавляем курс
            course.count = 1
            card.courses.push(course)
        }
        card.price += +course.price

        return new Promise((resolve, reject) => {
            fs.writeFile(p2, JSON.stringify(card), err =>{
                if(err){
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }

    static async fethCard(){
        return new Promise((resolve, reject) => {
            fs.readFile(p2, 'utf-8', (err, content) =>{
                if(err){
                    reject(err)
                } else {
                    resolve(JSON.parse(content))
                }
            })
        })
    }
}

module.exports = CardModal