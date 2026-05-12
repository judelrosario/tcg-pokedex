import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-pokecard-search',
  imports: [],
  templateUrl: './pokecard-search.html',
  styleUrl: './pokecard-search.scss',
})
export class PokecardSearch {
  readonly searchTerm = signal('');
  readonly searchResult = output <string>();
  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }
  onCheckClick() {
    this.searchResult.emit(this.searchTerm());
  }
}
