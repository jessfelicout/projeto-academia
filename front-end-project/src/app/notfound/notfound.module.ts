import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundRoutingModule } from './notfound-routing.module';
import { NotFoundComponent } from './notfound.component';


@NgModule({
    declarations:[NotFoundComponent],
    imports:[
      FormsModule,
      CommonModule,
      NotFoundRoutingModule
    ],
    exports:[NotFoundComponent]
})
export class NotFoundModule {}
