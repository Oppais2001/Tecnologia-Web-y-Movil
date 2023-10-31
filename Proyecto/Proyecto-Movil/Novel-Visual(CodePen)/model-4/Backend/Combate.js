
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
    ActualizarEstadoPersonaje();
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
        recuadro.style.animationPlayState = 'running';
    });
   setTimeout(function(){
        Recuadros.forEach(function(recuadro) {
            recuadro.style.animationPlayState = 'paused';
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
    let boton1 = document.getElementById("boton1");
    let boton2 = document.getElementById("boton2");
    let boton3 = document.getElementById("boton3");
    let boton4 = document.getElementById("boton4");
    let squareEnemy = document.getElementById('SquareEnemy');
    let enemy = document.getElementById('Tanaka');
    let ATQ = document.getElementById(elemento);
    boton1.disabled = true;
    boton2.disabled = true;
    boton3.disabled = true;
    boton4.disabled = true;
    squareEnemy.style.animationPlayState = 'running';
    enemy.style.animationPlayState = 'running';
    console.log("Activa Animacion")
    console.log(`El daño ha sido de ${Ataque}`);
    //Animacion de Ataque
    ATQ.innerText= Ataque + "PTS";
    setTimeout(() => {
        ATQ.innerText=" ";
        squareEnemy.style.animationPlayState = 'paused';
        enemy.style.animationPlayState = 'paused';
        boton1.disabled = false;
        boton2.disabled = false;
        boton3.disabled = false;
        boton4.disabled = false;
    }, 2000)
}
function ActualizarEstadoPersonaje(){
    var p = document.getElementById('puntos');
    var ImgEnemy = document.getElementById("Tanaka");
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
        setTimeout(function(){
            window.location.href = "./Perder.html";
        },4000);
    }
    if(Enemy.PV==0){
        console.log("Has ganado")
        setTimeout(function(){
            MostrarTexto("¡Has derrotado\nal Alien Tanaka!");
            ImgEnemy.style.animation = "Morir 4s linear infinite";
            ImgEnemy.style.animationPlayState = "running";
        }, 2000);
        setTimeout(() => {
            MostrarTexto("Tu experiencia Incrementa en 5")
            ImgEnemy.style.animationPlayState = "paused";
            ImgEnemy.style.display = "none"
            Player1.SumarExperiencia(5); 
            Player1.SumarPuntos(10);
            p.innerHTML = Player1.NV + "</br>" + Player1.PV + "</br>" + Player1.PA + "</br>" + Player1.E + "</br>" + Player1.P;
        }, 4000);
    }
}
function EnemyTurn(){
    NarrarRecibirAtaque();
    Player1.RecuperarPA();
}