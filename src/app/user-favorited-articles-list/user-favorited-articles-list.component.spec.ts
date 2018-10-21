import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoritedArticlesListComponent } from './user-favorited-articles-list.component';

describe('UserFavoritedArticlesListComponent', () => {
  let component: UserFavoritedArticlesListComponent;
  let fixture: ComponentFixture<UserFavoritedArticlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFavoritedArticlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoritedArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
