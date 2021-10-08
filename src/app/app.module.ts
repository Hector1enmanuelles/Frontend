import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistersService} from './services/registers.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistersComponent } from './components/registers/registers.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegistersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
