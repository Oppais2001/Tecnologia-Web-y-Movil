var indiceDialogos = 18;
function SgteDialogo(){
    let personaje = document.getElementById('Personaje');
    let nombre = document.getElementById('Nombres');
    let textoEsfera = document.getElementById('TextoEsfera');
    let audio = document.getElementById('AudiosDialogos');
    let recuadro1 = document.getElementById('Recuadro-de-Nombres');
    let recuadro2 = document.getElementById('Recuadro-de-Dialogos');
    let esfera = document.getElementById('Esfera');
    let Alien = document.getElementById('Alien');

    if(indiceDialogos<listaDialogos.length){
        indiceDialogos++;
        if(indiceDialogos<4){
            if (indiceDialogos>1){
                audio.pause();
            }
            audio.src = './Assets/Sounds/dialogo'+indiceDialogos+'_Español.mp3';
            audio.play();
        }else if(indiceDialogos==6||indiceDialogos==13||indiceDialogos==14||indiceDialogos==23||indiceDialogos==27||indiceDialogos==28||indiceDialogos==30||indiceDialogos==32){
            if(indiceDialogos==23){
                personaje.style.display = "flex";
                recuadro1.style.display = "flex"; 
                recuadro2.style.display = "flex";
                esfera.style.display = "none";
            }
            personaje.style.width = '28%'
            personaje.style.left = '35%'
            personaje.src = 'https://i.imgur.com/Zo2A9Uf.png'
            nombre.innerText = 'Kato';
        }else if(indiceDialogos==10||indiceDialogos==12||indiceDialogos==24||indiceDialogos==26||indiceDialogos==29||indiceDialogos==31||indiceDialogos==33||indiceDialogos==36){
            personaje.style.left = '38%'
            personaje.style.width = '20%'
            personaje.src = 'https://i.imgur.com/2WAy5eZ.png'
            nombre.innerText = 'Hojo';
        }else if(indiceDialogos==19||indiceDialogos==20||indiceDialogos==21||indiceDialogos==22){
            nombre.innerText = 'Esfera';
            personaje.style.display = "none";
            recuadro1.style.display = "none"; 
            recuadro2.style.display = "none";
            esfera.style.display = "flex";
            if(indiceDialogos==20){
                textoEsfera.style.top = '38%';
            }else if(indiceDialogos==21){
                textoEsfera.style.top = "15%";
                Alien.style.display = 'flex';
            }else if(indiceDialogos==22){
                Alien.style.display = 'none';
                textoEsfera.style.textAlign = "start";
                textoEsfera.style.top = "15%"; 
                textoEsfera.style.left = "18%";
            }
            MostrarTexto(indiceDialogos,DialogoEsfera[indiceDialogos-19],'TextoEsfera')
    
            
        }else if(indiceDialogos==45||indiceDialogos==47||indiceDialogos==49){

            personaje.src = 'https://i.imgur.com/xXSvLxj.png'
            nombre.innerText='Tanaka'
            if(indiceDialogos==46){
                personaje.src = 'https://i.imgur.com/VfKmYEf.png'
            }
        }
        else{
            if (indiceDialogos==4){
                audio.pause();
            }
            personaje.style.width = '20%';
            personaje.style.left = '40%';
            personaje.src = 'https://i.imgur.com/uT4f2fN.png'
            nombre.innerText = 'Kei';
            
        }
        MostrarTexto(indiceDialogos, listaDialogos[indiceDialogos-1],'dialogo');
    }else if(indiceDialogos==listaDialogos.length){
        window.location.href = "./Combate.html";
    }
}
function AntDialogo(){
    let personaje = document.getElementById('Personaje');
    let nombre = document.getElementById('Nombres');
    let textoEsfera = document.getElementById('TextoEsfera');
    let recuadro1 = document.getElementById('Recuadro-de-Nombres');
    let recuadro2 = document.getElementById('Recuadro-de-Dialogos');
    let esfera = document.getElementById('Esfera');
    let Alien = document.getElementById('Alien');

    if(indiceDialogos>1){
        indiceDialogos--;
        if(indiceDialogos<4){
            personaje.src = 'https://i.imgur.com/qbL8Uo5.png'
            nombre.innerText='Nishi'
            personaje.style.width = '20%';
        }else if(indiceDialogos==6||indiceDialogos==13||indiceDialogos==14||indiceDialogos==23||indiceDialogos==27||indiceDialogos==28||indiceDialogos==30||indiceDialogos==32){
            personaje.src = 'https://i.imgur.com/Mq1xuiz.png'
            nombre.innerText = 'Kato';
            personaje.style.width = '35%';
        }else if(indiceDialogos==10||indiceDialogos==12||indiceDialogos==24||indiceDialogos==26||indiceDialogos==29||indiceDialogos==31||indiceDialogos==33||indiceDialogos==36){
            personaje.src = 'https://i.imgur.com/uiArcp2.png'
            nombre.innerText = 'Hojo';
            personaje.style.width = '35%';
        }else if(indiceDialogos==19||indiceDialogos==20||indiceDialogos==21||indiceDialogos==22){
            nombre.innerText = 'Esfera';
            personaje.style.display = "none";
            recuadro1.style.display = "none"; 
            recuadro2.style.display = "none";
            esfera.style.display = "flex";
            if(indiceDialogos==20){
                textoEsfera.style.top = '38%';
            }else if(indiceDialogos==21){
                textoEsfera.style.top = "15%";
                textoEsfera.style.left = auto;
                Alien.style.display = 'flex';
            }else if(indiceDialogos==22){
                Alien.style.display = 'none';
                textoEsfera.style.top = "15%"; 
                textoEsfera.style.left = "0%";
            }
            RepetirTexto(indiceDialogos,DialogoEsfera[indiceDialogos-19],'TextoEsfera')
        }else if(indiceDialogos==45||indiceDialogos==47||indiceDialogos==49){
            personaje.src = 'https://i.imgur.com/xXSvLxj.png'
            nombre.innerText='Tanaka'
            personaje.style.width = '20%';
            if(indiceDialogos==46){
                personaje.src = 'https://i.imgur.com/VfKmYEf.png'
            }
        }
        else{
            textoEsfera.innerText = '';
            personaje.src = 'https://i.imgur.com/uT4f2fN.png'
            nombre.innerText = 'Kei';
            personaje.style.width = '20%';
        }
        RepetirTexto(indiceDialogos,listaDialogos[indiceDialogos-1],'dialogo');

    }else{
        window.location.href = "./Inicio.html";
    }
}
function MostrarTexto(indice, dialogo, elemento) {
    var boton1 = document.getElementById("Boton1");
    var boton2 = document.getElementById("Boton2");
    boton1.disabled = true;
    boton2.disabled = true;
    var dialogoactual = "";
    var sgteDialogo = dialogo;
    var contador = 0;
    console.log(`Valores indice: ${indice} , Dialogo: ${dialogo}`)
    var intervalo = setInterval(function () {
        console.log("Este mensaje se mostrará cada 25 milisegundos (0.025 segundo).");
        dialogoactual = dialogoactual + sgteDialogo[contador];
        var Dialogo = document.getElementById(elemento);
        Dialogo.innerText = dialogoactual;
        contador++;
        if (contador == sgteDialogo.length) {
            clearInterval(intervalo); // Detiene la ejecución
            boton1.disabled = false;
            boton2.disabled = false;
            }
        }
    , 25);
}
function RepetirTexto(indice, dialogo, elemento){
    console.log(`Valores indice: ${indice} , Dialogo: ${dialogo}`)
    var Dialogo = document.getElementById(elemento);
    Dialogo.innerText = dialogo
}
  



  
  
  
  