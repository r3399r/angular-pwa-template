import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from 'src/app/pages/home/home.component';

describe('HomeComponent', (): void => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let routerSpy: jasmine.Spy;

  beforeEach(async((): void => {
    routerSpy = spyOn(Router.prototype, 'navigate');

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  it('onClick should work', async (): Promise<void> => {
    await component.onClick();

    expect(routerSpy).toHaveBeenCalledTimes(1);
    expect(routerSpy).toHaveBeenCalledWith(['child']);
  });
});
