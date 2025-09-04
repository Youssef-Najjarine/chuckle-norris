

import { Injectable, OnInit } from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { HttpHeaders }        from '@angular/common/http';
import { lastValueFrom }      from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {
  
  private theServerURL : string = "http://localhost:8081";

  theJokes : any[] = [];
  constructor(private theServer:HttpClient) {}

  async getAllJokes() : Promise<any[]> {

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
