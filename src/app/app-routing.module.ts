import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndhuntComponent } from './components/endhunt/endhunt.component';
import { EntryComponent } from './components/entry/entry.component';
import { ImageComponent } from './components/image/image.component';
import { QuestionComponent } from './components/question/question.component';
import { TextComponent } from './components/text/text.component';

const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'title', component: QuestionComponent },
  { path: 'chandler', component: QuestionComponent },
  { path: 'nyt', component: QuestionComponent },
  { path: 'flag', component: QuestionComponent },
  { path: 'thanks', component: EndhuntComponent },
  //{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
