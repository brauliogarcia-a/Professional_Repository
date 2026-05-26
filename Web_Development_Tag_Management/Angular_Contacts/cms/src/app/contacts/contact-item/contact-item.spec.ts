// This imports the tools needed to test Angular components.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// This imports the ContactItem component that will be tested.
import { ContactItem } from './contact-item';

// This starts the test group for the ContactItem component.
describe('ContactItem', () => {
  // This variable will store the ContactItem component instance.
  let component: ContactItem;

  // This variable will store the testing environment for the component.
  let fixture: ComponentFixture<ContactItem>;

  // This runs before each test.
  beforeEach(async () => {
    // This configures the testing module with the ContactItem component.
    await TestBed.configureTestingModule({
      declarations: [ContactItem],
    }).compileComponents();

    // This creates the ContactItem component for testing.
    fixture = TestBed.createComponent(ContactItem);

    // This gets the component instance from the fixture.
    component = fixture.componentInstance;

    // This gives the test a sample contact so the HTML has data to display.
    component.contact = {
      id: '1',
      name: 'Test Contact',
      email: 'test@example.com',
      phone: '555-5555',
      imageUrl: '',
      group: null,
    };

    // This waits until the component is stable before running the test.
    await fixture.whenStable();
  });

  // This test checks that the ContactItem component is created correctly.
  it('should create', () => {
    // This expects the component to exist.
    expect(component).toBeTruthy();
  });
});
