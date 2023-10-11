const canvas = document.querySelector('canvas');//tomamos el lienzo de html
const c = canvas.getContext('2d');//definimos el contexto 2d del juego

canvas.width = 1024;//ajustamos el ancho del lienzo
canvas.height = 576;//ajustamos el alto del lienzo
console.log(c);//lo escribimos en la terminar para poder identificarlo en pantalla

c.fillStyle= "white"//pinta de blanco el lienzo
c.fillRect(0 ,0 , canvas.width, canvas.height)//posiciona el c y define su ancho y alto

const image = new Image()//crea un objeto imagen
image.src='./Img/mapa.png'//define su directorio
const playerImage = new Image()
playerImage.src = './Img/playerDown.png'

image.onload = () => {//crea un bucle que la imagen sea mostrada de manera continua
    c.drawImage(image,-1100,-400)//(objetos, coordenadas en que aparecera(x,y))
    c.drawImage(playerImage,
        0, // Coordenadas desde el eje de x por la cual empezaremos a recortar el assets del personaje
        0, //coordenada desde la cual empezaremos a recortar desde el eje de y
        playerImage.width / 4, // coordenada del eje x final del corte del assets
        playerImage.height, // cordenada del eje y final del corte del assets
        (canvas.width/2 - playerImage.width/2),//coordenadas en el eje x
        (canvas.height/2 - playerImage.height/2),//coordenadas en el eje y
        playerImage.width/4,//Ancho de la imagen cortada
        playerImage.height)//Alto de la imagen cortada
}
class Sprite{
    constructor({ position, velocity, image }){//se insertar un objeto como argumento del constructor
        this.position = position
        this.image = image
    }
    draw(){
        c.drawImage(this.image,-1100,-400)
    }
}
const background = new Sprite({
    position:{
        x: -1100,
        y: -400,
},  image: image
})

function animacion(){
    window.requestAnimationFrame(animacion) // Creas un bucle infinito en el cual trabajar las animaciones
    c.drawImage(playerImage,
        0, 
        0, 
        playerImage.width / 4, 
        playerImage.height,
        (canvas.width/2 - playerImage.width/2),
        (canvas.height/2 - playerImage.height/2),
        playerImage.width/4,
        playerImage.height)
}
//animacion();
window.addEventListener('keydown', (e)=>{ // evento que se llama al presionar una tecla
    switch(e.key){
        case 'w':
            console.log('Has presionado la letra w')
            break
        case 's':
            console.log('Has presionado la letra s')
            break
        case 'd':
            console.log('Has presionado la letra d')
            break
        case 'a':
            console.log('Has presionado la letra a')
            break
    }
})
window.addEventListener('keyup', (e)=>{// evento que se llama al soltar una tecla
    console.log(`Has soltado la tecla ${e.key}`)
})
