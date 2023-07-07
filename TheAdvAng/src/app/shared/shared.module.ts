import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CardCursosComponent } from './components/card-cursos/card-cursos.component';
import { CardnoticiasComponent } from './components/card-noticias/card-noticias.component';
import { CardProductosComponent } from './components/card-productos/card-productos.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponentesComponent } from './components/card-componentes/card-componentes.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardnoticiasComponent,
    CardCursosComponent,
    SectionGenericComponent,
    CardProductosComponent,
    FooterComponent,
    CardComponentesComponent,
  ],
  exports: [
    NavbarComponent,
    CardnoticiasComponent,
    SectionGenericComponent,
    FooterComponent,
    CardProductosComponent,
    CardCursosComponent,
    CardComponentesComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
