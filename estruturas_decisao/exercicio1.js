let a = parseFloat(prompt("Digite o coeficiente a:"));
let b = parseFloat(prompt("Digite o coeficiente b:"));
let c = parseFloat(prompt("Digite o coeficiente c:"));

let delta = b * b - 4 * a * c;

if (delta < 0) {
    alert("Não existem raízes reais.");
} else if (delta === 0) {
    let x = -b / (2 * a);
    alert(`Existe uma raiz real: x = ${x}`);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`Existem duas raízes reais: x1 = ${x1}, x2 = ${x2}`);
}