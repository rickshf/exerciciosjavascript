let valor = parseFloat(prompt("Digite o valor do produto:"));
let codigo = parseInt(
  prompt(
    "Digite o código de aumento:\n" +
      "1 - 10%\n" +
      "3 - 25%\n" +
      "4 - 30%\n" +
      "8 - 50%"
  )
);

let novoValor;

switch (codigo) {
  case 1:
    novoValor = valor * 1.1;
    break;
  case 3:
    novoValor = valor * 1.25;
    break;
  case 4:
    novoValor = valor * 1.3;
    break;
  case 8:
    novoValor = valor * 1.5;
    break;
  default:
    alert("Código inválido.");
    novoValor = null;
}

if (novoValor !== null) {
  alert(`Novo valor do produto: R$ ${novoValor.toFixed(2)}`);
}
