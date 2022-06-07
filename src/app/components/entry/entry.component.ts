import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameProgressService } from 'src/app/services/game-progress.service';
import { SequenceService } from 'src/app/services/sequence.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  teamCode: string = '';
  pageContainsError: boolean = false;
  errorText: string = '';
  teamName: string = '';

  constructor(private router: Router, private sequenceService: SequenceService, private gameProgressService: GameProgressService) {}

  ngOnInit(): void {
    console.log('Entry Component');
  }

  onEntryCodeButtonClick() {
    if (this.sequenceService.isTeamCodeValid(this.teamCode)) {
      window.localStorage.setItem('TREASURE_HUNT_TEAM_CODE', this.teamCode);
      this.pageContainsError = false;
      let writeProgressToDBObject = { teamCode: this.teamCode, teamName: this.sequenceService.getTeamName(this.teamCode), questionNumber: 0 };
      this.gameProgressService.updateProgress(writeProgressToDBObject).subscribe({
        next: () => this.navigateToNextQuestion(),
        error: (err) => console.log(err),
      });
    } else {
      this.teamCode = '';
      this.pageContainsError = true;
    }
  }

  navigateToNextQuestion() {
    let nextQuestion = this.sequenceService.getFirstQuestion(this.teamCode);
    console.log('Team Code: ', this.teamCode);
    console.log('Next Question: ', nextQuestion);
    this.router.navigate([`/${nextQuestion.title}`]);
  }
}
