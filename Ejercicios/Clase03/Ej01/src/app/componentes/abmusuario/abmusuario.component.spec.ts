import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmusuarioComponent } from './abmusuario.component';

describe('AbmusuarioComponent', () => {
  let component: AbmusuarioComponent;
  let fixture: ComponentFixture<AbmusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
