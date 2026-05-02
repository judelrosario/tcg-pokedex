import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokecard } from './pokecard/pokecard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokecard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test');
}
