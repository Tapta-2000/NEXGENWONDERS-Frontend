import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdescriptionComponent } from './hdescription.component';

describe('HdescriptionComponent', () => {
  let component: HdescriptionComponent;
  let fixture: ComponentFixture<HdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
