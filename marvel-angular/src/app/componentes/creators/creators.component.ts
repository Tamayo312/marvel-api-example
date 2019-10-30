import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {
  creators = [];
  constructor(private servicioComics: ApiService) {
    this.servicioComics.allCreators().subscribe((data: any[]) => {
      console.log(data);
      this.creators = data;
    });
  }
  ngOnInit() {
  }

}
