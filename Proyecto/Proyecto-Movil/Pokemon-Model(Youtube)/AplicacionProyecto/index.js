const canvas = document.querySelector('canvas');//definimos el lienzo con canvas donde pondremos los elementos
const contexto = canvas.getContext('2d');//definimos el contexto que sera en 2d

canvas.width = 1600; //definimos anchura del lienzo
canvas.height = 720; //definimos altura del lienzo

const image = new Image();
image.src="./Assets/Img/Map.png"
const Player = new Image();
Player.src = "./Assets/Img/playerDown.png"
pos = {x: -30, y: -750}
image.onload = function (){
    contexto.drawImage(image,0,0,image.width,image.height,pos.x,pos.y,image.width,image.height)
}
Player.onload = function(){
    contexto.drawImage(Player,0,0,Player.width/4,Player.height,canvas.width/2,canvas.height/2,Player.width/4,Player.height)
}