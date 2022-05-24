import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndhuntComponent } from './endhunt.component';

describe('EndhuntComponent', () => {
  let component: EndhuntComponent;
  let fixture: ComponentFixture<EndhuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndhuntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndhuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
