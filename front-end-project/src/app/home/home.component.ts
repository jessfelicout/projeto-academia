import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
=======
import { NgForm } from '@angular/forms';
//import { isNgTemplate } from '@angular/compiler';
//import { truncateSync } from 'fs';
>>>>>>> 9a02175f9251853c63cc4ff47223ae0afe29e5b0

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  public cursos: any = [];
<<<<<<< HEAD
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
=======
  constructor() { }

  ngOnInit() {

    this.listCursos();
    // const basecursos = [
    //   {id: 1, nome: 'Python Completo', downloads: 900},
    //   {id: 5, nome: 'Java Completo', downloads: 800},
    //   {id: 6, nome: 'C/C++', downloads: 700},
    //   {id: 2, nome: 'Desenvolvimento web completo', downloads: 560},
    //   {id: 4, nome: 'Metodologias Ágeis completo', downloads: 450},
    //   {id: 7, nome: 'R completo', downloads: 450},
    //   {id: 3, nome: 'JavaScript: React e Angular', downloads: 350},
    //   {id: 8, nome: 'Lógica de programação para iniciantes', downloads: 300},
    //   {id: 9, nome: 'Curso de Git e Github', downloads: 140},
    //   {id: 10, nome: 'Desenvolvimento mobile 101', downloads: 90}
    // ]

    //localStorage.setItem('ls-base', JSON.stringify(basecursos));
    //this.base = JSON.parse(localStorage.getItem('ls-base'));
  }

  listCursos(){
    const listcursos = localStorage.getItem('ls-cursos');
    this.listCursos = JSON.parse(listcursos)

  }

  addCurso(form: NgForm){
    //return 'hello word';
    let {curso, id} = form.value; //podem colocar mais variáveis para o valor de formulário

    if (curso && id){
      //validate
      const listcursos = localStorage.getItem('ls-cursos');
      if (listcursos && listcursos.length > 0){

        //converte string em array ou objeto
        let list = JSON.parse(listcursos);
        let findcurso = list.filter(item =>{
          if(item.curso === curso){return true;}
        })

        if(findcurso.length>0){
          list.map(item =>{
            if(item.curso === curso){item = form.value}
          })
        }else{
          list.push(form.value)
        }

    }else{
      //add object na lista
        const listArray = [];
        listArray.push(form.value)
        //converte array em string e cria localstorage
        localStorage.setItem('ls-cursos', JSON.stringify(listArray))
      }
    }
    //iniciar desempenho igual a 0
    //buscar código do curso e colocar
    this.listCursos

>>>>>>> 9a02175f9251853c63cc4ff47223ae0afe29e5b0
  }

  removeCurso(cursodel){
    const listcursos = localStorage.getItem('ls-cursos')
    let list = JSON.parse(listcursos);
    let updatelist = list.filter(item =>{
      if(item != cursodel){
        return true;
      }
    })

    localStorage.setItem('ls-cursos',JSON.stringify(updatelist));
  }

 // public base: any = {};

}

