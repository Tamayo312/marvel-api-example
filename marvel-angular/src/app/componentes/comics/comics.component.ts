import { ComicsService } from './../../services/comics.service';
import { ApiService } from '../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics = [];

  constructor(private servicioComics: ApiService) {
    this.servicioComics.allHeroes().subscribe((data: any[]) => {
      console.log(data);
      this.comics = data;
    });
  }
  ngOnInit() {
  }
  anadirComic(c) {
    console.log('quiero añadir el comic ' + c.title + 'con issueNumber: ' + c.issueNumber);
    this.servicioComics.anadirComic(c)
      .subscribe(comic => console.log(comic));
  }
}
