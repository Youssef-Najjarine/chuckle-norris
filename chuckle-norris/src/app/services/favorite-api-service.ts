import { Injectable, OnInit } from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { HttpHeaders }        from '@angular/common/http';
import { lastValueFrom }      from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteApiService {
    private theServerURL : string = "http://localhost:8081";

  theJokes : any[] = [];
  constructor(private theServer:HttpClient) {}

  async getAllFavorites() : Promise<any[]> {

    const result : any[] = await lastValueFrom(this.theServer.get<any[]>(this.theServerURL))
    return result;
  }
  async getFavoriteByRank(rank : number) : Promise<any> {
    const result : any = await lastValueFrom(this.theServer.get<any>(`${this.theServerURL}/rank/${rank}`))
    return result;
  }
  async addFavorite(newFavorite : any) : Promise<any> {

    const headers = new HttpHeaders ({
    'Content-Type' : 'application/json'
    });

    return lastValueFrom(this.theServer.post(this.theServerURL, newFavorite, {headers}));
  }
  async updateFavorite(updateFavorite : any) : Promise<any> {

    const headers = new HttpHeaders ({
      'Content-Type' : 'application/json'
    });

    return lastValueFrom(this.theServer.put(this.theServerURL, updateFavorite, {headers}));
  }
  async deleteFavorite(id : number) : Promise<any> {
    return lastValueFrom(this.theServer.delete(`${this.theServerURL}/${id}`));
  }
}