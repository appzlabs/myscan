import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcarouselComponent } from './contentcarousel.component';

describe('ContentcarouselComponent', () => {
  let component: ContentcarouselComponent;
  let fixture: ComponentFixture<ContentcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
