import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path: 'card',
    component: CardsComponent
  },
  {
    path: 'movies',
    loadChildren: 'app/movies/movies.module#MoviesModule',
  },
  {
    path: '**',
    redirectTo: 'card'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
