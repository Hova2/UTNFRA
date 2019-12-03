import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltoSuApellidoComponent } from './filto-su-apellido.component';

describe('FiltoSuApellidoComponent', () => {
  let component: FiltoSuApellidoComponent;
  let fixture: ComponentFixture<FiltoSuApellidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltoSuApellidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltoSuApellidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
