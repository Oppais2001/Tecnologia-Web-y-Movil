var indiceDialogos = 3;
//Funcion de inicio
document.addEventListener('DOMContentLoaded', function() {
    SgteDialogo();
});
//Funciones de Botones
function SgteDialogo(){
    const boton1 = document.getElementById("Boton1");
    const boton2 = document.getElementById("Boton2");
    const fondo = document.getElementById('Background');
    const Nishi = document.getElementById('Nishi')
    const Kei = document.getElementById('Kei')
    const Kato = document.getElementById('Kato')
    const Hojo = document.getElementById('Hojo')
    const Tanaka = document.getElementById('Tanaka')
    const Tanaka_Furioso = document.getElementById('Tanaka-Furioso')
    const Personajes = [Nishi, Kei, Kato, Hojo, Tanaka, Tanaka_Furioso];
    const nombre = document.getElementById('Nombres');
    const dialogo = document.getElementById('Dialogos');
    const textoEsfera1 = document.getElementById('TextoEsfera1');
    const textoEsfera2 = document.getElementById('TextoEsfera2');
    const textoEsfera3 = document.getElementById('TextoEsfera3');
    const textoEsfera4 = document.getElementById('TextoEsfera4');
    const audio = document.getElementById('AudiosDialogos');
    const recuadro1 = document.getElementById('Recuadro-de-Nombres');
    const recuadro2 = document.getElementById('Recuadro-de-Dialogos');
    const recuadroPlayer = document.getElementById('Recuadro-Player');
    const esfera = document.getElementById('Esfera');
    const Alien = document.getElementById('Alien');
    const soundtrack1 = document.getElementById('Soundtrack1');
    const soundtrack2 = document.getElementById('Soundtrack2');
    if(indiceDialogos<listaDialogos.length+1){
        indiceDialogos++;
        if(indiceDialogos<4){
            if (indiceDialogos>1){
                audio.pause();
            }
            audio.src = './Assets/Sounds/dialogo'+indiceDialogos+'_Español.mp3';
            audio.play();
        }else if(indiceDialogos==6||indiceDialogos==13||indiceDialogos==14||indiceDialogos==23||indiceDialogos==27||indiceDialogos==28||indiceDialogos==30||indiceDialogos==32){
            if(indiceDialogos==23){
                recuadro1.style.display = "flex"; 
                recuadro2.style.display = "flex";
                esfera.style.display = "none";
                soundtrack2.pause();
                soundtrack1.play();
                soundtrack2.addEventListener('ended', function(){
                    this.currentTime = 0;
                    this.play();
                });
            }
            Personajes.forEach((Personaje)=>{
                Personaje.style.opacity = 0
            })
            Kato.style.opacity = 1
            nombre.innerText = 'Kato';
 

        }else if(indiceDialogos==10||indiceDialogos==12||indiceDialogos==24||indiceDialogos==26||indiceDialogos==29||indiceDialogos==31||indiceDialogos==33||indiceDialogos==36){
            Personajes.forEach((Personaje)=>{
                Personaje.style.opacity = 0
            })
            Hojo.style.opacity = 1
            nombre.innerText = 'Hojo';
        }else if(indiceDialogos==19||indiceDialogos==20||indiceDialogos==21||indiceDialogos==22){
            Personajes.forEach((Personaje)=>{
                Personaje.style.opacity = 0
            })
            nombre.innerText = 'Esfera';
            recuadro1.style.display = "none"; 
            recuadro2.style.display = "none";
            esfera.style.display = "flex";
            dialogo.innerText = '';
            if(indiceDialogos==19){
                soundtrack1.pause();
                soundtrack2.volume = 0.25;
                soundtrack2.play();
                textoEsfera1.style.display = 'flex';
            }
            else if(indiceDialogos==20){
                textoEsfera1.style.display = 'none';
                textoEsfera2.style.display = 'flex';
            }
            else if(indiceDialogos==21){
                textoEsfera2.style.display = 'none';
                textoEsfera3.style.display = 'flex';
                Alien.style.opacity = 1
            }else if(indiceDialogos==22){
                textoEsfera3.style.display = 'none';
                textoEsfera4.style.display = 'flex';
                Alien.style.opacity = 0
            }
            MostrarTexto(indiceDialogos,DialogoEsfera[indiceDialogos-19],`TextoEsfera${indiceDialogos-18}`)
            
        }else if(indiceDialogos==45||indiceDialogos==47||indiceDialogos==49){
            nombre.innerText='Tanaka'
            Personajes.forEach((Personaje)=>{
                Personaje.style.opacity = 0
            })
            if(indiceDialogos==45||indiceDialogos==47){
                Tanaka.style.opacity = 1
            }
            else{
                Tanaka_Furioso.opacity = 1
            }
        }
        else{
            recuadroPlayer.style.display = 'flex';
            if (indiceDialogos==4){
                audio.pause();
                fondo.classList.add('AnimacionAparecer');
            }else if(indiceDialogos==35){
                console.log("Dialogo numero 35, se han bloqueado los botones")
                boton1.removeAttribute("onclick");//bloqueo de los botones
                boton2.removeAttribute("onclick");
                recuadroPlayer.classList.add('AnimacionTransportar1')
                Kei.classList.add('AnimacionTransportar2');
                setTimeout(()=>{
                    boton1.setAttribute("onclick", "SgteDialogo()");// Reactiva los botones
                    boton2.setAttribute("onclick", "AntDialogo()");
                    Kei.style.opacity = 0
                    recuadroPlayer.classList.remove('AnimacionTransportar1')
                    Kei.classList.remove('AnimacionTransportar2');
                },6000);
            }else if(indiceDialogos==37){
                fondo.classList.add('AnimacionDesaparecer');
            }
            Personajes.forEach((Personaje)=>{
                Personaje.style.opacity = 0
            })
            recuadroPlayer.style.opacity = 1
            Kei.style.opacity = 1
            nombre.innerText = 'Kei';    
        }
    }
    if(indiceDialogos==listaDialogos.length+1){
        window.location.href = "./Combate.html";
    }
    if(indiceDialogos!==19&&indiceDialogos!==20&&indiceDialogos!==21&&indiceDialogos!==22){
        MostrarTexto(indiceDialogos, listaDialogos[indiceDialogos-1],'Dialogos');
    }
}
function AntDialogo(){
    const fondo = document.getElementById('Background');
    const Nishi = document.getElementById('Nishi')
    const Kei = document.getElementById('Kei')
    const Kato = document.getElementById('Kato')
    const Hojo = document.getElementById('Hojo')
    const Tanaka = document.getElementById('Tanaka')
    const Tanaka_Furioso = document.getElementById('Tanaka-Furioso')
    const Personajes = [Nishi, Kei, Kato, Hojo, Tanaka, Tanaka_Furioso];
    const nombre = document.getElementById('Nombres');
    const dialogo = document.getElementById('Dialogos');
    const textoEsfera1 = document.getElementById('TextoEsfera1');
    const textoEsfera2 = document.getElementById('TextoEsfera2');
    const textoEsfera3 = document.getElementById('TextoEsfera3');
    const textoEsfera4 = document.getElementById('TextoEsfera4');
    const audio = document.getElementById('AudiosDialogos');
    const recuadro1 = document.getElementById('Recuadro-de-Nombres');
    const recuadro2 = document.getElementById('Recuadro-de-Dialogos');
    const esfera = document.getElementById('Esfera');
    const Alien = document.getElementById('Alien');
    
    if(indiceDialogos<listaDialogos.length){
        indiceDialogos--;
        if(indiceDialogos == 0){
            window.location.href = 'index.html'
        }
        else if(indiceDialogos<4){
            Personajes.forEach((Personaje)=>{
                Personaje.style.opacity = 0;
            })
            Nishi.style.opacity = 1;
            nombre.innerText = 'Nishi';
            if(indiceDialogos==4){
                fondo.style.opacity = 0;
            }
        }else if(indiceDialogos==6||indiceDialogos==13||indiceDialogos==14||indiceDialogos==23||indiceDialogos==27||indiceDialogos==28||indiceDialogos==30||indiceDialogos==32){
            Personajes.forEach((Personaje)=>{
                Personaje.style.opacity = 0;
            })
            Kato.style.opacity = 1;
            nombre.innerText = 'Kato';

        }else if(indiceDialogos==10||indiceDialogos==12||indiceDialogos==24||indiceDialogos==26||indiceDialogos==29||indiceDialogos==31||indiceDialogos==33||indiceDialogos==36){
            Personajes.forEach((Personaje)=>{
                Personaje.style.opacity = 0;
            })
            Hojo.style.opacity = 1;
            nombre.innerText = 'Hojo';
            if(indiceDialogos==36){
                fondo.classList.add('AnimacionAparecer')
            }
        }else if(indiceDialogos==19||indiceDialogos==20||indiceDialogos==21||indiceDialogos==22){
            Personajes.forEach((Personaje)=>{
                Personaje.style.opacity = 0;
            })
            recuadro1.style.display = "none"; 
            recuadro2.style.display = "none";
            esfera.style.display = "flex";
            if(indiceDialogos==19){
                textoEsfera2.style.display = 'none';
                textoEsfera1.style.display = 'flex';
            }
            else if(indiceDialogos==20){
                textoEsfera3.style.display = 'none';
                Alien.style.opacity = 0;
                textoEsfera2.style.display = 'flex';
            }
            else if(indiceDialogos==21){
                textoEsfera4.style.display = 'none';
                textoEsfera3.style.display = 'flex';
                Alien.style.opacity = 1;
            }
            else{
                dialogo.innerText = ''
            }
        }else if(indiceDialogos==45||indiceDialogos==47||indiceDialogos==49){
            nombre.innerText='Tanaka'
            Personajes.forEach((Personaje)=>{
                Personaje.style.opacity = 0;
            })
            if(indiceDialogos==45||indiceDialogos==47){
                Tanaka.style.opacity = 1
            }
            else{
                Tanaka_Furioso.style.opacity = 1
            }
        }
        else{
            if(indiceDialogos==18){
                esfera.style.display = "none";
                recuadro1.style.display = "flex"; 
                recuadro2.style.display = "flex";
            }
            Personajes.forEach((Personaje)=>{
                Personaje.style.opacity = 0;
            })
            Kei.style.opacity = 1;
            nombre.innerText = 'Kei';
        }
    }else if(indiceDialogos==listaDialogos.length){
        window.location.href = "./Combate.html";
    }
    if(indiceDialogos!=0&&indiceDialogos!==19&&indiceDialogos!==20&&indiceDialogos!==21&&indiceDialogos!==22){
        RepetirTexto(indiceDialogos, listaDialogos[indiceDialogos-1],'Dialogos');
    }else{
        RepetirTexto(indiceDialogos,DialogoEsfera[indiceDialogos-19],`TextoEsfera${indiceDialogos-18}`)
    }
}

