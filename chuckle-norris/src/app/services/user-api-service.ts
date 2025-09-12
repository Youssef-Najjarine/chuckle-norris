import { Injectable, OnInit } from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { HttpHeaders }        from '@angular/common/http';
import { lastValueFrom }      from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
   private theServerURL : string = "http://localhost:8081/User/Create";

  theJokes : any[] = [];
  constructor(private theServer:HttpClient) {}

  async getUserInfo() : Promise<any[]> {

    const result : any[] = await lastValueFrom(this.theServer.get<any[]>(this.theServerURL))
    return result;
  }

  async addUser(newUser : any) : Promise<any> {

    const headers = new HttpHeaders ({
    'Content-Type' : 'application/json'
    });

    return lastValueFrom(this.theServer.post(this.theServerURL, newUser, {headers}));
  }

  async updateUser(updatedUser : any) : Promise<any> {

    const headers = new HttpHeaders ({
      'Content-Type' : 'application/json'
    });

    return lastValueFrom(this.theServer.put(this.theServerURL, updatedUser, {headers}));
  }

  async deleteUser(id : number) : Promise<any> {
    return lastValueFrom(this.theServer.delete(`${this.theServerURL}/${id}`));
  }
}
