
/*
const artigo = document.querySelector('.especial')
const p = document.querySelectorAll('p')

const artigoEstilo = getComputedStyle(document.body)
const footEstilo = artigoEstilo.backgroundColor
console.log(footEstilo)

for (let ps of p) {
    ps.style.backgroundColor = footEstilo
    ps.style.color = 'white'
}
*/


const box = document.querySelector('.especial')
const p = document.querySelectorAll('p')

const divEstilo = getComputedStyle(document.body)
const  paragrafo = divEstilo.backgroundColor

for (ps of p) {
    ps.style.backgroundColor = paragrafo
    ps.style.color = 'white'
}


const sect = document.querySelector('.container')
const titulo = document.querySelectorAll('h1')

const sectEstilo = getComputedStyle(document.body)
const titEstilo = sectEstilo.backgroundColor

for ( t of titulo) {
    t.style.backgroundColor = titEstilo
    t.style.color = 'white' 
    t.style.textAlign = 'center' 
}



 
