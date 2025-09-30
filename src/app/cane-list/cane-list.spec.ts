import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaneList } from './cane-list';

describe('CaneList', () => {
  let component: CaneList;
  let fixture: ComponentFixture<CaneList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaneList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaneList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
