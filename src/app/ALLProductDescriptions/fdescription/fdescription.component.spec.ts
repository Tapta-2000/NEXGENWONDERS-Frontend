import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdescriptionComponent } from './fdescription.component';

describe('FdescriptionComponent', () => {
  let component: FdescriptionComponent;
  let fixture: ComponentFixture<FdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
