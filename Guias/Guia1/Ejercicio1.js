
var Numero = prompt("Ingrese un numero: ");
var contador = 0;

while(Numero<0){
    var Numero = prompt("Error, Ingrese un numero entero positivo: ");
}

for(var i=0; i<Numero; i++){
    if(i%2==0){
        contador=contador + i;
    }
}

alert(`La suma total es de ${contador}`);