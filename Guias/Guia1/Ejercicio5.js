var altura = prompt("Ingrese su Altura");
while(altura==""||altura<0||altura>3){
    alert("Ingrese una altura válida");
    var altura = prompt("Ingrese su Altura");
}
var peso = prompt("Ingrese su Peso");
while(peso==""||peso<0||peso>500){
    alert("Ingrese un peso válida");
    var peso = prompt("Ingrese su Peso");
}

var IMC = peso/(altura ** 2);

if(IMC< 18.5){
    alert(`Se encuentra en bajo peso, su IMC corresponde a: ${Math.round(IMC)}`);
}else if(IMC<24.9){
    alert(`Se encuentra en peso normal, su IMC corresponde a: ${Math.round(IMC)}`);
}else{
    alert(`Se encuentra en sobrepeso, su IMC corresponde a: ${Math.round(IMC)}`);
}




