import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedOrdersComponent } from './finished-orders.component';

describe('FinishedOrdersComponent', () => {
  let component: FinishedOrdersComponent;
  let fixture: ComponentFixture<FinishedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
