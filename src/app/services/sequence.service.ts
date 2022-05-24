import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class SequenceService {
  constructor() {}

  sequenceList = { '1': [1, 2, 3, 4, 20], '2': [4, 3, 2, 1, 20] };

  questionList = [
    {
      id: 1,
      title: 'chandler',
      containsText: true,
      containsImage: false,
      text: 'What does Chandler Bing really do?',
      answer: ['statistical', 'analysis'],
    },
    {
      id: 2,
      title: 'title',
      containsText: true,
      containsImage: false,
      text: 'What is Jnanas Job Title?',
      answer: ['environment'],
    },
    {
      id: 3,
      title: 'nyt',
      containsText: true,
      containsImage: false,
      text: 'What is todays Wordle word?',
      answer: ['wordle'],
    },
    {
      id: 4,
      title: 'flag',
      containsText: true,
      containsImage: true,
      imageURL: 'https://flyingcoloursflags.files.wordpress.com/2013/04/kiribati.jpg',
      text: 'What country does this flag belong to?',
      answer: ['kiribati'],
    },
    {
      id: 20,
      title: 'thanks',
    },
  ];

  isTeamCodeValid(teamCode) {
    return teamCode in this.sequenceList;
  }

  getFirstQuestion(team) {
    let firstQuestionId: number = this.sequenceList[team][0];
    return this.questionList.find((element) => element.id === firstQuestionId);
  }

  getQuestionFromTitle(title) {
    console.log('Title: ', title);
    return this.questionList.find((element) => element.title === title);
  }

  getQuestionForId(questionId) {}

  getNextQuestion(team, currentQuestionId) {
    let teamSequenceList = this.sequenceList[team];
    let currentQuestionIndex = teamSequenceList.indexOf(currentQuestionId);
    let nextQuestionIndex = teamSequenceList[currentQuestionIndex + 1];
    return this.questionList.find((element) => element.id === nextQuestionIndex);
  }
}
