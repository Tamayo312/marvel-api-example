import { FavoritoService } from 'src/app/services/favorito.service';
import { Favorito } from 'src/app/models/favorito';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {

  favoritos: Favorito = [];

  constructor(private favService: FavoritoService) {
    this.favoritos = this.favService.obtenerFavoritos();
  }

  ngOnInit() {

  }

  eliminar() {
    /*console.log('entra a eliminar...');
    this.favoritos.forEach(favorito => {
      console.log('favorito: ' + favorito.id);
      if (favorito.id === localStorage.getItem('favoritos').search(favorito.id)) {
        console.log('eliminando ' + favorito.id);
        this.favoritos.splice(favorito);
        // localStorage.removeItem('favoritos');
       }
      console.log('no elimina');
  });*/
    this.favService.eliminar();
  }
}
