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

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana(lista) {
  const mitadLista = Math.floor(lista.length / 2);
  let mediana;

  const listaOrdenada = (lista) => {
    return lista.sort((a, b) => a - b);
  };

  if (esPar(listaOrdenada(lista).length)) {
    const elemento1 = listaOrdenada(lista)[mitadLista];
    const elemento2 = listaOrdenada(lista)[mitadLista - 1];
    mediana = calcularMediaAritmetica([elemento1, elemento2]);
  } else {
    mediana = listaOrdenada(lista)[mitadLista];
  }

  return mediana;
}

const numbers = [];

numberBtn.addEventListener("click", () => {
  actualNumber = Number(document.getElementById("numberInput").value);
  numbers.push(actualNumber);
});

calcButton.addEventListener("click", () => {
  result.innerText = `La mediana de los números ingresados es ${calcularMediana(
    numbers
  )}`;
  // console.log(calcularMediaArmonica(numbers));
});
