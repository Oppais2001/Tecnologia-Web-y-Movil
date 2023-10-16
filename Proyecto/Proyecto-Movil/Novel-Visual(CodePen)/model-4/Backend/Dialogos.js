var indiceDialogos = 0;
let listaDialogos=["Todos los humanos mueren. Y al igual que yo morí esa es la primera condición para ser elegido por la esfera negra. Morir no es la palabra correcta, pero la uso por conveniencia. Lo explicaré más tarde, ahora me gustaría explicar la razón de ser de la esfera negra."
,"Es muy sencillo y claro. Los que estaban muertos reciben una nueva vida para librar a la tierra de los extraterrestres. Puede parecer absurdo, pero en realidad hay un gran número de ellos en la tierra."
,"Vienen en todas las formas y tamaños, ¿por qué deben ser erradicados? no lo sé y no quiero saberlo todo lo que sé es que hay que hacerlo y que es la única razón por la que estoy haciendo esto."]


function SgteDialogo(){
    if(indiceDialogos<listaDialogos.length){
        indiceDialogos++;
        var direccion = './Assets/Sounds/dialogo'+indiceDialogos+'_Español.mp3';
        var audio = new Audio(direccion);
        audio.play();
        MostrarTexto(indiceDialogos, listaDialogos[indiceDialogos-1]);
    }else if(indiceDialogos==listaDialogos.length){
        window.location.href = "./Combate.html";
    }
}
function AntDialogo(){
    if(indiceDialogos>1){
        indiceDialogos--;
        RepetirTexto(indiceDialogos,listaDialogos[indiceDialogos-1]);
    }else{
        window.location.href = "./Inicio.html";
    }
}
function MostrarTexto(indice, dialogo) {
    var boton1 = document.getElementById("Boton1");
    var boton2 = document.getElementById("Boton2");
    boton1.disabled = true;
    boton2.disabled = true;
    var dialogoactual = "";
    var sgteDialogo = dialogo;
    var contador = 0;
    console.log(`Valores indice: ${indice} , Dialogo: ${dialogo}`)
    var intervalo = setInterval(function () {
        console.log("Este mensaje se mostrará cada 25 milisegundos (0.025 segundo).");
        dialogoactual = dialogoactual + sgteDialogo[contador];
        var Dialogo = document.getElementById("dialogo");
        Dialogo.innerText = dialogoactual;
        contador++;
        if (contador == sgteDialogo.length) {
            clearInterval(intervalo); // Detiene la ejecución
            boton1.disabled = false;
            boton2.disabled = false;
            }
        }
    , 25);
}
function RepetirTexto(indice, dialogo){
    console.log(`Valores indice: ${indice} , Dialogo: ${dialogo}`)
    var Dialogo = document.getElementById("dialogo");
    Dialogo.innerText = dialogo
}
  



  
  
  
  