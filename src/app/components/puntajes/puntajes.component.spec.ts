import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajesComponent } from './puntajes.component';

describe('PuntajesComponent', () => {
  let component: PuntajesComponent;
  let fixture: ComponentFixture<PuntajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
