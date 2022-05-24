import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SequenceService } from 'src/app/services/sequence.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  teamCode: string = '';
  question = null;
  userResponse: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private sequenceService: SequenceService) {}

  ngOnInit(): void {
    console.log(this.router.url);
    let route: string = this.router.url.substring(1);
    console.log(route);
    this.teamCode = window.localStorage.getItem('TREASURE_HUNT_TEAM_CODE');
    console.log('Team Code: ', this.teamCode);
    console.log('This Route: ', route);
    this.question = this.sequenceService.getQuestionFromTitle(route);
  }

  onQuestionResponseSubmit() {
    if (this.question.answer.includes(this.userResponse.toLowerCase())) {
      let nextQuestion = this.sequenceService.getNextQuestion(this.teamCode, this.question.id);
      console.log('Next Question: ', nextQuestion);
      this.router.navigate([`/${nextQuestion.title}`]);
    } else {
      this.userResponse = '';
      this.errorMessage = 'Incorrect response. Please try again.';
    }
  }
}
