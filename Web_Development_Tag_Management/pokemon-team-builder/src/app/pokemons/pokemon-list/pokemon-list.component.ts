// This imports Component from Angular.
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';


// This decorator tells Angular that this class is a component.
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  errorMessage = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  // I left this separated so the list can be loaded again if I need it later.
  loadPokemons(): void {
    this.pokemonService.getPokemons().subscribe(
      (pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
      },
      (error) => {
        this.errorMessage = 'The Pokemon list could not be loaded.';
        console.log(error);
      }
    );
  }
}
