import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { GameProgressService } from 'src/app/services/game-progress.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private gameProgressService: GameProgressService) {}
  team1Progress;
  team2Progress;
  private updateSubscription: Subscription;
  autoRefreshPage = false;
  team1TimeOnCurrentQuestionInSeconds;
  team2TimeOnCurrentQuestionInSeconds;
  team1CompletionTime;
  team2CompletionTime;
  team1Complete: boolean = false;
  team2Complete: boolean = false;

  ngOnInit(): void {
    if (this.autoRefreshPage) {
      this.updateSubscription = interval(3000).subscribe((val) => {
        this.getTeamProgress();
      });
    } else {
      this.getTeamProgress();
    }
  }

  //lastAnsweredQuestionId

  formatSeconds = (s) => new Date(s * 1000).toISOString().substring(14, 19);

  getTeamProgress() {
    this.gameProgressService.getGameProgress('2769').subscribe({
      next: (response) => {
        if (response.modified) {
          this.team1Progress = response;
          if (response.lastAnsweredQuestionId == 900) {
            this.team1TimeOnCurrentQuestionInSeconds = null;
            this.team1Complete = true;
            this.team1CompletionTime = new Date(response.completionTime).toLocaleString('en-US', { timeZone: 'CST' });
            return;
          } else {
            this.team1Complete = false;
          }
          let currentTime: any = new Date(response.currentServerTime);
          let lastQuestionAnsweredTime: any = new Date(response.modified);
          let lastQuestionAnsweredTimeinSeconds = Math.abs(currentTime - lastQuestionAnsweredTime) / 1000;
          //this.team1TimeOnCurrentQuestionInSeconds = moment(lastQuestionAnsweredTimeinSeconds).format('mm:ss');
          this.team1TimeOnCurrentQuestionInSeconds = this.formatSeconds(lastQuestionAnsweredTimeinSeconds);
        }
      },
      error: (err) => console.log(err),
    });
    this.gameProgressService.getGameProgress('7325').subscribe({
      next: (response) => {
        if (response.modified) {
          console.log(response.currentServerTime);
          this.team2Progress = response;
          if (response.lastAnsweredQuestionId == 900) {
            this.team2TimeOnCurrentQuestionInSeconds = null;
            this.team2Complete = true;
            this.team2CompletionTime = new Date(response.completionTime).toLocaleString('en-US', { timeZone: 'CST' });
            return;
          } else {
            this.team2Complete = false;
          }
          let currentTime: any = new Date(response.currentServerTime);
          let lastQuestionAnsweredTime: any = new Date(response.modified);
          let lastQuestionAnsweredTimeinSeconds = Math.abs(currentTime - lastQuestionAnsweredTime) / 1000;
          console.log(lastQuestionAnsweredTimeinSeconds);
          //this.team2TimeOnCurrentQuestionInSeconds = moment(lastQuestionAnsweredTimeinSeconds).format('mm:ss');
          this.team2TimeOnCurrentQuestionInSeconds = this.formatSeconds(lastQuestionAnsweredTimeinSeconds);
          //console.log(this.team2TimeOnCurrentQuestionInSeconds);
        }
      },
      error: (err) => console.log(err),
    });
  }
}
