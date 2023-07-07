import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mainMenu: {
    opcDefecto: Array<any>,
  } = { opcDefecto: [] }

  ngOnInit(): void {
    this.mainMenu.opcDefecto = [

      {
        name: 'noticias',
        router: ['/', 'noticias']
      },
      {
        name: 'productos',
        router: ['/', 'productos']
      },
      {
        name: 'cursos',
        router: ['/', 'cursos']
      },
      {
        name: 'componentes',
        router: ['/', 'componentes']
      }
    ]
  }
}
