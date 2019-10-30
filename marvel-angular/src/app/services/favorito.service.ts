import { HttpClient } from '@angular/common/http';
import { Injectable, Input} from '@angular/core';
import { Favorito } from '../models/favorito';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  @Input() serie;

  url = 'http://localhost:8080';
  body = '';

  favoritos = [];
  // seleccionFavoritos: Favorito = [];

  constructor(private http: HttpClient) {}

  /*anadirAFavoritos(serie) {
    this.favoritos.push(serie);
    console.log('entra a anadir');
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    console.log('añadido: ' + serie);
  }*/

  /*anadirPorHttp(serie) {
    const comic = JSON.stringify(this.serie);
    return this.http.post(this.url + '/api/comics/1', {comic})
      .pipe(map((response: any) => console.log(response)));
  }*/

  obtenerFavoritos() {
    /*for (let i = 0; i < localStorage.length; i++) {
      console.log('entra en for');
      const clave = localStorage.key(i);
      let valor = new Favorito();
      console.log('Valor: ' + valor);
      valor = JSON.parse(localStorage.getItem(clave));
      this.seleccionFavoritos = valor;
      return this.seleccionFavoritos;
    }*/
    return JSON.parse(localStorage.getItem('favoritos'));
  }

  eliminar() {
    localStorage.removeItem('favoritos');
  }

  eliminarFavorito() {

  }
}
