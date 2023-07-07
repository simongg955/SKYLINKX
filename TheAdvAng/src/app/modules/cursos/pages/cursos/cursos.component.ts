import { Component } from '@angular/core';
import { CursosModel } from 'src/app/core/models/cursos.model';
import { CursosService } from '../../services/cursos.service'; 
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  mockCursosList: Array<CursosModel> = []

  constructor(private CursosServ: CursosService, private titleService: Title){}

  ngOnInit(): void {
    this.CursosServ.getAllCursos$()
    .subscribe(resp => {
      this.mockCursosList = resp
    })

    this.titleService.setTitle('SkiLink | Cursos');
  }
  ngOnDestroy(): void {

  }
}
