import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private giftsService: GiftsService){

  }

  buscar( termino: string ){

    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length != 0){
      this.giftsService.buscarGifts( valor );
      this.txtBuscar.nativeElement.value = '';
    }else{
      return;
    }
  }
}
