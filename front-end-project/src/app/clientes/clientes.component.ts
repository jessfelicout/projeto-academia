import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  nomes_Clientes: string[] = ['Cliente A', 'Cliente B', 'Cliente C'];

  constructor() { }
  ngOnInit() {
  }

}
