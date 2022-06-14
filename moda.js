
//const lista1=[1,2,3,1,2,3,4,2,2,2,1];
function calcularModa(lista1){
const lista1Count={};
//Convertimos un array a un objeto para crearlos
lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento]+=1;
        }else{lista1Count[elemento]=1;
        }
    }
);
//Ahora el objeto es convertido a array
const lista1Array=Object.entries(lista1Count).sort(function(elementoA,elementoB){
    return elementoA[1]-elementoB[1];
    }
);
const moda=lista1Array[lista1Array.length-1];
console.log("La moda es: " + moda);
}