
const verificarIdade = require("./idade");

describe("Testes da função verificarIdade", () => {

    test("Deve retornar true para idade adulta (25 anos)", () => {
        expect(verificarIdade(25)).toBe(true);
    });

    test("Deve retornar false para menor de idade (15 anos)", () => {
        expect(verificarIdade(15)).toBe(false);
    });

    test("Deve retornar true para a idade limite (18 anos)", () => {
        expect(verificarIdade(18)).toBe(true);
    });

});
