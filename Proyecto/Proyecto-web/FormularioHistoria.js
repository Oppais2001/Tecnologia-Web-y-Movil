let correctas = [1,2,3,1,1,3,2,2,3,3,3,3,3,3,4]//Lista de respuestas correctas
let opcion_elegidas = []
let cantidadCorrectas = 0;
function respuesta(num_pregunta, seleccionada){
    opcion_elegidas[num_pregunta] = seleccionada.value;
    id="p"+num_pregunta;
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = 'white';
    labels[5].style.backgroundColor = 'white';
    labels[7].style.backgroundColor = 'white';
    seleccionada.parentNode.style.backgroundColor = "cec0fc"
}
function Corregir(){
    cantidadCorrectas=0;
    for(i = 0; i < correctas.length; i++){
        if(correctas[i]==opcion_elegidas[i]){
            cantidadCorrectas++;
        }
    }
    document.getElementById('Resultado').innerHTML = cantidadCorrectas;
    if(cantidadCorrectas>=10){
        alert("Has aprobado")
        /*Parte del codigo donde se guarda en la base de datos el curso como aprobado*/
    }else{
        alert("Has Reprobado")
    }
}