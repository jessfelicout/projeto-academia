import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CrudFormComponent } from './home/crud-form/crud-form.component';
//import {NotFoundComponent} from './notfound/notfound.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path:'cursos', component: CursosComponent},
    {path: 'home/new', component: CrudFormComponent},
    {path: 'home/update', component: CrudFormComponent}
    //{path:'**', component: NotFoundComponent},
    //{ path: 'store', loadChildren: './store/store.module#StoreModule' },
   // {path: '**', loadChildren: 'notfound/notfound.module#NotFoundModule'}
    // { path: '**', component: 'not-found' }
];


export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
