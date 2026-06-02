// This imports Component from Angular.
// Component is used to create an Angular component.
import { Component } from '@angular/core';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show the header component.
  selector: 'cms-header',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component to its HTML file.
  templateUrl: './header.html',

  // This connects this component to its CSS file.
  styleUrl: './header.css',
})

// This is the Header component class.
export class Header {
  // The Header component does not need to send events to App anymore.
  // The links in the HTML now use Angular Router to change the page.
}
