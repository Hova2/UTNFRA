import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarFotoComponent } from './modificar-foto.component';

describe('ModificarFotoComponent', () => {
  let component: ModificarFotoComponent;
  let fixture: ComponentFixture<ModificarFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
