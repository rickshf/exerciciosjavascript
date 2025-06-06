let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operador = prompt("Digite a operação (+, -, *, /):");

let resultado;

switch (operador) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      alert("Erro: divisão por zero.");
      resultado = null;
    } else {
      resultado = num1 / num2;
    }
    break;
  default:
    alert("Operação inválida.");
    resultado = null;
}

if (resultado !== null) {
  alert(`Resultado: ${resultado}`);
}
