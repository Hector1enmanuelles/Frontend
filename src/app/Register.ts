import { RegistersComponent } from "./components/registers/registers.component";

export class Register{
    _id?: string;
    nombre: string;
    apellido: string;
    telefono: string;
    n? : number;

    constructor( nnombre:string, napellido:string, ntelefono:string)
    {
        this.nombre = nnombre;
        this.apellido = napellido;
        this.telefono = ntelefono;
    }
}

