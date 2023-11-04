var indiceDialogos = 0;

function SgteDialogo(){
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
                Personaje.style.display = 'none'
            })
            Kato.style.display = "flex"
            nombre.innerText = 'Kato';
 

        }else if(indiceDialogos==10||indiceDialogos==12||indiceDialogos==24||indiceDialogos==26||indiceDialogos==29||indiceDialogos==31||indiceDialogos==33||indiceDialogos==36){
            Personajes.forEach((Personaje)=>{
                Personaje.style.display = 'none'
            })
            Hojo.style.display = "flex"
            nombre.innerText = 'Hojo';
        }else if(indiceDialogos==19||indiceDialogos==20||indiceDialogos==21||indiceDialogos==22){
            Personajes.forEach((Personaje)=>{
                Personaje.style.display = 'none'
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
                Alien.style.display = 'flex';
            }else if(indiceDialogos==22){
                textoEsfera3.style.display = 'none';
                textoEsfera4.style.display = 'flex';
                Alien.style.display = 'none';
            }
            MostrarTexto(indiceDialogos,DialogoEsfera[indiceDialogos-19],`TextoEsfera${indiceDialogos-18}`)
            
        }else if(indiceDialogos==45||indiceDialogos==47||indiceDialogos==49){
            nombre.innerText='Tanaka'
            Personajes.forEach((Personaje)=>{
                Personaje.style.display = 'none'
            })
            Tanaka.style.display = "flex"
            if(indiceDialogos==49){
                Personajes.forEach((Personaje)=>{
                    Personaje.style.display = 'none'
                })
                Tanaka_Furioso.style.display = "flex"
            }
        }
        else{
            if (indiceDialogos==4){
                audio.pause();
                fondo.style.display = 'flex';
            }else if(indiceDialogos==37){
                fondo.style.animation = 'desaparecer 1s ease forwards';
            }
            Personajes.forEach((Personaje)=>{
                Personaje.style.display = 'none';
            })
            Kei.style.display = "flex";
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
                Personaje.style.display = 'none';
            })
            Nishi.style.display = 'flex';
            if(indiceDialogos==4){
                fondo.style.display = 'none'
            }
        }else if(indiceDialogos==6||indiceDialogos==13||indiceDialogos==14||indiceDialogos==23||indiceDialogos==27||indiceDialogos==28||indiceDialogos==30||indiceDialogos==32){
            Personajes.forEach((Personaje)=>{
                Personaje.style.display = 'none'
            })
            Kato.style.display = "flex"
            nombre.innerText = 'Kato';

        }else if(indiceDialogos==10||indiceDialogos==12||indiceDialogos==24||indiceDialogos==26||indiceDialogos==29||indiceDialogos==31||indiceDialogos==33||indiceDialogos==36){
            Personajes.forEach((Personaje)=>{
                Personaje.style.display = 'none'
            })
            Hojo.style.display = "flex"
            nombre.innerText = 'Hojo';
            if(indiceDialogos==36){
                fondo.style.display = 'flex'
            }
        }else if(indiceDialogos==19||indiceDialogos==20||indiceDialogos==21||indiceDialogos==22){
            Personajes.forEach((Personaje)=>{
                Personaje.style.display = 'none'
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
                Alien.style.display = 'none';
                textoEsfera2.style.display = 'flex';
            }
            else if(indiceDialogos==21){
                textoEsfera4.style.display = 'none';
                textoEsfera3.style.display = 'flex';
                Alien.style.display = 'flex';
            }
            else{
                dialogo.innerText = ''
            }
        }else if(indiceDialogos==45||indiceDialogos==47||indiceDialogos==49){
            nombre.innerText='Tanaka'
            Personajes.forEach((Personaje)=>{
                Personaje.style.display = 'none'
            })
            Tanaka.style.display = "flex"
            if(indiceDialogos==49){
                Personajes.forEach((Personaje)=>{
                    Personaje.style.display = 'none'
                })
                Tanaka_Furioso.style.display = "flex"
            }
        }
        else{
            if(indiceDialogos==18){
                esfera.style.display = "none";
                recuadro1.style.display = "flex"; 
                recuadro2.style.display = "flex";
            Personajes.forEach((Personaje)=>{
                Personaje.style.display = 'none';
            })
            Kei.style.display = "flex";
            nombre.innerText = 'Kei';
            
            }
        }
    }else if(indiceDialogos==listaDialogos.length){
        window.location.href = "./Combate.html";
    }
    if(indiceDialogos!==19&&indiceDialogos!==20&&indiceDialogos!==21&&indiceDialogos!==22){
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