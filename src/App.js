function CalcularTotal(cantidad, precio, estado) {
  var imp = ImpFORstate(estado,cantidad, precio);
  var totalImp=cantidad*precio*imp;
  var totalSImp=cantidad*precio;
  var total = totalSImp+totalImp;
  return total;
}

function precioTotal(cantidad, precio) {
  let res = cantidad * precio;
  return res;
}

function ImpFORstate(valueState,cantidad, precio) {
  let valorImpuestos=0;
  let res = precioTotal(cantidad, precio);
  switch (valueState) {
      case 'UT':
          valorImpuestos = 0.0665;
          break;
      case 'NV':
          valorImpuestos = 0.08;
          break;
      case 'TX':
          valorImpuestos = 0.0625;
          break;
      case 'AL':
          valorImpuestos = 0.04;
          break;
      case 'CA':
          valorImpuestos = 0.0825;
          break;
      default:
          alert("No existe");
  }
  res = res + (res * valorImpuestos);
  return valorImpuestos;
}

export default CalcularTotal;
