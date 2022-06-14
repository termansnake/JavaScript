//Mostramos el array de personas 
console.group("Persons and his Salaries");
console.log(typeof(colombia))
console.log(colombia);
console.groupEnd();
//hacemos un nuevo array con map donde mostramos solo salarios
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);
//imprimimos solo salarios
console.group("Just Salaries");
console.log(typeof(salariosCol))
console.log(salariosCol);
console.groupEnd();
//Orenamos los salarios con sort
const salariosColSorted = salariosCol.sort(
    function (salaryA, SalaryB){
        return salaryA - SalaryB;
    }
);
// mostramos los salarios organizados
console.group("Organized Salaries");
console.log(typeof(salariosColSorted))
console.log(salariosColSorted);
console.groupEnd();
//Funcion Helper
function esPar(numero){
    (numero % 2 ===0);
}
//funcion para calcular la media aritmetica 
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
//Sacamos la media aritmetica 
function medianaSalaries(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
//Mostramos los salarios de todos
console.group("Mediana de salarios");
console.log (medianaSalaries(salariosColSorted));
console.log(typeof((medianaSalaries(salariosColSorted))));

const printSalaries = document.getElementById("salariesColombia");
printSalaries.innerText = "Los salarios colombianos dentro de la base de datos son: " + "$" + salariosCol[0] + ", $" + salariosCol[1]  + ", $" + salariosCol[2]  + ", $" + salariosCol[3]  + ", $" + salariosCol[4]  + ", $" + salariosCol[5]  + ", $" + salariosCol[6]  + ", $" + salariosCol[7]  + ", $" + salariosCol[8]  + ", $" + salariosCol[9]  + ", $" + salariosCol[10]  + ", $" + salariosCol[11]  + ", $" + salariosCol[12]  + ", $" + salariosCol[13]  + ", $" + salariosCol[14]  + ", $" + salariosCol[15]  + ", $" + salariosCol[16]  + ", $" + salariosCol[17]  + ", $" + salariosCol[18]  + ", $" + salariosCol[19] + ".";

//Mostramos la mediana de todos los salarios 
const medianaSalariesOfColombia = document.getElementById("medianaSalariesColombia");
medianaSalariesOfColombia.innerText = "La mediana de estos salarios es: $" + medianaSalaries(salariosColSorted) + ".";

const medianaGeneralCol = medianaSalaries(salariosColSorted);

//Mediana del tio10%
//Sacamos el 90% de nuestro array
const spliceStart = parseInt((salariosColSorted.length * 0.4)) ;
//Restamos  al arreglo original el 90%
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(
    spliceStart, spliceCount
);

const medianaTopCol = medianaSalaries(salariosColTop10);


console.log(medianaTopCol);