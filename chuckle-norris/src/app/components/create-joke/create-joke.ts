import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteApiService } from '../../services/favorite-api-service';
import { FavoriteLayout } from '../../interfaces/favorite-layout';

@Component({
  selector: 'app-create-joke',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-joke.html',
  styleUrls: ['./create-joke.css'],
})
export class CreateJoke {
  newJoke: string = '';
  userId: number = Math.floor(Math.random() * 1000) + 1;

  constructor(private favoriteApiService: FavoriteApiService) {}

  onSubmit() {
    if (this.newJoke.trim()) {
      const newFavorite: FavoriteLayout = {
        favoriteId: Date.now() + Math.random(),
        value: this.newJoke.trim(),
        rank: 1,
        isFavorite: true,
        userId: this.userId,
        date: new Date().toLocaleDateString('en-US'),
      };
      this.favoriteApiService.addFavorite(newFavorite);
      this.newJoke = '';
    }
  }
}