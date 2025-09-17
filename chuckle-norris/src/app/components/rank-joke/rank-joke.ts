import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeApiService } from '../../services/joke-api-service';
import { FavoriteApiService } from '../../services/favorite-api-service';
import { FavoriteLayout } from '../../interfaces/favorite-layout';
import { Observable, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-rank-joke',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './rank-joke.html',
  styleUrls: ['./rank-joke.css'],
})
export class RankJoke implements OnInit {
  jokes$!: Observable<any[]>;
  ranks: (number | undefined)[] = [undefined, undefined, undefined];
  favorites: FavoriteLayout[] = [];
  userId: number = Math.floor(Math.random() * 1000) + 1;

  constructor(
    private jokeApiService: JokeApiService,
    private favoriteApiService: FavoriteApiService,
    private http: HttpClient
  ) {
    this.favoriteApiService.getAllFavorites().subscribe((favs) => {
      this.favorites = favs;
    });
  }

  ngOnInit() {
    this.getNewJokes();
  }

  getNewJokes() {
    this.loading = true;
    this.ranks = [undefined, undefined, undefined]; // Reset ranks
    this.jokes$ = forkJoin([
      this.getUniqueJoke(),
      this.getUniqueJoke(),
      this.getUniqueJoke(),
    ]).pipe(finalize(() => (this.loading = false)));
  }

  private getUniqueJoke(): Promise<any> {
    const url = `http://localhost:8081/Joke?_cacheBust=${Date.now() + Math.random()}`;
    return lastValueFrom(this.http.get<any>(url));
  }

  onHeartToggle(event: any, joke: any, index: number) {
    const isChecked = event.target.checked;
    if (isChecked) {
      const newFavorite: FavoriteLayout = {
        favoriteId: Date.now() + Math.random(),
        value: joke.value,
        rank: this.ranks[index],
        isFavorite: true,
        userId: this.userId,
        date: new Date().toLocaleDateString('en-US'),
      };
      this.favoriteApiService.addFavorite(newFavorite);
    } else {
      const favorite = this.favorites.find((f) => f.value === joke.value && f.userId === this.userId);
      if (favorite) {
        this.favoriteApiService.deleteFavorite(favorite.favoriteId);
      }
    }
  }

  onRankChange(index: number) {
    this.ranks[index] = this.ranks[index] ? Number(this.ranks[index]) : undefined;
  }

  isFavorite(jokeId: string): boolean {
    return this.favorites.some((f) => f.value === jokeId && f.userId === this.userId);
  }

  isRankTaken(rank: number, currentIndex: number): boolean {
    return this.ranks.some((r, i) => r === rank && i !== currentIndex);
  }

  private loading = false;
}