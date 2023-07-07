import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './pages/cursos/cursos.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
