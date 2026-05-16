import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokecard } from './pokecard/pokecard';
import { IPokecard } from './pokecard/pokecard.interface';
import { PokecardSearch } from './pokecard-search/pokecard-search';
import { PokeAPI } from './services/poke-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokecard, PokecardSearch],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  pokeAPI = inject(PokeAPI);
  readonly searchresultbytype = signal('');
  readonly searchresult = signal('');
  pokecards: IPokecard[] = [];
  constructor() {
    this.pokecards = this.pokeAPI.getdata();
  }
  onSearchResultAPI($event: string) {
    console.log($event);
    this.pokeAPI.searchPokecardsByName($event).subscribe({next: (response) => {console.log(response)}});
  }
  onSearchResultType($event: string) {
    const input = $event;
    this.searchresultbytype.set(input);
  }
  onSearchResult(event: string) {
    const input = event;
    this.searchresult.set(input);
  }
  protected readonly title = signal('test');

  searchpokecard(name: string) {
    return this.pokecards.filter((card) => card.name.toLowerCase() === name.toLowerCase());
  }
  searchpokecardbytype(type: string) {
    return this.pokecards.filter((card) =>
      card.type.some((t) => t.toLowerCase() === type.toLowerCase()),
    );
  }
}
