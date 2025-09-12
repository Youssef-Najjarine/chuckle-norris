import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeApiService } from '../../services/joke-api-service';
import { Observable, forkJoin, from } from 'rxjs';
import { concatMap, toArray, finalize, map } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-rank-joke',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './rank-joke.html',
  styleUrl: './rank-joke.css'
})
export class RankJoke implements OnInit {
  jokes$!: Observable<any[]>;
  loading = false;
  constructor(private jokeApiService: JokeApiService, private http: HttpClient) {}
  ngOnInit() {
    this.getNewJokes();
  }
  getNewJokes() {
    this.loading = true;
    this.jokes$ = forkJoin([
      this.getUniqueJoke(),
      this.getUniqueJoke(),
      this.getUniqueJoke()
    ]).pipe(
      finalize(() => (this.loading = false))
    );
  }

  private getUniqueJoke(): Promise<any> {
    const url = `http://localhost:8081/Joke?_cacheBust=${Date.now() + Math.random()}`;
    return lastValueFrom(this.http.get<any>(url));
  }
  onHeartToggle1(event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      console.log('You liked the first joke!');
    } else {
      console.log('You unliked the first joke!');
    }
  }
  onHeartToggle2(event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      console.log('You liked the second joke!');
    } else {
      console.log('You unliked the second joke!');
    }
  }
  onHeartToggle3(event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      console.log('You liked the third joke!');
    } else {
      console.log('You unliked the third joke!');
    }
  }
}