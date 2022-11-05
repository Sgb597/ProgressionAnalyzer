import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private possibleChords: string[] = [
    'C major',
    'C minor',
    'C# major',
    'C# minor',
    'Db major',
    'D major',
    'D minor',
    'D# major',
    'D# minor',
    'Eb major',
    'Eb minor',
    'E major',
    'E minor',
    'F major',
    'F minor',
    'F# major',
    'F# minor',
    'Gb major',
    'G major',
    'G minor',
    'G# minor',
    'Ab major',
    'Ab minor',
    'A major',
    'A minor',
    'A# minor',
    'Bb major',
    'Bb minor',
    'B major',
    'B minor',
  ];

  constructor(private http: HttpClient) {}

  getChordsForDropdown() {
    return this.possibleChords;
  }

  getKeys(chordCollection: any): Observable<any> {
    return this.http.post(`http://localhost:3000/api/keys`, chordCollection);
  }
}
