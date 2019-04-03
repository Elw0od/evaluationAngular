import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits-list-page',
  templateUrl: './produits-list-page.component.html',
  styleUrls: ['./produits-list-page.component.css']
})
export class ProduitsListPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animalWanToTalk(text: string) {
    alert(text);
  }

}
