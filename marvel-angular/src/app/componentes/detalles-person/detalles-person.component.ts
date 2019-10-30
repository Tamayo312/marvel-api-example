import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Favorito } from 'src/app/models/favorito';

@Component({
  selector: 'app-detalles-person',
  templateUrl: './detalles-person.component.html',
  styleUrls: ['./detalles-person.component.css']
})
export class DetallesPersonComponent implements OnInit {


  idPerson;
  personaje = [];

  constructor(private servicioPersonaje: ApiService, private router: Router, private parametro: ActivatedRoute) {
    this.idPerson = parametro.snapshot.paramMap.get('id');
    console.log('ID: ' + this.idPerson);
    this.servicioPersonaje.getCharacterByID(this.idPerson).subscribe((data: any[]) => {
      console.log(data);
      this.personaje = data;
    });
  }
  ngOnInit() {
  }
}
