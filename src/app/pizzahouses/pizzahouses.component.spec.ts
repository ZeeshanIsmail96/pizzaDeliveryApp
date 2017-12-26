import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzahousesComponent } from './pizzahouses.component';

describe('PizzahousesComponent', () => {
  let component: PizzahousesComponent;
  let fixture: ComponentFixture<PizzahousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzahousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzahousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
