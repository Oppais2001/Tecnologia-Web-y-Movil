class Personaje{
    constructor(Nombre, Indices, Expresion, Ropa){
        this.Nombre = Nombre;
        this.Indices = Indices;
        this.Expresion = Expresion;
        this.Ropa = Ropa;
    }
    ComprobarIndice(indice){
        if (this.Indices.includes(indice)){
            return true
        }else{
            return false
        }
    }
    MoverIndices(Inicio,cantidad){
        for(let i=0; i<this.Indices.length;i++){
            if(this.Indices[i]>Inicio){
                this.Indices[i] += cantidad;
            }
        }
    }MostrarNombre(){
        const nombre = document.getElementById('Nombres');
        nombre.innerText = this.Nombre;
    }
    MostrarPersonaje(){
        var elemento = String(this.Nombre) //Extrae el nombre del personaje
        if(this.ValidaRopa()){ //Valida si usa diferentes tipos de ropa
            var elemento = elemento + String(this.Ropa); //Le suma al nombre el tipo de ropa que usa
        }
        const personaje = document.getElementById(elemento);//Llama al elemento de la imagen que representa al personaje
        console.log(elemento)
        if(personaje.style.opacity!=1){//Valida que el personaje no esta repitiendo su dialogo
            console.log(personaje)
            this.OcultarPersonajes()
            this.OcultarExpresiones()
            personaje.style.opacity = 1;
            if(this.ValidaExpresion()){
                console.log(this.Expresion)
                this.MostrarExpresion()
            }
        }
    }MostrarExpresion(){
        const elementoExpresion = String(this.Nombre) + String(this.Expresion);
        const personajeExpresion = document.getElementById(elementoExpresion);
        console.log(personajeExpresion)
        personajeExpresion.style.opacity = 1;
    }OcultarPersonajes(){
        const ListaPersonajes = document.querySelectorAll('.Personajes'); //Lista de Personajes
        ListaPersonajes.forEach((Personaje)=>{
            Personaje.style.opacity = 0
        })
    }OcultarExpresiones(){
        const ListaExpresiones = document.querySelectorAll('.Expresiones'); //Lista de Expresiones
        ListaExpresiones.forEach((Expresion)=>{
            Expresion.style.opacity = 0
        })
    }ValidaExpresion(){
        if(!this.Expresion){
            return false
        }else{
            return true
        }
    }
    ValidaRopa(){
        if(!this.Ropa){
            return false
        }else{
            return true
        }
        }
    CambiarRopa(Ropa){
        this.Ropa = Ropa
        var elemento = String(this.Nombre) //Extrae el nombre del personaje
        const Elemento1 = elemento + String(this.Ropa); //Le suma al nombre el tipo de ropa que usa
        const Elemento2 = elemento + String(this.Expresion);
        const PersonajeRopa = document.getElementById(Elemento1);
        const PersonajeExpresion = document.getElementById(Elemento2);
        PersonajeRopa.classList.add("AnimacionAparecer"); 
        PersonajeExpresion.classList.add("AnimacionAparecer");
        const Efecto = document.getElementById('CambioRopa');
        Efecto.play()
        BloquearBotones()
        setTimeout(()=>{
            PersonajeRopa.classList.remove("AnimacionAparecer"); 
            PersonajeExpresion.classList.remove("AnimacionAparecer");
            Efecto.pause()
            ActivarBotones()
        },4000)
    }
    Teletransportar(){
        var elemento = String(this.Nombre) //Extrae el nombre del personaje
        if(this.ValidaRopa()){ //Valida si usa diferentes tipos de ropa
            var elemento = elemento + String(this.Ropa); //Le suma al nombre el tipo de ropa que usa
        }
        console.log(elemento)
        const Personaje = document.getElementById(elemento);//Llama al elemento de la imagen que representa al personaje
        if(this.ValidaExpresion()){
            const elemento = String(this.Nombre) + String(this.Expresion)
            let Expresion = document.getElementById(elemento);
            Expresion.classList.add("AnimacionTransportar2");
        }
        const Recuadro = document.getElementById("Teletransportacion");
        const Efecto = document.getElementById("EfectoTeletransportacion");
        Recuadro.classList.add("AnimacionTransportar1");
        Personaje.classList.add("AnimacionTransportar2");
        BloquearBotones();
        Efecto.play()
        setTimeout(()=>{
            if(this.ValidaExpresion()){
                const elemento = String(this.Nombre) + String(this.Expresion)
                let Expresion = document.getElementById(elemento);
                Expresion.classList.remove("AnimacionTransportar2");
            }
            ActivarBotones();
            Recuadro.classList.remove("AnimacionTransportar1");
            Personaje.classList.remove("AnimacionTransportar2");
            Efecto.pause();
        },4000)
    }
}

