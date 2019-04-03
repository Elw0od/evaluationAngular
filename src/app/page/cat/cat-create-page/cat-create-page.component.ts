import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interface/produit.interface';
import { DataZooService } from 'src/app/service/zoo/data-zoo.service';

@Component({
  selector: 'app-cat-create-page',
  templateUrl: './cat-create-page.component.html',
  styleUrls: ['./cat-create-page.component.css']
})
export class CatCreatePageComponent implements OnInit {

  constructor(
    private catSrv: DataZooService
  ) { }

  ngOnInit() {
  }

  createCat(newCat: Produit) {
    console.log('----> cat', newCat);
    this.catSrv.addCat(newCat);
    console.log('----> this cats', this.catSrv.cats);
  }

}
