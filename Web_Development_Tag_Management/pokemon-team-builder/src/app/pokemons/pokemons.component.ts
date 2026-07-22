// This imports Component from Angular.
import { Component } from '@angular/core';

// This decorator tells Angular that this class is a component.
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html'
})

// This exports the AppModule class so Angular can use it to start the app.
export class PokemonsComponent {}
