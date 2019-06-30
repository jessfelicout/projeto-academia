import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {Routing} from './app.routing';
import {HomeComponent } from './home/home.component';
import {CursosComponent} from './cursos/cursos.component';
import {LoginComponent} from './login/login.component';
import {CrudFormComponent} from './home/crud-form/crud-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    LoginComponent,
    CrudFormComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    Routing,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
