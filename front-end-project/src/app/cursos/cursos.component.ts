import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public cursos: any = {};
  
  constructor() { }

  ngOnInit() {
    const cursostable = [
      {id: 1, nome: 'Machine Learning with Python', desempenho: 5},
      {id: 2, nome: 'Desenvolvimento web completo', desempenho: 50},
      {id: 3, nome: 'Curso de Git e Github', desempenho: 80},
      {id: 4, nome: 'Metodologias Ágeis completo', desempenho: 15},
      {id: 5, nome: 'Java Completo', desempenho: 60}
    ]

    //stringify - tranforma o parâmetro enviado em string
    const cursosFy = JSON.stringify(cursostable);
    //localStorage.setItem("key", "value");
    localStorage.setItem('ls-cursos', cursosFy)
    //this.testLocal = localStorage.getItem("key");
    const localcursos = localStorage.getItem('ls-cursos');
    this.cursos = JSON.parse(localcursos);
  }

}
