import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrestigeVehicleComponent } from './home-prestige-vehicle.component';

describe('HomePrestigeVehicleComponent', () => {
  let component: HomePrestigeVehicleComponent;
  let fixture: ComponentFixture<HomePrestigeVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePrestigeVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePrestigeVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
