import { Component, OnInit } from '@angular/core';
import { FormService } from '../form/form.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  chords: string[] = [];
  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.chords = this.formService.getChordsForDropdown();
  }
}
