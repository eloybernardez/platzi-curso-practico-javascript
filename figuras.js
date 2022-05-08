// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

const perimetroCuadrado = (lado) => 4 * lado;

// console.log(
//   "El perímetro del cuadrado es " + perimetroCuadrado(ladoCuadrado) + "cm."
// );

const areaCuadrado = (lado) => lado ** 2;
// console.log("El área del cuadrado es " + areaCuadrado(ladoCuadrado) + "cm^2.");
console.groupEnd();

// Código del triángulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm y su base mide " +
//     baseTriangulo +
//     "cm."
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm.");

const perimetroTriangulo = (lado, base) => 2 * lado + base;
// // console.log(
// //   "El perímetro del triángulo es " +
// //     perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, alturaTriangulo) +
// //     "cm."
// );

const areaTriangulo = (base, altura) => (base * altura) / 2;
// console.log(
//   "El área del triángulo es " +
//     areaTriangulo(ladoTriangulo1, alturaTriangulo) +
//     "cm^2."
// );
console.groupEnd();

// Código de la circunferencia
console.group("Circunferencias");

// Radio
// const radioCircunferencia = 4;
// console.log(
//   "El radio de la circunferencia mide: " + radioCircunferencia + "cm."
// );

// Diámetro
const diametroCircunferencia = (radio) => radio * 2;

// Pi
const pi = Math.PI;
// console.log("Pi es: " + pi);

// Circunferencia
const perimetroCircunferencia = (diametro) => Math.PI * diametro;
// console.log(
//   "El perímetro de la circunferencia es " +
//     perimetroCircunferencia(diametroCircunferencia(radioCircunferencia)) +
//     "cm."
// );

// Área
const areaCircunferencia = (radio) => Math.PI * radio ** 2;
// console.log(
//   "El área de la circunferencia es " +
//     areaCircunferencia(radioCircunferencia) +
//     "cm^2."
// );
console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroCircunferencia() {
  const input = document.getElementById("inputsRadioCirculo");
  const value = Number(input.value);

  const perimetro = perimetroCircunferencia(value);
  alert(perimetro);
}

function calcularAreaCircunferencia() {
  const input = document.getElementById("inputsRadioCirculo");
  const value = Number(input.value);

  const area = areaCircunferencia(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const inputLado = document.getElementById("inputsLadoTriangulo");
  const valueLado = Number(inputLado.value);
  const inputBase = document.getElementById("inputBaseTriangulo");
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado, valueBase);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputAltura = document.getElementById("inputAlturaTriangulo");
  const valueAltura = Number(inputAltura.value);
  const inputBase = document.getElementById("inputBaseTriangulo");
  const valueBase = Number(inputBase.value);

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}

// 1er reto: construir función que calcule la altura de un triángulo isósceles

// Chequea si el triángulo es isósceles:
function esIsosceles(lado1, lado2, lado3) {
  if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return 1;
  } else {
    return 0;
  }
}

function asignarLadoIgual(lado1, lado2, lado3) {
  if (lado1 === lado2 || lado1 === lado3) {
    return lado1;
  } else if (lado2 === lado3) {
    return lado2;
  }
}

function asignarBase(lado1, lado2, lado3) {
  const lados = [lado1, lado2, lado3];
  return lados.filter((lado) => lado != asignarLadoIgual(lado1, lado2, lado3));
}

// Calcula la altura del triángulo:
function alturaIsosceles(lado1, lado2, lado3) {
  if (esIsosceles(lado1, lado2, lado3)) {
    const lado = asignarLadoIgual(lado1, lado2, lado3);
    const base = asignarBase(lado1, lado2, lado3);
    if (lado ** 2 - base ** 2 / 4 > 0) {
      return Math.sqrt(lado ** 2 - base ** 2 / 4);
    } else {
      return "Las medidas insertadas no se corresponden con un triángulo :/";
    }
  } else {
    return "El triángulo no es isósceles :/";
  }
}

console.log(alturaIsosceles(7, 3, 3));
