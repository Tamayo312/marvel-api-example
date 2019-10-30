import { map } from 'rxjs/operators';
import { Md5 } from 'ts-md5/dist/md5';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const PrivateKey = '7f5f3d2a2c5ced8d507867c2477699c82cf93ab6';
const PublicKey = '7e6ebf4f236b3f7cc478e8ca54e259f1';
const TimeStamp = new Date().getTime();
const hash = Md5.hashStr(TimeStamp + PrivateKey + PublicKey);

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  id;
  constructor(private http: HttpClient) {}

  allHeroes() {
    console.log('conseguido');
    const url = 'http://gateway.marvel.com/v1/public/comics?formatType=collection&orderBy=modified' +
      '&ts=' + TimeStamp + '&limit=25&apikey=' + PublicKey
    + '&hash=' + hash;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.data
      ));
  }

  allCreators() {
    console.log('conseguido');
    const url = 'https://gateway.marvel.com/v1/public/characters?orderBy=-modified&ts=' + TimeStamp + '&limit=25&apikey=' + PublicKey
      + '&hash=' + hash;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.data
    ));
  }

  getCharacterByID(id) {
    console.log('conseguido');
    const url = 'https://gateway.marvel.com:443/v1/public/characters/' + id + '?ts=' + TimeStamp + '&limit=1&apikey=' + PublicKey
      + '&hash=' + hash;
    return this.http.get(url)
      .pipe(map((response: any) => response.data));
  }

  getSeriesByCharacter(id) {
    console.log('conseguido');
    const url = 'https://gateway.marvel.com/v1/public/characters/' + id
      + '/series?orderBy=startYear&ts=' + TimeStamp + '&limit=25&apikey=' + PublicKey
      + '&hash=' + hash;
    return this.http.get(url)
      .pipe(map((response: any) => response.data));
  }

  // Métodos para trabajar con el servidor en 8080

  anadirComic(comic) {
    const title = comic.title;
    const issueNumber = comic.issueNumber;
    const description = comic.description;
    const pages = comic.pageCount;
    const img = comic.thumbnail.path;

    const urlServer = 'http://localhost:8080';
    return this.http.post(urlServer + '/api/comics', {title: title,
      issueNumber: issueNumber,
      description: description,
      pages: pages,
      img: img})
      .pipe(map((response: any) => console.log(response)));
  }

  obtenerComics() {
    const urlServer = 'http://localhost:8080';
    return this.http.get(urlServer + '/api/comics')
      .pipe(map((response: any) => response.listadoComics));
  }

  obtenerComic(idComic) {
    const urlServer = 'http://localhost:8080';
    return this.http.get(urlServer + '/api/comics/' + idComic)
      .pipe(map((response: any) => console.log(response)));
  }

  modificarComic(idComic) {
    const urlServer = 'http://localhost:8080';
    return this.http.put(urlServer + '/api/comics/' + idComic, '')
      .pipe(map((response: any) => console.log(response)));
  }

  eliminarComic(idComic) {
    const urlServer = 'http://localhost:8080';
    console.log('elimino comic: ' + idComic);
    return this.http.delete(urlServer + '/api/comics/' + idComic)
      .pipe(map((response: any) => console.log(response)));
  }
}
