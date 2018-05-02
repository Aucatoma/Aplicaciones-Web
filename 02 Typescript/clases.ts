console.log("Hola mundo");
console.log("jajaja");
//let hola:any;
let hola: number | string = "Hola brow";
const adios = "Adiós brow";



hola = adios;
// adios = hola -> error porque no se puede re-asignar a una variable de solo lectura

//hola = 1 // error -> Duck typing

/* Tipos de datos */
let nombre1: string = "Daniel";
let edad: number = 28.33;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();


class Usuario {
    public nombre: string;
    private casado: boolean;
    protected edad: number;

    constructor(nombre: string, casado: boolean, edad:number){
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }

}

let daniel: Usuario = new Usuario("Daniel", false, 21);

console.log(daniel);


class UsuarioDos{
    constructor(public nombre: string, private _casado: boolean, protected _edad: number){ /* Si se quitan los modificadores de acceso, el constructor toma el parámetro como un valor que se pasa y no propiedad de la clase */

    }

    get casado(){
        return this._casado;
    }

    set casado(casado: boolean) {
        this._casado = casado;
    }

    imprimirUsuario(saludo: string): string{
        return `${saludo}. Mi nombre es ${this.nombre}, estoy casado ${this._casado} y mi edad es ${this._edad}`;
    }

}

let danieldos = new UsuarioDos("Daniel", false, 21);
console.log(danieldos);

console.log(danieldos.casado);
console.log(danieldos.imprimirUsuario("Hola amigo"));

let danieltres: UsuarioTres = {
    nombre: "Daniel",
    casado: false,
    edad: 28
};

interface UsuarioTres{
    nombre: string;
    edad: number;
    casado?: boolean;
}