import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokecard } from './pokecard/pokecard';
import { IPokecard } from './pokecard/pokecard.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokecard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test');
  data = signal<IPokecard>({
    id: 1,
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    hp: 45,
    description: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.',
    attacks: [
      {
        name: 'Vine Whip',
        damage: 45,
        cost: ['Grass'],
        description: 'The target is struck with slender, whiplike vines to inflict damage.'
      }
    ],
    image: "/img/BulbasaurCard.png"
  });
  data2 = signal<IPokecard>({
    id: 2,
    name: 'Ivysaur',
    type: ['Grass', 'Poison'],
    hp: 60,
    description: 'When the bulb at his back grow large, it is said to be full of life.',
    attacks: [
      {
        name: 'Vine Whip',
        damage: 30,
        cost: ['Grass','Normal','Normal'],
        description: ''
      },
      {
        name: 'Poisonpowder',
        damage: 20,
        cost: ['Grass','Grass','Grass'],
        description: 'The defending Pokémon is now Poisoned.'
      }
    ],
    image: "/img/IvysaurCard.png"
  });
  pokecards = [this.data(), this.data2()];
}
