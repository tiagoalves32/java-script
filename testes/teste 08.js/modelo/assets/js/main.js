
/*
let num1 = document.querySelector('.num1') 
let num2 = document.querySelector('.num2')
let res = document.querySelector('.res')

function somar() {
     numero1 = Number(num1.value)
     numero2 = Number(num2.value)
     let s = numero1 + numero2
     res.innerHTML = `O valor da soma de ${numero1} e ${numero2} é: ${s}`
 }
 */

 const num1 = document.querySelector('.num1')
 const num2 = document.querySelector('.num2')
 const veri = document.querySelector('.ver')
 const res = document.querySelector('.res')

 veri.addEventListener('click', function(){
    let numero1 = Number(num1.value)
    let numero2 = Number(num2.value)
    let menos = numero1 - numero2
    res.innerHTML = `O resultado da subtração entre o <strong>${numero1}</strong>
    e o <strong>${numero2}</strong> é: <strong>${menos}</strong>`
 } )



 

