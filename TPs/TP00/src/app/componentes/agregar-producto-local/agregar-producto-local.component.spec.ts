import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductoLocalComponent } from './agregar-producto-local.component';

describe('AgregarProductoLocalComponent', () => {
  let component: AgregarProductoLocalComponent;
  let fixture: ComponentFixture<AgregarProductoLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarProductoLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarProductoLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
