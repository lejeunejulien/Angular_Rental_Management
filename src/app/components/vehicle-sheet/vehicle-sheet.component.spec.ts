import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSheetComponent } from './vehicle-sheet.component';

describe('VehicleSheetComponent', () => {
  let component: VehicleSheetComponent;
  let fixture: ComponentFixture<VehicleSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
