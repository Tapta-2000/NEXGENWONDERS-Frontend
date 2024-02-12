import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVdescriptionComponent } from './tvdescription.component';

describe('TVdescriptionComponent', () => {
  let component: TVdescriptionComponent;
  let fixture: ComponentFixture<TVdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVdescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TVdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
