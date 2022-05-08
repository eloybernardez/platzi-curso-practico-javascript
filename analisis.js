// Helpers
function esPar(num) {
  return num % 2 === 0;
}

// Calculadora de medianas
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personMitad1 = lista[mitad - 1];
    const personMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personMitad1, personMitad2]);

    return mediana;
  } else {
    const personMitad = lista[mitad];
    return personMitad;
  }
}

// Mediana General
const salariosArg = argentina.map((person) => {
  return person.salary;
});

const salariosArgSorted = salariosArg.sort(
  (salaryA, salaryB) => salaryA - salaryB
);

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce((valorAcumulado, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  }, 0);

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

const medianaGeneralArg = medianaSalarios(salariosArgSorted);

// Mediana del top 10%
const spliceStart = (salariosArgSorted.length * 90) / 100;
const spliceCount = salariosArgSorted.length - spliceStart;

const salariosArgTop10 = salariosArgSorted.splice(spliceStart, spliceCount);

const medianaTop10Arg = medianaSalarios(salariosArgTop10);
console.log(medianaGeneralArg, medianaTop10Arg);
