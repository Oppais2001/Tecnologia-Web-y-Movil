//Clases
class Personajes{
    constructor({PV,PA,PAMax}){
        this.PV = PV;//Puntos de Salud
        this.PA = PA;//Puntos de Aguante
        this.PAMax = PAMax;//Puntos de Aguante Maximos
    }PerderPA(Aguante){
        this.PA -= Aguante;
    }
    PerderPV(Ataque){
        this.PV -= Ataque;
    }
    RecuperarPA(){
        this.PA = this.PAMax;
    }
    Atacar(Objetivo, Gasto){
        this.PerderPA(Gasto);
        Objetivo.PerderPV;
    }
}
class Player extends Personajes{
    constructor({PV,PA,PAMax,NV,PVMax, E, P}){
        super({PV,PA,PAMax});
        this.NV = NV //Nivel del personaje
        this.PVMax = PVMax //Puntos de Salud Maximos
        this.E = E //Puntos de Experiencia
        this.P = P //Puntos de Juego
    }//Acciones que pueden realizarse durante el combate
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
var Player1 = new Player({
    NV: 1,
    PV: 10,
    PVMax: 10,
    PA: 10,
    PAMax: 10,
    E: 0,
    P: 0
});
var Enemy = new Personajes({
    PV: 2,
    PA: 5,
    PAMax: 5
})
//Funcion de inicio
document.addEventListener('DOMContentLoaded', function() {
    var p = document.getElementById("puntos");
    p.innerHTML = Player1.NV + "</br>" + Player1.PV + "</br>" + Player1.PA + "</br>" + Player1.E + "</br>" + Player1.P;
    var Texto = "¡Acabas de ver a un Tanaka!\n¿Que deseas hacer?";
    MostrarTexto(Texto);
});
//Funciones para la narraciones mediante los botones
function NarrarAtaque(){
    var MagnitudATQ = 1;
    var GastoPA= 5;
    Player1.PerderPA(GastoPA);
    var Texto = "¡Has decidido Atacar!\n Los puntos de salud del\n Tanaka disminuyen en "+ MagnitudATQ +".";
    MostrarTexto(Texto);
    MostrarAtaque(MagnitudATQ, "Ataque");
    ActualizarEstadoPersonaje();
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
    Player1.PerderPA(GastoPA);
    ActualizarEstadoPersonaje();
}
function Descansar(){
    var Texto = "Has decidido Descansar";
    MostrarTexto(Texto);
    var GastoPA= 5;
    Player1.PerderPA(GastoPA);
    ActualizarEstadoPersonaje();
}
function Huir(){
    var Texto ="Has decidido Huir";
    MostrarTexto(Texto);
    var GastoPA= 5;
    Player1.PerderPA(GastoPA);
    ActualizarEstadoPersonaje();
}
function RecibirAtaque(){
    var MagnitudATQ = 10;
    var Texto = "¡Has sido Atacado!\n Tus puntos de salud\n disminuyen en "+ MagnitudATQ +".";
    Player1.PerderPV(MagnitudATQ);
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
    console.log(`El daño ha sido de ${Ataque}`);
    //Animacion de Ataque
    var ATQ = document.getElementById(elemento);
    ATQ.innerText= Ataque + "PTS";
    var contador=0
    var intervalo = setInterval(function(){
        ATQ.innerText=" ";
        if(contador==2){
            clearInterval(intervalo);
        }
        contador++;
    }, 2000);}

function ActualizarEstadoPersonaje(){
    var p = document.getElementById("puntos");
    p.innerHTML = Player1.NV + "</br>" + Player1.PV + "</br>" + Player1.PA + "</br>" + Player1.E + "</br>" + Player1.P;
    if(Player1.PA==0){
        EnemyTurn();
    }
    if(Player1.PV==0){
        console.log("Has muerto!!!")
        setTimeout(function(){
        MostrarTexto("¡¡¡Has muerto!!!");
        },2000);
        setTimeout(function(){
            window.location.href = "./Perder.html";
        },4000);
  
    }
}
function EnemyTurn(){
    Numero = Math.random()*2;
    NarrarRecibirAtaque();
    Player1.RecuperarPA();

}