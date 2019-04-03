import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// DOG
import { DogCardComponent } from './components/dog-card/dog-card.component';
import { DogListPageComponent } from './page/dog/dog-list-page/dog-list-page.component';

//CAT
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { CatListPageComponent } from './page/cat/cat-list-page/cat-list-page.component';
import { CatCreatePageComponent } from './page/cat/cat-create-page/cat-create-page.component';
import { CatUpdatePageComponent } from './page/cat/cat-update-page/cat-update-page.component';
import { CatEditionComponent } from './components/cat-edition/cat-edition.component';

//Croquette


import { AppRoutingModule } from './app-routing.module';
import { ProduitsListPageComponent } from './page/produits-list-page/produits-list-page.component';
import { TestPageComponent } from './page/test-page/test-page.component';
import { CroquetteListPageComponent } from './page/croquette/croquette-list-page/croquette-list-page.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DogCardComponent,

    CatCardComponent,
    ProduitsListPageComponent,
    TestPageComponent,
    DogListPageComponent,
    CatListPageComponent,
    CroquetteListPageComponent,
    CatCreatePageComponent,
    CatUpdatePageComponent,
    CatEditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
