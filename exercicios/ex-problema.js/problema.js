

/* 1° Solução
const varDTemp = varD; -> Variável temporária

varD = varE;
varE = varF;
varF = varDTemp;



console.log(varD, varE, varF);

let varD = 'D'; // E
let varE = 'E'; // F
let varF = 'F'; // D
*/

// 2° Solução

let varD = 'D'; // E
let varE = 'E'; // F
let varF = 'F'; // D

[ varD, varE, varF ] = [varE, varF, varD]

console.log(varD, varE, varF);


