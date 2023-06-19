
/*
let controle = 0

while (controle <= 10) {
    console.log(controle);
    controle++
}
*/


/*
const nome = 'Tiago'
let i = 0

while (i < nome.length) {
    console.log(nome[i])
    i++
}
*/

function random(min, max) {
   const r = Math.random() * (max - min) + min 
   return Math.floor(r)
}
const min = 1
const max = 50
let aleatorio = random(min, max) 

//console.log(aleatorio)

while (aleatorio !== 10) {
   aleatorio = random(min, max)
     console.log(aleatorio)
}


/*
do {
    aleatorio = random(min, max)
     console.log(aleatorio)

} while(aleatorio !== 10)
*/


