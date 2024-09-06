import { Producto } from "./producto";

class Nodo {
    producto: Producto;
    siguiente: Nodo | null;

    constructor(producto: Producto) {
        this.producto = producto;
        this.siguiente = null;
    }
}

class Lista {
    public cabeza: Nodo | null;

    constructor() {
        this.cabeza = null;
    }
}

class HashTable {
    private size: number;
    private data: Lista[];

    constructor(size: number) {
        this.size = size;
        this.data = new Array(size);
        for (let i = 0; i < size; i++) {
            this.data[i] = new Lista();
        }
    }

    private hash(key: number): number {
        return key % this.size; 
    }

    public insert(producto: Producto): void { //no hay colisiones :( wop wop
        const index = this.hash(producto.getCodigo());
        const nuevoNodo = new Nodo(producto);
        nuevoNodo.siguiente = this.data[index].cabeza;
        this.data[index].cabeza = nuevoNodo;
    }

    public search(codigo: string): Producto | null {
        let codigo_com: number = this.armar_codigo(codigo) //pasamos el codigo de str a number 
        const index = this.hash(codigo_com);
        let actual = this.data[index].cabeza;
        while (actual !== null) {
            if (actual.producto.getCodigo() === codigo_com) {
                return actual.producto;
            }
            actual = actual.siguiente;
        }
        return null;
    }

    public print(): void {
        let all_data: string = "";
        for (const lista of this.data) {
            let actual = lista.cabeza;
            while (actual !== null) {
                all_data += actual.producto.getDatos() + " ";
                actual = actual.siguiente;
            }
        }
        console.log(all_data.trim());
    }

    private armar_codigo(codigo: string): number{

        let ascii1: number = codigo.charCodeAt(1)
        let ascii2: number = codigo.charCodeAt(2)
        let ascii3: number = codigo.charCodeAt(3)

        return ascii1 + ascii2 + ascii3

    }
}

let tablaHash: HashTable = new HashTable(30);

let producto1: Producto = new Producto("P002", "Peptobismol", 15, 35) //se ingresa el producto
tablaHash.insert(producto1);

let producto2: Producto = new Producto("P005", "Mepaso", 45, 71)
tablaHash.insert(producto2);

let producto3: Producto = new Producto("P105", "Dorgalinafeliz", 15, 78)
tablaHash.insert(producto3);

let producto4: Producto = new Producto("P075", "Naftalinasol", 19, 92)
tablaHash.insert(producto4);

let producto5: Producto = new Producto("P085", "Rolocoson", 18, 54)
tablaHash.insert(producto5);

let producto6: Producto = new Producto("P155", "Rapasol", 48, 99)
tablaHash.insert(producto6);

let producto7: Producto = new Producto("P785", "Colinolasolina", 8, 10)
tablaHash.insert(producto7);

let producto8: Producto = new Producto("P621", "E621", 21, 62)
tablaHash.insert(producto8);

let producto9: Producto = new Producto("P865", "Randomila", 96, 100)
tablaHash.insert(producto9);

let producto10: Producto = new Producto("P666", "Miedosol", 34, 96)
tablaHash.insert(producto10);

tablaHash.print();

let buscar_1: string = producto3.getCodigo_real(); //Cambiar donde dice producto 2, tambien puede solo colocar el str P seguido de soloo 3 digitos
let estudianteEncontrado = tablaHash.search(buscar_1); //busqueda
if (estudianteEncontrado !== null) {
    console.log("\nDatos del producto: " + estudianteEncontrado.getDatos()); 
} else {
    console.log("\nEl Producto: " + buscar_1 + " no se encontro.");
}

console.log("\nCarlos Enrique de León de la Cruz - 1626423")