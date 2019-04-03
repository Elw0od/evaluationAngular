import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interface/produit.interface';
import { DataZooService } from 'src/app/service/zoo/data-zoo.service';

@Component({
  selector: 'app-cat-list-page',
  templateUrl: './cat-list-page.component.html',
  styleUrls: ['./cat-list-page.component.css']
})
export class CatListPageComponent implements OnInit {

  cats: Produit[];

  constructor(
    private zooSrv: DataZooService
  ) { }

  ngOnInit() {
    this.cats = this.zooSrv.cats;
    console.log('----> this.cats', this.cats);
  }

}
