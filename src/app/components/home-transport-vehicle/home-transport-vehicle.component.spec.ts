import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTransportVehicleComponent } from './home-transport-vehicle.component';

describe('HomeTransportVehicleComponent', () => {
  let component: HomeTransportVehicleComponent;
  let fixture: ComponentFixture<HomeTransportVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTransportVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTransportVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
