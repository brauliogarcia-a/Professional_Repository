// The following lines import modules from Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// The following lines import components from Angular
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import { PokemonEditComponent } from './pokemons/pokemon-edit/pokemon-edit.component';

// This array defines the main routes for the application.
// Each path is connected to the component that Angular should show.
const appRoutes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokemons/new', component: PokemonEditComponent },
  { path: 'pokemons/:id', component: PokemonDetailComponent },
  { path: 'pokemons/:id/edit', component: PokemonEditComponent }
];

// This decorator tells Angular that AppRoutingModule is an Angular module.
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

// This exports the AppRoutingModule class so AppModule can use it.
export class AppRoutingModule { }