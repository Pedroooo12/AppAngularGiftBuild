import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//importamos los componentes
import { GiftsPageComponent } from './gifts-page/gifts-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GiftsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [
    //solo exportamos el archivo principal de el modulo
    GiftsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GiftsModule { }
