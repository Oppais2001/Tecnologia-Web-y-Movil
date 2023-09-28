class Inventario{
    constructor(){
        this.lista = []
    }
    AgregarProducto(p){
        this.lista.push(p);
    }
    ImprimeInventario(){
        alert(this.lista);
    }
}

class Producto{
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    ValidaStock(){
        if(this.stock<1000){
            return`${this.stock}`;
        }else{
            return`el stock es normal`;
        }
    }

}
let inventario = new Inventario();
let producto0 = new Producto("Pan",2000,1000);
inventario.push(producto0);
alert(producto0);
console.log(producto0);
console.log(producto0.ValidaStock());
while(true){
    var opcion = confirm("¿Desea Ingresar un nuevo producto?");
    if(opcion == false){
    var nombre= prompt("Ingrese Nombre del producto: ");
    var precio= prompt("Ingrese Precio del producto: ");
    var stock= prompt("Ingrese Stock del producto: ");
    var productox = new Producto(nombre, precio, stock);
    inventario.push(productox);
}
}
