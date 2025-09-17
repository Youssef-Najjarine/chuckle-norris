import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteApiService } from '../../services/favorite-api-service';
import { FavoriteLayout } from '../../interfaces/favorite-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css'],
})
export class Favorites implements OnInit {
  favorites$!: Observable<FavoriteLayout[]>;

  constructor(private favoriteApiService: FavoriteApiService) {}

  ngOnInit() {
    this.favorites$ = this.favoriteApiService.getAllFavorites();
  }

  sortFavoritesAsc(): void {
    this.favorites$ = this.favoriteApiService.getAllFavorites().pipe(
      map((favorites) =>
        [...favorites].sort((a, b) => (a.rank || 0) - (b.rank || 0))
      )
    );
  }

  sortFavoritesDesc(): void {
    this.favorites$ = this.favoriteApiService.getAllFavorites().pipe(
      map((favorites) =>
        [...favorites].sort((a, b) => (b.rank || 0) - (a.rank || 0))
      )
    );
  }

  deleteFavorite(favoriteId: number): void {
    this.favoriteApiService.deleteFavorite(favoriteId);
  }
}