import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { JokeLayout } from './interfaces/joke-layout';
import { UserLayout } from './interfaces/user-layout';
import { FavoriteLayout } from './interfaces/favorite-layout';
import { JokeApiService } from './services/joke-api-service';
import { UserApiService } from './services/user-api-service';
import { FavoriteApiService } from './services/favorite-api-service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit{
  protected title = 'Chuckle Norris';
  // Name the service objectand have it dependency injected into component processing
  constructor(private jokeApiService : JokeApiService) {}

  // define a data structure to hold the for the component
  // (data comes from APU calls)
  // theGamblers : any[] = [];
  theJoke : any = {};
  // If you wil be adding to teh API data source
  // define an object to hold the data to be added

  // newGambler : GamblerDataLayout = {
  //                                     id: 0,
  //                                     name: "",
  //                                     address: "",
  //                                     salary : 0,
  //                                     birthDate : ""
  //                                  }
// ngOnInit() is run when Angular start processing the page
// Typically this is where you call the API to get the initial 
//           copy of the data from the data source
  async ngOnInit() 
  {
    this.theJoke = await this.jokeApiService.getJoke();
    console.log("THE RANDOM JOKE: ", this.theJoke);
  }
  
  // async addGambler(newGambler : GamblerDataLayout) {
  //   // Call the API to add the new object to the data source
  //   await this.gamblerApiService.addGambler(newGambler)
  //   // Refresh the data in the component tp get the new data
  //   // (You could also add the new object the data source yourself)
  //   //  theGamblers.add(newGambler)
  //   this.theGamblers = await this.gamblerApiService.getAllGamblers()
  // }
}
