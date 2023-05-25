import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhGeneralComponent } from './vh-general.component';

describe('VhGeneralComponent', () => {
  let component: VhGeneralComponent;
  let fixture: ComponentFixture<VhGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VhGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
