// This imports the tools needed to create a component and send events to a parent component.
import { Component, EventEmitter, Output } from '@angular/core';

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
  // @Output lets this child component send information to the parent component.
  // selectedFeatureEvent will send the selected section as a string.
  @Output() selectedFeatureEvent = new EventEmitter<string>();

  // This method runs when the user selects a section in the header.
  onSelected(selectedFeature: string): void {
    // This sends the selected section to the parent component.
    // For example: documents, messages, or contacts.
    this.selectedFeatureEvent.emit(selectedFeature);
  }
}