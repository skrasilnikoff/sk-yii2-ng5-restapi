import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ListNoteComponent } from './pages/list-note/list-note.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';

const routes: Routes = [
  {
    path: '',
    component: ListNoteComponent
  },
  {
    path: 'edit-note/:id',
    component: EditNoteComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
