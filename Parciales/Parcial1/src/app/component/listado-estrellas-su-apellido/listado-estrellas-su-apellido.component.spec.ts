import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEstrellasSuApellidoComponent } from './listado-estrellas-su-apellido.component';

describe('ListadoEstrellasSuApellidoComponent', () => {
  let component: ListadoEstrellasSuApellidoComponent;
  let fixture: ComponentFixture<ListadoEstrellasSuApellidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEstrellasSuApellidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEstrellasSuApellidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
