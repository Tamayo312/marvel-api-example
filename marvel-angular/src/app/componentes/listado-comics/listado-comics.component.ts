import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-comics',
  templateUrl: './listado-comics.component.html',
  styleUrls: ['./listado-comics.component.css']
})
export class ListadoComicsComponent implements OnInit {

  comics = [];
  constructor(private apiService: ApiService) {
    this.apiService.obtenerComics().subscribe((data: any[]) =>{
      console.log(data);
      this.comics = data;
    });
   }

  ngOnInit() {
  }

  modificarComic(comicId) {
    const posicion = this.comics.findIndex( i => i._id === comicId);
    console.log('modifico posicion: ' + posicion);
    this.comics[posicion].leido = true;
    this.apiService.modificarComic(comicId)
      .subscribe((this.comics[posicion]));
  }

  eliminarComic(idComic) {
    const posicion = this.comics.findIndex( i => i._id === idComic);
    console.log('borro posicion: ' + posicion);
    this.comics.splice(posicion, 1);
    this.apiService.eliminarComic(idComic)
      .subscribe((this.comics[posicion]));
  }
}
