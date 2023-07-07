import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    SharedModule
  ]
})
export class NoticiasModule { }
