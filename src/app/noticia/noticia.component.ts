import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import { Noticia } from './../claseNoticia/noticia';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  formNoticia : FormGroup;
  param : any;
  noticia : any;

  constructor(private route : ActivatedRoute, private fb : FormBuilder, private router : Router) { }

  ngOnInit() {
    	
    this.param = this.route.snapshot.params;

    if (Object.keys(this.param).length) {
      this.noticia = this.param;
    } 

    this.initForm(this.noticia);
  }

  nombreControl = new FormControl('User');

   initForm(modificado : Noticia){
     this.formNoticia = this.fb.group({
      titulo : [modificado ? modificado.titulo:'', Validators.required],
      texto : [modificado ? modificado.texto:'', Validators.required],
      fechaDePublicacion : [modificado ? modificado.fechaDePublicacion:'', Validators.required],
      estado : [modificado ? modificado.estado:'', Validators.required],
      
     });
   }
   enviar(){
    let noticiaTemp : Noticia = this.formNoticia.value;
    this.router.navigate(['listar-noticia-component', noticiaTemp]);
    debugger;
   } 

}