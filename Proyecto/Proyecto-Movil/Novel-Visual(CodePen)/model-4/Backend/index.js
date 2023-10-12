listaDialogos=["Todos los humanos mueren. Y al igual que yo morí esa es la primera condición para ser elegido por la esfera negra. Morir no es la palabra correcta, pero la uso por conveniencia. Lo explicaré más tarde, ahora me gustaría explicar la razón de ser de la esfera negra.",
"Es muy sencillo y claro. Los que estaban muertos reciben una nueva vida para librar a la tierra de los extraterrestres. Puede parecer absurdo, pero en realidad hay un gran número de ellos en la tierra.",
"Vienen en todas las formas y tamaños, ¿por qué deben ser erradicados? no lo sé y no quiero saberlo todo lo que sé es que hay que hacerlo y que es la única razón por la que estoy haciendo esto."]
indiceDialogos = 0
function SgteDialogo() {
    if(indiceDialogos==listaDialogos.length){
        alert("se Terminaron los dialogos")
    }else{
    var Dialogo = document.getElementById("dialogo");
    var boton1 = document.getElementById("Boton1");
    var boton2 = document.getElementById("Boton2");
    boton1.disabled = true;
    boton2.disabled = true;
    var dialogoactual = "";
    var sgteDialogo = listaDialogos[indiceDialogos];
    var contador = 0;
    var intervalo = setInterval(function () {
        console.log("Este mensaje se mostrará cada 25 milisegundos (0.025 segundo).");
        dialogoactual = dialogoactual + sgteDialogo[contador];
        Dialogo.innerText = dialogoactual;
        contador++;
        if (contador == sgteDialogo.length) {
            clearInterval(intervalo); // Detiene la ejecución
            boton1.disabled = false;
            boton2.disabled = false;
            }
        }
    , 25);
    console.log(`Valores indice: ${indiceDialogos} , Dialogo: ${listaDialogos[indiceDialogos]}`)
    console.log(listaDialogos.length);
    indiceDialogos++;


    }
}
  

function AntDialogo(){
    var Dialogo = document.getElementById("dialogo");
    if(indiceDialogos<=1){
        alert("Primer Dialogo");

    }else{
        indiceDialogos--;
        console.log(`Valores indice: ${indiceDialogos} , Dialogo: ${listaDialogos[indiceDialogos]}`)
        Dialogo.innerText = listaDialogos[indiceDialogos];
    }
}

  
  
  
  