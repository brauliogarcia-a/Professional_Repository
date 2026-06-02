// This imports TestBed from Angular.
// TestBed helps create a testing environment for Angular components.
import { TestBed } from '@angular/core/testing';

// This imports RouterModule so the test understands router-outlet and routerLink.
import { RouterModule } from '@angular/router';

// This imports the main App component that we want to test.
import { App } from './app';

// These imports bring the components and directive used by the App component.
import { Header } from './header';
import { DropdownDirective } from './dropdown.directive';

// This creates a test group for the App component.
describe('App', () => {

  // This runs before each test.
  beforeEach(async () => {

    // This sets up the testing module for the App component.
    await TestBed.configureTestingModule({

      // This declares the App component and the Header shown in the App template.
      declarations: [
        App,
        Header,
        DropdownDirective,
      ],

      // This imports RouterModule so router-outlet works during the test.
      imports: [RouterModule.forRoot([])],
    }).compileComponents();
  });

  // This test checks if the App component is created correctly.
  it('should create the app', () => {

    // This creates a test version of the App component.
    const fixture = TestBed.createComponent(App);

    // This gets the actual App component class instance.
    const app = fixture.componentInstance;

    // This expects the app component to exist.
    expect(app).toBeTruthy();
  });
});
