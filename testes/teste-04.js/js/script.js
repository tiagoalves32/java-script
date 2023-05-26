function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    form.addEventListener('submit', recebeEventoForm);
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const sexo = form.querySelector('.sexo');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const nacionalidade = form.querySelector('.nacionalidade');
        const estado = form.querySelector('.estado');
        const tel = form.querySelector('.tel');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            sexo: sexo.value,
            peso: peso.value,
            altura: altura.value,
            nacionalidade: nacionalidade.value,
            estado: estado.value,
            tel: tel.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${sexo.value} ${peso.value} ${altura.value} ${nacionalidade.value} ${estado.value} ${tel.value}</p>`;

    }

}

meuEscopo();