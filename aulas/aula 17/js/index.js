/*
Dados Primitivos(imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor

Dados por referência (mutável) - array, object, function

*/ 

/*          0123
let nome = 'Luiz';
nome[0] = 'R';  -> Essa decalração não muda em nada a 'string' 'Luiz' porque ela é imutável.
nome[3];
console.log(nome[3]);
*/

/*
let a = 'A';
let b = a; // Cópia do valor de a para a variável b. 
a = 'Outra coisa';
console.log(a, b);
Os valores primitivos são copidos de uma variável pra outra através do sinal de atribuição '='.
*/

/*
let a = [1, 2, 3];
let b = a;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);
Os valores referência são passados por referência e são apontados para o mesmo local na memória não são apenas copiados.
*/
/* Podemos copiar também um valor referência:
let a = [1, 2, 3];  
let b = [...a]; -> Ultilizando o 'spread'.
let c = b;

console.log(a, b, c);

a.push(4);
console.log(a, b, c);

b.pop();
console.log(a, b, c);
*/

/* Com os 'objetos' ocorre a mesma coisa os valores das variáveis sempre vão apontar para o mresmo lugar na memória.
const a = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
};
const b = a;

a.nome = 'João';
console.log(b);
*/
/* Mas também podemos ultilizar a técnica de 'spread'

const a = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);
*/




