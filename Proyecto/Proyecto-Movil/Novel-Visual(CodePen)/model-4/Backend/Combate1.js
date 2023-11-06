function NarrarAtaque(){
    const elemento = document.getElementById("SquareEnemy");
    elemento.classList.add("animacion1");
    var contador = 0;
    intervalo = setInterval(()=>{
        contador++;
        if(contador==4){
            elemento.classList.remove("animacion1");
            clearInterval(intervalo);
        }
    }, 1000)

}