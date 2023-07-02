import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDayPageComponent } from './five-day-page.component';

describe('FiveDayPageComponent', () => {
  let component: FiveDayPageComponent;
  let fixture: ComponentFixture<FiveDayPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveDayPageComponent]
    });
    fixture = TestBed.createComponent(FiveDayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
