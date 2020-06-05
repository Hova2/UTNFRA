import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MejoresCincoPage } from './mejores-cinco.page';

describe('MejoresCincoPage', () => {
  let component: MejoresCincoPage;
  let fixture: ComponentFixture<MejoresCincoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MejoresCincoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MejoresCincoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
