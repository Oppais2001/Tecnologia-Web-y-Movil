
var Nota1 = prompt("Ingrese su primera nota:"); 
while(Nota1>7.0 || Nota1<1){
    alert("Ingrese un numero Válido!")
    var Nota1 = prompt("Ingrese su primera nota:"); 
}
var Nota2 = prompt("Ingrese su segunda nota:"); 
while(Nota2>7.0 || Nota2<1){
    alert("Ingrese un numero Válido!")
    var Nota2 = prompt("Ingrese su segunda nota:"); 
}
var Nota3 = prompt("Ingrese su tercera nota:"); 
while(Nota3>7.0 || Nota3<1){
    alert("Ingrese un numero Válido!")
    var Nota3 = prompt("Ingrese su tercera nota:"); 
}
//Solicita las 3 notas y las almacena en variables
let PrimerNota = (Nota1/10)*4;
let SegundaNota = (Nota2/10)*3;
let TerceraNota = (Nota3/10)*3;
//Establece el promedio de las 3 notas
//let promedio = Math.round();
var promedio = PrimerNota + SegundaNota + TerceraNota;
var promedio = Math.round(promedio);
//Imprime en pantalla el promedio

alert(`Su promedio es: ${promedio}!`);
//Define si el promedio es suficiente para aprobar
if(promedio<4.0){
    alert("Has Reprobado!");
}else{
    alert("Has Aprobado!");
}
