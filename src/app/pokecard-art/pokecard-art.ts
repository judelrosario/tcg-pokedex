import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pokecard-art',
  imports: [],
  templateUrl: './pokecard-art.html',
  styleUrl: './pokecard-art.scss',
})
export class PokecardArt {
  data = input.required<string>();
}
