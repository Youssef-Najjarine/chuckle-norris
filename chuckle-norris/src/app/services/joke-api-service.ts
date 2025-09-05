

import { Injectable}          from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { HttpHeaders }        from '@angular/common/http';
import { lastValueFrom }      from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {
  
  private theServerURL : string = "http://localhost:8081/Joke";

  randomJoke: any;
  constructor(private theServer:HttpClient) {}

  async getJoke() : Promise<any> {

    const result : any = await lastValueFrom(this.theServer.get<any>(this.theServerURL))
    this.randomJoke = result;
    return result;
  }

  public getRandomJoke(){
    return this.randomJoke;
  }


  async getAllRankJokes() : Promise<any[]> {

    const result : any[] = await lastValueFrom(this.theServer.get<any[]>(this.theServerURL))
    return result;
  }

  async addJoke(newJoke : any) : Promise<any> {

    const headers = new HttpHeaders ({
    'Content-Type' : 'application/json'
    });

    return lastValueFrom(this.theServer.post(this.theServerURL, newJoke, {headers}));
  }
}
