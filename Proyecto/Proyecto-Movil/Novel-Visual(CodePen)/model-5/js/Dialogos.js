var tiempoDeDialogo = 0;
var AnimacionActiva = false;
var DecisionActiva = false;
var IniciaCombate = false;
/* Se activa cuando hay un evento que bloqueara los botones da la señal
a la funcion de MostrarTexto() para que no deje desbloqueado los botones*/
function MostrarPersonajes(indiceActual){
    tiempoDeDialogo = 0;
    AnimacionActiva = false;
    DecisionActiva = false;
    if(Kurono.ComprobarIndice(indiceActual)){
        /*Eventos Referentes a la Expresion de los personajes independiente de las decisiones */
        if(indiceActual<12||(indiceActual>13&&indiceActual<43)||indiceActual==47||indiceActual==54||
        indiceActual==57||(indiceActual>59&&indiceActual<69)||(indiceActual>71&&indiceActual<83)){
            Kurono.Expresion = "Serio";
        }else if(indiceActual==43||indiceActual==46||indiceActual==50||indiceActual==51||indiceActual==58||
            indiceActual==69||indiceActual==71){
            Kurono.Expresion = "Nervioso";
        }else if(indiceActual==13){
            Kurono.Expresion = "Feliz";
        }
        /*Eventos Referentes a la Ropa de los personajes independiente de las decisiones */
        if(indiceActual<58){
            Kurono.Ropa = "Uniforme";
        }else if(indiceActual==58){
            Kurono.CambiarRopa("Camisa");
            AnimacionActiva = true;
        }else if(indiceActual<80){
            Kurono.Ropa = "Camisa";
        }
        /*Eventos Referentes a la toma de decisiones */
        /*En el caso de Usar el Traje */
        if(decision1.opcion==true){
            console.log("*** True ***");
            /* Expresiones */
            if(indiceActual==83||indiceActual==141||(indiceActual>118&&indiceActual<126)||indiceActual==176||
            indiceActual==185||indiceActual==186||(indiceActual>187&&indiceActual<205)){
                Kurono.Expresion = "Nervioso";
            }else if(indiceActual==85||indiceActual==87||(indiceActual>87&&indiceActual<103)||(indiceActual>105
            &&indiceActual<119)||(indiceActual>126&&indiceActual<176)||indiceActual==179||indiceActual==180||
            indiceActual==205||indiceActual==206||(indiceActual>208 && indiceActual<213)){
                Kurono.Expresion = "Serio";
            }else if(indiceActual==103){
                Kurono.Expresion = "Feliz";
            }else if(indiceActual==182||indiceActual==187){
                Kurono.Expresion = "Sorprendido";
            }else if(indiceActual==207||indiceActual==208){
                Kurono.Expresion = "";
            }else if(indiceActual==213||indiceActual==214){
                Kurono.Expresion = "Triste";
            }
            /* Ropa */
            if(indiceActual<87){
                Kurono.Ropa = "Camisa";
            }else if(indiceActual==89){
                Kurono.CambiarRopa("Traje");
                AnimacionActiva = true;
            }else if(indiceActual<207 && indiceActual>89 ||indiceActual>208 && indiceActual<343){
                Kurono.Ropa = "Traje";
            }else if(indiceActual==207||indiceActual==208){
                Kurono.Ropa = "TrajeEnojado";    
            }else if(indiceActual>343){
                Kurono.Ropa = "Camisa";
            }
            /* Animaciones */
            if(indiceActual==125){
                Kurono.TeletransportarDesaparece();
                AnimacionActiva = true;
            }else if(indiceActual==126){
                Kurono.TeletransportarAparece();
                tiempoDeDialogo = 4000;
            }
        /*En el caso de no usar el Traje */
        }else if(decision1.opcion==false){
            console.log("*** False ***");
            if(indiceActual==106){
                Kurono.TeletransportarDesaparece();
                AnimacionActiva = true;
            }else if(indiceActual==107){
                Kurono.TeletransportarAparece(); /* En este caso no se dejan desactivados los botones dado que
                el texto se muestra despues de la animacion dado por el tiempoDeDialogo*/
                tiempoDeDialogo = 4000;
            }
        }
        Kurono.MostrarNombre()
        Kurono.MostrarPersonaje()
    }else if(Kato.ComprobarIndice(indiceActual)){
        if(indiceActual==12){
            Kato.Expresion = "Nervioso";
        }else if(indiceActual==15){
            Kato.Expresion = "Nervioso";
        }else if(indiceActual==39){
            Kato.Expresion = "Serio";
        }else if(indiceActual==41){
            Kato.Expresion = "Feliz";
        }else if(indiceActual==44){
            Kato.Expresion = "Serio";
        }else if(indiceActual==45){
            Kato.Expresion = "Feliz";
        }else if(indiceActual==48){
            Kato.Expresion = "Serio";
        }else if(indiceActual==55){
            Kato.Expresion = "Serio";
        }else if(decision1.ComprobarIndice(indiceActual)){
            decision1.MostrarOpciones();
            DecisionActiva = true;
        }/* Decision de tomar el traje */
        if(decision1.opcion==true){
            if(indiceActual==84){
                Kato.Ropa = "Uniforme";
            }else if(indiceActual==91){
                Kato.CambiarRopa("Traje");
                AnimacionActiva = true; 
            }else if(indiceActual==123){
                Kato.TeletransportarDesaparece();
                AnimacionActiva = true;
            }else if(indiceActual==124){
                Kato.TeletransportarAparece(); /* En este caso no se dejan desactivados los botones dado que el
                texto se muestra despues de la animacion dado por el tiempoDeDialogo*/
                tiempoDeDialogo = 4000;
            }
        }/* Decision de NO tomar el traje */
        else if(decision1.opcion==false){
            if(indiceActual==104){
                Kato.TeletransportarDesaparece();
                AnimacionActiva = true
            }else if(indiceActual==105){
                Kato.TeletransportarAparece();/* En este caso no se dejan desactivados los botones dado que el
                texto se muestra despues de la animacion dado por el tiempoDeDialogo*/
                tiempoDeDialogo = 4000;
            }
        }
        console.log("Mostrar Nombre");
        Kato.MostrarNombre();
        console.log("Mostrar Personaje");
        Kato.MostrarPersonaje();
    }else if(Kishimoto.ComprobarIndice(indiceActual)){
        /* Eventos independientes de la ruta*/
        if(indiceActual<94){
            if(indiceActual==53){
                Kishimoto.TeletransportarAparece()
                AnimacionActiva = true;
            }else if(indiceActual==53){
                Kishimoto.Ropa = "";
                Kishimoto.Expresion = "Parpadeo1";
            }else if(indiceActual==56){
                Kishimoto.Ropa = ""
                Kishimoto.Parpadeo();
                AnimacionActiva = true;
            }else if(indiceActual==59){
                Kishimoto.Expresion = "Seria";
                Kishimoto.CambiarRopa("Uniforme");
                AnimacionActiva = true;
            }
        }else if(decision1.opcion==true){
            if(indiceActual==94){
                Kishimoto.Expresion = "Nerviosa";
            }else if(indiceActual==97){
                Kishimoto.Ropa = "Uniforme";
            }else if (indiceActual==101){
                Kishimoto.CambiarRopa("Traje");
                AnimacionActiva = true; 
            }else if(indiceActual>101){
                Kishimoto.Expresion = "Seria";
                Kishimoto.Ropa = "Traje";
            }
        }
        /*
        }else if(indiceActual==94 && decision1.opcion==false){
            Kishimoto.Expresion = "Nerviosa";
        }else if(indiceActual<101){
            Kishimoto.Ropa = "Uniforme";
        }else if (indiceActual==101 && decision1.opcion==true){
            Kishimoto.CambiarRopa("Traje");
            AnimacionActiva = true; 
        }else if(indiceActual==104 && decision1.opcion==true){
            Kishimoto.Expresion = "Seria";
        }else if(indiceActual==169 && decision1.opcion==true || indiceActual==151 && decision1.opcion==true){
            Kishimoto.Expresion = "Nerviosa";
        }else if(indiceActual==177 && decision1.opcion==true || indiceActual==159 && decision1.opcion==false){
            Kishimoto.Expresion = "Seria";
        }else if(indiceActual==191 && decision1.opcion==true || indiceActual==173 && decision1.opcion==false){
            Kishimoto.Expresion = "Nerviosa"; 
        }else if(indiceActual==252 && decision1.opcion==true || indiceActual==234 && decision1.opcion==false){
            Kishimoto.Expresion = "Seria"; 
        }else if(indiceActual==268 && decision1.opcion==true || indiceActual==250 && decision1.opcion==false){
            Kishimoto.Expresion = "Nerviosa"; 
        }else if(indiceActual==302 && decision1.opcion==true || indiceActual==283 && decision1.opcion==false){
            Kishimoto.Expresion = "Seria";
        }else if(indiceActual<352 && decision1.opcion==true){
            Kishimoto.Ropa = "Traje";
        }else if(indiceActual==352 && decision1.opcion==true || indiceActual==331 && decision1.opcion==false){
            Kishimoto.Expresion = "Feliz"; 
            Kishimoto.Ropa = "Colegial"
        }else if(indiceActual==358 && decision1.opcion==true || indiceActual==339 && decision1.opcion==false){
            Kishimoto.Expresion = "Seria"; 
        }else if(indiceActual==421 && decision1.opcion==true || indiceActual==412 && decision1.opcion==false){
            Kishimoto.Expresion = "Triste"; 
        }*/
        Kishimoto.MostrarNombre();
        Kishimoto.MostrarPersonaje();
        console.log("Mostrar Nombre");
        console.log("Mostrar Personaje");
        console.log("Ropa: " + Kishimoto.Ropa + " |Expresion: " + Kishimoto.Expresion);
    }else if(Nishi.ComprobarIndice(indiceActual)){
        Nishi.MostrarNombre();
        Nishi.MostrarPersonaje();
        if(decision2.ComprobarIndice(indiceActual)){
            decision2.MostrarOpciones();
            DecisionActiva = true;
        }
    }else if(Perro.ComprobarIndice(indiceActual)){
        Perro.MostrarNombre();
        Perro.MostrarPersonaje();
    }else if(Cebollin.ComprobarIndice(indiceActual)){
        Cebollin.MostrarNombre();
        Cebollin.MostrarPersonaje();
    }else if(MrCebollin.ComprobarIndice(indiceActual)){
        MrCebollin.MostrarNombre();
        MrCebollin.MostrarPersonaje();
    }else if(SegundaKishimoto.ComprobarIndice(indiceActual)){
        SegundaKishimoto.MostrarNombre();
        SegundaKishimoto.MostrarPersonaje();
    }else if(Hojo.ComprobarIndice(indiceActual)){
        Hojo.MostrarNombre()
        Hojo.MostrarPersonaje()
    }else if(Tanaka.ComprobarIndice(indiceActual)){
        Tanaka.MostrarNombre();
        Tanaka.MostrarPersonaje();
    }else if(Sadako.ComprobarIndice(indiceActual)){
        Sadako.MostrarNombre();
        Sadako.MostrarPersonaje();
    }else{
        console.log(indiceActual)
    }
    /*Eventos de activacion de combates */
    if(decision1.opcion){
        if(indiceActual==160||indiceActual==176||indiceActual==219||indiceActual==536||indiceActual==563||indiceActual==581){
            IniciaCombate = true;
            setTimeout(()=>{
                window.location.href = 'Combate.html';
            },2000);
        }
    }else if(!decision1.opcion){
        if(indiceActual==141||indiceActual==157||indiceActual==200||indiceActual==517||indiceActual==544||indiceActual==562){
            IniciaCombate = true;
            setTimeout(()=>{
                window.location.href = 'Combate.html';
            },2000);
            }
    }
}
function DesactivarSonidos(){
    const Sonidos = document.querySelectorAll("Soundtracks");
    Sonidos.forEach((Sound)=>{
        Sound.pause()
        Sound.currentTime = 0
    });
}
function ActivarSonido(indiceActual){
    console.log(indiceActual)
    var Sonido = undefined;
    if(indiceActual==1){
        Sonido = document.getElementById("Soundtrack1");
    }else if(indiceActual==59){
        Sonido = document.getElementById("Soundtrack2");
    }
    if(Sonido!=undefined){
        DesactivarSonidos();
        console.log("*** Se esta reproduciendo: " + Sonido + " *** ")
        Sonido.play();
    }
}
function AvanzarTexto(){
    console.log("Avanzar Texto")
    let indiceActual = parseInt(storageObtener("Indice"));// Incrementar el número
    let indiceNuevo = parseInt(indiceActual) + 1;// Actualizar el número en la interfaz y en localStorage
    console.log(indiceNuevo);
    storageAsignar("Indice", indiceNuevo);
    ActivarSonido(indiceNuevo);
    MostrarPersonajes(indiceNuevo);
    console.log("***Tiempo de dialogo: " + tiempoDeDialogo + " ***")
    setTimeout(()=>{
        MostrarTexto(Dialogos[indiceActual],"Dialogos");
    },tiempoDeDialogo)

}function RetrocederTexto(){
    console.log("Retrocede Texto")
    const indiceActual = parseInt(storageObtener("Indice"));// Incrementar el número
    const indiceNuevo = indiceActual - 1;// Actualizar el número en la interfaz y en localStorage
    if(indiceActual>1){
        console.log(indiceNuevo);
        storageAsignar("Indice", indiceNuevo);
        MostrarPersonajes(indiceNuevo);
        console.log("*** Tiempo de dialogo " + tiempoDeDialogo + " ***")
        setTimeout(()=>{
            RepetirTexto(Dialogos[indiceNuevo-1],"Dialogos");
        },tiempoDeDialogo)
    }
}
function RepetirTexto(dialogo, elemento){
    console.log("Repetir Texto")
    const Dialogo = document.getElementById(elemento);
    Dialogo.innerText = dialogo
}
function MostrarTexto(dialogo, elemento) {
    BloquearBotones();
    const indiceActual = storageObtener("Indice")
    var dialogoactual = "";
    var sgteDialogo = dialogo;
    var contador = 0;
    var intervalo = setInterval(function () {
        dialogoactual = dialogoactual + sgteDialogo[contador];
        var Dialogo = document.getElementById(elemento);
        Dialogo.innerText = dialogoactual;
        contador++;
        if (contador == sgteDialogo.length) {
            clearInterval(intervalo);
            if(DecisionActiva==false && AnimacionActiva == false && IniciaCombate== false){
                ActivarBotones();
            }
        }
    }, 25);
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
}function BloquearOpcion(opcion){
    let Opcion1 = document.getElementById('Opcion1');
    let Opcion2 = document.getElementById('Opcion2');
    if(opcion==false){
        Opcion1.onclick = null;
        Opcion2.onclick = DecisionTomada;

    }else if(opcion==true){
        Opcion1.onclick = DecisionTomada;
        Opcion2.onclick = null;
    }
}
function DecisionTomada(){
    decision1.OcultarOpciones();
    AvanzarTexto();
}
function TomarDecision(opcion){
    console.log("Tomar Decision")
    console.log(opcion, typeof(opcion))
    storageAsignar("Decision1", opcion)
    opcion = (opcion === 1)
    console.log("La opcion tomada: " + opcion)
    let indiceActual = parseInt(storageObtener('Indice'));// Incrementar el número
    if(decision1.ComprobarIndice(indiceActual)){
        decision1.ElegirDecision(opcion);
        decision1.MoverDialogos(ListaPersonajes, decision2);
        decision1.AgregarDialogos();
        decision1.AgregarIndices(Kurono,Kato,Kishimoto,Nishi);
        decision1.OcultarOpciones();
        BloquearOpcion(opcion);
        AvanzarTexto();
    }else if(decision2.ComprobarIndice(indiceActual)){
        decision2.OcultarOpciones();
        AvanzarTexto();    
    }
}
function CargarDecisiones(){
    var opcion = (storageObtener('Decision1'));
    if(opcion!="NaN"){
        console.log("Se han cargado las decisiones");
        var opcion = (opcion==="1");
        decision1.ElegirDecision(opcion)
        console.log("*** Decision ***");
        console.log("La opciona cargada es:" + decision1.opcion)
        decision1.MoverDialogos(ListaPersonajes,decision2);
        decision1.AgregarDialogos();
        decision1.AgregarIndices(Kurono,Kato,Kishimoto,Nishi);
    }
}
window.onload = function() {
    console.log("Ha cargado la pagina")
    let indiceActual = parseInt(storageObtener('Indice'));
    if (indiceActual==80){
        storageAsignar('Decision1', NaN);//Restablecer la opcion
    }
    CargarDecisiones();
    ActivarBotones();
    MostrarPersonajes(indiceActual);
    MostrarTexto(Dialogos[indiceActual-1],"Dialogos")
    console.log(Dialogos.length)
    console.log("***Se ha activado el audio***")
    ActivarSonido(indiceActual);

}
window.close = function() {
    storageLimpiar();
}