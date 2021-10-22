import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { RegistersService } from 'src/app/services/registers.service';
import { Register } from '../../models/Register';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css'],
  providers: [RegistersService],
})

export class RegistersComponent implements OnInit {



  constructor( public registerService: RegistersService){

  }

  ngOnInit(){
    this.obtenerRegisters();
  }


    //INSERTAR REGISTRO
    addRegister(form?: NgForm) {
      if (form?.value._id) {
        this.registerService.updateRegister(form?.value).subscribe((res) => {
          this.resetForm(form);
          this.obtenerRegisters();
          Swal.fire('Registro modificado con exito', 'Agenda Virtual', 'success');
        });
      } else {
        this.registerService.addRegister(form?.value).subscribe((res) => {
          this.resetForm(form);
          this.obtenerRegisters();
          console.log(res)
          Swal.fire('Registro guardado con exito', 'Agenda Virtual', 'success');
        });
      }
    }
    /*addRegister(event:any){
      if (this.nombre.trim() != '' && this.apellido.trim() != '' && this.telefono.trim() != ''){
        var register = {            
          nombre: this.nombre,
          apellido: this.apellido,
          telefono: this.telefono 
        }
        //if(this.registers.id){
          const newRegister:Register = this.registerModel
        this.registerService.updateRegister(newRegister)
          .subscribe(register => {
            this.registers.push(register);
            Swal.fire('Registro modificado con exito', 'Agenda Virtual', 'success');
        })
        //}
        
      }else{
        event.preventDefault();
        const newRegister:Register = this.registerModel
        this.registerService.addRegister(newRegister)
          .subscribe(register => {
            this.registers.push(register);
            Swal.fire('Registro guardado con exito', 'Agenda Virtual', 'success');
            this.submitted = false;
            this.formregistro.reset();
          });    
      }

  }*/
  
    // OBTENER REGISTRO
    obtenerRegisters() {
      this.registerService.getRegisters().subscribe((res) => {
        this.registerService.registers = res;
      });
    }
    /* obtenerRegisters()
    {
      
      this.registerService.getRegisters()
      .subscribe(registers => {
        console.log(registers);
        this.registers = registers;
      });
    }*/

    // OBTENER REGISTROS
   /* obtenerRegister(id: any)
    {
      const newRegister:Register = this.registerModel
      this.registerService.getRegister(id)
      .subscribe(newRegister => {
        console.log(newRegister);       
      });
    }
    */

    //ACTUALIZAR REGISTRO

    editRegister(register: Register) {
      this.registerService.selectedRegister = register;
    }

    /*updateRegister(regis: Register){
        var newRegister = {            
          _id: regis._id,
          nombre: regis.nombre,
          apellido: regis.apellido,
          telefono: regis.telefono 
        };
        this.registerService.updateRegister(newRegister)
          .subscribe(res => {
           regis.nombre =  regis.nombre;
           regis.apellido = regis.apellido;
           regis.telefono = regis.telefono;
          })
    }
*/
    //ELIMINAR REGISTRO

    deleteRegister(_id: string, form?: NgForm) {
     
      Swal.fire({
        title: 'Desea eliminar el registro?',
        text: 'Se eliminará de forma permanente.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.registerService.deleteRegister(_id).subscribe((res) => {
            this.obtenerRegisters();
            this.resetForm(form);
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'El registro permanece en la base de datos',
            'error'
          )
        }
      })
    } 
        
      
    



  /*  deleteRegister(id:any) {
      Swal.fire({
        title: 'Desea eliminar el registro?',
        text: 'Se eliminará de forma permanente.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          const registers = this.registers;
        this.registerService.deleteRegister(id)
          .subscribe(data => {
            console.log(data.n);
            if(data.n == 1) {
              for(let i = 0; i < registers.length; i++) {
                if(registers[i]._id == id) {
                  registers.splice(i, 1);
                }
              }
            }
            this.refresh();
          })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'El registro permanece en la base de datos',
            'error'
          )
        }
        this.refresh();
      })
    } 

    // RECARGAR PÁGINA
    refresh(): void 
    {
       window.location.reload(); 
    }
*/
resetForm(form?: NgForm) {
  if (form) {
    form.reset();
    this.registerService.selectedRegister = new Register();
  }
}

}      
    

