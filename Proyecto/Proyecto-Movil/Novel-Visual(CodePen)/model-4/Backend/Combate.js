document.addEventListener('DOMContentLoaded', function() {
    var p = document.getElementById("puntos");
    p.innerHTML = "1</br>10</br>10</br>0</br>0";  
});
function NarrarAtaque(){
    var Texto = "Has decidido Atacar";
    var MagnitudATQ = -100;
    MostrarTexto(Texto);
    MostrarAtaque(MagnitudATQ, "Ataque");

}
function NarrarRecibirAtaque(){
    setTimeout(function(){
        RecibirAtaque();
    }, 2000);

}
function Defender(){
    var Texto = "Has decidido Defender";
    MostrarTexto(Texto);
}
function Descansar(){
    var Texto = "Has decidido Descansar";
    MostrarTexto(Texto);
}
function Huir(){
    var Texto ="Has decidido Huir";
    MostrarTexto(Texto);
}
function RecibirAtaque(){
    var Texto = "Has sido Atacado";
    var MagnitudATQ = 100;
    MostrarTexto(Texto);
    MostrarAtaque(MagnitudATQ, "RecibirAtaque");
}

function MostrarTexto(dialogo) {
    var boton1 = document.getElementById("boton1");
    var boton2 = document.getElementById("boton2");
    var boton3 = document.getElementById("boton3");
    var boton4 = document.getElementById("boton4");
    boton1.disabled = true;
    boton2.disabled = true;
    boton3.disabled = true;
    boton4.disabled = true;
    var dialogoactual = "";
    var contador = 0;
    console.log(`Dialogo: ${dialogo}`);
    var intervalo = setInterval(function () {
        console.log("Este mensaje se mostrará cada 25 milisegundos (0.025 segundo).");
        dialogoactual = dialogoactual + dialogo[contador];
        var Dialogo = document.getElementById("Narracion");
        Dialogo.innerText = dialogoactual;
        contador++;
        if (contador == dialogo.length) {
            clearInterval(intervalo); // Detiene la ejecución
            boton1.disabled = false;
            boton2.disabled = false;
            boton3.disabled = false;
            boton4.disabled = false;
            }
        }
    , 25);}

function MostrarAtaque(Ataque, elemento){
    var ATQ = document.getElementById(elemento);
    ATQ.innerText= Ataque + "PTS";
    var contador=0
    var intervalo = setInterval(function(){
        console.log(`El daño ha sido de ${Ataque}`);
        ATQ.innerText=" ";
        if(contador==2){
            clearInterval(intervalo);
        }
        contador++;
    }, 2000);}
