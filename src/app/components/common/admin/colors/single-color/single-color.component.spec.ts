import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleColorComponent } from './single-color.component';

describe('SingleColorComponent', () => {
  let component: SingleColorComponent;
  let fixture: ComponentFixture<SingleColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
