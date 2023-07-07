import { Component, Input } from '@angular/core';
import { ComponetesModel } from 'src/app/core/models/componentes.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-componentes',
  templateUrl: './card-componentes.component.html',
  styleUrls: ['./card-componentes.component.css']
})
export class CardComponentesComponent {
    @Input() componentes!: ComponetesModel;
 
    
}
