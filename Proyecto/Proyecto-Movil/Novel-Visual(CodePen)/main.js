var contador = 0;
var dialogo = ["Dialogo 1", "Dialogo 2", "Dialogo 3"];

function nextDialogue(){
  document.getElementById("texto").innerHTML = dialogo[contador];
  
  if (contador<2){
    contador++;
  } else{
    contador = 0;
  }
  
}