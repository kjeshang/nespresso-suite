import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingPageComponent } from './tasting-page.component';

describe('TastingPageComponent', () => {
  let component: TastingPageComponent;
  let fixture: ComponentFixture<TastingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TastingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
