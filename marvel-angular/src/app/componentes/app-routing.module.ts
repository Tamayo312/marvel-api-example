import { ComicComponent } from './comic/comic.component';
import { FavoritoComponent } from './../favorito/favorito.component';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorsComponent } from './creators/creators.component';
import { ListadoComicsComponent} from './listado-comics/listado-comics.component';
import { DetallesPersonComponent } from './detalles-person/detalles-person.component';

const routes: Routes = [
  { path: 'comics', component: ComicsComponent },
  { path: 'home', component: HomeComponent},
  { path: 'characters', component: CreatorsComponent},
  { path: 'characters/:id', component: DetallesPersonComponent},
  { path: 'favs', component: FavoritoComponent},
  { path: 'lista', component: ListadoComicsComponent},
  { path: 'lista/:id', component: ComicComponent},
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
