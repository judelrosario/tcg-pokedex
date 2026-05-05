import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecardAbility } from './pokecard-ability';

describe('PokecardAbility', () => {
  let component: PokecardAbility;
  let fixture: ComponentFixture<PokecardAbility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokecardAbility],
    }).compileComponents();

    fixture = TestBed.createComponent(PokecardAbility);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
