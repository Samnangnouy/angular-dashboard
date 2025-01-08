import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsvectormapComponent } from './jsvectormap.component';

describe('JsvectormapComponent', () => {
  let component: JsvectormapComponent;
  let fixture: ComponentFixture<JsvectormapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsvectormapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsvectormapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
