import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUsuarioLocalComponent } from './agregar-usuario-local.component';

describe('AgregarUsuarioLocalComponent', () => {
  let component: AgregarUsuarioLocalComponent;
  let fixture: ComponentFixture<AgregarUsuarioLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarUsuarioLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarUsuarioLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
