const Nota = require("../src/models/nota");

describe("Verificar a menção final", () => {
  test("O valor recebido corresponde a menção: II - Inferior?", () => {
    let calcular = new Nota  
    let notaFinal = 0.2 
    expect(calcular.mediaCA(notaFinal)).toMatch("II - Inferior")
  });
  test("O valor recebido corresponde a menção: MI - Média Inferior?", () => {
    let calcular = new Nota  
    let notaFinal = 4
    expect(calcular.mediaCA(notaFinal)).toMatch("MI- Média Inferior")
  });
  test("O valor recebido corresponde a menção: MM - Média minima?", () => {
    let calcular = new Nota  
    let notaFinal = 6 
    expect(calcular.mediaCA(notaFinal)).toMatch("MM - Média minima")
  });
  test("O valor recebido corresponde a menção: MS- Média Superior?", () => {
    let calcular = new Nota  
    let notaFinal = 7 
    expect(calcular.mediaCA(notaFinal)).toMatch("MS- Média Superior")
  });
  test("O valor recebido corresponde a menção: SS – Superior?", () => {
    let calcular = new Nota  
    let notaFinal = 10 
    expect(calcular.mediaCA(notaFinal)).toMatch("SS – Superior")
  });
  test("O valor recebido é um número inválido?", () => {
    let calcular = new Nota  
    let notaFinal = -10 
    expect(calcular.mediaCA(notaFinal)).toMatch("Nota inválida")
  });
});
