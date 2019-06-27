import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  public base: any = {};

  ngOnInit() {

    const basecursos = [
      {id: 1, nome: 'Python Completo', downloads: 900},
      {id: 5, nome: 'Java Completo', downloads: 800},
      {id: 6, nome: 'C/C++', downloads: 700},
      {id: 2, nome: 'Desenvolvimento web completo', downloads: 560},
      {id: 4, nome: 'Metodologias Ágeis completo', downloads: 450},
      {id: 7, nome: 'R completo', downloads: 450},
      {id: 3, nome: 'JavaScript: React e Angular', downloads: 350},
      {id: 8, nome: 'Lógica de programação para iniciantes', downloads: 300},
      {id: 9, nome: 'Curso de Git e Github', downloads: 140},
      {id: 10, nome: 'Desenvolvimento mobile 101', downloads: 90}
    ]

    localStorage.setItem('ls-base', JSON.stringify(basecursos));
    this.base = JSON.parse(localStorage.getItem('ls-base'));
  }

}
