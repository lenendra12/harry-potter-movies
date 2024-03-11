import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { DurationPipe } from '../pipes/duration.pipe';
import { BudgetPipe } from '../pipes/budget.pipe';


@NgModule({
    declarations: [MovieComponent, MovieDetailsComponent, MovieListComponent, DurationPipe, BudgetPipe],
    providers: [MovieService],
    imports: [
        CommonModule, MoviesRoutingModule, HttpClientModule, FormsModule
    ]
})
export class MoviesModule { }
