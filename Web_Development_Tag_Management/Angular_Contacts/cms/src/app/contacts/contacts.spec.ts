// This imports the tools needed to test Angular components.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// This imports the main Contacts component that will be tested.
import { Contacts } from './contacts';

// This imports the child component used inside the Contacts component.
import { ContactList } from './contact-list/contact-list';

// This imports the child component used to show one contact in the contact list.
import { ContactItem } from './contact-item/contact-item';

// This imports the child component used to show the selected contact details.
import { ContactDetail } from './contact-detail/contact-detail';

// This starts the test group for the Contacts component.
describe('Contacts', () => {
  // This variable will store the Contacts component instance.
  let component: Contacts;

  // This variable will store the testing environment for the component.
  let fixture: ComponentFixture<Contacts>;

  // This runs before each test.
  beforeEach(async () => {
    // This configures the testing module with the component and its child components.
    await TestBed.configureTestingModule({
      declarations: [Contacts, ContactList, ContactItem, ContactDetail],
    }).compileComponents();

    // This creates the Contacts component for testing.
    fixture = TestBed.createComponent(Contacts);

    // This gets the component instance from the fixture.
    component = fixture.componentInstance;

    // This waits until the component is stable before running the test.
    await fixture.whenStable();
  });

  // This test checks that the Contacts component is created correctly.
  it('should create', () => {
    // This expects the component to exist.
    expect(component).toBeTruthy();
  });
});