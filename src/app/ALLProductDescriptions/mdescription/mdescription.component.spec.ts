import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdescriptionComponent } from './mdescription.component';

describe('MdescriptionComponent', () => {
  let component: MdescriptionComponent;
  let fixture: ComponentFixture<MdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
