window.onload = function(){
    const NumberEnemy = parseInt(storageObtener('NumberEnemy'));
    const NumberPlayer = parseInt(storageObtener('NumberPlayer'));
    const PlayerActual = ListaPlayers[NumberPlayer];
    const EnemyActual = Enemies[NumberEnemy];
    console.log(ListaPlayers)
    console.log(NumberPlayer)
    console.log(PlayerActual, EnemyActual)
    PlayerActual.MostrarPlayer();
    EnemyActual.MostrarEnemy();

}
//Funcion de inicio
document.addEventListener('DOMContentLoaded', function() {
    const NumberEnemy = parseInt(localStorage.getItem('NumberEnemy') || 0);
    const NumberPlayer = parseInt(localStorage.getItem('NumberPlayer') ||0);
    const PlayerActual = ListaPlayers[NumberPlayer];
    const EnemyActual = Enemies[NumberEnemy];
    var p = document.getElementById("puntos");
    p.innerHTML = PlayerActual.NV + "</br>" + PlayerActual.PV + "</br>" + PlayerActual.PA + "</br>" + PlayerActual.E + "</br>" + PlayerActual.P;
    let Texto = `¡Acabas de ver a un ${EnemyActual.Nombre}!\n¿Que deseas hacer?`;
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
    PlayerKurono.PerderPA(GastoPA);
    EnemyCebollense.PerderPV(MagnitudATQ);
    var Texto = "¡Has decidido Atacar!\n Los puntos de salud del\n Tanaka disminuyen en "+ MagnitudATQ +".";
    MostrarTexto1(Texto);
    MostrarAtaque(MagnitudATQ, "Ataque");
    comandos.style.display = 'inline';
    Ataques.style.display = 'none';
}
function Defender(){
    var Texto = "Has decidido Defender";
    MostrarTexto2(Texto);
    var GastoPA= 5;
    PlayerKurono.PerderPA(GastoPA);
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
    PlayerKurono.PerderPA(GastoPA);
}
function RecibirAtaque(){
    const botones = document.querySelectorAll('input[type=button]');
    const Recuadros = document.querySelectorAll('.Square');
    const Enemy = document.getElementById("Enemy");
    console.log("se cancelaron los botones");
    //Aqui se activan las animaciones
    botones.forEach((boton)=>{
        boton.disabled = true});
    setTimeout(function(){
        //Aqui se desactivan las animaciones
        Recuadros.forEach(function(recuadro) {
            recuadro.classList.add("animacion1");})
        }, 2000);
    setTimeout(function(){
        Enemy.src = "Assets/Img/Characters/TanakaFuriosoSystemCombat.png";
        Recuadros.forEach(function(recuadro) {
            recuadro.classList.remove("animacion1");
            botones.forEach((boton)=>{
                boton.disabled = false});
            var Texto = "¡Has sido Atacado!\n Tus puntos de salud\n disminuyen en "+ MagnitudATQ +".";
            MostrarTexto2(Texto);
        });
    }, 4000);

    var MagnitudATQ = 1;
    PlayerKurono.PerderPV(MagnitudATQ);

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
    const Disparo = document.getElementById("PlayerFrames1");
    const squareEnemy = document.getElementById("SquareEnemy");
    const Enemy = document.getElementById("Enemy");
    const ATQ = document.getElementById(elemento);
    var contador = 0
    //Desactivar botones
    botones.forEach((boton)=>{
        boton.disabled=true
    })
    console.log(`El daño ha sido de ${Ataque}`);
    //Mostrar Animacion de Ataque
    Intervalo1 = setInterval(() => {
        if(contador==0){
            Enemy.classList.add('animacionLuz');
            Disparo.classList.add('animacionDisparo');
        }else if(contador==2){
            Enemy.classList.remove('animacionLuz');
            Disparo.classList.remove('animacionDisparo');
            Enemy.classList.add('animacionRecibirDisparo');
            ATQ.innerText= Ataque + "PTS";
            squareEnemy.classList.add("animacion2");
            ATQ.classList.add("animacion3");
        }
        else if(contador == 4){
            console.log("Se Detiene la Animación");
            ATQ.innerText=" ";
            squareEnemy.classList.remove("animacion2");
            ATQ.classList.remove("animacion3");
            Enemy.classList.remove('animacionRecibirDisparo');
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
    const ImgEnemy = document.getElementById("Enemy");
    p.innerHTML = PlayerKurono.NV + "</br>" + PlayerKurono.PV + "</br>" + PlayerKurono.PA + "</br>" + PlayerKurono.E + "</br>" + PlayerKurono.P;
    console.log(`PV Enemigo: ${EnemyCebollense.PV}`);
    if(PlayerKurono.PA==0&&EnemyCebollense.PV!=0){
        EnemyTurn();
    }
    else if(PlayerKurono.PV==0){
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
    else if(EnemyCebollense.PV==0){
        console.log("se cancelaron los botones")
        const botones = document.querySelectorAll('input[type=button]');
        const Enemy = document.getElementById("Enemy");
        botones.forEach((boton)=>{
            boton.disabled = true;
        })
        console.log("Has ganado")
        var contador = 0;
        Enemy.style.filter = 'contrast(0)';
        intervalo1 = setInterval(() => {
            if((contador==0)){
            ImgEnemy.classList.add("animacion4")
            MostrarTexto1("¡Has derrotado\nal Alien Tanaka!");
            }else if(contador==4){
            MostrarTexto1("Tu experiencia Incrementa en 5")
            PlayerKurono.SumarExperiencia(5); 
            PlayerKurono.SumarPuntos(10);
            p.innerHTML = PlayerKurono.NV + "</br>" + PlayerKurono.PV + "</br>" + PlayerKurono.PA + "</br>" + PlayerKurono.E + "</br>" + PlayerKurono.P;
            }else if(contador==8){
                let indiceActual = parseInt(storageObtener("Indice"));// Incrementar el número
                let indiceNuevo = parseInt(indiceActual) + 1;// Actualizar el valor
                storageAsignar("Indice", indiceNuevo);
                window.location.href = './Dialogos.html';
                clearInterval(intervalo1);
            }
            contador++;
            }, 1000);
        }
    }
function EnemyTurn(){
    RecibirAtaque();
    PlayerKurono.RecuperarPA();
}
function Radar(){
    const comandos = document.getElementById('SquareCommand');
    const Items = document.getElementById('SquareItems');
    MostrarTexto2('Te has vuelto invisible el tanaka no puede verte')
    comandos.style.display = 'inline';
    Items.style.display = 'none';
}
