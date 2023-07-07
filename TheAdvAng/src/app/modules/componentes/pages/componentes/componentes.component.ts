import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponetesModel } from 'src/app/core/models/componentes.model';
import { componentesService } from '../../services/componentes.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponetesComponent implements OnInit, OnDestroy{
  mockComponentesList: Array<ComponetesModel> = []

  constructor(private componentesServ: componentesService, private titleService: Title){}

  ngOnInit(): void {
    this.componentesServ.getAllComponentes$()
    .subscribe(resp => {
      this.mockComponentesList = resp
    })

    this.titleService.setTitle('SKY LINK X | componenetes');
  }
  ngOnDestroy(): void {

  }
}
