export interface IPokecard {
  id: number;
  name: string;
  type: string[];
  hp: number;
  description: string;
  attacks: IPokecardAttack[];
  image: string;
}

export interface IPokecardAttack {
  name: string;
  damage: number;
  cost: string[];
  description: string;
}