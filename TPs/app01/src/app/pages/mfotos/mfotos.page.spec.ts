import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MfotosPage } from './mfotos.page';

describe('MfotosPage', () => {
  let component: MfotosPage;
  let fixture: ComponentFixture<MfotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MfotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
