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
export{Personajes};