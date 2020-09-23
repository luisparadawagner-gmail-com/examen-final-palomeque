import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiaComponent } from './../noticia/noticia.component';


import { Noticia } from './../claseNoticia/noticia';

import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-listar-noticia',
  templateUrl: './listar-noticia.component.html',
  styleUrls: ['./listar-noticia.component.css']
})
export class ListarNoticiaComponent implements OnInit {

  displayedColumns: string [] = ['titulo' , 'texto' , 'fechaDePublicacion', 'estado', 'modificar', 'editarEstado'];
  dataSource : any[] = [];
  param : any;

  constructor(private servicioService : ServicioService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {

    this.getNoticia();
    

  }

  getNoticia(){
    this.servicioService.getNoticia().subscribe((noticia)=>{
      
      this.dataSource = noticia;

      this.param = this.route.snapshot.params;
      if (Object.keys(this.param).length > 0){
        this.recibeNoticia(this.param);
      }
    });
  }


  recibeNoticia(noticia : NoticiaComponent){
    debugger;
    this.dataSource.push(noticia);
  }

  

  editar(noticia) {	
    let noticiaTemp : Noticia = {
      titulo : noticia.titulo,
      texto : noticia.texto,
      fechaDePublicacion : noticia.fechaDePublicacion,
      estado : noticia.estado
      
    }

    this.router.navigate(['/noticia-component', noticia]);
    debugger;	
  }
  
  agregar() {
    this.router.navigate(['/noticia-component']);
    debugger;	
  }

  editarEstado(noticia){
    this.router.navigate([]);
  }

  
}
