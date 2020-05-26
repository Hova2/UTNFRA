import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CosasfeasComponent } from './cosasfeas.component';

describe('CosasfeasComponent', () => {
  let component: CosasfeasComponent;
  let fixture: ComponentFixture<CosasfeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosasfeasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CosasfeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
