

function mostraHora() {
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {
         hour12: false
    })
}

/*
function funcaDoInterval() {
    console.log(mostraHora())
}

*/


// setInterval(funcaDoInterval, 1000)

/*
setInterval(function() {
    console.log(mostraHora(), 1000)
})
*/

const timer = setInterval(function() {
    console.log(mostraHora())
}, 1000);

setTimeout(function() {
    clearInterval(timer)
}, 3000);

setTimeout(function() {
    console.log('Olá Mundo!')
}, 5000) 