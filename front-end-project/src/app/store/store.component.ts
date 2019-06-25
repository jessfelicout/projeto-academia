import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app/store',   //diretório do componente
  templateUrl: './store.component.html', //página html do componente
  styleUrls: ['./store.component.scss']// Estilo utilizado 
})
export class StoreComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  title = 'Nossos Projetos'

}
