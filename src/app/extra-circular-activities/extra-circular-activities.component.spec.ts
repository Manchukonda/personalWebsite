import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCircularActivitiesComponent } from './extra-circular-activities.component';

describe('ExtraCircularActivitiesComponent', () => {
  let component: ExtraCircularActivitiesComponent;
  let fixture: ComponentFixture<ExtraCircularActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraCircularActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraCircularActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
