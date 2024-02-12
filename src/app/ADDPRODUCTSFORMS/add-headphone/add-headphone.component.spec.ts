import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeadphoneComponent } from './add-headphone.component';

describe('AddHeadphoneComponent', () => {
  let component: AddHeadphoneComponent;
  let fixture: ComponentFixture<AddHeadphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHeadphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHeadphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
