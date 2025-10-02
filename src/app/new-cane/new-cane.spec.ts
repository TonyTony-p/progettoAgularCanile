import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCane } from './new-cane';

describe('NewCane', () => {
  let component: NewCane;
  let fixture: ComponentFixture<NewCane>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCane]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCane);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
