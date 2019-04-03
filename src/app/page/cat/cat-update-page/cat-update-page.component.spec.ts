import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatUpdatePageComponent } from './cat-update-page.component';

describe('CatUpdatePageComponent', () => {
  let component: CatUpdatePageComponent;
  let fixture: ComponentFixture<CatUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
