import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeratorsComponent } from './refrigerators.component';

describe('RefrigeratorsComponent', () => {
  let component: RefrigeratorsComponent;
  let fixture: ComponentFixture<RefrigeratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrigeratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefrigeratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
