
function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: divisão por zero não é permitida!";
    }
}
var operacao = prompt(
    "Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
);
var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
var resultado;
switch (operacao) {
    case '1':
        resultado = somar(valor1, valor2);
        alert(`Resultado da soma: ${resultado}`);
        break;
    case '2':
        resultado = subtrair(valor1, valor2);
        alert(`Resultado da subtração: ${resultado}`);
        break;
    case '3':
        resultado = multiplicar(valor1, valor2);
        alert(`Resultado da multiplicação: ${resultado}`);
        break;
    case '4':
        resultado = dividir(valor1, valor2);
        alert(`Resultado da divisão: ${resultado}`);
        break;
    default:
        alert("Operação inválida!");
}
