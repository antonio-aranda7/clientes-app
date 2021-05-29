// Resultado del comando // ng generate module clientes
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
// Consiste en declarar en el módulo de clientes que se va a usar la directiva "ngModel"
import { FormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';



@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ClientesService
  ],
  //Agregar al exports AltaClienteComponent //agrego al exports el componente que quiero usar desde otros módulos.
  exports: [
    AltaClienteComponent,
    //Para usar este componente de listado de clientes, ya que lo queremos invocar desde el módulo raíz, tienes que ampliar el exports del module "clientes.module.ts".
    ListadoClientesComponent
  ]

})
export class ClientesModule { }
