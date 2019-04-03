import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCreatePageComponent } from './cat-create-page.component';

describe('CatCreatePageComponent', () => {
  let component: CatCreatePageComponent;
  let fixture: ComponentFixture<CatCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
