import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres = ['Pop', 'Jazz'];
  adjustToGenre = false;
  @Input() resultKeys: string [];
  genreAdjustedProgression: string[][] = [];

  constructor() { }

  ngOnInit(): void {

  }

  onGenreSelected(event) {
    if(event.isUserInput) {
      this.adjustToGenre = true;
      this.createGenreProgression(event.source.value);
    } else {
      console.log('please chose some chords to identify some keys');
    }
  }

  createGenreProgression(genre) {
    let chordProgressionPerKey: string[] = [];
    switch (genre) {
      case 'Pop':
        // Need to add lodash isEmpty and isNil check
        for (let i = 0; i < this.resultKeys.length; i++) {
          if (this.resultKeys[i][0].toLowerCase().includes('major')) {
            for (let j = 0; j < this.resultKeys[i].length; j++) {
              if (j === 0 || j === 3 || j === 4) {
                chordProgressionPerKey.push(this.resultKeys[i][j]);
              }
            }
          }
          if (this.resultKeys[i][0].toLowerCase().includes('minor')) {
            for (let j = 0; j < this.resultKeys[i].length; j++) {
              if (j === 0 || j === 5 || j === 6) {
                chordProgressionPerKey.push(this.resultKeys[i][j]);
              }
            }
          }
          this.genreAdjustedProgression.push(chordProgressionPerKey);
          chordProgressionPerKey = [];
        }

      case 'Jazz':
        console.log(genre);
        console.log(this.genreAdjustedProgression);
        }
    }
}

