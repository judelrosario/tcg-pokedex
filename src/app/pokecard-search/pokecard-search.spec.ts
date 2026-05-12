import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecardSearch } from './pokecard-search';

describe('PokecardSearch', () => {
  let component: PokecardSearch;
  let fixture: ComponentFixture<PokecardSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokecardSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(PokecardSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
