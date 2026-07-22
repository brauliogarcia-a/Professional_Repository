// This imports Component and OnInit from Angular.
import { Component, OnInit } from '@angular/core';

// These imports help read the route parameters and navigate to another page.
import { ActivatedRoute, Router } from '@angular/router';

// This imports the Pokemon model and service used by this component.
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

// This decorator tells Angular that this class is a component.
@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html'
})
export class PokemonEditComponent implements OnInit {
  // This creates an empty Pokemon object for the form.
  // The same form is used for adding a new Pokemon and editing an existing one.
  pokemon: Pokemon = new Pokemon('', '', '', '', 1, '', '', '', false);

  // This variable tells the component if the form is in edit mode or add mode.
  editMode = false;

  // This variable stores an error message if something goes wrong.
  errorMessage = '';

  // The constructor injects the route, router, and Pokemon service.
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  // This method runs when the component first loads.
  ngOnInit(): void {
    // This checks the URL parameters to see if there is a Pokemon id.
    this.route.params.subscribe(params => {
      const id = params['id'];

      // If there is an id, the form is used to edit an existing Pokemon.
      if (id) {
        this.editMode = true;

        // This gets the selected Pokemon from the backend using the service.
        this.pokemonService.getPokemon(id).subscribe(
          (pokemon: Pokemon) => {
            // This fills the form with the Pokemon information from MongoDB.
            this.pokemon = pokemon;
          },
          (error) => {
            // This message shows if the Pokemon could not be loaded.
            this.errorMessage = 'The Pokemon could not be loaded for editing.';
            console.log(error);
          }
        );
      }
    });
  }

  // This method runs when the user submits the form.
  // It handles both create and update so the form stays simple.
  onSubmit(): void {
    // If editMode is true, the existing Pokemon is updated.
    if (this.editMode) {
      this.pokemonService.updatePokemon(this.pokemon.id, this.pokemon).subscribe(
        () => {
          // After updating, the user goes back to the detail page.
          this.router.navigate(['/pokemons', this.pokemon.id]);
        },
        (error) => {
          // This message shows if the Pokemon could not be updated.
          this.errorMessage = 'The Pokemon could not be updated.';
          console.log(error);
        }
      );
    } else {
      // If editMode is false, a new Pokemon is created.
      this.pokemonService.addPokemon(this.pokemon).subscribe(
        (newPokemon: Pokemon) => {
          // After adding, the user goes to the new Pokemon detail page.
          this.router.navigate(['/pokemons', newPokemon.id]);

          // This refreshes the page so the list on the left shows the new Pokemon.
          window.location.reload();
        },
        (error) => {
          // This message shows if the Pokemon could not be added.
          this.errorMessage = 'The Pokemon could not be added.';
          console.log(error);
        }
      );
    }
  }

  // This method sends the user back to the main Pokemon page without saving.
  onCancel(): void {
    this.router.navigate(['/pokemons']);
  }
}