// This imports Component from Angular.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

// This decorator tells Angular that this class is a component.
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html'
})
export class PokemonDetailComponent implements OnInit {
  // This variable stores the Pokemon selected by the user.
  // It starts as null because no Pokemon is loaded at the beginning.
  pokemon: Pokemon | null = null;

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
    // This reads the id from the URL.
    // For example, /pokemons/152 gives us the id 152.
    this.route.params.subscribe(params => {
      const id = params['id'];

      // This loads the Pokemon that matches the id from the route.
      this.getPokemon(id);
    });
  }

  // This method loads the Pokemon that the user selected from the list.
  getPokemon(id: string): void {
    // The service sends a request to the backend to get one Pokemon.
    this.pokemonService.getPokemon(id).subscribe(
      (pokemon: Pokemon) => {
        // This saves the Pokemon returned from MongoDB so it can show on the page.
        this.pokemon = pokemon;
      },
      (error) => {
        // This message shows if the Pokemon could not be loaded.
        this.errorMessage = 'The Pokemon could not be loaded.';
        console.log(error);
      }
    );
  }

  // This method runs when the user clicks the delete button.
  onDelete(): void {
    // This check prevents errors if there is no Pokemon loaded.
    if (!this.pokemon) {
      return;
    }

    // The service sends a delete request to the backend.
    this.pokemonService.deletePokemon(this.pokemon.id).subscribe(
      () => {
        // After deleting, the user goes back to the main Pokemon page.
        this.router.navigate(['/pokemons']);

        // This refreshes the page so the list updates after the delete.
        window.location.reload();
      },
      (error) => {
        // This message shows if the Pokemon could not be deleted.
        this.errorMessage = 'The Pokemon could not be deleted.';
        console.log(error);
      }
    );
  }
}