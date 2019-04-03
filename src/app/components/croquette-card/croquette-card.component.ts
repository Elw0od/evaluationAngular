import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from 'src/app/interface/produit.interface';

@Component({
  selector: 'app-croquette-card',
  templateUrl: './croquette-card.component.html',
  styleUrls: ['./croquette-card.component.css']
})
export class croquetteCardComponent implements OnInit {

  @Input() croquette: Produit;
  @Output() talkEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(' ngOnInit ----> CroquetteCardComponent')
  }

  ngOnChanges(changes): void {
    console.log(' ngOnChanges ----> CroquetteCardComponent');
    console.log(changes);
    console.log('croquette', this.croquette);
  }

  wantToTalk() {
    this.talkEvent.emit(this.croquette.talk);
  }

}
