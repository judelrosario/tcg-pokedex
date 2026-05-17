import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokecard } from './pokecard/pokecard';
import { IPokecard } from './pokecard/pokecard.interface';
import { PokecardSearch } from './pokecard-search/pokecard-search';
import { PokeAPI } from './services/poke-api';
import { Result } from './services/interfaces/poke-api.interface';

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
  pokecardsAPIResults: Result[] = [];
  pokecards: IPokecard[] = [];
  constructor() {
    this.pokecards = this.pokeAPI.getdata();
  }
  extractPokecardID(results: Result[]): string[] {
    return results.map((result) => result.id);
  }
  onSearchResultAPI($event: string) {
    console.log($event);
    this.pokeAPI.searchPokecardsByName($event).subscribe({
      next: (response) => {
        this.pokecardsAPIResults = response.results;
        const ids = this.extractPokecardID(response.results);
        this.pokeAPI.searchPokecardBatch(ids);
      },
    });
    console.log(this.pokecardsAPIResults);
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
