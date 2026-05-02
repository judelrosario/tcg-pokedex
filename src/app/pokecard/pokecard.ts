import { Component } from '@angular/core';
import { PokecardArt } from '../pokecard-art/pokecard-art';
import { PokecardType } from '../pokecard-type/pokecard-type';

@Component({
  selector: 'app-pokecard',
  imports: [PokecardArt, PokecardType],
  templateUrl: './pokecard.html',
  styleUrl: './pokecard.scss',
})
export class Pokecard {}
