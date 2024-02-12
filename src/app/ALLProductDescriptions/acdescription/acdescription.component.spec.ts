import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACdescriptionComponent } from './acdescription.component';

describe('ACdescriptionComponent', () => {
  let component: ACdescriptionComponent;
  let fixture: ComponentFixture<ACdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACdescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
