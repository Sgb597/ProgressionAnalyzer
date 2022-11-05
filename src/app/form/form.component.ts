import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  dropdownChords: string[] = [];
  form: FormGroup;
  input: string[] = [];
  keys: string[] = [];
  hasResults = false;

  constructor(public formService: FormService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      chord1: new FormControl(null),
      chord2: new FormControl(null),
      chord3: new FormControl(null),
      chord4: new FormControl(null),
      chord5: new FormControl(null),
      chord6: new FormControl(null),
      chord7: new FormControl(null),
    });
    this.dropdownChords = this.formService.getChordsForDropdown();
  }

  onFindMyKey() {
    for (const field in this.form.controls) {
      let formControl = this.form.get(field);
      let chord = formControl?.value;

      if (chord) {
        this.input.push(chord);
      }
    }

    const chordCollection = {
      chords: this.input,
    };
    console.log(this.input);
    this.formService.getKeys(chordCollection).subscribe((results) => {
      for (let key in results.keys) {
        this.keys.push(results.keys[key]);
      }
    });
    this.hasResults = true;
    this.form.reset();
    this.input = [];
  }
}
