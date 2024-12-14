import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpoxyMarbleFloorsAndWallsComponent } from './epoxy-marble-floors-and-walls.component';

describe('EpoxyMarbleFloorsAndWallsComponent', () => {
  let component: EpoxyMarbleFloorsAndWallsComponent;
  let fixture: ComponentFixture<EpoxyMarbleFloorsAndWallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpoxyMarbleFloorsAndWallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpoxyMarbleFloorsAndWallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
