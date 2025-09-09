import { Component, OnInit } from '@angular/core';
import { JokeApiService } from '../../services/joke-api-service';
import { concat } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-rank-joke',
  imports: [RouterOutlet],
  templateUrl: './rank-joke.html',
  styleUrl: './rank-joke.css'
})
export class RankJoke implements OnInit {
    joke1 : any = {};
    joke2: any = {};
    joke3: any = {};
    constructor(private jokeApiService: JokeApiService) {
    }

    async ngOnInit()
    {
    //   this.joke1 = await this.getNewJoke1();
    //   this.joke2 = await this.getNewJoke2();
    //   this.joke3 = await this.getNewJoke3();
    }
    async getNewJokes() {
       this.getNewJoke1();
       this.getNewJoke2();
       this.getNewJoke3();
    //   console.log("THE RANDOM JOKE: ", this.joke1, this.joke2, this.joke3);
    }
    async getNewJoke1() {
      this.joke1 =  await this.jokeApiService.getJoke();
      this.joke1 = this.joke1
    }
    async getNewJoke2() {
        this.joke2 = await this.jokeApiService.getJoke();
        this.joke2 = this.joke2
    }
    async getNewJoke3() {
      this.joke3 = await this.jokeApiService.getJoke();
      this.joke3 = this.joke3
    }    
 }
