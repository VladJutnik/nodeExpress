document.querySelectorAll('.price').forEach(node =>{
    node.textContent = new Intl.NumberFormat('ru-Ru', {
        currency: 'rub',
        style: 'currency'
    }).format(node.textContent)
})

const $card = document.querySelector('#card')

if($card){
    $card.addEventListener('click', e =>{
        if(e.target.classList.contains('js-remove')){
            const id = e.target.dataset.id
            console.log(id)

            fetch('/card/remove/'+id, {
                method: 'del'
            }).then(res=> res.json())
                .then(card => {
                    console.log(card)
                })
        }
    })
}