function MostrarTexto(indice, dialogo, elemento) {
    console.log(`Valores indice: ${indice} , Dialogo: ${dialogo}, ${elemento}`)
    const boton1 = document.getElementById("Boton1");//llamada de los botones
    const boton2 = document.getElementById("Boton2");
    boton1.removeAttribute("onclick");//bloqueo de los botones
    boton2.removeAttribute("onclick");
    var dialogoactual = "";
    var sgteDialogo = dialogo;
    var contador = 0;
    var intervalo = setInterval(function () {
        dialogoactual = dialogoactual + sgteDialogo[contador];
        var Dialogo = document.getElementById(elemento);
        Dialogo.innerText = dialogoactual;
        contador++;
        if (contador == sgteDialogo.length) {
            clearInterval(intervalo); // Detiene la ejecución
            boton1.setAttribute("onclick", "SgteDialogo()");// Reactiva los botones
            boton2.setAttribute("onclick", "AntDialogo()");
            }
        }
    , 25);
}
function RepetirTexto(indice, dialogo, elemento){
    console.log('Se esta repitiendo el texto')
    console.log(`Valores indice: ${indice} , Dialogo: ${dialogo}, ${elemento}`)
    const Dialogo = document.getElementById(elemento);
    Dialogo.innerText = dialogo
}
window.onload = function() {
    const miAudio = document.getElementById('Soundtrack1');
    miAudio.volume = 0.05;
    miAudio.play();
    miAudio.addEventListener('ended', function(){
        this.currentTime = 0;
        this.play();
    });
}