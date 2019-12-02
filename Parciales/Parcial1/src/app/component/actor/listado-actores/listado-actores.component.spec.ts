import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoActoresComponent } from './listado-actores.component';

describe('ListadoActoresComponent', () => {
  let component: ListadoActoresComponent;
  let fixture: ComponentFixture<ListadoActoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoActoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
