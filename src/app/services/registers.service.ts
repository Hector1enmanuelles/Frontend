import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Register } from '../Register' ;

@Injectable()
export class RegistersService { 
  apiRest: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }
  
  getRegisters() {
    return this.http.get<Register[]>(`${this.apiRest}/api/registers`).pipe(map(res => res));
  }
 
  addRegister(newRegister: Register) {
    return this.http.post<Register>(`${this.apiRest}/api/registers`, newRegister)
      .pipe(map(res => res));
  }

  deleteRegister(id: any) {
    return this.http.delete<Register>(`${this.apiRest}/api/registers/${id}`)
      .pipe(map(res => res));
  }

  updateRegister(newRegister: Register) {
    return this.http.put<Register>(`${this.apiRest}/api/registers/${newRegister._id}`, newRegister)
      .pipe(map(res => res));
  }
}
