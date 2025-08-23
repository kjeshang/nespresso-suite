import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAidPageComponent } from './first-aid-page.component';

describe('FirstAidPageComponent', () => {
  let component: FirstAidPageComponent;
  let fixture: ComponentFixture<FirstAidPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstAidPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
