function verificaNumero(numero) {
  if (isNaN(numero)) {
    return false;
  } else {
    return true;
  }
}

function verificaConversor(conversor) {
  if (conversor == "C" || conversor == "F") {
    return true;
  } else {
    return false;
  }
}

function converteTemperatura(temperatura, conversor) {
  if (conversor == "F") {
    let fahrenheit = temperatura * 1.8 + 32;
    return (
      "A temperatura convertida de Celsius para Fahrenheit é: " +
      fahrenheit.toFixed(2)
    );
  } else {
    let celsius = (temperatura - 32) / 1.8;
    return (
      "A temperatura convertida de Fahrenheit para Celsius é: " +
      celsius.toFixed(2)
    );
  }
}
exports.verificaNumero = verificaNumero;
exports.verificaConversor = verificaConversor;
exports.converteTemperatura = converteTemperatura;
