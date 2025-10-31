import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardlightComponent } from './components/dashboardlight/dashboardlight.component';
import { EndhuntComponent } from './components/endhunt/endhunt.component';
import { EntryComponent } from './components/entry/entry.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'bcn', component: QuestionComponent },
  { path: 'movie', component: QuestionComponent },
  { path: 'city', component: QuestionComponent },
  { path: 'restaurant', component: QuestionComponent },
  { path: 'zip', component: QuestionComponent },
  { path: 'brixton', component: QuestionComponent },
  { path: 'class', component: QuestionComponent },
  { path: 'school', component: QuestionComponent },
  { path: 'desert', component: QuestionComponent },
  { path: 'biryani', component: QuestionComponent },
  { path: 'sound', component: QuestionComponent },
  { path: 'river', component: QuestionComponent },
  { path: 'park', component: QuestionComponent },
  { path: 'split', component: QuestionComponent },
  { path: 'spotlight', component: QuestionComponent },
  { path: 'silence', component: QuestionComponent },
  { path: 'agas', component: QuestionComponent },
  { path: 'craving', component: QuestionComponent },
  { path: 'treat', component: QuestionComponent },
  { path: 'qr', component: QuestionComponent },
  { path: 'selfie', component: QuestionComponent },
  { path: 'word', component: QuestionComponent },
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
