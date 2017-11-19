import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostersGalleryComponent } from './posters-gallery.component';

describe('PostersGalleryComponent', () => {
  let component: PostersGalleryComponent;
  let fixture: ComponentFixture<PostersGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostersGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostersGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
