import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interface/produit.interface';
import { DataZooService } from 'src/app/service/zoo/data-zoo.service';

@Component({
  selector: 'app-dog-list-page',
  templateUrl: './dog-list-page.component.html',
  styleUrls: ['./dog-list-page.component.css'],
})
export class DogListPageComponent implements OnInit {

  dogs: Produit[];

  constructor(
    private ZooService: DataZooService
  ) { }

  ngOnInit() {
    this.dogs = this.ZooService.dogs;
    console.log('----> this.cats', this.dogs);
  }


}
