var nombre = prompt("Ingrese un nombre de usuario");
var contador = 0
while(nombre.length<9){
    alert("Debe contener al menos 9 caracteres");
    var nombre = prompt("Ingrese un nombre de usuario");
}
for(const elemento of nombre){
    if(contador==0){
        if(elemento==0||elemento==1||elemento==2||elemento==3||elemento==4||elemento==5||elemento==6||elemento==7||elemento==8||elemento==9){
            console.log("cumple la condicion de primero un numero")
        }else{
            alert("Ingrese un numero valido")
        }
        contador++;
    }
}
for(var element of nombre){
    console.log(typeof(element));
    console.log(element);
}
