import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  idComic;
  comic = [];

  constructor(private apiService: ApiService, private parametro: ActivatedRoute) {
    this.idComic = parametro.snapshot.paramMap.get('id');
    console.log('ID:' + this.idComic);
    this.apiService.obtenerComic(this.idComic)
      .subscribe((data: any) =>{
        this.comic = data;
      });
  }

  ngOnInit() {
  }
}
