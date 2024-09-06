export class Producto {
    private codigo: string;
    private nombre: string;
    private precio: number;
    private venta: number;


    constructor(codigo: string, nombre: string, precio: number, venta: number) { //la clase tiene tanto codigo como nombre, precio y el precio de venta
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.venta = venta;
    }

    public getDatos(){
        return "\nCodigo: " + this.codigo + " Nombre: " + this.nombre + " Precio: " + this.precio + " Venta: " + this.venta //aqui se envian los datos que tenemos
    }

    public getCodigo(): number{
        let ascii1: number = this.codigo.charCodeAt(1) 
        let ascii2: number = this.codigo.charCodeAt(2)
        let ascii3: number = this.codigo.charCodeAt(3)

        return ascii1 + ascii2 + ascii3 //se suman los numero obtenidos con charCodeAt para conseguir un numero unico
    }

    public getCodigo_real(): string{
        return this.codigo //este es el codigo original, es ultil cuando queremos hacer una busqueda afuera
    }
    
}
