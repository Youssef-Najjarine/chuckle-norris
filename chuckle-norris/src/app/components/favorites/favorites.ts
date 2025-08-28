import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites {
  favorites: any[] = [
    {quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", date: "1/1/25", rank: 1},
    {quote: "Time N Affection", date: "07/06/1985", rank: 3},
    {quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", date: "09/25/2012" , rank: 2},
    {quote: "Bohemian Rhapsody", date: "08/16/2013", rank: 1},
    {quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", date: "07/06/1985", rank: 3},
    {quote: "Toosie Slide", date: "09/25/2012", rank: 2},
    {quote: "Danza Kuduro", date: "08/16/2013", rank: 1},
    {quote: "Candy Shop", date: "07/06/1985", rank: 3}
  ];

        sortFavoritesAsc(): void {
        this.favorites.sort((a, b) => a.rank - b.rank);
      }

      sortFavoritesDesc(): void {
        this.favorites.sort((a, b) => b.rank - a.rank);
      }
}
