import {Component, OnInit } from '@angular/core';
import { JokeApiService } from '../../services/joke-api-service';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  randomJoke: any = {}
  constructor(private jokeApiService: JokeApiService) {}
    //this.randomJoke =  this.jokeApiService.getRandomJoke();
   
  async ngOnInit()
  {
    this.randomJoke = await this.jokeApiService.getJoke();
    this.randomJoke = this.randomJoke;
    console.log("THE RANDOM JOKE: ", this.randomJoke);
  }

  async getNewJoke() {
    this.randomJoke =  await this.jokeApiService.getJoke();
    //this.randomJoke = this.jokeApiService.getRandomJoke();
    this.randomJoke = this.randomJoke;
    
  }

  

}
