// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calcularPrecioConDescuentoFinal(precio1,descuento1){
    const porcentajePrecioConDescuento = 100-descuento1;
    const precioConDescuentoFinal = (precio1 * porcentajePrecioConDescuento) / 100;
    return precioConDescuentoFinal;
}

function onClickButtonPriceDescount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDescount = document.getElementById("InputDescount");
    const descountValue = inputDescount.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;                         
    
  

    // const resultP = document.getElementById("ResultP");
    // resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

    const cupones = ["cupon10", "cupon20", "cupon30",""];
    
    let descuentos;

            if(!cupones.includes(cuponValue)) {
                
                alert("El cupon " + cuponValue + " " + "no es valido");
            } else if(cuponValue === ""){
                descuentos = 0;
            } else if(cuponValue === "cupon10"){
                descuentos = 10;
            } else if(cuponValue === "cupon20"){
                    descuentos = 20;
            } else if(cuponValue === "cupon30"){
                descuentos = 30;
            }

    
     const precioConDescuento =  calcularPrecioConDescuento(priceValue,descountValue);
    
     const precioConDescuentoFinal = calcularPrecioConDescuentoFinal(precioConDescuento,descuentos);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuentoFinal;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })