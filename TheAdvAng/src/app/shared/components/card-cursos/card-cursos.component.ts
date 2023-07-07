import { Component, Input } from '@angular/core';
import { CursosModel } from 'src/app/core/models/cursos.model';

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.css']
})
export class CardCursosComponent {
  @Input() cursos!: CursosModel;
  

}
