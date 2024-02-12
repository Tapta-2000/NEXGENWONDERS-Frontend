import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFridgeComponent } from './add-fridge.component';

describe('AddFridgeComponent', () => {
  let component: AddFridgeComponent;
  let fixture: ComponentFixture<AddFridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFridgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
