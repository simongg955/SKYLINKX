import { Component, Input } from '@angular/core';
import { NoticiasModel } from 'src/app/core/models/noticias.model';
import { ProductosModel } from 'src/app/core/models/productos.model';
import { CursosModel } from 'src/app/core/models/cursos.model';
import { ComponetesModel } from 'src/app/core/models/componentes.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent {
  @Input() title: string = "";
  @Input() datanoticias: NoticiasModel[] = [];
  @Input() dataproductos: ProductosModel[] = [];
  @Input() datacursos: CursosModel[] = [];
  @Input() datacomponentes: ComponetesModel[] = [];
}
