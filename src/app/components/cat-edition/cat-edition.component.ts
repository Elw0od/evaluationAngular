import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Produit } from 'src/app/interface/produit.interface';

@Component({
  selector: 'app-cat-edition',
  templateUrl: './cat-edition.component.html',
  styleUrls: ['./cat-edition.component.css']
})
export class CatEditionComponent implements OnInit {

  catForm: FormGroup;

  catNameControl: FormControl;

  @Input() animalToUpdate: Produit;
  @Output() saveEvent: EventEmitter<Produit> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.initControlName();
    this.listenInputChange();
  }
  initControlName(): any {
    this.catNameControl = this.fb.control('');
  }

  ngOnChanges(): void {
    // this.patchForm();
  }

  getInput() {
    console.log('----> value control cat name', this.catNameControl.value);
    console.log(this.catForm.value);
  }

  reset() {
    this.catNameControl.reset();
  }

  listenInputChange(): any {
    this.catNameControl.valueChanges.subscribe(data => {
      console.log('----> data', data);
    })
  }

  submitForm() {
    console.log('----> ', this.catForm.value);
    this.saveEvent.emit(this.catForm.value);
  }

  patchForm() {
    this.catForm.patchValue(this.animalToUpdate);
  }

  initForm(): any {
    this.catForm = this.fb.group({
      'name': [''],
      'breed': [''],
      'talk': [''],
      'id': ['']
    })
    if (this.animalToUpdate) {
      this.patchForm();
    }

  }

}
