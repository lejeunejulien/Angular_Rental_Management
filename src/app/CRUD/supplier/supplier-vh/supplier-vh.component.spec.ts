import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierVHComponent } from './supplier-vh.component';

describe('SupplierVHComponent', () => {
  let component: SupplierVHComponent;
  let fixture: ComponentFixture<SupplierVHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierVHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierVHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
