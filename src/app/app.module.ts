import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './components/entry/entry.component';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './components/question/question.component';
import { EndhuntComponent } from './components/endhunt/endhunt.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardlightComponent } from './components/dashboardlight/dashboardlight.component';

@NgModule({
  declarations: [AppComponent, EntryComponent, QuestionComponent, EndhuntComponent, DashboardComponent, DashboardlightComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
