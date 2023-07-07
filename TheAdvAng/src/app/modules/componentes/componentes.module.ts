import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { ComponetesComponent } from './pages/componentes/componentes.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    ComponetesComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    SharedModule
  ]
})
export class ComponentesModule { }
