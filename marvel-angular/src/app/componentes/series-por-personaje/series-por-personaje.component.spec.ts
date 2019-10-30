import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesPorPersonajeComponent } from './series-por-personaje.component';

describe('SeriesPorPersonajeComponent', () => {
  let component: SeriesPorPersonajeComponent;
  let fixture: ComponentFixture<SeriesPorPersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesPorPersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesPorPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
