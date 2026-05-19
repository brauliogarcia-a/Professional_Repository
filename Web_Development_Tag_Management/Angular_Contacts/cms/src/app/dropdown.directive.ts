// This imports the Angular tools needed to create a custom directive.
import { Directive, HostBinding, HostListener } from '@angular/core';

// This decorator tells Angular that this class is a directive.
@Directive({
  // This selector allows us to add the directive as an attribute in HTML.
  selector: '[cmsDropdown]',

  // This means this directive belongs to a module and is not standalone.
  standalone: false,
})

// This is the custom dropdown directive class.
export class DropdownDirective {
  // This variable keeps track of whether the dropdown is open or closed.
  private isOpen = false;

  // HostBinding adds or removes the Bootstrap open class on the element that uses this directive.
  // When open is true, Bootstrap shows the dropdown menu.
  @HostBinding('class.open') get opened(): boolean {
    return this.isOpen;
  }

  // HostListener listens for a click on the element that uses this directive.
  // Each click changes the dropdown from closed to open, or from open to closed.
  @HostListener('click') toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
}
