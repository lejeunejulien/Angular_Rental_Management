import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceVHComponent } from './price-vh.component';

describe('PriceVHComponent', () => {
  let component: PriceVHComponent;
  let fixture: ComponentFixture<PriceVHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceVHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceVHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
