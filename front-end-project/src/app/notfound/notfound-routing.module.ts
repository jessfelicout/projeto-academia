import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router} from '@angular/router';
import { NotFoundComponent } from './notfound.component';

const routes: Routes = [
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class NotFoundRoutingModule{ }
