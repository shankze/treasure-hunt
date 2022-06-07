import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { GameProgressService } from 'src/app/services/game-progress.service';
import { SequenceService } from 'src/app/services/sequence.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  teamCode: string = '';
  teamName: string = '';
  question = null;
  userResponse: string = '';
  errorMessage: string = '';
  teamQuestionNumber: number;
  teamQuestionStartTime: any;
  @ViewChild('userResponseInput') userResponseInput: ElementRef;

  constructor(private router: Router, private sequenceService: SequenceService, private gameProgressService: GameProgressService) {}

  ngOnInit(): void {
    //console.log(this.router.url);
    let route: string = this.router.url.substring(1);
    //console.log(route);
    this.teamCode = window.localStorage.getItem('TREASURE_HUNT_TEAM_CODE');
    this.teamName = this.sequenceService.getTeamName(this.teamCode);
    console.log('Team Code: ', this.teamCode);
    console.log('This Route: ', route);
    this.question = this.sequenceService.getQuestionFromTitle(route);
    this.teamQuestionNumber = this.sequenceService.getQuestionNumberForTeamInSequence(this.teamCode, this.question.id);
    console.log('TeamQuestionNumber: ', this.teamQuestionNumber);
    this.teamQuestionStartTime = new Date();
  }

  onQuestionResponseSubmit() {
    console.log(this.question);
    let formattedUserResponse = this.userResponse.toLowerCase().trim();
    if (this.question.match === 'exact') {
      if (formattedUserResponse === this.question.answer) {
        this.navigateToNextQuestion();
      } else {
        this.handleIncorrectResponse();
      }
    } else if (this.question.match === 'one') {
      if (this.question.answer.includes(formattedUserResponse)) {
        this.navigateToNextQuestion();
      } else {
        this.handleIncorrectResponse();
      }
    } else if (this.question.answer.includes(this.userResponse.toLowerCase())) {
      this.navigateToNextQuestion();
    } else {
      this.handleIncorrectResponse();
    }
  }

  handleIncorrectResponse() {
    this.userResponse = '';
    this.errorMessage = 'Incorrect response. Please try again.';
  }

  navigateToNextQuestion() {
    let teamQuestionEndTime: any = new Date();
    let timeToSolveinMS = Math.abs(teamQuestionEndTime - this.teamQuestionStartTime);
    //console.log('Time To Solve:', moment(timeToSolveinMS).format('mm:ss'));
    let timeToSolve = moment(timeToSolveinMS).format('mm:ss');
    let writeProgressToDBObject = { teamCode: this.teamCode, teamName: this.teamName, duration: timeToSolve, questionNumber: this.teamQuestionNumber, question: { id: this.question.id, title: this.question.title } };
    this.gameProgressService.updateProgress(writeProgressToDBObject).subscribe({
      next: () => this.routeToNext(),
      error: (err) => console.log(err),
    });
  }

  routeToNext() {
    let nextQuestion = this.sequenceService.getNextQuestion(this.teamCode, this.question.id);
    console.log('Next Question: ', nextQuestion);
    this.router.navigate([`/${nextQuestion.title}`]);
  }

  ngAfterViewInit() {
    this.userResponseInput.nativeElement.focus();
  }
}
