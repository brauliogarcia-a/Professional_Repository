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
  // This variable keeps track of the section currently selected.
  // The default section is documents.
  selectedFeature = 'documents';

  // This method changes the current view when the user selects another section.
  // For example, it can switch from documents to messages or contacts.
  switchView(selectedFeature: string): void {
    // Save the selected section in the selectedFeature variable.
    this.selectedFeature = selectedFeature;
  }
}