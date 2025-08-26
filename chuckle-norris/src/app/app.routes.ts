import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CreateJoke } from './components/create-joke/create-joke';
import { RankJoke } from './components/rank-joke/rank-joke';
import { Favorites } from './components/favorites/favorites';
import { Login } from './components/login/login';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'createJoke', component: CreateJoke },
  { path: 'rankJoke', component: RankJoke },
  { path: 'favorites', component: Favorites },
  { path: 'login', component: Login }
];