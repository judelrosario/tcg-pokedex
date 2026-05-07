import { Component, input } from '@angular/core';
import { PokecardType } from '../pokecard-type/pokecard-type';

@Component({
  selector: 'app-pokecard-type-holder',
  imports: [PokecardType],
  templateUrl: './pokecard-type-holder.html',
  styleUrl: './pokecard-type-holder.scss',
})
export class PokecardTypeHolder {
  data = input.required<string[]>();
}
