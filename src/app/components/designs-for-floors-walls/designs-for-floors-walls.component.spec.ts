import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsForFloorsWallsComponent } from './designs-for-floors-walls.component';

describe('DesignsForFloorsWallsComponent', () => {
  let component: DesignsForFloorsWallsComponent;
  let fixture: ComponentFixture<DesignsForFloorsWallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignsForFloorsWallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignsForFloorsWallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
