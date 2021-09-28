import CalcularTotal from "./App.js";

describe("CalcularTotal", () => {
  it("deberia devolver el total de cantidad * precio mas el impuesto para el estado de UT", () => {
    expect(CalcularTotal(3, 2,"UT")).toEqual(6.399);
  });
});

describe("CalcularTotal", () => {
  it("deberia devolver el total de cantidad * precio de 3*3 mas el impuesto para el estado de Nevada", () => {
    expect(CalcularTotal(3, 3, "NV")).toEqual(9.72);
  });
});

describe("CalcularTotal", () => {
  it("deberia devolver el total de cantidad * precio de 3*3 mas el impuesto para el estado de Texas", () => {
    expect(CalcularTotal(155, 24, "TX")).toEqual(3952.5);
  });
});
