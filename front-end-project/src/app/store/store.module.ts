//Declara os módulos que serão utilizados de acordo com as rotas
//É  necessário importar o ts de roteamento, pois é esse arquivo  que realiza o
// roteamento do componente que é declarado aqui

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule
  ]
})
export class StoreModule { }