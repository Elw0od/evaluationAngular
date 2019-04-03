import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatEditionComponent } from './cat-edition.component';

describe('CatEditionComponent', () => {
  let component: CatEditionComponent;
  let fixture: ComponentFixture<CatEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
