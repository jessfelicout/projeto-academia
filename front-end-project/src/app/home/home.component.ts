import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { isNgTemplate } from '@angular/compiler';
//import { truncateSync } from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public cursos: any = [];
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
