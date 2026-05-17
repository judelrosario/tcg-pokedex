import { Injectable, signal } from '@angular/core';
import { IPokecard } from '../pokecard/pokecard.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PokeAPIResponse } from './interfaces/poke-api.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeAPI {
  constructor(private http: HttpClient) {}
  private readonly API_URL = 'https://api.pokewallet.io';
  private readonly API_KEY = 'pk_test_95d8c5cb532ed95b68cc6547f5d7e32d3446d97ba2bd8aea';
  private readonly SEARCH_ENDPOINT = `${this.API_URL}/search`;
  private readonly ID_ENDPOINT = `${this.API_URL}/cards/pk_`;
  /* The line `private headers = new HttpHeaders({'X-API-Key': this.API_KEY});` is creating an instance
of the HttpHeaders class with a custom header 'X-API-Key' set to the API key stored in the `API_KEY`
constant. This custom header will be used for making HTTP requests to the PokeAPI with the API key
included in the request headers for authentication purposes. */
  private headers = new HttpHeaders({ 'X-API-Key': this.API_KEY });
  private readonly pokeset = 'base1';

  /**
   * The function `searchPokecardsByName` sends an HTTP GET request to a search endpoint with a query
   * parameter to search for Pokecards by name.
   * @param {string} query - The `query` parameter in the `searchPokecardsByName` function is a string
   * that represents the search term used to find Pokecards. This function sends an HTTP GET request to
   * the `SEARCH_ENDPOINT` with the provided query parameter. The query is appended to the endpoint URL
   * with a wildcard character
   * @returns The `searchPokecardsByName` function is returning an HTTP GET request to the
   * `SEARCH_ENDPOINT` with a query parameter `q` set to the provided `query` string followed by
   * `%25BS`. The request includes headers and parameters with a limit of 100 and page 1. The response
   * is expected to be of type `any`.
   */
  searchPokecardsByName(query: string) {
    const params = new HttpParams().set('limit', 100).set('page', 1);
    return this.http.get<PokeAPIResponse>(`${this.SEARCH_ENDPOINT}?q=${query}%25BS`, {
      headers: this.headers,
      params,
    });
  }
  searchPokecardByID(id: string) {
    return this.http.get<any>(`${this.ID_ENDPOINT}${id}`, { headers: this.headers });
  }
  searchPokecardBatch(ids: string[]) {
    for (const id of ids) {
      this.searchPokecardByID(id).subscribe((data) => {
        console.log(data);
      });
    }
  }
  getdata() {
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
