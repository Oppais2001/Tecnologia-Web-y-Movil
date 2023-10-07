var contador = 0
var frase = prompt("Ingrese una frase");
while(frase == ""){
    alert("No ha ingresado nada");
    var frase = prompt("Ingrese una frase");
}
var Letra = prompt("Ingrese una letra");
while(Letra == ""||Letra.length>1){
    if(Letra == ""){
    alert("No ha ingresado nada");
    var Letra = prompt("Ingrese una frase");
    }else{
    alert("Debe ingresar solo una letra!!!");
    var Letra = prompt("Ingrese una frase");
    }
}

for(const element of frase){
    console.log(element);
    if(element==Letra){
        console.log("Bingo")
        contador++;
    }
}
alert(`En la Frase "${frase}" se repite la letra "${Letra}" un total de N°${contador}`);