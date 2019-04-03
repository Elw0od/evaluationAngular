import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsListPageComponent } from './produits-list-page.component';

describe('ProduitsListPageComponent', () => {
  let component: ProduitsListPageComponent;
  let fixture: ComponentFixture<ProduitsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
