import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComicsComponent } from './componentes/comics/comics.component';
import { AppRoutingModule } from './componentes/app-routing.module';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CreatorsComponent } from './componentes/creators/creators.component';
import { DetallesPersonComponent } from './componentes/detalles-person/detalles-person.component';
import { SeriesPorPersonajeComponent } from './componentes/series-por-personaje/series-por-personaje.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { ListadoComicsComponent } from './componentes/listado-comics/listado-comics.component';
import { ComicComponent } from './componentes/comic/comic.component';



@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    HomeComponent,
    NavbarComponent,
    CreatorsComponent,
    DetallesPersonComponent,
    SeriesPorPersonajeComponent,
    FavoritoComponent,
    ListadoComicsComponent,
    ComicComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
