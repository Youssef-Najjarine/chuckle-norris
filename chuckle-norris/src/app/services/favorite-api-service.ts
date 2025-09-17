import { Injectable } from '@angular/core';
import { FavoriteLayout } from '../interfaces/favorite-layout';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteApiService {
  private theServerURL: string = 'http://localhost:8081';
  private favorites: FavoriteLayout[] = [
    {
      favoriteId: 1,
      value: 'Chuck Norris can divide by zero.',
      rank: 1,
      isFavorite: true,
      userId: Math.floor(Math.random() * 1000) + 1, // Random userId
      date: '9/15/2025',
    },
    {
      favoriteId: 2,
      value: 'Chuck Norris can win a staring contest with a mirror.',
      rank: 2,
      isFavorite: true,
      userId: Math.floor(Math.random() * 1000) + 1,
      date: '9/16/2025',
    },
    {
      favoriteId: 3,
      value: 'Chuck Norris can make a fire by rubbing two ice cubes together.',
      rank: 3,
      isFavorite: true,
      userId: Math.floor(Math.random() * 1000) + 1,
      date: '9/17/2025',
    },
  ];
  private favoritesSubject = new BehaviorSubject<FavoriteLayout[]>(this.favorites);
  favorites$: Observable<FavoriteLayout[]> = this.favoritesSubject.asObservable();

  constructor() {
    // Initialize with hardcoded data
    // NEED TO REPLACE WITH ACTUAL SERVER CALL
    this.favoritesSubject.next(this.favorites);
  }

  getAllFavorites(): Observable<FavoriteLayout[]> {
    // NEED TO REPLACE WITH ACTUAL SERVER CALL
    /*
    async getAllFavorites(): Promise<any[]> {
      const result: any[] = await lastValueFrom(this.theServer.get<any[]>(this.theServerURL));
      return result;
    }
    */
    return this.favorites$;
  }

  getFavoriteByRank(rank: number): Observable<FavoriteLayout | undefined> {
    // NEED TO REPLACE WITH ACTUAL SERVER CALL
    /*
    async getFavoriteByRank(rank: number): Promise<any> {
      const result: any = await lastValueFrom(this.theServer.get<any>(`${this.theServerURL}/rank/${rank}`));
      return result;
    }
    */
    return new Observable((observer) => {
      const favorite = this.favorites.find((f) => f.rank === rank);
      observer.next(favorite);
      observer.complete();
    });
  }

  addFavorite(newFavorite: FavoriteLayout): void {
    // NEED TO REPLACE WITH ACTUAL SERVER CALL
    /*
    async addFavorite(newFavorite: any): Promise<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return lastValueFrom(this.theServer.post(this.theServerURL, newFavorite, { headers }));
    }
    */
    if (!this.favorites.some((f) => f.favoriteId === newFavorite.favoriteId)) {
      this.favorites.push(newFavorite);
      this.favoritesSubject.next(this.favorites);
    }
  }

  updateFavorite(updateFavorite: FavoriteLayout): void {
    // NEED TO REPLACE WITH ACTUAL SERVER CALL
    /*
    async updateFavorite(updateFavorite: any): Promise<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return lastValueFrom(this.theServer.put(this.theServerURL, updateFavorite, { headers }));
    }
    */
    const index = this.favorites.findIndex((f) => f.favoriteId === updateFavorite.favoriteId);
    if (index !== -1) {
      this.favorites[index] = updateFavorite;
      this.favoritesSubject.next(this.favorites);
    }
  }

  deleteFavorite(id: number): void {
    // NEED TO REPLACE WITH ACTUAL SERVER CALL
    /*
    async deleteFavorite(id: number): Promise<any> {
      return lastValueFrom(this.theServer.delete(`${this.theServerURL}/${id}`));
    }
    */
    this.favorites = this.favorites.filter((f) => f.favoriteId !== id);
    this.favoritesSubject.next(this.favorites);
  }
}