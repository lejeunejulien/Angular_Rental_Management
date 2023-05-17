import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VHFormComponent } from './vhform.component';

describe('VHFormComponent', () => {
  let component: VHFormComponent;
  let fixture: ComponentFixture<VHFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VHFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VHFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
