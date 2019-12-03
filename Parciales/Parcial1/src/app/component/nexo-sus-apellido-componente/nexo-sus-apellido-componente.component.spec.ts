import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NexoSusApellidoComponenteComponent } from './nexo-sus-apellido-componente.component';

describe('NexoSusApellidoComponenteComponent', () => {
  let component: NexoSusApellidoComponenteComponent;
  let fixture: ComponentFixture<NexoSusApellidoComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NexoSusApellidoComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NexoSusApellidoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
