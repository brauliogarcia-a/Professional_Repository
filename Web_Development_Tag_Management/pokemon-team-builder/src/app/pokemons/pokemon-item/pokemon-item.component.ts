// This imports Component from Angular.
import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon.model';

// This decorator tells Angular that this class is a component.
@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html'
})

// This exports the AppModule class so Angular can use it to start the app.
export class PokemonItemComponent {
  @Input() pokemon!: Pokemon;
}
