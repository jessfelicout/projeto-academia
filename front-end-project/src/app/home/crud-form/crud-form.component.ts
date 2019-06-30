import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss']
})
export class CrudFormComponent implements OnInit {

  public curso: any = {};
  public create: boolean;
  public update: boolean;
  public msg: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  addCurso(curso) {
    let localArrayCursos = [];
    // Create id
    curso.id = Date.now();

    const localStringCursos = localStorage.getItem('ls-cursos');
    const list = JSON.parse(localStringCursos);
    if ( list && list.length > 0 ) {
      localArrayCursos = list;
    }
    // Inclui curso
    localArrayCursos.push(curso);

    localStorage.setItem('ls-cursos', JSON.stringify(localArrayCursos));
    this._alertMessage(false, 'Curso Adicionado à base!');
  }

  updateCurso(curso) {

    const localArrayCursos: any = JSON.parse(localStorage.getItem('ls-cursos'));

    const cursolocal : any = curso;

    console.log(localArrayCursos);
    console.log(curso);

    //compara os nomes
    for(let item of localArrayCursos){
      if(item.curso === cursolocal.curso){

        item.curso = cursolocal.curso;
        item.id = cursolocal.id;
        item.ch = cursolocal.ch;
      }
    }


    // Update curso on localstorage
    localStorage.setItem('ls-cursos', JSON.stringify(localArrayCursos));
    this._alertMessage(false, 'Curso alterado com sucesso!');
  }

  _alertMessage(isError, message) {
    if (isError) {
      this.msg = { error: true, message };
    } else {
      this.msg = { error: false, message };
    }
    // It's going to close in 3s.
    setTimeout(() => {
      // Clear message
      this.msg = {};
      if (isError === false) {
        // It's ok! redirect to home
        this.router.navigate(['/', 'home']);
      }
    }, 3000);
  }

  _checkIfExistCurso(form) {

    const localArrayCursos = JSON.parse(localStorage.getItem('ls-cursos'));
    // Checa a existencia do curso na base:
    if (localArrayCursos) {
      const listFilter = localArrayCursos.filter(item => {
        if (item.curso === form.curso || item.id === form.id || item.ch === form.ch ) {
          return true;
        }
      });

      if (listFilter.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  _findCursoLocalStorage(id) {

    const localArrayCursos = JSON.parse(localStorage.getItem('ls-cursos'));
    const getCurso = localArrayCursos.filter(item => {
      if (item.id === id) {
        return true;
      }
    });
    if (getCurso.length > 0) {
      return getCurso[0];
    } else {
      return null;
    }
  }

  onSubmit(form: NgForm) {

    // Checa se o curso já existe na base:
    const check = this._checkIfExistCurso(form.value);

    // UPDATE x CREATE
    if (this.update === true) {
      if (check === true) {
        this.updateCurso(form.value);
      } else {
        // ERROR curso não encontrado
        this._alertMessage(true, 'Curso não encontrado!');
      }
    } else {
    // CREATE
      if (check === false) {
        this.addCurso(form.value);
      } else {
        // ERROR curso já existente na base
        this._alertMessage(true, 'Curso já existe na base!');
      }
    }
  }

  ngOnInit() {
    // Get params in URL
    const id: any = this.route.snapshot.url;

    console.log(id[0].path);
    console.log(id[1].path);
    console.log(Number(id[1].path));

    if (id[1].path === 'new') {
      this.create = true;

    } else {
        this.update = true;

    }

}
 }

