import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TobbarComponent } from './tobbar.component';

describe('TobbarComponent', () => {
  let component: TobbarComponent;
  let fixture: ComponentFixture<TobbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TobbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TobbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
