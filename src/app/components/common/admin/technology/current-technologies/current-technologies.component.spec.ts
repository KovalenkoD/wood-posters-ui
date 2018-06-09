import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTechnologiesComponent } from './current-technologies.component';

describe('CurrentTechnologiesComponent', () => {
  let component: CurrentTechnologiesComponent;
  let fixture: ComponentFixture<CurrentTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
