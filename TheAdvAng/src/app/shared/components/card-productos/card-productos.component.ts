import { Component, Input } from '@angular/core';
import { ProductosModel } from 'src/app/core/models/productos.model';

@Component({
  selector: 'app-card-productos',
  templateUrl: './card-productos.component.html',
  styleUrls: ['./card-productos.component.css']
})
export class CardProductosComponent {
  @Input() productos!: ProductosModel;
  

}
