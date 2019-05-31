import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../clientes.service'
import { Cliente, Grupo } from '../cliente.model';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
cliente:Cliente;
Form:FormGroup;

  constructor(private clienteService: ClientesService, private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.cliente = this.clienteService.nuevoCliente();
    this.Form=this.fb.group({
      nombre:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      app:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      apm:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      sexo:['',[Validators.required,Validators.pattern('[MF]*')]],
      edad:['',Validators.required],
      correo:['',[Validators.required,Validators.email]]
                
    })


    
  }
  nuevoCliente(): void{
    this.clienteService.agregarCliente(this.cliente);
    this.cliente=this.clienteService.nuevoCliente();
  }

}
