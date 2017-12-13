import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Application } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Application,
        ProductComponent,
        MenuComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(Application);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as total`, async(() => {
    const fixture = TestBed.createComponent(Application);
    const app = fixture.debugElement.componentInstance;
    expect(app.total).toEqual('total');
  }));
  it('should render total in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Application);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('total');
  }));
  it ('should update price', async(() => {
    const fixture =  TestBed.createComponent(Application);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance.addProduct("'p1','");
    expect (app.)
  }));
});
