import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTheWayOrdersComponent } from './on-the-way-orders.component';

describe('OnTheWayOrdersComponent', () => {
  let component: OnTheWayOrdersComponent;
  let fixture: ComponentFixture<OnTheWayOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTheWayOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTheWayOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
