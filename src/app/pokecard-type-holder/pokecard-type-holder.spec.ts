import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecardTypeHolder } from './pokecard-type-holder';

describe('PokecardTypeHolder', () => {
  let component: PokecardTypeHolder;
  let fixture: ComponentFixture<PokecardTypeHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokecardTypeHolder],
    }).compileComponents();

    fixture = TestBed.createComponent(PokecardTypeHolder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
