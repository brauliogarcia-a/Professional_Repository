// The following lines import modules from Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// The following lines import components from Angular
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './pokemons/pokemon-item/pokemon-item.component';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import { PokemonEditComponent } from './pokemons/pokemon-edit/pokemon-edit.component';

// This decorator tells Angular that AppModule is an Angular module.
@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonListComponent,
    PokemonItemComponent,
    PokemonDetailComponent,
    PokemonEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// This exports the AppModule class so Angular can use it to start the app.
export class AppModule { }
