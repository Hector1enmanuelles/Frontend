import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'agendaVirtual';

 formregistro: FormGroup;
 submitted = false;

  constructor( private formBuilder: FormBuilder){
    this.formregistro = this.formBuilder.group({
      nombre:['',Validators.required, Validators.minLength(2)],
      apellido:['',Validators.required],
      telefono:['',Validators.required]

    });
  }

  ngOnInit(): void{
    this.formregistro = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required)
    });
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
 
        alert('Mensaje Enviado !')
    }
}
