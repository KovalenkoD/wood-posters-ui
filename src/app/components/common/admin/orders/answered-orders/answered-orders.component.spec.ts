import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsweredOrdersComponent } from './answered-orders.component';

describe('AnsweredOrdersComponent', () => {
  let component: AnsweredOrdersComponent;
  let fixture: ComponentFixture<AnsweredOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsweredOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsweredOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
