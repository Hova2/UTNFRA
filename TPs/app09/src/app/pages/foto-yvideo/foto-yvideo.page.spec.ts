import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FotoYVideoPage } from './foto-yvideo.page';

describe('FotoYVideoPage', () => {
  let component: FotoYVideoPage;
  let fixture: ComponentFixture<FotoYVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoYVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FotoYVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
