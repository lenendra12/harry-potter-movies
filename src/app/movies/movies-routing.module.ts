import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';


const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'movies',
    redirectTo: ''
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
