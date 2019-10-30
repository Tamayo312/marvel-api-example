import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPersonComponent } from './detalles-person.component';

describe('DetallesPersonComponent', () => {
  let component: DetallesPersonComponent;
  let fixture: ComponentFixture<DetallesPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
