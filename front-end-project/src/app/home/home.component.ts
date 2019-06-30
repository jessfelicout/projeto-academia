import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  public cursos: any = [];
  public create: boolean;
  public flag: boolean;
  public msg: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

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

addMeusCursos(curso){

  let localArrayCursos = [];
  const listcursos = JSON.parse(localStorage.getItem('ls-mcursos'));

  console.log(listcursos);
  console.log(curso);

  //checa se o curso já está adicionado a meus cursos
  for (let item of listcursos){
    if(curso.id === item.id){
      console.log(curso.id);
      console.log(item.id);
      this.flag = true;
    }
  }

  if(this.flag === true){ console.log("já tem o curso");
  this._alertMessage(false, 'Curso já pertence à "Meus cursos"!');}
  else{
    console.log("não tem o curso");
    const newcurso = {id: curso.id ,nome: curso.curso, desempenho:0};

    console.log(newcurso);

    //pega todos os cursos armazenados no localstorage da base
    const cursos_base = JSON.parse(localStorage.getItem('ls-mcursos'));
    if ( cursos_base && cursos_base.length > 0 ) {
      localArrayCursos = cursos_base;
    }

    localArrayCursos.push(newcurso);

    console.log(localArrayCursos);

    localStorage.setItem('ls-mcursos', JSON.stringify(localArrayCursos));
    this._alertMessage(false, 'Curso adicionado a "Meus Cursos"!');
  }

}


  listCursos() {

    this.cursos = (JSON.parse(localStorage.getItem('ls-cursos')))
  }


removeCurso(id) {
    let cursos = [];
    let updatecursos = [];
    cursos = JSON.parse(localStorage.getItem('ls-cursos'));

    updatecursos = cursos.filter(item => item.id !== id);

    // Save on localstorage
    localStorage.setItem('ls-cursos', JSON.stringify(updatecursos));

    // Update table
    this.listCursos();
  }

  ngOnInit() {

      this.listCursos();
  }

}

