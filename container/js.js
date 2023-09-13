let s = prompt('введите стоимость товара')
let o = prompt('введите количество денег')
const resultEl = document.querySelector('.otvet')
resultEl.style.color='green'
if(s == o){
    resultEl.textContent ='Покупка совершена'
}else{
    if(s > o){
        let a = Number(s)-Number(o)
        resultEl.textContent ='Для покупки не хватает '+ a +'р.'
    }else{
        let b = Number(o)-Number(s)
        resultEl.textContent ='Покупка совершена. Сдача '+ b +'р.'
    }
}