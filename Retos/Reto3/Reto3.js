function CalcularPropina() {
    var Propina
    var Total = parseFloat(document.getElementById("total").value);
    var select = document.getElementById("porcentaje");
    var Porcentaje = parseFloat(select.value);
    var Resultado = document.getElementById("resultado");
    if(Total<1){
        alert("Ingrese un valor válido!");
    }else{
        Propina =(Total/100)*Porcentaje;
        console.log(Propina);
        var Total = Total + Propina;
        Resultado.innerText="Propina: $"+Propina.toFixed(2)+" CLP\n Total a Pagar: $"+Total.toFixed(2) + "CLP";
    }
    }

