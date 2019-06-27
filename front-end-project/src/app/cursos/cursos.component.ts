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
//depois ajeitar
      {id: 1, Curso: 'Java', Desempenho: 30/60},
      {id: 1, Curso: 'Java', Desempenho: 30/60},
      {id: 1, Curso: 'Java', Desempenho: 30/60},
      {id: 1, Curso: 'Java', Desempenho: 30/60},
      {id: 1, Curso: 'Java', Desempenho: 30/60}

    ]

    const cursosFy = JSON.stringify(cursostable);
    //localStorage.setItem("key", "value");
    localStorage.setItem('ls-cursos', cursosFy)
    //this.testLocal = localStorage.getItem("key");
    const localcursos = localStorage.getItem("ls-cursos");
    this.cursos = JSON.parse(localcursos);
    //this.cursos = localStorage.getItem("ls-cursos");
  }

}
