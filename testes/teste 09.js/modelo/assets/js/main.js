const form = document.querySelector('#form')
const res = document.querySelector('.res')


form.addEventListener('submit', function(e) {
    e.preventDefault()
    const inputAltura = e.target.querySelector('.altura')
    const inputPeso = e.target.querySelector('.peso')

    const altura = Number(inputAltura.value)
    const peso = Number(inputPeso.value)

    if (!altura) {
        setResultado('Altura Inválida', false)
        return
    }

    if (!peso) {
        setResultado('Peso Inválido', false)
        return
    }
    
    const imc = getImc(peso, altura)
    const nivelImc = nivelImc(imc)

})

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function nivelImc(imc) {
    const nivel = ['Magreza', 'Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grave Grau 3' ]

    if (imc >= 40.0) return nivel[5]
    if (imc >= 39.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5)  return nivel[0]

}


