// Creamos una clase especial para definir nuestro inventario
class Inventario{
    constructor(){
        this.lista = []
    }
    AgregarProducto(p){
        this.lista.push(p);
    }
    ImprimeInventario(){
        var indice = 0;
        for(const item of this.lista){
            indice = indice + 1; 
            alert(`Producto N° ${indice} = ${item.nombre}`);
        }
    }
    ValidaStock(){
        var contador = 0;
        for(const item of this.lista){
            var stock = item.stock
            if(stock < 1000){
                alert(`El producto: ${item.nombre} tiene un stock critico de ${stock}!!!`)
                contador = contador + 1;
            }
        }
        if(contador == 0){
            alert(`Felicidades el stock está en excelente estado!!!`)
        }
    }
}
// Creamos una clase especial para definir los productos que iran dentro de la lista
class Producto{
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
// producto que viene por defecto
let inventario = new Inventario();
let producto0 = new Producto("Pan",2000,1000);
inventario.AgregarProducto(producto0);
// bucle que permite agregar productos de manera ilimitada hasta que se decida terminar el ciclo
while(true){
    var opcion = confirm("¿Desea Ingresar un nuevo producto?");
    if(opcion == false){
        break
    }
    var nombre= prompt("Ingrese Nombre del producto: ");
    var precio= prompt("Ingrese Precio del producto: ");
    var stock= prompt("Ingrese Stock del producto: ");
    var productox = new Producto(nombre, precio, stock);
    inventario.AgregarProducto(productox);
}
// llamamos a los metodos para ver el inventario y los stocks criticos
inventario.ImprimeInventario();
inventario.ValidaStock();
