import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../resources/notes-resource.service';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css']
})
export class ListNoteComponent implements OnInit {

  public notes;

  constructor(private _notesResource: NotesService) {
  }

  ngOnInit() {
    this.getNotes();
  }

  public getNotes() {
    this._notesResource.getAll().subscribe(
      data => {
        this.notes = data['items'];
      },
      err => console.error(err),
      () => console.log('done loading notes', this.notes)
    );
  }

}
