const nome = prompt('Digite seu nome completo');

document.body.innerHTML = `<p>Seu nome é: ${nome}</p>`;
document.body.innerHTML += `<p>Seu nome tem quantas letras? ${nome.length}</p>`;
document.body.innerHTML += `<p>Qual o primeiro índice da letra <strong>a</strong> em seu nome: ${nome.indexOf('a')} </p>`;
document.body.innerHTML += `<p>Qual o último índice da letra <strong>a</strong> em seu nome: ${nome.lastIndexOf('a')}</p>`;
document.body.innerHTML += `<p>As 3 últimas letras do seu nome são: <strong>${nome.slice(-3, nome.length)}</strong></p>`;
document.body.innerHTML += `<p>As palavras do seu nome são: <strong>${nome.split(' ')}</strong></p>`;
document.body.innerHTML += `<p>Seu nome com letras maiúsculas:<strong> ${nome.toUpperCase()}</strong></p>`;
document.body.innerHTML += `<p> Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong></p>`;