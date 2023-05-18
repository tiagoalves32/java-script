/*let umaString = "um \"texto\"";
Barra dupla para fazer escape de carácteres.

Funções de adição de textos:
let umaString = "Um texto";

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`); -> Esse é o uso mais indicado (Template String).
/Função usada para substituição de palavras da string/
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.replace('rato', 'tigre'));
resultado-> O tigre roeu a roupa do rei de roma.
Esta função também aceita o uso de RegEx:
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.replace(/r/, '!'));
Resultado-> O !ato roeu a roupa do rei de roma.
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.replace(/r/g, '!'));
Resultado-> O !ato !oeu a !oupa do !ei de !oma.
Note que para substituirmos todas letras 'r' usamos a Flag g.

As strings são indexivéis 
-> (Índice)  =   01234567
let umaString = "Um texto";

Modos de indentificar um elemento no índice em uma string:
let umaString = "um texto";
console.log(umaString[3]);
let umaString = "um texto";
console.log(umaString.charAt(6));
let umaString = "Um texto";
let umaString = "Um texto";
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o' , 3)); -> Encontra um elemento no índice a partir de uma posição específica.
let umaString = "Um texto";
console.log(umaString.lastIndexOf('U', 3)); -> Encontra o elemento no índice de trás pra frente.

Expressões Regulares(RegEx):
let umaString = "Um texto";
console.log(umaString.match(/[a-z]/g));
-> [ 'm', 't', 'e', 'x', 't', 'o' ] -> Resultado com a Flag /g.
let umaString = "Um texto";
console.log(umaString.match(/[a-z]/));
-> [ 'm', index: 1, input: 'Um texto', groups: undefined ] -> Resultado sem o uso da Flag /g.
let umaString = "Um texto";
console.log(umaString.search(/e/)); -> É bem parecido com a função (indexOf).Porém aceita o uso de expressões regulares.

Identificando o tamanho de uma string:
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.length);
Resultado-> 35->(O tamanho total da string)
            //   0123456789-> Índice
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.slice(2, 6));
Resultado-> rato
A função 'slice' serve para 'fatiar' partes específicas de uma 'string'.

Também podemos usar operador negativo.O que acontece será a subtração a partir do último caráctere da string. Exemplo:
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.slice(-5));
Resultado-> roma.

Também podemos dividir a string:
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.split(' '));
Resultado->[
  'O',     'rato',
  'roeu',  'a',
  'roupa', 'do',
  'rei',   'de',
  'roma.'
]
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.split(' ', 3));
Resultado->[ 'O', 'rato', 'roeu' ]
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.split('r'));
Resultado->[ 'O ', 'ato ', 'oeu a ', 'oupa do ', 'ei de ', 'oma.' ]

Colocando uma string toda em Maiúscula ou Minúscula:
Ultilizamos a seguinte função para essa ação:
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
Resultado-> O RATO ROEU A ROUPA DO REI DE ROMA.
            o rato roeu a roupa do rei de roma.
*/






            

















