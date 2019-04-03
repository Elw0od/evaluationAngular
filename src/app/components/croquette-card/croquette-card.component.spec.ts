import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroquetteCardComponent } from './croquette-card.component';

describe('CroquetteCardComponent', () => {
  let component: CroquetteCardComponent;
  let fixture: ComponentFixture<CroquetteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroquetteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroquetteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
