import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViboritaComponent } from './viborita.component';

describe('ViboritaComponent', () => {
  let component: ViboritaComponent;
  let fixture: ComponentFixture<ViboritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViboritaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViboritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
