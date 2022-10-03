import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { NotesComponent } from './notes/notes.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
  { path: 'bookmark', component: BookmarkComponent },
  { path: 'to-do', component: ToDoComponent },
  { path: 'notes', component: NotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
