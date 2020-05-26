import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LfotosPage } from './lfotos.page';

describe('LfotosPage', () => {
  let component: LfotosPage;
  let fixture: ComponentFixture<LfotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LfotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
