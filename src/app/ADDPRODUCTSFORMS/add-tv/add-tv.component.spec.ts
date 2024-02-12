import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTvComponent } from './add-tv.component';

describe('AddTvComponent', () => {
  let component: AddTvComponent;
  let fixture: ComponentFixture<AddTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
