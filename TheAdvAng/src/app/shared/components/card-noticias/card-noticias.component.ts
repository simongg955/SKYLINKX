import { Component, Input } from '@angular/core';
import { NoticiasModel } from 'src/app/core/models/noticias.model';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.css']
})
export class CardnoticiasComponent {
  @Input() noticias!: NoticiasModel;
  

}