class Decision{
    constructor(Indice, Opciones){
        this.Indice = Indice;
        this.Opciones = Opciones;
        this.opcion = false;
    }
    ComprobarIndice(indice){
        if (this.Indice==indice){
            return true
        }else{
            return false
        }
    }MostrarOpciones(){
        const Opcion1 = document.getElementById('Opcion1');
        const Opcion2 = document.getElementById('Opcion2');
        const Boton1 = document.getElementById('Boton1');
        const Boton2 = document.getElementById('Boton2');
        Opcion1.value = this.Opciones[0];
        Opcion2.value = this.Opciones[1];
        Opcion1.style.opacity = 1;
        Opcion2.style.opacity = 1;
        Boton1.style.opacity = 0;
        Boton2.style.opacity = 0;
        Boton1.onclick = null;
        Boton2.onclick = null;
    }OcultarOpciones(){
        const Opcion1 = document.getElementById('Opcion1');
        const Opcion2 = document.getElementById('Opcion2');
        const Boton1 = document.getElementById('Boton1');
        const Boton2 = document.getElementById('Boton2');
        Opcion1.value = this.Opciones[0];
        Opcion2.value = this.Opciones[1];
        Opcion1.style.opacity = 0;
        Opcion2.style.opacity = 0;
        Boton1.style.opacity = 1;
        Boton2.style.opacity = 1;
        Boton1.onclick = AvanzarTexto;
        Boton2.onclick = null;
    }ElegirDecision(Decision){
        this.opcion = Decision;
    }MoverDialogos(personajes){
        if(this.opcion){
            let cantidad1 = 8;
            personajes.forEach((personaje)=>{
                personaje.MoverIndices(80,cantidad1)
            })
            let cantidad2 = 13;
            personajes.forEach((personaje)=>{
                personaje.MoverIndices(90,cantidad2)
            })
            let cantidad3 = 2;
            personajes.forEach((personaje)=>{
                personaje.MoverIndices(281,cantidad3)
            })
            decision2.Indice+= cantidad1 + cantidad2;
        }else if(!this.opcion){
            let cantidad = 2;
            personajes.forEach((personaje)=>{
                personaje.MoverIndices(80,cantidad)
            })
            decision2.Indice+= cantidad;
        }else{
            console.log("Error Catastrofico al Mover los dialogos")
        }
    }AgregarDialogos(){
        const Indice1 = 80;
        const Indice2 = 90;
        if(this.opcion){
            Dialogos.splice(Indice1, 0, ...NuevosDialogos1)//arreglo.splice(Inicio,cantidadElementosEliminar,item1,item2)
            Dialogos.splice(Indice2, 0, ...NuevosDialogos2)
        }else if(!this.opcion){
            let NuevosDialogos = ["No siento que sea necesario ponernos ese cosplay…","Bueno si tú lo dices…"]
            Dialogos.splice(Indice1, 0, ...NuevosDialogos)
        }else{
            console.log("Error al Agregar Dialogos");
        }
    }
    AgregarIndices(personaje1, personaje2, personaje3, personaje4){//(Kurono, kato, kishimoto, nishi)
        if(this.opcion){
            let Indices1 = [81,83,85,87,92,93,95,98,100,102,103] //indices que se agregaran a kei
            let Indices2 = [82,84,91,96,99] //indices que se agregaran a kato
            let Indices3 = [86,88,94,97,101] //indices que se agregaran a kishi
            let Indices4 = [282,283]
            personaje1.Indices.splice(54,0,...Indices1)
            personaje2.Indices.splice(20,0,...Indices2)
            personaje3.Indices.splice(3,0,...Indices3)
            personaje4.Indices.splice(59,0,...Indices4)
        }else if(!this.opcion){
            let Indice1 = 81; //indice del nuevo dialogo para el personaje 1
            let Indice2 = 82; //indice del nuevo dialogo para el personaje 2
            personaje1.Indices.splice(54,0, Indice1)
            personaje2.Indices.splice(20,0, Indice2)
        }else{
            console.log("Error Al Agregar Indices")
        }
    }
}
//Personaje1
const Kurono = new Personaje(
    'Kurono',
    [1,2,3,6,7,8,9,10,11,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,
    29,30,31,32,33,34,35,36,37,38,40,42,43,46,47,50,51,54,57,58,60,64,67,69,71,73,75,77,78,79,81,82,
    84,87,91,93,96,98,100,104,105,106,107,109,111,114,117,118,120,123,125,126,127,128,129,130,131,
    132,133,134,135,136,139,141,143,145,151,152,155,158,159,161,164,165,166,172,173,176,177,182,184,
    185,186,187,189,190,191,192,193,197,199,200,202,207,210,212,215,219,220,223,225,230,234,235,237,
    239,240,244,245,246,251,261,263,264,266,280,288,292,294,296,298,299,300,302,304,306,310,312,319,
    320,321,322,323,324,325,326,327,328,330,331,332,333,336,338,341,342,343,344,345,346,347,348,351,
    353,356,358,360,362,364,366,367,368,369,370,371,372,373,374,375,377,379,381,382,385,386,387,388,
    389,390,391,393,395,397,399,400,402,404,406,409,411,417,418,419,420,422,423,424,425,429,434,435,
    438,439,440,443,446,449,450,453,454,455,456,457,459,462,464,,465,467,468,469,471,475,476,477,478,
    481,495,496,497,498,499,500,501,502,504,506,508,509,510,513,514,516,519,520,521,523,524,528,529,
    530,532,533,534,535,539,540,541,547,549,550,551,553,554,555,556,557,558,559,561,562,565,567,570,
    572,581,584,586,587],
    "Serio",
    "Uniforme");
