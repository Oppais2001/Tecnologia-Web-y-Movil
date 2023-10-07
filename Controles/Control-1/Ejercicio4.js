var Total = prompt("Ingrese el total de la factura");
while(Total == ""){
    alert("No ha Ingresado nada!!!");
    var Total = prompt("Ingrese el total de la factura");
}
var Porcentaje = prompt("Ingrese el porcentaje de IVA");
let IVA
let TotalBoleta

if(Porcentaje== ""){
    var Porcentaje = 19.5;
}
Total = parseInt(Total);
Porcentaje = parseFloat(Porcentaje);
IVA = parseFloat((Total*Porcentaje)/100);

TotalBoleta = Total + IVA;
alert(`Subtotal ${Total}`);
alert(`El total de su boleta es ${TotalBoleta} con un porcentaje del ${Porcentaje}%`);