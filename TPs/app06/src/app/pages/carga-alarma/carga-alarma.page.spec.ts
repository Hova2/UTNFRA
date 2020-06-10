import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargaAlarmaPage } from './carga-alarma.page';

describe('CargaAlarmaPage', () => {
  let component: CargaAlarmaPage;
  let fixture: ComponentFixture<CargaAlarmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaAlarmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargaAlarmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
