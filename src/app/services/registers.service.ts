import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Register } from '../models/Register' ;

@Injectable()
export class RegistersService { 
  
  selectedRegister: Register ={
    _id:"",
    nombre: "",
    apellido: "",
    telefono: ""
    

  }
  
  registers: Register[];

  apiRest: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.registers = [];
  }
  
  getRegisters() {
    return this.http.get<Register[]>(`${this.apiRest}/api/registers`).pipe(map(res => res));
  }
 
  getRegister(id: any){
    return this.http.get<Register[]>(`${this.apiRest}/api/registers/${id}`).pipe(map(res => res));

  }

  addRegister(register: Register) {
    return this.http.post<Register>(`${this.apiRest}/api/register`, register)
      .pipe(map(res => res));
  }

  deleteRegister(id: any) {
    return this.http.delete<Register>(`${this.apiRest}/api/registers/${id}`)
      .pipe(map(res => res));
  }

  updateRegister(register: Register) {
    return this.http.put<Register>(`${this.apiRest}/api/registers/${register._id}`, register)
      .pipe(map(res => res));
  }
}
