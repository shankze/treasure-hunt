import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardlightComponent } from './components/dashboardlight/dashboardlight.component';
import { EndhuntComponent } from './components/endhunt/endhunt.component';
import { EntryComponent } from './components/entry/entry.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'mask', component: QuestionComponent },
  { path: 'stairs', component: QuestionComponent },
  { path: 'keys', component: QuestionComponent },
  { path: 'treasure', component: QuestionComponent },
  { path: 'king', component: QuestionComponent },
  { path: 'ghosts', component: QuestionComponent },
  { path: 'painted', component: QuestionComponent },
  { path: 'webster', component: QuestionComponent },
  { path: 'fruit', component: QuestionComponent },
  { path: 'fly', component: QuestionComponent },
  { path: 'cat', component: QuestionComponent },
  { path: 'street', component: QuestionComponent },
  { path: 'cocktails', component: QuestionComponent },
  { path: 'qr', component: QuestionComponent },
  { path: 'menu', component: QuestionComponent },
  { path: 'h3rc', component: QuestionComponent },
  { path: 'layover', component: QuestionComponent },
  { path: 'recipe', component: QuestionComponent },
  { path: 'grammy', component: QuestionComponent },
  { path: 'poster', component: QuestionComponent },
  { path: 'school', component: QuestionComponent },
  { path: 'selfie', component: QuestionComponent },
  { path: 'thanks', component: EndhuntComponent },
  { path: 'dashboard', component: DashboardlightComponent },
  { path: 'dashboardfull', component: DashboardComponent },
  //{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
