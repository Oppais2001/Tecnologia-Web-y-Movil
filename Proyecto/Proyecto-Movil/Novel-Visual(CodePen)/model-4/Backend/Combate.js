
//Funcion de inicio
document.addEventListener('DOMContentLoaded', function() {
    var p = document.getElementById("puntos");
    p.innerHTML = Player1.NV + "</br>" + Player1.PV + "</br>" + Player1.PA + "</br>" + Player1.E + "</br>" + Player1.P;
    let Texto = "¡Acabas de ver a un Tanaka!\n¿Que deseas hacer?";
    MostrarTexto(Texto);
});
//Funciones para la narraciones mediante los botones
function Ataque(){
    const comandos = document.getElementById('SquareCommand');
    const Ataques = document.getElementById('SquareAttack');
    comandos.style.display = 'none';
    Ataques.style.display = 'inline';
}
function NarrarAtaque(){
    const comandos = document.getElementById('SquareCommand');
    const Ataques = document.getElementById('SquareAttack');
    let MagnitudATQ = 1;
    let GastoPA= 5;
    Player1.PerderPA(GastoPA);
    Enemy.PerderPV(MagnitudATQ);
    var Texto = "¡Has decidido Atacar!\n Los puntos de salud del\n Tanaka disminuyen en "+ MagnitudATQ +".";
    MostrarTexto(Texto);
    MostrarAtaque(MagnitudATQ, "Ataque");
    comandos.style.display = 'inline';
    Ataques.style.display = 'none';
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
function Items(){
    const comandos = document.getElementById('SquareCommand');
    const Items = document.getElementById('SquareItems');
    comandos.style.display = 'none';
    Items.style.display = 'inline';
}
function Huir(){
    var Texto ="Has decidido Huir";
    MostrarTexto(Texto);
    var GastoPA= 5;
    Player1.PerderPA(GastoPA);
    ActualizarEstadoPersonaje();
}
function RecibirAtaque(){
    var Recuadros = document.querySelectorAll('.Square');
    Recuadros.forEach(function(recuadro) {
        recuadro.classList.add("animacion1");
    });
   setTimeout(function(){
        Recuadros.forEach(function(recuadro) {
            recuadro.classList.remove("animacion1");
        });
    }, 2000);

    var MagnitudATQ = 1;
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
    var botones = [boton1, boton2, boton3, boton4];
    botones.forEach((boton)=>{
        boton.removeAttribute("onclick");
    })
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
            boton1.setAttribute("onclick", "Ataque()");// Reactiva los botones
            boton2.setAttribute("onclick", "Defender()");
            boton3.setAttribute("onclick", "Items()");
            boton4.setAttribute("onclick", "Huir()");
            }
        }
    , 25);

}
function MostrarAtaque(Ataque, elemento){
    const boton1 = document.getElementById("boton1");
    const boton2 = document.getElementById("boton2");
    const boton3 = document.getElementById("boton3");
    const boton4 = document.getElementById("boton4");
    const botones = [boton1, boton2, boton3, boton4];
    const Disparo = document.getElementById("circulo");
    const squareEnemy = document.getElementById("SquareEnemy");
    const ATQ = document.getElementById(elemento);
    var contador = 0
    console.log("Se Activa la Animación")

    botones.forEach((boton)=>{
        boton.removeAttribute("onclick");
    })
    console.log(`El daño ha sido de ${Ataque}`);
    //Mostrar Animacion de Ataque
    Intervalo1 = setInterval(() => {
        if(contador==0){
            circulo.classList.add('animacionDisparo');
        }
        else if(contador==2){
            ATQ.innerText= Ataque + "PTS";
            squareEnemy.classList.add("animacion2");
            ATQ.classList.add("animacion3");
        }
        else if(contador == 4){
            console.log("Se Detiene la Animación");
            ATQ.innerText=" ";
            squareEnemy.classList.remove("animacion2");
            ATQ.classList.remove("animacion3");
            squareEnemy.style.backgroundColor = 'black';
            boton1.setAttribute("onclick", "Ataque()");
            boton2.setAttribute("onclick", "Defender()");
            boton3.setAttribute("onclick", "Items()");
            boton4.setAttribute("onclick", "Huir()");
            clearInterval(Intervalo1);
            ActualizarEstadoPersonaje();
        }
        contador++;

    }, 1000)
}
function ActualizarEstadoPersonaje(){
    const p = document.getElementById('puntos');
    const ImgEnemy = document.getElementById("Tanaka");
    const botones = [boton1, boton2, boton3, boton4];
    p.innerHTML = Player1.NV + "</br>" + Player1.PV + "</br>" + Player1.PA + "</br>" + Player1.E + "</br>" + Player1.P;
    console.log(`PV Enemigo: ${Enemy.PV}`);
    if(Player1.PA==0&&Enemy.PV!=0){
        EnemyTurn();
    }
    if(Player1.PV==0){
        console.log("Has muerto!!!")
        setTimeout(function(){
        MostrarTexto("¡¡¡Has muerto!!!");
        },2000);
        botones.forEach((boton)=>{
            boton.removeAttribute("onclick");
        })
        setTimeout(function(){
            window.location.href = "./Perder.html";
        },4000);
    }
    if(Enemy.PV==0){
        console.log("Has ganado")
        var contador = 0;
        intervalo1 = setInterval(() => {
            if((contador==0)){
            ImgEnemy.classList.add("animacion4")
            MostrarTexto("¡Has derrotado\nal Alien Tanaka!");
            }else if(contador==4){
            MostrarTexto("Tu experiencia Incrementa en 5")
            Player1.SumarExperiencia(5); 
            Player1.SumarPuntos(10);
            p.innerHTML = Player1.NV + "</br>" + Player1.PV + "</br>" + Player1.PA + "</br>" + Player1.E + "</br>" + Player1.P;
            }else if(contador==8){
                window.location.href = './Ganar.html';
            }else{
                botones.forEach((boton)=>{
                    boton.removeAttribute("onclick");
                })
            }

        }, 1000)
    }
}
function EnemyTurn(){
    NarrarRecibirAtaque();
    Player1.RecuperarPA();
}
function Radar(){
    const comandos = document.getElementById('SquareCommand');
    const Items = document.getElementById('SquareItems');
    MostrarTexto('Te has vuelto invisible el tanaka no puede verte')
    comandos.style.display = 'inline';
    Items.style.display = 'none';
}