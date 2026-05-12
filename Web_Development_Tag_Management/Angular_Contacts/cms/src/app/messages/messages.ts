// This imports Component from Angular.
// Component is needed to create an Angular component.
import { Component } from '@angular/core';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show the messages component.
  selector: 'cms-messages',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './messages.html',

  // This connects this component with its CSS file.
  styleUrl: './messages.css',
})

// This is the Messages component class.
// Right now it is empty because the logic is handled by child components or will be added later.
export class Messages {}
