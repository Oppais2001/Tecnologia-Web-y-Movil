function storageObtener(clave){
    const valor = window.localStorage.getItem(clave);
    if(!valor){
        return null;
    }
    return valor;
}
function storageAsignar(clave,valor){
    window.localStorage.setItem(clave,valor);
}
function storageEliminar(clave){
    window.localStorage.removeItem(clave);
}
function storageLimpiar(){
    window.localStorage.clear()
}
