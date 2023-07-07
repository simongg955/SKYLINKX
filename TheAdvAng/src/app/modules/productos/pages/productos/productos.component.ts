import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosModel } from "src/app/core/models/productos.model";
import { productosService } from "../../services/productos.service";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy{
  mockProductosList: Array<ProductosModel> = []

  constructor(private productosServ: productosService, private titleService: Title){}

  ngOnInit(): void {
    this.productosServ.getAllproductos$()
    .subscribe(resp => {
      this.mockProductosList = resp
    })

    this.titleService.setTitle('SKY LINK | PRODUCTOS');
  }
  ngOnDestroy(): void {

  }
}
