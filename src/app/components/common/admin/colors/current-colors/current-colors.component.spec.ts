import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentColorsComponent } from './current-colors.component';

describe('CurrentColorsComponent', () => {
  let component: CurrentColorsComponent;
  let fixture: ComponentFixture<CurrentColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
