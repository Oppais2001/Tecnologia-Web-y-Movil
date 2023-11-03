function Generar(){
    let longitud = document.getElementById('Longitud').value;
    let letrasMayusculas = document.getElementById('LetrasMayusculas').checked;
    let letrasMinusculas = document.getElementById('LetrasMinusculas').checked;
    let caracteres = document.getElementById('Caracteres').checked;
    console.log(`longitud de la contraseña ${longitud} letras mayusculas: ${letrasMayusculas} letras minusculas: ${letrasMinusculas} caracteres: ${caracteres}`);
    if((letrasMayusculas==false&&letrasMinusculas==false&&caracteres==false)||longitud==NaN){
        alert('¡Debe seleccionar al menos una casilla!')
    }else{
        GenerarContrasena(longitud, letrasMayusculas, letrasMinusculas, caracteres);
    }
}
function GenerarContrasena(longitud, Ma, Mi, Ca){
    let contraseña = document.getElementById('key');
    var caracteres = ''
    if(Mi){
        var caracteres = caracteres + 'abcdefghijklmnopqrstuvwxyz';
    }if(Ma){
        var caracteres = caracteres + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }if(Ca){
        var caracteres = caracteres + '123456789!"#$%&/()=?+-'
    }
    console.log(`Caracteres que seran usados en la contraseña ${caracteres}`)
    var key = '';
    for (var i = 0; i < longitud; i++) {
      key += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    contraseña.innerHTML = `<p> Contraseña Generada: ${key} <\p>`
}