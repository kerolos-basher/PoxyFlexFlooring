import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallicFinishFloorsComponent } from './metallic-finish-floors.component';

describe('MetallicFinishFloorsComponent', () => {
  let component: MetallicFinishFloorsComponent;
  let fixture: ComponentFixture<MetallicFinishFloorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetallicFinishFloorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetallicFinishFloorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
