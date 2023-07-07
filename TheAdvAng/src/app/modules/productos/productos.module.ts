import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { productosRoutingModule } from '../productos/productos-routing.module';
import { ProductosComponent} from '../productos/pages/productos/productos.component';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    productosRoutingModule,
    SharedModule
  ]
})
export class productosModule { }
