import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ChildComponent } from 'src/app/pages/child/child.component';

describe('ChildComponent', (): void => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
