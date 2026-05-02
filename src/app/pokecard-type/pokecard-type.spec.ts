import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecardType } from './pokecard-type';

describe('PokecardType', () => {
  let component: PokecardType;
  let fixture: ComponentFixture<PokecardType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokecardType],
    }).compileComponents();

    fixture = TestBed.createComponent(PokecardType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
