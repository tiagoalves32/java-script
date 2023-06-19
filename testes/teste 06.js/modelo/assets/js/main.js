
/*
const adiçao = [
    {elemento: 'p', valor: 'Teste de JavaScript'},
    {elemento: 'div', valor: 'Primeira box'},
    {elemento: 'section', valor: 'Parabéns'},
    {elemento: 'footer', valor: 'Final'}
];

const container = document.querySelector('.container')
const box = document.createElement('div')

for (let i = 0; i < adiçao.length; i++) {
    let {elemento, valor} = adiçao[i]
    let elementoCriado = document.createElement(elemento)
    let textoCriado = document.createTextNode(valor)
    elementoCriado.appendChild(textoCriado)
    box.appendChild(elementoCriado)
}

container.appendChild(box)
*/

/*
const elementos = [
    {tag: 'h1', texto: 'Teste JavaScript'},
    {tag: 'p', texto: 'Seja Bem-Vindo'},
    {tag: 'div', texto: ' Insira sua mensagem'},
    {tag: 'section', texto: 'Continue...'},
    {tag: 'footer', texto: 'Acabou...'}
];

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag)
    let textoCriado = document.createTextNode(texto)
    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}

container.appendChild(div)
*/

const tags = [
    {elemento: 'h1', valor: 'JavaScript'},
    {elemento: 'p', valor: 'JavaScript é legal!'},
    {elemento: 'div', valor: 'Começa Aqui!'},
    {elemento: 'section', valor: 'Continuando...'},
    {elemento: 'footer', valor: 'FIM...'}, 

]

const container = document.querySelector('.container')
const box = document.createElement('div')

for (let i = 0; i < tags.length; i++) {
    let {elemento, valor} = tags[i]
    let elementoCriado = document.createElement(elemento)
    let valorCriado = document.createTextNode(valor)
    elementoCriado.appendChild(valorCriado)
    box.appendChild(elementoCriado)
}

container.appendChild(box)