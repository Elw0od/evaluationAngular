import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListPageComponent } from './dog-list-page.component';

describe('DogListPageComponent', () => {
  let component: DogListPageComponent;
  let fixture: ComponentFixture<DogListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
