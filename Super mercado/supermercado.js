function calculoDescuento(){
    let cantidad = parseInt(document.getElementById("inputProducto").value)
    let precio = parseInt(document.getElementById("inputPrecio").value)
    let resultado = document.getElementById("resultadoVis")
    let descuento = 0
    let obsequio = 0
    let total = 0
    let precioTotal = precio * cantidad
    if(cantidad>=36){
        descuento = precioTotal * 0.15
        obsequio = cantidad / 12
        cantidad = cantidad + Math.round(obsequio)
        total = precioTotal - descuento
        resultado.textContent = "El valor de su pedido es: " + total + " para: " + cantidad + " de productos."
    }
    else  if(cantidad > 0){
        descuento = precioTotal * 0.1
        total = precioTotal - descuento
        resultado.textContent = "El valor de su pedido es: " + total + " su descuento fue de: " + descuento;
    }
    else{
        resultado.textContent = "Ingrese un valor valido";    
    }
    resultado.textContent

}