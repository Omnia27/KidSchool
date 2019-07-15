import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesareaComponent } from './featuresarea.component';

describe('FeaturesareaComponent', () => {
  let component: FeaturesareaComponent;
  let fixture: ComponentFixture<FeaturesareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
