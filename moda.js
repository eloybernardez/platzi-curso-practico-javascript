const numberBtn = document.getElementById("numberButton");
const calcButton = document.getElementById("calcBtn");
let actualNumber;
const result = document.getElementById("result");

function calcularModa(lista) {
  const listaCount = {};

  lista.map((elemento) => {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaCount);

  const moda = listaArray.sort((arr1, arr2) => arr1[1] - arr2[1])[
    listaArray.length - 1
  ][0];

  return moda;
}

const numbers = [];

numberBtn.addEventListener("click", () => {
  actualNumber = Number(document.getElementById("numberInput").value);
  numbers.push(actualNumber);
});

calcButton.addEventListener("click", () => {
  result.innerText = `La moda de los números ingresados es ${calcularModa(
    numbers
  )}`;
  // console.log(calcularModa(numbers));
});
