// This imports Component from Angular.
import { Component } from '@angular/core';

// This decorator tells Angular that this class is a component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

// Export AppComponent so AppModule can use it.
export class AppComponent {
  title = 'Pokemon Team Builder';
}
