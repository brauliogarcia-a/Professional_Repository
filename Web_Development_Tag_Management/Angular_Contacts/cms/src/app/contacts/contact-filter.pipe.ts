// This imports Pipe and PipeTransform from Angular.
// PipeTransform is used when we create a custom pipe.
import { Pipe, PipeTransform } from '@angular/core';

// This decorator registers the pipe so it can be used in HTML templates.
@Pipe({
  // This is the name used after the pipe symbol in the template.
  name: 'contactFilter',

  // This pipe is declared in AppModule with the rest of this project's components.
  standalone: false,
})

// This pipe filters contacts by the text typed in the search box.
export class ContactFilterPipe implements PipeTransform {
  // transform receives the full contact list and the search term.
  transform(contacts: any[], term: string): any[] {
    // Return an empty list when there are no contacts to filter.
    if (!contacts) {
      return [];
    }

    // Return all contacts when the search box is empty.
    if (!term || term.trim().length === 0) {
      return contacts;
    }

    // Convert the term to lowercase so the search is not case sensitive.
    const searchTerm = term.toLowerCase();

    // Return only the contacts whose name includes the search term.
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm)
    );
  }
}
