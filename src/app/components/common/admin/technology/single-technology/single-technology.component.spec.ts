import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTechnologyComponent } from './single-technology.component';

describe('SingleTechnologyComponent', () => {
  let component: SingleTechnologyComponent;
  let fixture: ComponentFixture<SingleTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
