import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // This service is the connection between Angular and the Node server.
  private baseUrl = 'http://localhost:3000/pokemons';

  constructor(private http: HttpClient) {}

  // Gets the Pokemon list from MongoDB.
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.baseUrl);
  }

  // Gets one Pokemon using the id that is easier to read.
  getPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + '/' + id);
  }

  // Sends a new Pokemon to the backend.
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.baseUrl, pokemon);
  }

  // Saves changes for the selected Pokemon.
  updatePokemon(id: string, pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(this.baseUrl + '/' + id, pokemon);
  }

  // Removes one Pokemon from the database.
  deletePokemon(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
