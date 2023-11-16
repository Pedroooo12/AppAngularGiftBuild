import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGiftsResponse } from '../interfaces/gifts.interface';

@Injectable({
  //lo eleva a un nivel global de servicios
  providedIn: 'root'
})
export class GiftsService {

  private apiKey: string = 'k7jzA2uG0sAuB9wtri2cTIS20YQTBOcq';

  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'

  private _historial: string[] = [];

  public resultados: Gif[] = [];

  constructor( private htpp: HttpClient ){
    //este es el lugar ideal para cargar localStorage solo se ejecuta una vez
    if( localStorage.getItem('historial') ){
      this._historial = JSON.parse( localStorage.getItem('historial')! );
    }

    this.resultados = JSON.parse(localStorage.getItem('resultados')!)
  }


  get historial() {
    return [...this._historial];
  }

  borrarHisotorial(){
    this._historial = [];
  }


  buscarGifts( query: string ){

    query = query.trim().toLowerCase();

    if( !this._historial.includes( query )){

      //insertamos el query solo si no existe
      this._historial.unshift( query );

       //gracias a esto no puede pasar de 10 el numero de botones.
      this._historial = this._historial.splice(0, 10);

      //guardamos en el localStorage el historial
      localStorage.setItem('historial', JSON.stringify( this._historial ));
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);

    this.htpp.get<SearchGiftsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe( (resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });

    
  }
}
