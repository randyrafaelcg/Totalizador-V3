import sumar from "./App.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});

describe("Sumar", () => {
  it("deberia sumar otros dos numeros", () => {
    expect(sumar(3, 3)).toEqual(6);
  });
});
