import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokecard } from './pokecard/pokecard';
import { IPokecard } from './pokecard/pokecard.interface';
import { PokecardSearch } from './pokecard-search/pokecard-search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokecard, PokecardSearch],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly searchresult = signal('');
  onSearchResult(event: string) {
    const input = event;
    this.searchresult.set(input);
  }
  protected readonly title = signal('test');
  data = signal<IPokecard>({
    id: 1,
    name: 'Bulbasaur',
    type: ['grass', 'poison'],
    hp: 45,
    description:
      'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.',
    attacks: [
      {
        name: 'Vine Whip',
        damage: 45,
        cost: ['grass'],
        description: 'The target is struck with slender, whiplike vines to inflict damage.',
      },
    ],
    image: '/img/BulbasaurCard.png',
  });
  data2 = signal<IPokecard>({
    id: 2,
    name: 'Ivysaur',
    type: ['grass', 'poison'],
    hp: 60,
    description: 'When the bulb at his back grow large, it is said to be full of life.',
    attacks: [
      {
        name: 'Vine Whip',
        damage: 30,
        cost: ['grass', 'normal', 'normal'],
        description: '',
      },
      {
        name: 'Poisonpowder',
        damage: 20,
        cost: ['grass', 'grass', 'grass'],
        description: 'The defending Pokémon is now Poisoned.',
      },
    ],
    image: '/img/IvysaurCard.png',
  });
  pokecards = [this.data(), this.data2()];
  searchpokecard(name: string) {
    return this.pokecards.filter(card => card.name.toLowerCase() === name.toLowerCase());
  }
}
