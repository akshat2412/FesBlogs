import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArticlesListComponent } from './user-articles-list.component';

describe('UserArticlesListComponent', () => {
  let component: UserArticlesListComponent;
  let fixture: ComponentFixture<UserArticlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserArticlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
