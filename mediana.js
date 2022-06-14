function calcularMediaAritmetica(lista) {
    //     let sumaLista = 0 ;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
const promedioLista = sumaLista / lista.length;
return promedioLista;
}
// const lista1 = [
//     100,
//     200,
//     500,
//     500
// ]
function esPar(numero) {
    if(numero % 2 === 0){
        return true;    
    } else {
        return false;
    }
    }


function calcularMediana (lista1) {

    var listaOrdenada = 
    
    lista1.sort(function(a, b){return a - b});
    
    console.log("La lisra ordenada es: " + listaOrdenada);
    
    const mitadLista = parseInt(lista1.length / 2); 
  
        let mediana;
        
        if(esPar(lista1.length) ) {
            const elemento1 = lista1[mitadLista - 1];
            const elemento2 = lista1[mitadLista];
        
            const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
            mediana = promedioElemento1y2;
            return console.log("La mediana es " + mediana);
        } else{
            mediana = lista1[mitadLista];
            return console.log("La mediana es " + mediana);
        }
        
}

const numeros = [3, 23, 12, 15, 45, 789, 68, 0, 14];

numeros.sort(function(a, b){return a - b}); 