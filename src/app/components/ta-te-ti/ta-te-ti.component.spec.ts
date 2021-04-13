import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaTeTiComponent } from './ta-te-ti.component';

describe('TaTeTiComponent', () => {
  let component: TaTeTiComponent;
  let fixture: ComponentFixture<TaTeTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaTeTiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaTeTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
