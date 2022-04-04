import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSideComponent } from './items-side.component';

describe('ItemsSideComponent', () => {
  let component: ItemsSideComponent;
  let fixture: ComponentFixture<ItemsSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
