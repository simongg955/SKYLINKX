import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'noticias',
    loadChildren: () => import('../noticias/noticias.module').then(m => m.NoticiasModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('../productos/productos.module').then(m => m.productosModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('../cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'componentes',
    loadChildren: () => import('../componentes/componentes.module').then(m => m.ComponentesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
