// This imports Component from Angular.
// Component is used to create an Angular component.
import { Component } from '@angular/core';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show this component.
  // In this case, Angular can use <cms-root></cms-root>.
  selector: 'cms-root',

  // This connects the component with its HTML file.
  // The HTML file controls what the user sees on the page.
  templateUrl: './app.html',

  // This means this component is not standalone.
  // It belongs to an Angular module, like AppModule.
  standalone: false,

  // This connects the component with its CSS file.
  // The CSS file controls the style of this component.
  styleUrl: './app.css'
})

// This is the main App component class.
export class App {
  // The App component does not need to manually switch views anymore.
  // The Angular Router now decides which main component should be displayed.
}
