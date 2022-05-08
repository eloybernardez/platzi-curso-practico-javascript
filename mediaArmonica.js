const numberBtn = document.getElementById("numberButton");
const calcButton = document.getElementById("calcBtn");
let actualNumber;
const result = document.getElementById("result");

function calcularMediaArmonica(lista) {
  function calcularReciproco(num) {
    return 1 / num;
  }

  const sumaReciprocos = lista.reduce((valorAcumulado, valorActual) => {
    return valorAcumulado + calcularReciproco(valorActual);
  });

  return lista.length / sumaReciprocos;
}

const numbers = [];

numberBtn.addEventListener("click", () => {
  actualNumber = Number(document.getElementById("numberInput").value);
  numbers.push(actualNumber);
});

calcButton.addEventListener("click", () => {
  result.innerText = `La media armónica de los números ingresados es ${calcularMediaArmonica(
    numbers
  )}`;
  // console.log(calcularMediaArmonica(numbers));
});
