import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { StoreComponent } from './store/store.component';
import {ClientesComponent} from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }