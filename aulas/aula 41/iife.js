// Immediately invoked function expression

/*
function qualquerCoisa(){
    console.log(11144887)
}
qualquerCoisa()
*/

(function(idade, peso, altura) {

    const sobrenome = 'Miranda'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Luiz'))
    }

    falaNome()
    console.log(idade, peso, altura)
})(32, 75, 1.75);
