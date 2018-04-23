import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {FormsModule} from '@angular/forms';
import {ResourceService} from './resources/resource.service';
import {NotesService} from './resources/notes-resource.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import {AppComponent} from './app.component';
import {EditNoteComponent} from './pages/edit-note/edit-note.component';
import {ListNoteComponent} from './pages/list-note/list-note.component';
import {MatIcon, MatIconModule, MatIconRegistry} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EditNoteComponent,
    ListNoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    FormsModule
  ],
  providers: [ResourceService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
