import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoticiasModel } from "src/app/core/models/noticias.model";
import { noticiasService } from "../../services/noticias.service";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit, OnDestroy{
  mockNoticiasList: Array<NoticiasModel> = []

  constructor(private noticiaServ: noticiasService, private titleService: Title){}

  ngOnInit(): void {
    this.noticiaServ.getAllnoticiass$()
    .subscribe(resp => {
      this.mockNoticiasList = resp
    })

    this.titleService.setTitle('SKY LINK X | noticias');
  }
  ngOnDestroy(): void {

  }
}
