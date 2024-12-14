import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiSlipPoolsideSolutionsComponent } from './anti-slip-poolside-solutions.component';

describe('AntiSlipPoolsideSolutionsComponent', () => {
  let component: AntiSlipPoolsideSolutionsComponent;
  let fixture: ComponentFixture<AntiSlipPoolsideSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntiSlipPoolsideSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntiSlipPoolsideSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
