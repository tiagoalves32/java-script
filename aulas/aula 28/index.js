const pessoa = {
    //nome: 'Luíz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }

};

// Atribuição via desestruturação
const { endereco: {rua, numero} } = pessoa
console.log(rua, numero)

/*
const {nome: n = 'Tiago', sobrenome, ...resto} = pessoa
console.log(n, sobrenome, resto)
*/