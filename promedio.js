const numberBtn = document.getElementById("numberButton");
const calcButton = document.getElementById("calcBtn");
let actualNumber;
const result = document.getElementById("result");

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce((valorAcumulado, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  }, 0);

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

const numbers = [];

numberBtn.addEventListener("click", () => {
  actualNumber = Number(document.getElementById("numberInput").value);
  numbers.push(actualNumber);
});

calcButton.addEventListener("click", () => {
  result.innerText = `El promedio de los números ingresados es ${calcularMediaAritmetica(
    numbers
  )}`;
  // console.log(calcularMediaArmonica(numbers));
});
