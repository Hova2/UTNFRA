import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SfotosPage } from './sfotos.page';

describe('SfotosPage', () => {
  let component: SfotosPage;
  let fixture: ComponentFixture<SfotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SfotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
