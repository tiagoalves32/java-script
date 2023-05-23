/*            012345678910   =>Índice
const nome = 'Tiago Alves'
console.log(nome[10]);
*/

/*               0       1        2    =>Índice
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

Resultado -> [ 'Luiz', 'Maria', 'João' ]
Luiz
João
*/

/*
const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo'; -> Altera um elemento no array.

Resultado -> [ 'Eduardo', 'Maria', 'João' ]

alunos[3] = 'Luiza'; -> Adição de um elemento no array.

Resultado -> [ 'Eduardo', 'Maria', 'João', 'Luiza' ]
*/

/*
const alunos = ['Luiz', 'Maria', 'João'];
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fábio';  -> Adiciona no fim do array.
alunos[alunos.length] = 'Luana';
console.log(alunos); 

alunos.push('Luiza');
alunos.push('Fábio');
*/

/*
const alunos = ['Luiz', 'Maria', 'João'];
alunos.unshift('Luiza');
alunos.unshift('Fábio'); -> Adiciona no começo do Array.
console.log(alunos);

Resultado -> [ 'Fábio', 'Luiza', 'Luiz', 'Maria', 'João' ]
*/

/*
const alunos = ['Luiz', 'Maria', 'João'];
alunos.pop();     -> Remove um elemento do Array.
console.log(alunos);

Resultado -> [ 'Luiz', 'Maria' ]
*/
/*
const alunos = ['Luiz', 'Maria', 'João'];
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

Resultado -> João -> O elemento que foi removido.
             [ 'Luiz', 'Maria']
*/
/*
const alunos = ['Luiz', 'Maria', 'João'];
const removido = alunos.shift();
console.log(removido); -> 'shift' remove o primeiro elemento no índice do Array.
console.log(alunos);

Resultado -> Luiz -> Elemento que foi removido.
            [ 'Maria', 'João' ]
*/
/*
const alunos = ['Luiz', 'Maria', 'João'];
delete alunos[1]; -> Deleta um elemento,mas não altera o índice  do Array.
console.log(alunos);

Resultado -> [ 'Luiz', <1 empty item>, 'João' ]
*/

/*console.log(alunos[50]); -> Podemos achar um índice inexistente em JavaScript.Isso retornará com o valor de 'undefined'.
*/

 /*  
                                             3      4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo
alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos.slice(0, 2));
Resultado -> [ 'Luiz', 'Maria' ]
console.log(alunos.slice(0, -2));
Resultado -> [ 'Luiz', 'Maria', 'João' ]
Usamos a função 'slice' para fatiar o array.
*/
/*
const alunos = ['Luiz', 'Maria', 'João'];
console.log(typeof alunos); -> object -> Array é considerado um 'object' em JavaScript.
console.log(alunos instanceof Array); -> true -> Se for um array será retornado como 'true' senão será 'false'.
Métodos usados para identificar um Array.
*/



