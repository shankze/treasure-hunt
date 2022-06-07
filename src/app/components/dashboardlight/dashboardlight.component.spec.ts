import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardlightComponent } from './dashboardlight.component';

describe('DashboardlightComponent', () => {
  let component: DashboardlightComponent;
  let fixture: ComponentFixture<DashboardlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
