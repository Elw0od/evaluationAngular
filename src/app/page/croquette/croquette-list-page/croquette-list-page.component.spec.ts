import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroquetteListPageComponent } from './croquette-list-page.component';

describe('CroquetteListPageComponent', () => {
  let component: CroquetteListPageComponent;
  let fixture: ComponentFixture<CroquetteListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroquetteListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroquetteListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
