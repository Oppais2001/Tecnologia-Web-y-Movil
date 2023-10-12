function Calcular(){
    var Nombre = document.getElementById("Nombre").value;
    var peso = parseInt(document.getElementById("Peso").value);
    var altura = parseFloat(document.getElementById("Altura").value);
    var actividad = document.getElementById("Actividad").value;
    var EscribeNombre = document.getElementById("EscribeNombre");
    EscribeNombre.innerText = String("Resultados para " + Nombre);
    IMC(peso, altura);
    Gasto(peso, actividad);
}

function IMC(p,a){
    var IMC = (parseFloat(p/(a)**2)).toFixed(2);
    var TextoIMC = document.getElementById("IMC");
    var TextoAtencion = document.getElementById("Estado");
    TextoIMC.innerText = "IMC: " + IMC;
    var TextoClasificacion = document.getElementById("Clasificación");
    if (IMC<18.5){
        TextoClasificacion.innerText="Clasificación: Bajo peso";
        TextoAtencion.innerText="Estado Nutricional: Necesita atención especializada"
    }else{
        if (IMC<25){
        TextoClasificacion.innerText="Clasificación: Peso normal";
        TextoAtencion.innerText="Estado Nutricional: No Necesita atención especializada"

        }else{
            if(IMC<30){
            TextoClasificacion.innerText="Clasificación: Sobrepeso";
            TextoAtencion.innerText="Estado Nutricional: Necesita atención especializada"

            }else{
                TextoClasificacion.innerText="Clasificación: Obesidad";
                TextoAtencion.innerText="Estado Nutricional: Necesita atención especializada urgente"

            }
        }
    }
}
function Gasto(p,a){
    var EscribeGasto = document.getElementById("Gasto");
    if(a=="Sedentario"){
        var Gasto = (parseFloat(1.2*p)).toFixed(2);
        EscribeGasto.innerText="Gasto Energetico: "+ String(Gasto);
    }
    if(a=="Moderado"){
        var Gasto = (parseFloat(1.55*p)).toFixed(2);
        EscribeGasto.innerText="Gasto Energetico: "+ String(Gasto);
    }
    if(a=="Activo"){
        var Gasto = (parseFloat(1.9*p)).toFixed(2);
        EscribeGasto.innerText="Gasto Energetico: "+ String(Gasto);
    }
}