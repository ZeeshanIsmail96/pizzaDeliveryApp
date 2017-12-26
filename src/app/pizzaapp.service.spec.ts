import { TestBed, inject } from '@angular/core/testing';

import { PizzaappService } from './pizzaapp.service';

describe('PizzaappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaappService]
    });
  });

  it('should be created', inject([PizzaappService], (service: PizzaappService) => {
    expect(service).toBeTruthy();
  }));
});
