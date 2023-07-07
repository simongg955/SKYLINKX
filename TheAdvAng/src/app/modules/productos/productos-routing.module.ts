import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductosComponent} from "../productos/pages/productos/productos.component";

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productosRoutingModule{ }
