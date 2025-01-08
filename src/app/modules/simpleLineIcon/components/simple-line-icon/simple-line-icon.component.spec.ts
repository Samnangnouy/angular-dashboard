import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLineIconComponent } from './simple-line-icon.component';

describe('SimpleLineIconComponent', () => {
  let component: SimpleLineIconComponent;
  let fixture: ComponentFixture<SimpleLineIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleLineIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleLineIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
