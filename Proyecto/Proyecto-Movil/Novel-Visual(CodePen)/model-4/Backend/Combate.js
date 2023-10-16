//Clases
class Personajes{
    constructor(NV, PV,PVMax, PA, PAMax, E, P){
        this.NV = NV //Nivel del personaje
        this.PV = PV //Puntos de Salud
        this.PVMax = PVMax //Puntos de Salud Maximos
        this.PA = PA //Puntos de Aguante
        this.PAMax = PAMax //Puntos de Aguante Maximos
        this.E = E //Puntos de Experiencia
        this.P = P //Puntos de Juego
    }//Acciones que pueden realizarse durante el combate
    PerderPA(Aguante){
        this.PA -= Aguante;
    }
    PerderPV(Ataque){
        this.PV -= Ataque;
    }
    RecuperarPA(){
        this.PA = this.PAMax;
    }
    RecuperarPV(Puntos){
        this.PV += Puntos;
        if(this.PV>this.PVMax){
            this.PV = this.PVMax;
        }
    }//Acciones que solo se dan despues del combate
    SubirNvl(){
        this.NV++;
        this.E = 0;
    }
    SumarPuntos(E){
        this.E = this.E + E;
    }
    SumarPuntos(P){
        this.P = this.P + P;
    }
}
var Player = new Personajes(1,10,10,10,10,0,0);
//Funcion de inicio
document.addEventListener('DOMContentLoaded', function() {
    var p = document.getElementById("puntos");
    p.innerHTML = Player.NV + "</br>" + Player.PV + "</br>" + Player.PA + "</br>" + Player.E + "</br>" + Player.P;
    var Texto = "¡Acabas de ver a un Tanaka!\n¿Que deseas hacer?";
    MostrarTexto(Texto);
});
//Funciones para la narraciones mediante los botones
function NarrarAtaque(){
    var MagnitudATQ = 1;
    var GastoPA= 5;
    Player.PerderPA(GastoPA);
    var Texto = "¡Has decidido Atacar!\n Los puntos de salud del\n Tanaka disminuyen en "+ MagnitudATQ +".";
    MostrarTexto(Texto);
    MostrarAtaque(MagnitudATQ, "Ataque");
    ActualizarEstadoPersonaje();
    if(Player.PA==0){
        NarrarRecibirAtaque();
        Player.RecuperarPA();
    }

}
function NarrarRecibirAtaque(){
    setTimeout(function(){
        RecibirAtaque();
    }, 2000);

}
function Defender(){
    var Texto = "Has decidido Defender";
    MostrarTexto(Texto);
    var GastoPA= 5;
    Player.PerderPA(GastoPA);
    ActualizarEstadoPersonaje();
}
function Descansar(){
    var Texto = "Has decidido Descansar";
    MostrarTexto(Texto);
    var GastoPA= 5;
    Player.PerderPA(GastoPA);
    ActualizarEstadoPersonaje();
}
function Huir(){
    var Texto ="Has decidido Huir";
    MostrarTexto(Texto);
    var GastoPA= 5;
    Player.PerderPA(GastoPA);
    ActualizarEstadoPersonaje();
}
function RecibirAtaque(){
    var MagnitudATQ = 1;
    var Texto = "¡Has sido Atacado!\n Tus puntos de salud\n disminuyen en "+ MagnitudATQ +".";
    Player.PerderPV(MagnitudATQ);
    MostrarTexto(Texto);
    ActualizarEstadoPersonaje();
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

function ActualizarEstadoPersonaje(){
    var p = document.getElementById("puntos");
    p.innerHTML = Player.NV + "</br>" + Player.PV + "</br>" + Player.PA + "</br>" + Player.E + "</br>" + Player.P;

}
function Enemy(){
    Numero = Random
}