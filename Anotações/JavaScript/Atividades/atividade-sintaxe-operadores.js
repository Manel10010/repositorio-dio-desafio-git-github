let iguais = 'não são iguais';
let maior10 = 'menor que 10';
let menor20 = 'maior que 20';

function verificador(x, y) {
    let soma = x+y
    if (x === y) {
        iguais = 'são iguais';
    }
    if (x + y > 10) {
        maior10 = 'maior que 10';
    }
    if (x + y < 20) {
        menor20 = 'menor que 20';
    }
    console.log(`Os valores ${x} e ${y} ${iguais}. Sua soma é ${soma}, que é ${maior10} e ${menor20}`)
}

verificador(10, 10)