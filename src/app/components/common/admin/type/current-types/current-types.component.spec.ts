import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTypesComponent} from './current-types.component';

describe('CurrentTypesComponent', () => {
  let component: CurrentTypesComponent;
  let fixture: ComponentFixture<CurrentTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