//Personaje 2
const Kato = new Personaje("Kato", [4,5,12,15,39,41,44,45,48,49,52,55,61,62,63,68,70,72,74,80,86,90,
    94,97,99,101,102,103,162,167,168,170,174,175,179,180,194,195,196,198,217,226,228,268,271,307,473,
    474,479,483,484,490,493,511,536,546,548,574],
    "Serio",
    "Traje");
//Personaje 3
const Nishi = new Personaje("Nishi",[65,66,76,110,112,113,115,116,119,121,122,124,138,140,142,144,
    146,147,148,150,153,156,160,163,181,201,203,204,205,206,208,209,211,213,214,216,218,221,222,224,
    227,229,231,233,236,238,242,243,247,249,250,252,253,255,256,257,258,259,260,262,267,269,270,272,
    273,274,275,276,277,278,279,289,282,283,284,285,286,287,291,293,295,297,301,303,305,309,311,313,
    314,315,316,317,318,487,538,545,552,566,571,573,575,579,580],
    "Serio",
    "Traje");
//Personaje 4
const Kishimoto = new Personaje("Kishimoto",[53,56,59,83,85,88,89,92,95,108,149,157,171,178,232,241,
    248,254,265,281,290,308,329,334,335,337,339,340,349,350,352,354,355,357,359,361,363,365,376,378,
    380,383,384,392,394,396,398,401,403,405,407,408,410,412,413,414,415,416,426,427,428,430,431,432,
    433,436,437,441,442,444,445,447,448,451,452,458,460,461,463,466,486,489,492,542,563,564],
    "Seria",
    "Uniforme");
//Personaje 5
const SegundaKishimoto = new Personaje("Segunda-Kishimoto",
    [421],
    "Feliz",
    "Uniforme");
//Personaje 6
const MrCebollin = new Personaje("MrCebollense",
    [169,183,188],
    false,
    false);
//Personaje 7
const Cebollin = new Personaje("Cebollense",
    [154],
    false,
    false)
//Personaje 8
const Perro = new Personaje("Perro",
    [137,560],
    false,
    false)
//Personaje 9
const Hojo = new Personaje("Hojo",[470,472,480,482,485,488,491,494,512,515,517,518,522,525,526,527,
    531,537,569,576,577,578,582,583,585],
    false,
    false)
// Personaje 10
const Tanaka = new Personaje("Tanaka",
    [503,505,507],
    false,
    false)
// Personaje 11
const Sadako = new Personaje("Sadako",
    [543,544,568],
    false,
    "Uniforme")
//Lista de Personajes
const ListaPersonajes = [Kurono,Kato,Nishi,Kishimoto,SegundaKishimoto,MrCebollin,Cebollin,Perro,Hojo,
    Tanaka,Sadako]
//Decisiones
const decision1 = new Decision(80, ["Ponerse el Traje","No usar el Cosplay"])
const decision2 = new Decision(208,["SI","NO"])
