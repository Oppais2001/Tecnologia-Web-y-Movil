let correctas = [1,4,3,3,2,3,1,2,2,4,3,2,3,4,2]
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
}