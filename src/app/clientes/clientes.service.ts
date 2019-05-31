import { Injectable } from '@angular/core';
import {Cliente, Grupo} from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  private cliente:Cliente[];
  private grupo:Grupo[];
  private icon=[];
  constructor() { 
    this.grupo = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];
    this.cliente = [];
    this.icon=[
      'fa-address-book',
      'fa-quora',
      'fa-snowflake-o',
      'fa-grav',
      'fa-window-close-o',
      'fa-bath',
      'fa-shower',
      'fa-microchip',
      'fa-microchip',
      'fa-envelope-open'
    ];
  }

  getGrupos() {
    return this.grupo;
  }

  getClientes() {
    return this.cliente;
  }

  agregarCliente(cliente: Cliente) {
    this.cliente.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.cliente.length,
      nombre: '',
      app: '',
      apm: '',
      sexo: '',
      edad: 0,
      correo: '',
      icono:this.icon[Math.floor((Math.random()*10)+1)]
    };
  }
  
}
