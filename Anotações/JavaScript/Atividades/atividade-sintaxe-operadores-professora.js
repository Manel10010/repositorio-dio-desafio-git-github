function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return 'Defina dois números';
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let iguais = '';
    if (num1 !== num2) {
        iguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${iguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let menor10 = 'menor';
    let maior20 = 'maior';
    if (soma > 10) {
        menor10 = 'maior';
    }
    if(soma < 20) {
        maior20 = 'menor';
    }

    return `Sua soma é ${soma}, que é ${menor10} que 10 e ${maior20} que 20.`;
}

console.log(comparaNumeros(1, 2));