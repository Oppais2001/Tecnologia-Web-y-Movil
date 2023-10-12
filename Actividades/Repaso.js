let cadena = "Hello World Boys";
let minicadena = cadena.substring(0,6);
console.log(`Cadena: ${cadena} y Subcadena: ${minicadena}`);

const txt1 = "Universidad de Los Lagos";
const otracadena = txt1.slice(0,-12);
console.log(`Cadena: ${txt1} y Subcadena con slice ${otracadena}`);

let texto = "Estudio en la Universidad de los Lagos"
let nuevotexto = texto.replace("Universidad de los lagos", "Ulagos");
console.log(nuevotexto);