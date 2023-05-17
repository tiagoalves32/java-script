const nome = 'Tiago';
const sobrenome = 'Alves';
const idade = 32;
const peso = 75;
const alturaEmM = 1.73;
let indiceMassaCorporal;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento;
anoNascimento = 2023 - idade;



console.log (`${nome} ${sobrenome} tem ${idade} anos`);
console.log (`pesa ${peso} kg tem ${alturaEmM} de altura`);
console.log (`e seu IMC é de ${indiceMassaCorporal}`);
console.log (`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
