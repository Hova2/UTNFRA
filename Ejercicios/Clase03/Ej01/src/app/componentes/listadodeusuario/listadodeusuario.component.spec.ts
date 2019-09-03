import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadodeusuarioComponent } from './listadodeusuario.component';

describe('ListadodeusuarioComponent', () => {
  let component: ListadodeusuarioComponent;
  let fixture: ComponentFixture<ListadodeusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadodeusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadodeusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
