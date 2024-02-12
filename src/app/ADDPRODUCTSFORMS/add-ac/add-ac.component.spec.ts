import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcComponent } from './add-ac.component';

describe('AddAcComponent', () => {
  let component: AddAcComponent;
  let fixture: ComponentFixture<AddAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
