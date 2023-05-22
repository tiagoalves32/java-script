
/* let num1 = 0.7;
   let num2 = 0.1;

console.log(num1.toString() + num2); -> toString converte temporariamente o Number.
num1 = num1.toString(); -> Essa declaração converte permanentemente o Number para um string.

let num1 = 1500;
console.log(num1.toString(2)); -> Essa declaração serve para ver os números na sua forma binária Exemplo:10111011100.

let num1 = 10.578955125547;
console.log(num1.toFixed(2)); -> Usado pra determinar o número de casas decimais.

let num1 = 10;
console.log(Number.isInteger(num1)); -> Usado para saber se o número é um número real.Essa prática te mostra o resultado em 'true' ou 'false'.

let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); -> Usado para identificar se a operação é inválida no caso um NaN(Not a Number).Também retorna resultado como 'true' ou 'false'.

num1 += num2; //num1 = num1 + num2;// 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

Essa é uma maneira de resolvermos inconsistências nos números decimais em JavaScript.Tornando por exemplo números decimais redondos como '1.0' em números inteiros como número '1'.

Exemplo: 2.0 =  2, true.

Também existe uma segunda forma de resolver que é fazendo cálculos.Exemplo:
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

Resultado -> 1, true.


*/
