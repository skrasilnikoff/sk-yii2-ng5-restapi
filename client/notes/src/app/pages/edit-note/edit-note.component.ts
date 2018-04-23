import {Component, OnInit} from '@angular/core';
import {NotesService} from '../../resources/notes-resource.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  public note;
  public errorState = false;

  constructor(private _notesResource: NotesService, private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      if (res.id > 0) {
        this.getNote(res.id);
      }
    });
  }

  ngOnInit() {
    this.note = {
      id: 0
    };
  }

  public getNote(id) {
    this._notesResource.getById(id).subscribe(
      data => {
        this.note = data;
      },
      err => {this.errorState = true; console.error(err)},
      () => console.log('done loading notes', this.note)
    );
  }

  public deleteNoteHandler() {
    this._notesResource.delete(this.note).subscribe(
      data => {
        this.note = {id: 0};
      },
      err => console.error(err),
      () => {
        console.log('done loading notes', this.note);
      }
    );
  }

  public saveNoteHandler() {
    this._notesResource.save(this.note).subscribe(
      data => {
        this.note = data;
      },
      err => console.error(err),
      () => {
        console.log('done save notes', this.note);
      }
    );
  }

}
