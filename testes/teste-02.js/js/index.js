const numero = Number(prompt('Digite qualquer número'));

const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');

texto.innerHTML = ' ';
texto.innerHTML += `<p>Seu número é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong></p>`;
texto.innerHTML += `<p>É NaN<strong>(Not a Number)</strong>: <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondamento para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondamento para baixo:<strong> ${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `Com duas casas decimais: <strong>${Number(numero.toFixed(2))}</strong>`;




