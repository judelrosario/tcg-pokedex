import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecardArt } from './pokecard-art';

describe('PokecardArt', () => {
  let component: PokecardArt;
  let fixture: ComponentFixture<PokecardArt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokecardArt],
    }).compileComponents();

    fixture = TestBed.createComponent(PokecardArt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
