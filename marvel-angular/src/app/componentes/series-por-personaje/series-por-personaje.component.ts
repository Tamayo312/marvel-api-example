import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FavoritoService } from 'src/app/services/favorito.service';


@Component({
  selector: 'app-series-por-personaje',
  templateUrl: './series-por-personaje.component.html',
  styleUrls: ['./series-por-personaje.component.css']
})
export class SeriesPorPersonajeComponent implements OnInit {

  idPerson;
  series = [];
  i;

  // tslint:disable-next-line:max-line-length
  constructor(private servicioSeries: ApiService, private favoritoService: FavoritoService, private router: Router, private parametro: ActivatedRoute) {
    this.idPerson = parametro.snapshot.paramMap.get('id');
    this.servicioSeries.getSeriesByCharacter(this.idPerson).subscribe((data: any[]) => {
      console.log(data);
      this.series = data;
    });
  }

  ngOnInit() {

  }

  /*anadirAFavoritos(s: any) {
    for (this.i = 0; this.series.length; this.i++) {
      this.favoritoService.anadirPorHttp(this.series[this.i]);
    }
  }*/

  /*anadirAFavoritos(s: any) {
    this.favoritoService.anadirPorHttp(s);
  }*/
}
