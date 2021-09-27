import CalcularTotal from "./App.js";

describe("CalcularTotal", () => {
  it("deberia devolver el total de cantidad * precio", () => {
    expect(CalcularTotal(3, 2)).toEqual(6);
  });
});

describe("CalcularTotal", () => {
  it("deberia devolver el total de cantidad * precio de 3*3", () => {
    expect(CalcularTotal(3, 3, 0)).toEqual(9);
  });
});
