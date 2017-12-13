import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCategoriesComponent } from './current-categories.component';

describe('CurrentCategoriesComponent', () => {
  let component: CurrentCategoriesComponent;
  let fixture: ComponentFixture<CurrentCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
