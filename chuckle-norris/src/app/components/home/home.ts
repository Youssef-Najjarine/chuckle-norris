import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeApiService } from '../../services/joke-api-service';
import { CommonModule } from '@angular/common';
import { from, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

type Joke = { value: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  randomJoke$!: Observable<Joke>;

  constructor(private jokeApiService: JokeApiService) {}

  ngOnInit() {
    this.getNewJoke();
  }

  getNewJoke() {
    this.randomJoke$ = from(this.jokeApiService.getJoke());
  }
}