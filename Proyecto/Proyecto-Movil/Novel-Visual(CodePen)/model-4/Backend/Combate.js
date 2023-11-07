//Funcion de inicio
document.addEventListener('DOMContentLoaded', function() {
    var p = document.getElementById("puntos");
    p.innerHTML = Player1.NV + "</br>" + Player1.PV + "</br>" + Player1.PA + "</br>" + Player1.E + "</br>" + Player1.P;
    let Texto = "¡Acabas de ver a un Tanaka!\n¿Que deseas hacer?";
    MostrarTexto2(Texto);
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
    MostrarTexto1(Texto);
    MostrarAtaque(MagnitudATQ, "Ataque");
    comandos.style.display = 'inline';
    Ataques.style.display = 'none';
}
function NarrarRecibirAtaque(){
    RecibirAtaque();
}
function Defender(){
    var Texto = "Has decidido Defender";
    MostrarTexto2(Texto);
    var GastoPA= 5;
    Player1.PerderPA(GastoPA);
}
function Items(){
    const comandos = document.getElementById('SquareCommand');
    const Items = document.getElementById('SquareItems');
    comandos.style.display = 'none';
    Items.style.display = 'inline';
}
function Huir(){
    var Texto ="Has decidido Huir";
    MostrarTexto2(Texto);
    var GastoPA= 5;
    Player1.PerderPA(GastoPA);
}
function RecibirAtaque(){
    console.log("se cancelaron los botones")
    const botones = document.querySelectorAll('input[type=button]');
    botones.forEach((boton)=>{
        boton.disabled = true});
    var Recuadros = document.querySelectorAll('.Square');
    Recuadros.forEach(function(recuadro) {
        recuadro.classList.add("animacion1");
    });
   setTimeout(function(){
        Recuadros.forEach(function(recuadro) {
            recuadro.classList.remove("animacion1");
            botones.forEach((boton)=>{
                boton.disabled = false});
            var Texto = "¡Has sido Atacado!\n Tus puntos de salud\n disminuyen en "+ MagnitudATQ +".";
            MostrarTexto2(Texto);
        });
    }, 2000);

    var MagnitudATQ = 1;
    Player1.PerderPV(MagnitudATQ);

}
function MostrarTexto1(dialogo) {
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
            }
        }
    , 25);

}
function MostrarTexto2(dialogo) {
    console.log("se cancelaron los botones")
    const botones = document.querySelectorAll('input[type=button]');
    botones.forEach((boton)=>{
        boton.disabled = true;
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
            botones.forEach((boton)=>{
                boton.disabled = false;
            })
            ActualizarEstadoPersonaje();
            clearInterval(intervalo); // Detiene la ejecución
            }
        }
    , 25);

}
function MostrarAtaque(Ataque, elemento){
    const botones = document.querySelectorAll('input[type=button]');
    botones.forEach((boton)=>{
        boton.disabled=true
    })
    const Disparo = document.getElementById("Disparo");
    const squareEnemy = document.getElementById("SquareEnemy");
    const ATQ = document.getElementById(elemento);
    var contador = 0
    console.log("Se Activa la Animación")
    console.log(`El daño ha sido de ${Ataque}`);
    //Mostrar Animacion de Ataque
    Intervalo1 = setInterval(() => {
        if(contador==0){
            Disparo.classList.add('animacionDisparo');
        }else if(contador==2){
            ATQ.innerText= Ataque + "PTS";
            squareEnemy.classList.add("animacion2");
            ATQ.classList.add("animacion3");
        }
        else if(contador == 4){
            console.log("Se Detiene la Animación");
            ATQ.innerText=" ";
            Disparo.classList.remove('animacionDisparo');
            squareEnemy.classList.remove("animacion2");
            ATQ.classList.remove("animacion3");
            squareEnemy.style.backgroundColor = 'black';
            botones.forEach((boton)=>{
                boton.disabled = false;
            })
            clearInterval(Intervalo1);
            ActualizarEstadoPersonaje();
        }
        contador++;

    }, 1000)
}
function ActualizarEstadoPersonaje(){
    const p = document.getElementById('puntos');
    const ImgEnemy = document.getElementById("Tanaka");
    p.innerHTML = Player1.NV + "</br>" + Player1.PV + "</br>" + Player1.PA + "</br>" + Player1.E + "</br>" + Player1.P;
    console.log(`PV Enemigo: ${Enemy.PV}`);
    if(Player1.PA==0&&Enemy.PV!=0){
        EnemyTurn();
    }
    else if(Player1.PV==0){
        console.log("se cancelaron los botones")
        const botones = document.querySelectorAll('input[type=button]');
        botones.forEach((boton)=>{
            boton.disabled = true;
        })
        console.log("Has muerto!!!")
        setTimeout(function(){
        MostrarTexto1("¡¡¡Has muerto!!!");
        },2000);
        setTimeout(function(){
            window.location.href = "./Perder.html";
        },4000);
    }
    else if(Enemy.PV==0){
        console.log("se cancelaron los botones")
        const botones = document.querySelectorAll('input[type=button]');
        botones.forEach((boton)=>{
            boton.disabled = true;
        })
        console.log("Has ganado")
        var contador = 0;
        intervalo1 = setInterval(() => {
            if((contador==0)){
            ImgEnemy.classList.add("animacion4")
            MostrarTexto1("¡Has derrotado\nal Alien Tanaka!");
            }else if(contador==4){
            MostrarTexto1("Tu experiencia Incrementa en 5")
            Player1.SumarExperiencia(5); 
            Player1.SumarPuntos(10);
            p.innerHTML = Player1.NV + "</br>" + Player1.PV + "</br>" + Player1.PA + "</br>" + Player1.E + "</br>" + Player1.P;
            }else if(contador==8){
                window.location.href = './Ganar.html';
                clearInterval(intervalo1);
            }
            contador++;
            }, 1000);
        }
    }

function EnemyTurn(){
    NarrarRecibirAtaque();
    Player1.RecuperarPA();
}
function Radar(){
    const comandos = document.getElementById('SquareCommand');
    const Items = document.getElementById('SquareItems');
    MostrarTexto2('Te has vuelto invisible el tanaka no puede verte')
    comandos.style.display = 'inline';
    Items.style.display = 'none';
}