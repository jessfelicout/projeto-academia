import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public cursos: any = {};

  constructor() { }

MeusCursos(curso){

    let localArrayCursos = [];
    const localStringCursos = localStorage.getItem('ls-mcursos');
    const list = JSON.parse(localStringCursos);

    // Add Curso à lista de Meus cursos
    localArrayCursos.push(curso);
    // Add Product on localstorage
    localStorage.setItem('ls-mcursos', JSON.stringify(localArrayCursos));
    this.listCursos();
}

listCursos() {
    this.cursos = JSON.parse(localStorage.getItem('ls-mcursos'));
}

removeCurso(id) {
    let cursos = [];
    let updatecursos = [];
    cursos = JSON.parse(localStorage.getItem('ls-mcursos'));

    updatecursos = cursos.filter(item => item.id !== id);

    // Save on localstorage
    localStorage.setItem('ls-mcursos', JSON.stringify(updatecursos));

    // Update table
    this.listCursos();
  }

  ngOnInit() {
    const cursostable = [
      {id: 1, nome: 'Machine Learning with Python', desempenho: 0.05},
      {id: 2, nome: 'Desenvolvimento web completo', desempenho: 0.5},
      {id: 3, nome: 'Curso de Git e Github', desempenho: 0.8},
      {id: 4, nome: 'Metodologias Ágeis completo', desempenho: 0.15},
      {id: 5, nome: 'Java Completo', desempenho: 0.6}
    ]

    //stringify - tranforma o parâmetro enviado em string
    const cursosFy = JSON.stringify(cursostable);
    //localStorage.setItem("key", "value");
    localStorage.setItem('ls-mcursos', cursosFy)
    //this.testLocal = localStorage.getItem("key");
    const localcursos = localStorage.getItem('ls-mcursos');
    this.cursos = JSON.parse(localcursos);
  }

}
