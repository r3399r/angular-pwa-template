import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from 'src/app/components/layout/layout.component';

describe('LayoutComponent', (): void => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
