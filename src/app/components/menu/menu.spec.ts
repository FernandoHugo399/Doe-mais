import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';


describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let service: MenuService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuService);

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  /* TEST COMPONENT */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test child MenuMobile', ()=> {
    expect(component.menuMobile).toBeDefined()
    expect(component.menuMobile).toBeTruthy()
  })



  /* TEST SERVICE */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should showHideMenu is ok', ()=>{
    expect((service.showHideMenu(component.menuMobile.nativeElement))).toBeUndefined()
  })

  it('should resizeHidePass is ok', ()=>{
    expect((service.resizeHideMenu(component.menuMobile.nativeElement))).toBeUndefined()
  })


});


