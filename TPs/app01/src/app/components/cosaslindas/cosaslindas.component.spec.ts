import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CosaslindasComponent } from './cosaslindas.component';

describe('CosaslindasComponent', () => {
  let component: CosaslindasComponent;
  let fixture: ComponentFixture<CosaslindasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosaslindasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CosaslindasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
