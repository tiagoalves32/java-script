// For in -> Lê os índices do array ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}


/*
for (let chaves in pessoa) {
    console.log(chaves)
}
*/

/*
for (let i = 0; i < frutas.length; i ++)  {
    console.log(frutas[i])
}
*/


/*
for (let i in frutas) {
    console.log(frutas[i])
}
*/