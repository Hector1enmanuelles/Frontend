export class Register {
  
    _id: string;
    nombre: string;
    apellido: string;
    telefono: string;

    constructor(_id = "", nombre = "", apellido = "", telefono = "") {
    this._id = _id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono= telefono;
  }

  
}

