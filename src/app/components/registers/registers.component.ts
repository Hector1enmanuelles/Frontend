import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistersService } from 'src/app/services/registers.service';
import { Register } from 'src/app/Register';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {
  
 formregistro: FormGroup;
 submitted = false;
 registers: Register[];

 registerModel = new Register("","","");



  constructor( private formBuilder: FormBuilder, private RegistersService: RegistersService){
    this.registers = [];
    this.formregistro = this.formBuilder.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      telefono:['',Validators.required]


    });

    this.RegistersService.getRegisters()
    .subscribe(registers => {
      console.log(registers);
      this.registers = registers;
    });
  }

  ngOnInit(){
  }
  registro(): any{
    console.log(this.formregistro.value);

  }

  get m() { return this.formregistro.controls; }
 
    onSubmit() {
        this.submitted = true;
 
        if (this.formregistro.invalid) {
            return;
        }
 
        alert('Registrado con exito!');
    }

    addRegister(event:any){
      event.preventDefault();
      const newRegister:Register = this.registerModel
      this.RegistersService.addRegister(newRegister)
        .subscribe(register => {
          this.registers.push(register);
          console.log(this.registerModel);
        })        
    }
  
    deleteRegister(id:any) {
      const response = confirm('Desea eliminar el registro?');
      if (response ){
        const registers = this.registers;
        this.RegistersService.deleteRegister(id)
          .subscribe(data => {
            console.log(data.n);
            if(data.n == 1) {
              for(let i = 0; i < registers.length; i++) {
                if(registers[i]._id == id) {
                  registers.splice(i, 1);
                }
              }
            }
          })
      }
    }                 
}
