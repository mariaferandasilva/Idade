
function verificarIdade(idade) {
    return idade >= 18;
}

// Permite utilizar a função nos testes com Jest
if (typeof module !== "undefined") {
    module.exports = verificarIdade;
}
