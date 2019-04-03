import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from 'src/app/interface/produit.interface';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {

  @Input() cat: Produit;
  @Output() talkEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
  }

  wantToTalk() {
    this.talkEvent.emit(this.cat.talk);
  }

}
