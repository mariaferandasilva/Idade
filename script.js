
function verificar() {
    const idade = document.getElementById("idade").value;
    const resultado = document.getElementById("resultado");

    if (idade === "" || Number(idade) < 0) {
        resultado.textContent = "Digite uma idade válida!";
        resultado.className = "menor";
        return;
    }

    if (verificarIdade(Number(idade))) {
        resultado.textContent = "Maior de idade";
        resultado.className = "maior";
    } else {
        resultado.textContent = "Menor de idade";
        resultado.className = "menor";
    }
}
