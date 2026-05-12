import { Component, input } from '@angular/core';
import { PokecardArt } from '../pokecard-art/pokecard-art';
import { PokecardType } from '../pokecard-type/pokecard-type';
import { IPokecard } from './pokecard.interface';
import { PokecardAbility } from '../pokecard-ability/pokecard-ability';
import { PokecardTypeHolder } from "../pokecard-type-holder/pokecard-type-holder";

@Component({
  selector: 'app-pokecard',
  imports: [PokecardArt, PokecardType, PokecardAbility, PokecardTypeHolder],
  templateUrl: './pokecard.html',
  styleUrl: './pokecard.scss',
})
export class Pokecard {
  data = input.required<IPokecard>();
}
