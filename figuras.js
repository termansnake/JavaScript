console.log("hola JavaScript");
//Codigo del cuadrado
console.group("Cuadrados"); //Encapusula elemntos de nuestro coidgo
///const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
function perimetroCuadrado(lado) {
    return 4*lado;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado) {
    return lado*lado
} 
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd(); //Aqui termina la encapsulacion
//Codigo del triangulo
console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
//console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1,lado2,base) {
    return lado1+lado2+base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base,altura) {
    return (base*altura)/2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Codigo del Circulo
console.group("Circulos");
//Radio
//const radioCirculo = 4
//console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diametro
function diametroCirculo (radio) {
    return radio*2;
}
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");
// PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);
//Circunferencia 
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");
// Area
function areaCirculo (radio) {
    return (radio*radio) * PI;
}
//console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo1");
    const lado1 = Number(input.value);
    const input1 = document.getElementById("InputTriangulo2");
    const lado2 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo3");
    const base = Number(input2.value);
    
    const perimetro = perimetroTriangulo (lado1,lado2,base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
const input = document.getElementById("InputTriangulo3");
const base = Number(input.value);
const input2 = document.getElementById("InputTriangulo4");
const altura = Number(input2.value);

const area = areaTriangulo(base,altura);
alert(area);
}

function calcularPerimetroCirculo() {
const input = document.getElementById("InputCirculo");
const radio = Number(input.value);

const perimetro = perimetroCirculo(radio);
alert(perimetro);
}

function calcularAreaCirculo(){
const input = document.getElementById("InputCirculo");
const radio = Number(input.value);

const area = areaCirculo(radio);
alert(area);
}