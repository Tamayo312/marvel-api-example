import { Injectable, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  @Input() comic;

  constructor(private http: HttpClient) {}

}
