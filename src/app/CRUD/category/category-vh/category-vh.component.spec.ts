import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryVHComponent } from './category-vh.component';

describe('CategoryVHComponent', () => {
  let component: CategoryVHComponent;
  let fixture: ComponentFixture<CategoryVHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryVHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryVHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
