//Clases
class Personajes{
    constructor(Nombre,PV,PA,PAMax){
        this.Nombre = Nombre;//Nombre de elementos que se mostraran en pantalla
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
}
class Player extends Personajes{
    constructor(Nombre,PV,PA,PAMax,PVMax,NV, E, P){
        super(Nombre,PV,PA,PAMax);
        this.Nombre = Nombre;//Nombre de elementos que se mostraran en pantalla
        this.PV = PV;//Puntos de Salud
        this.PA = PA;//Puntos de Aguante
        this.PAMax = PAMax;//Puntos de Aguante Maximos
        this.NV = NV //Nivel del personaje
        this.PVMax = PVMax //Puntos de Salud Maximos
        this.E = E //Puntos de Experiencia
        this.P = P //Puntos de Juego
    }//Acciones que pueden realizarse durante el combate
    MostrarPlayer(frame){
        const elementosActuales = document.querySelectorAll('.Player');
        console.log(elementosActuales)
        elementosActuales.forEach((elemento)=>{
            elemento.style.opacity = 0;
        })
        const elemento = String(this.Nombre) + "Ataque";
        const Imagen = document.getElementById(elemento);
        console.log(Imagen)
        Imagen.style.opacity = 1;
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
    SumarExperiencia(E){
        this.E = parseInt(this.E) + parseInt(E);
        const Experiencia = parseInt(storageObtener("Experiencia"))
        const NuevaExperiencia = Experiencia + E;
        storageAsignar("Experiencia", NuevaExperiencia)
    }
    SumarPuntos(P){
        this.P = this.P + P;
    }
}
class Enemy extends Personajes{
    constructor(Nombre,PV,PA,PAMax){
        super(Nombre,PV,PA,PAMax);
        this.Nombre = Nombre;//Nombre de elementos que se mostraran en pantalla
        this.PV = PV;//Puntos de Salud
        this.PA = PA;//Puntos de Aguante
        this.PAMax = PAMax;//Puntos de Aguante Maximos
    }
    MostrarEnemy(){
        const Enemy = document.getElementById(this.Nombre);
        console.log(Enemy)
        Enemy.style.opacity = 1;
    }
}
const PlayerKurono = new Player("Kurono",10,10,10,10,1,0,0);
const PlayerKishimoto = new Player("Kishimoto",10,10,10,10,1,0,0);
const PlayerKato = new Player("Kato",10,10,10,10,1,0,0);
const PlayerNishi = new Player("Nishi",10,10,10,10,1,0,0);
const ListaPlayers = [PlayerKurono,PlayerKishimoto,PlayerKato,PlayerNishi];
const EnemyCebollense = new Enemy('Cebollense',1,0,0);
const EnemyCebollense1 = new Enemy('Cebollense',1,0,0);
const EnemyMR = new Enemy('SR-Cebollense',5,5,5);
const EnemyTanaka = new Enemy('Tanaka',5,5,5);
const JefeTanaka = new Enemy('Jefe-Tanaka',10,10,10)
const Enemies = [EnemyCebollense,EnemyCebollense1,EnemyMR,EnemyTanaka,JefeTanaka]



