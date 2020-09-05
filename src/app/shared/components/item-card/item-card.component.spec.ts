import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardComponent } from './item-card.component';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;
  const mockItem = {
    category: { type: 'Bread', id: 1 },
    imageUrl:
      'https://media.istockphoto.com/photos/bread-picture-id157032624?k=6&m=157032624&s=612x612&w=0&h=lBmj_NjGRb_Is7jfmnQUcVW9H3Wt0IQ6SVRSElzHpwE=',
    price: 10,
    id: 1,
    name: 'Brown Bread',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    component.item = mockItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
