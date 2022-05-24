import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private sequenceService: SequenceService) {}

  ngOnInit(): void {
    console.log('Entry Component');
  }

  onEntryCodeButtonClick() {
    if (this.sequenceService.isTeamCodeValid(this.teamCode)) {
      window.localStorage.setItem('TREASURE_HUNT_TEAM_CODE', this.teamCode);
      this.pageContainsError = false;
      let nextQuestion = this.sequenceService.getFirstQuestion(this.teamCode);
      console.log('Team Code: ', this.teamCode);
      console.log('Next Question: ', nextQuestion);
      this.router.navigate([`/${nextQuestion.title}`]);
    } else {
      this.teamCode = '';
      this.pageContainsError = true;
    }

    /*
    if (this.playerCode === '1') {
      window.localStorage.setItem('TREASURE_HUNT_TEAM_CODE', this.playerCode);
      this.pageContainsError = false;
      this.router.navigate(['/chandler', this.playerCode]);
    } else if (this.playerCode === '2') {
      this.pageContainsError = false;
      window.localStorage.setItem('TREASURE_HUNT_TEAM_CODE', this.playerCode);
      this.router.navigate(['/title', this.playerCode]);
    } else {
      this.playerCode = '';
      this.pageContainsError = true;
    }*/
  }
}
