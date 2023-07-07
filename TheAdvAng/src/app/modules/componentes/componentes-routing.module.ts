import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponetesComponent } from './pages/componentes/componentes.component';

const routes: Routes = [
  {
    path: '',
    component: ComponetesComponent,
    outlet: 'child'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }

