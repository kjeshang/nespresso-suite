import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAidListComponent } from './first-aid-list.component';

describe('FirstAidListComponent', () => {
  let component: FirstAidListComponent;
  let fixture: ComponentFixture<FirstAidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstAidListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
