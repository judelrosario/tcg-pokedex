import { Injectable, signal } from '@angular/core';
import { IPokecard } from '../pokecard/pokecard.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeAPI {
  constructor(private http: HttpClient) {}
  private readonly ENDPOINT = "https://api.pokewallet.io";
  private readonly API_KEY = "pk_test_95d8c5cb532ed95b68cc6547f5d7e32d3446d97ba2bd8aea";
  private headers = new HttpHeaders({'X-API-Key': this.API_KEY});
  private readonly pokeset = 'base1';
  searchPokecard(query: string) {
    const params = new HttpParams()
    .set('q', `${query}%BS2`)
    .set('limit', 100)
    .set('page', 1);
    
    return this.http.get<any>(`${this.ENDPOINT}/search`, { headers: this.headers, params });
  }
  getdata (){
     const data = signal<IPokecard>({
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
  const data2 = signal<IPokecard>({
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
  return [data(), data2()];
  }
}
