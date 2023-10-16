//Clases
class Personajes{
    constructor(LV, HP,HPMax, SP, SPMax, E, P){
        this.LV = LV //Nivel del personaje
        this.HP = HP //Puntos de Salud
        this.HPMax = HPMax //Puntos de Salud Maximos
        this.SP = SP //Puntos de Aguante
        this.SPMax = SPMax //Puntos de Aguante Maximos
        this.E = E //Puntos de Experiencia
        this.P = P //Puntos de Juego
    }//Acciones que pueden realizarse durante el combate
    RealizarAtaque(Aguante){
        this.HP = this.HP - Aguante;
    }
    RecibirAtaque(Ataque){
        this.PV = PV - Ataque;
    }
    RecuperarSP(){
        this.SP = this.SPMax;
    }
    RecuperarHP(Puntos){
        this.HP = this.HP + Puntos;
        if(this.HP>this.HPMax){
            this.HP = this.HPMax;
        }
    }//Acciones que solo se dan despues del combate
    SubirNvl(){
        this.LV = LV++;
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
    p.innerHTML = Player.LV + "</br>" + Player.HP + "</br>" + Player.SP + "</br>" + Player.E + "</br>" + Player.P;
    var Texto = "¡Acabas de ver a un Tanaka!\n¿Que deseas hacer?";
    MostrarTexto(Texto);
});
//Funciones para la narraciones mediante los botones
function NarrarAtaque(){
    var MagnitudATQ = 1;
    var Texto = "¡Has decidido Atacar!\n Los puntos de salud del\n Tanaka disminuyen en "+ MagnitudATQ +".";
    MostrarTexto(Texto);
    MostrarAtaque(MagnitudATQ, "Ataque");
    NarrarRecibirAtaque();

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
    var MagnitudATQ = 1;
    var Texto = "¡Ha sido Atacado!\n Tus puntos de salud\n disminuyen en "+ MagnitudATQ +".";
    Player.HP -= MagnitudATQ;
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
    p.innerHTML = Player.LV + "</br>" + Player.HP + "</br>" + Player.SP + "</br>" + Player.E + "</br>" + Player.P;

}