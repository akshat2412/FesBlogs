import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggedArticlesLandingComponent } from './tagged-articles-landing.component';

describe('TaggedArticlesLandingComponent', () => {
  let component: TaggedArticlesLandingComponent;
  let fixture: ComponentFixture<TaggedArticlesLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaggedArticlesLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggedArticlesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
