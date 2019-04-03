import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsListPageComponent } from './page/produits-list-page/produits-list-page.component';
import { TestPageComponent } from './page/test-page/test-page.component';

// DOG
import { DogListPageComponent } from './page/dog/dog-list-page/dog-list-page.component';

// CAT
import { CatListPageComponent } from './page/cat/cat-list-page/cat-list-page.component';
import { CatCreatePageComponent } from './page/cat/cat-create-page/cat-create-page.component';
import { CatUpdatePageComponent } from './page/cat/cat-update-page/cat-update-page.component';

// Croquette
import { CroquetteListPageComponent } from './page/croquette/croquette-list-page/croquette-list-page.component';


// more precise 
// to
// more general

const routes: Routes = [
  //dog
  { path: "dog/list", component: DogListPageComponent },
  { path: "croquette/list", component: CroquetteListPageComponent },
  //cat
  { path: "cat/list", component: CatListPageComponent },
  { path: "cat/create", component: CatCreatePageComponent },
  { path: "cat/update/:id", component: CatUpdatePageComponent },
  {
    path: 'animals/list',
    component: ProduitsListPageComponent,
    children: [
      {
        path: 'test', component: TestPageComponent
      }
    ]
  },
  // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  //enableTracing -> show dev log of router
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
