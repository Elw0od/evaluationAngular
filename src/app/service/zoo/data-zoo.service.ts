import { Injectable } from '@angular/core';
import { Produit } from 'src/app/interface/produit.interface';
import { from } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class DataZooService {

  constructor() { }

  ////////////////////////////////////////////////////

  /////////////////   CHAT //////////////////////////

  ///////////////////////////////////////////////////

  cats: Produit[] = [{
    desc: "Pilou est un chat très... aie.. gentil :)",
    id: 1,
    name: "Pilou",
    talk: "talk",
    image : 'https://media.giphy.com/media/a4WCILDLxigww/giphy.gif',
  }, {
    desc: "Jack pose Daniel",
    id: 2,
    name: "Jack",
    talk: "talk",
    image : 'https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif',
  }, {
    desc: "Francis, il est débile mais on l'aime quand même",
    id: 3,
    name: "Francis",
    talk: "talk",
    image : 'https://steamuserimages-a.akamaihd.net/ugc/545298547822403981/95E4DC3B6B1CF974383E0F7762F035B7B79A5785/',
  }]


  addCat(cat: Produit) {
    this.cats.push(cat);
  }

  getByIdCat(catId: number): Produit {
    let ProduitToReturn = this.cats.find(({ id }) => id == catId);
    console.log('----> ProduitToReturn', ProduitToReturn);
    return ProduitToReturn;
  }

  deleteCat(catId: number) {

    // return implicit + spread
    let catToDeleteIndex = this.cats.findIndex(({ id }) => id == catId);

    // check if the cat exsit in the array
    if (catToDeleteIndex !== -1) {
      this.cats.splice(catToDeleteIndex, 1);
    }
    console.log('---> this.cats after delete', this.cats);
  }

  updateCat(cat: Produit, catId: number) {
    let catToUpdateIndex = this.cats.findIndex((currentCat) => currentCat.id == catId);
    // check if the cat exsit in the array
    if (catToUpdateIndex !== -1) {
      // spread
      this.cats[catToUpdateIndex] = { ...cat };
      // es5
      // this.cats[catToUpdateIndex] = Object.assign({}, cat);
    }
    console.log('---> this.cats after update', this.cats);
  }


  ////////////////////////////////////////////////////

  /////////////////   DOG //////////////////////////

  ///////////////////////////////////////////////////

  dogs: Produit[] = [{
    desc: "Tintin et Milou deux chiens un peu idiots mais pleins d'amour:)",
    id: 1,
    name: "Tintin et Milou",
    talk: "talk",
    image : 'https://media.giphy.com/media/YIW0KqAQShjCE/giphy.gif',
  }, {
    desc: "Jack pose Daniel",
    id: 2,
    name: "Jack",
    talk: "talk",
    image : 'https://media1.giphy.com/media/XOZoPYhK4RMpq/giphy.gif',
  }, {
    desc: "Francis, il est débile mais on l'aime quand même",
    id: 3,
    name: "Francis",
    talk: "talk",
    image : 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif',
  }]


  addDog(dog: Produit) {
    this.dogs.push(dog);
  }

  getById(dogId: number): Produit {
    let ProduitToReturn = this.dogs.find(({ id }) => id == dogId);
    console.log('----> ProduitToReturn', ProduitToReturn);
    return ProduitToReturn;
  }

  deleteDog(dogId: number) {

    let dogToDeleteIndex = this.dogs.findIndex(({ id }) => id == dogId);

    // check if the dog exsit in the array
    if (dogToDeleteIndex !== -1) {
      this.dogs.splice(dogToDeleteIndex, 1);
    }
    console.log('---> this.dogs after delete', this.dogs);
  }

  updateDog(dog: Produit, dogId: number) {
    let dogToUpdateIndex = this.dogs.findIndex((currentdog) => currentdog.id == dogId);
    // check if the dog exsit in the array
    if (dogToUpdateIndex !== -1) {
      // spread
      this.dogs[dogToUpdateIndex] = { ...dog };
      // es5
      // this.dogs[dogToUpdateIndex] = Object.assign({}, dog);
    }
    console.log('---> this.dogs after update', this.dogs);
  }



}
