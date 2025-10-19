import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItem } from './cards';

describe('Cards', () => {
  let component: CardItem;
  let fixture: ComponentFixture<CardItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
