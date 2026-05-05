import { Component, input } from '@angular/core';
import { IPokecardAttack } from '../pokecard/pokecard.interface';

@Component({
  selector: 'app-pokecard-ability',
  imports: [],
  templateUrl: './pokecard-ability.html',
  styleUrl: './pokecard-ability.scss',
})
export class PokecardAbility {
  data = input.required<IPokecardAttack>();
}
