import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full' }, //pagina inicial -- rota padrão 
    { path: 'store', loadChildren: './store/store.module#StoreModule' },
    { path: '**', redirectTo: 'store' } //restaura pra rota padrão
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }