var contador = 0;
var puntuaciones = [0.0,0.2,0.4,0.6,0.8]

while(contador==0){
    var puntuacion = prompt("Ingrese la puntuacion del empleador");
    for(const elemento of puntuaciones){
        if(elemento==puntuacion){
            console.log("Bingo");
            contador++;
        }
    }
    if(contador==0){
        alert("Ingrese un numero valido");
    }
}
if(puntuacion==0.0||puntuacion==0.2){
    alert("La puntuacion del empleador es Insuficiente");
}
if(puntuacion==0.4){
    alert("La puntuacion del empleador es Aceptable");
}
if(puntuacion==0.6){
    alert("La puntuacion del empleador es Meritorio");
}
if(puntuacion==0.8){
    alert("La puntuacion del empleador es Excelente");
}

alert(`La cantidad de Dinero correspondiente es ${puntuacion*250000}`)
