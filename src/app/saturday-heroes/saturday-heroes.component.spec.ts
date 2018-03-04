import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturdayHeroesComponent } from './saturday-heroes.component';

describe('SaturdayHeroesComponent', () => {
  let component: SaturdayHeroesComponent;
  let fixture: ComponentFixture<SaturdayHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaturdayHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaturdayHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
