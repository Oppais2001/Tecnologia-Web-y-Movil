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
    SumarExperiencia(E){
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
    PV: 5,
    PA: 5,
    PAMax: 5
})