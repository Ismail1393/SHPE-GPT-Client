import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindComponent } from './mind.component';

describe('MindComponent', () => {
  let component: MindComponent;
  let fixture: ComponentFixture<MindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MindComponent]
    });
    fixture = TestBed.createComponent(MindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
