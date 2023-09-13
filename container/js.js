let s1 = prompt('введите стоимость товара')
let o1 = prompt('введите количество денег')

var s = Number(s1)
var o = Number(o1)
const resultEl = document.querySelector('.otvet')
resultEl.style.color='green'
if(s == o){
    resultEl.textContent ='Покупка совершена'
}else{
     if(s > o){
        let a = s-o
        resultEl.textContent ='Для покупки не хватает '+ a +'р.'
    }else{
        let b = o-s
        resultEl.textContent ='Покупка совершена. Сдача '+ b +'р.'
    }
}