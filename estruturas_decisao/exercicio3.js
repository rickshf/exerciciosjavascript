let letra = prompt("Digite uma letra:").toLowerCase();

if (letra.length !== 1 || !letra.match(/[a-z]/)) {
    alert("Entrada inválida. Digite apenas uma letra.");
} else if ("aeiou".includes(letra)) {
    alert("É uma vogal.");
} else {
    alert("É uma consoante.");
}