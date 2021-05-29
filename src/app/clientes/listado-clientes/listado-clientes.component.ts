// Resultado del comando //ng generate component clientes/listadoClientes
import { Component, OnInit } from '@angular/core';
//Crear el componente listado-cliente// Creas los import del servicio y de los tipos de datos del modelo.
import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  //En este componente tendremos como propiedad el array de clientes que el servicio vaya creando. Así pues, declaras dicho array de clientes:
  clientes: Cliente[];

  constructor(
    //Inyectas el servicio en el constructor.
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    //Cuando se inicialice el componente tienes que solicitar los clientes al servicio. Esto lo hacemos en el método ngOnInit().
    this.clientes = this.clientesService.getClientes();
  }

}
