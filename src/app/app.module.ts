import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoticiaComponent } from './noticia/noticia.component';

import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import {MatSelectModule} from '@angular/material/select';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServicioService } from './servicio/servicio.service';
import { ListarNoticiaComponent } from './listar-noticia/listar-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    ListarNoticiaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }