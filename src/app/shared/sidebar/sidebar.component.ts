import { Component } from '@angular/core';
import { GiftsService } from 'src/app/gifts/services/gifts.service';

import { Gif, SearchGiftsResponse } from 'src/app/gifts/interfaces/gifts.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  resultados: Gif[] = [];

  get historial(){
    return this.giftService.historial;
  }

  constructor( private giftService: GiftsService , private htpp: HttpClient) {

  }

  buscar( termino: string ){
    this.giftService.buscarGifts( termino );
  }

  eliminar(){
    this.giftService.borrarHisotorial();
    localStorage.removeItem("resultados");
    localStorage.removeItem("historial");
  }

}
