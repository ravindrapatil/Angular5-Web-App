import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NotesJsonService } from '../services/notes-json.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotesComponent implements OnInit {

  public notesData: any;

  constructor(private notesService: NotesJsonService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe(res => {
      this.notesData = res.members;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('An error occurred:', err.error.message);
      } else {
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });
  }

}
