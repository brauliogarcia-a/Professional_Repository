// This imports the platformBrowser function from Angular.
// This is needed because the app will run in the browser.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// This imports the main module of the application.
// AppModule is the starting point that connects the app together.
import { AppModule } from './app/app.module';

// This tells Angular to start the application in the browser.
// It uses AppModule as the main module to load the app.
platformBrowserDynamic().bootstrapModule(AppModule)
  // If something goes wrong while starting the app,
  // this will show the error in the console.
  .catch(err => console.error(err));
