import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NGRX
import { StoreModule } from '@ngrx/store';
import { ataqueReducer } from './shared/reducers/ataque.reducers';

import { MenuComponent } from './shared/components/menu/menu.component';
import { IntroComponent } from './pages/intro/intro.component';
import { FaseComponent } from './pages/fase/fase.component';
import { PersonajeComponent } from './shared/components/personaje/personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IntroComponent,
    FaseComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ count: ataqueReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
