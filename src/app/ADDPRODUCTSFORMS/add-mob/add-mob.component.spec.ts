import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobComponent } from './add-mob.component';

describe('AddMobComponent', () => {
  let component: AddMobComponent;
  let fixture: ComponentFixture<AddMobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
