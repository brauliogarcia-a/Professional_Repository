// This imports the Angular testing tools needed to test a component.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// This imports RouterModule so the test understands routerLink.
import { RouterModule } from '@angular/router';

// This imports the Header component that we want to test.
import { Header } from './header';

// This imports the dropdown directive used inside the Header template.
import { DropdownDirective } from './dropdown.directive';

// This creates a test group for the Header component.
describe('Header', () => {
  // This variable will store the Header component instance.
  let component: Header;

  // This variable will store the testing fixture.
  // The fixture helps access and control the component during the test.
  let fixture: ComponentFixture<Header>;

  // This runs before each test.
  beforeEach(async () => {
    // This sets up the testing module for the Header component.
    await TestBed.configureTestingModule({
      // This declares the Header component and the directive it uses.
      declarations: [Header, DropdownDirective],

      // This imports RouterModule so routerLink works during the test.
      imports: [RouterModule.forRoot([])],
    }).compileComponents();

    // This creates a test version of the Header component.
    fixture = TestBed.createComponent(Header);

    // This gets the actual component class instance.
    component = fixture.componentInstance;

    // This waits until the component is stable before running the test.
    await fixture.whenStable();
  });

  // This test checks if the Header component is created correctly.
  it('should create', () => {
    // This expects the component to exist.
    expect(component).toBeTruthy();
  });
});
