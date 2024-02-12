import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLapComponent } from './add-lap.component';

describe('AddLapComponent', () => {
  let component: AddLapComponent;
  let fixture: ComponentFixture<AddLapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
