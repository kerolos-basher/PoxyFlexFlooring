import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpoxyFlakesFlooringComponent } from './epoxy-flakes-flooring.component';

describe('EpoxyFlakesFlooringComponent', () => {
  let component: EpoxyFlakesFlooringComponent;
  let fixture: ComponentFixture<EpoxyFlakesFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpoxyFlakesFlooringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpoxyFlakesFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
