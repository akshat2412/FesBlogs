import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDoesNotExistsComponent } from './page-does-not-exists.component';

describe('PageDoesNotExistsComponent', () => {
  let component: PageDoesNotExistsComponent;
  let fixture: ComponentFixture<PageDoesNotExistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDoesNotExistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDoesNotExistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
