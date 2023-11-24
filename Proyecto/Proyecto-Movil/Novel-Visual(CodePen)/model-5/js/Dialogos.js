function MostrarPersonajes(){
    console.log("Mostrar Personajes")
    var indiceActual = parseInt(storageObtener('Indice'));
    if(Kurono.ComprobarIndice(indiceActual)){
        if(indiceActual<58 && Kurono.Ropa!="Uniforme"){
            Kurono.Ropa = "Uniforme";
        }else if(indiceActual==58){
            Kurono.CambiarRopa("Camisa");
        }else if(indiceActual<89){
            Kurono.Ropa = "Camisa";
        }else if(indiceActual==89 && decision1){
            Kurono.CambiarRopa("Traje")
        }else if(indiceActual>89 && Kurono.Ropa!="Traje"){
            Kurono.Ropa = "Traje";
        }else if(indiceActual==125){
            Kurono.Teletransportar()
        }
        Kurono.MostrarNombre()
        Kurono.MostrarPersonaje()
    }else if(Kato.ComprobarIndice(indiceActual)){
        console.log(Kato.Nombre)
        Kato.MostrarNombre()
        Kato.MostrarPersonaje()
        if(decision1.ComprobarIndice(indiceActual)){
            decision1.MostrarOpciones()
        }else if(indiceActual==123){
            Kato.Teletransportar();
        }
    }else if(Kishimoto.ComprobarIndice(indiceActual)){
        if(indiceActual<94){
            Kishimoto.Expresion = "Seria";
        }else if(indiceActual==94 && !decision1.opcion){
            Kishimoto.Expresion = "Nerviosa";
        }else if(indiceActual<101){
                Kishimoto.Ropa = "Uniforme"
        }else if (indiceActual==101 && decision1.opcion){
            Kishimoto.CambiarRopa("Traje");
        }else if(indiceActual==104 && decision1.opcion){
            Kishimoto.Expresion = "Seria";
        }else if(indiceActual==170 && decision1.opcion || indiceActual==151 && !decision1.opcion){
            Kishimoto.Expresion = "Nerviosa";
        }else if(indiceActual==178 && decision1.opcion || indiceActual==159 && !decision1.opcion){
            Kishimoto.Expresion = "Seria";
        }else if(indiceActual==192 && decision1.opcion || indiceActual==173 && !decision1.opcion){
            Kishimoto.Expresion = "Nerviosa"; 
        }else if(indiceActual==253 && decision1.opcion || indiceActual==234 && !decision1.opcion){
            Kishimoto.Expresion = "Seria"; 
        }else if(indiceActual==269 && decision1.opcion || indiceActual==250 && !decision1.opcion){
            Kishimoto.Expresion = "Nerviosa"; 
        }else if(indiceActual==302 && decision1.opcion || indiceActual==283 && !decision1.opcion){
            Kishimoto.Expresion = "Seria";
        }else if(indiceActual<350 && decision1.opcion){
            Kishimoto.Ropa = "Traje";
        }else if(indiceActual==350 && decision1.opcion || indiceActual==331 && !decision1.opcion){
            Kishimoto.Expresion = "Feliz"; 
            Kishimoto.Ropa = "Colegial"
        }else if(indiceActual==358 && decision1.opcion || indiceActual==339 && !decision1.opcion){
            Kishimoto.Expresion = "Seria"; 
        }else if(indiceActual==421 && decision1.opcion || indiceActual==412 && !decision1.opcion){
            Kishimoto.Expresion = "Triste"; 
        }
        Kishimoto.MostrarNombre()
        Kishimoto.MostrarPersonaje()
    }else if(Nishi.ComprobarIndice(indiceActual)){
        Nishi.MostrarNombre()
        Nishi.MostrarPersonaje()
        if(decision2.ComprobarIndice(indiceActual)){
            decision2.MostrarOpciones()
        }
    }else if(Perro.ComprobarIndice(indiceActual)){
        Perro.MostrarNombre()
        Perro.MostrarPersonaje()
    }else if(Cebollin.ComprobarIndice(indiceActual)){
        Cebollin.MostrarNombre()
        Cebollin.MostrarPersonaje()
    }else if(MrCebollin.ComprobarIndice(indiceActual)){
        MrCebollin.MostrarNombre()
        MrCebollin.MostrarPersonaje()
    }else if(SegundaKishimoto.ComprobarIndice(indiceActual)){
        SegundaKishimoto.MostrarNombre()
        SegundaKishimoto.MostrarPersonaje()
    }else if(Hojo.ComprobarIndice(indiceActual)){
        Hojo.MostrarNombre()
        Hojo.MostrarPersonaje()
    }else if(Tanaka.ComprobarIndice(indiceActual)){
        Tanaka.MostrarNombre()
        Tanaka.MostrarPersonaje()
    }else if(Sadako.ComprobarIndice(indiceActual)){
        Sadako.MostrarNombre()
        Sadako.MostrarPersonaje()
    }else{
        console.log(indiceActual)
    }
    if(decision1.opcion){
        if(indiceActual==160||indiceActual==176||indiceActual==219||indiceActual==536||indiceActual==563||indiceActual==581){
            BloquearBotones()
            setTimeout(()=>{
                window.location.href = 'Combate.html'
            },2000);
        }
    }else if(!decision1.opcion){
        if(indiceActual==141||indiceActual==157||indiceActual==200||indiceActual==517||indiceActual==544||indiceActual==562){
            BloquearBotones()
            setTimeout(()=>{
                window.location.href = 'Combate.html'
            },2000);
        }
    }
}
function AvanzarTexto(){
    console.log("Avanzar Texto")
    let indiceActual = parseInt(storageObtener("Indice"));// Incrementar el número
    let indiceNuevo = parseInt(indiceActual) + 1;// Actualizar el número en la interfaz y en localStorage
    console.log(indiceNuevo);
    storageAsignar("Indice", indiceNuevo);
    MostrarPersonajes();
    MostrarTexto(Dialogos[indiceNuevo-1],"Dialogos");
}function RetrocederTexto(){
    console.log("Retrocede Texto")
    let indiceActual = parseInt(storageObtener("Indice"));// Incrementar el número
    let indiceNuevo = parseInt(indiceActual) - 1;// Actualizar el número en la interfaz y en localStorage
    console.log(indiceNuevo);
    storageAsignar("Indice", indiceNuevo);
    MostrarPersonajes();
    MostrarTexto(Dialogos[indiceNuevo-1],"Dialogos");
}
function MostrarTexto(dialogo, elemento){
    console.log("Mostrar Texto")
    const Dialogo = document.getElementById(elemento);
    Dialogo.innerText = dialogo
}
function BloquearBotones(){
    const Boton1 = document.getElementById('Boton1');
    const Boton2 = document.getElementById('Boton2');
    Boton1.onclick = null;
    Boton2.onclick = null;
}
function ActivarBotones(){
    const Boton1 = document.getElementById('Boton1');
    const Boton2 = document.getElementById('Boton2');
    Boton1.onclick = AvanzarTexto;
    Boton2.onclick = RetrocederTexto;
}
function TomarDecision(opcion){
    console.log("Tomar Decision")
    let indiceActual = parseInt(storageObtener('Indice'));// Incrementar el número
    if(decision1.ComprobarIndice(indiceActual)){
        storageAsignar("Decision1", opcion)
        decision1.ElegirDecision(opcion)
        decision1.MoverDialogos(ListaPersonajes);
        decision1.AgregarDialogos();
        decision1.AgregarIndices(Kurono,Kato,Kishimoto,Nishi);
        decision1.OcultarOpciones();
        AvanzarTexto();
    }else if(decision2.ComprobarIndice(indiceActual)){
        decision2.OcultarOpciones();
        AvanzarTexto();    
    }
}
function CargarDecisiones(){
    const opcion = storageObtener('Decision1');
    if(!opcion || opcion){
        console.log("Se han cargado las decisiones");
        console.log(opcion)
        decision1.ElegirDecision(opcion)
        decision1.MoverDialogos(ListaPersonajes);
        decision1.AgregarDialogos();
        decision1.AgregarIndices(Kurono,Kato,Kishimoto,Nishi);
    }
}
window.onload = function() {
    console.log("Ha cargado la pagina")
    CargarDecisiones();
    ActivarBotones();
    MostrarPersonajes();
    let indiceActual = parseInt(storageObtener('Indice'));// Incrementar el número
    MostrarTexto(Dialogos[indiceActual-1],"Dialogos")
}
window.close = function() {
    storageLimpiar();
}