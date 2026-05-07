import { Component, input } from '@angular/core';
import { IPokecardAttack } from '../pokecard/pokecard.interface';
import { PokecardType } from "../pokecard-type/pokecard-type";
import { PokecardTypeHolder } from '../pokecard-type-holder/pokecard-type-holder';

@Component({
  selector: 'app-pokecard-ability',
  imports: [ PokecardTypeHolder],
  templateUrl: './pokecard-ability.html',
  styleUrl: './pokecard-ability.scss',
})
export class PokecardAbility {
  data = input.required<IPokecardAttack>();
}
