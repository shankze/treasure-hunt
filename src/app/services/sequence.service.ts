import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class SequenceService {
  constructor() {}

  teamNames = { '2769': 'Blue', '7325': 'Pink' };

  sequenceList = { '2769': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 17, 18, 19, 900, 999], '7325': [17, 18, 19, 20, 15, 14, 13, 12, 11, 16, 10, 9, 8, 7, 6, 5, 4, 3, 1, 2, 900, 999] };
  //sequenceList = { '2769': [17, 18, 19, 900, 999], '7325': [19, 18, 17, 900, 999] };

  questionList = [
    {
      id: 1,
      title: 'mask',
      containsText: true,
      containsImage: false,
      text: `"No One Cared Who I Was Until I Put On The Mask." What city was this movie shot in where the city where the walls are blue.`,
      answer: 'jodhpur',
      match: 'exact',
      category: 'Pink or Blue',
    },
    {
      id: 2,
      title: 'stairs',
      containsText: true,
      containsImage: false,
      text: 'A woman lives in a one story pink house. The door is pink, the rugs are pink, the walls are also pink. What color are the stairs?',
      answer: ['none', 'no stairs'],
      match: 'one',
      category: 'Pink or Blue',
    },
    {
      id: 3,
      title: 'keys',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/keys.jpg',
      text: 'Khul Ja Sim Sim! I got the keys to here! What city am I visiting?',
      answer: 'chefchaouen',
      match: 'exact',
      category: 'Pink or Blue',
    },
    {
      id: 4,
      title: 'treasure',
      containsText: true,
      containsImage: false,
      text: 'This Pink City treasure is making me green with envy!',
      answer: 'emerald',
      match: 'exact',
      category: 'Pink or Blue',
    },
    {
      id: 5,
      title: 'king',
      containsText: true,
      containsImage: true,
      text: 'The king of which place was associated with the controversy related to this picture?',
      imageURL: 'assets/king.jpg',
      answer: 'patiala',
      match: 'exact',
    },
    {
      id: 6,
      title: 'ghosts',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/cb.jpg',
      text: 'Do you believe in ghosts? Watch out! This historical town may be haunted!',
      answer: 'abhaneri',
      match: 'exact',
      category: 'Pink or Blue',
    },
    {
      id: 7,
      title: 'painted',
      containsText: true,
      containsImage: false,
      text: 'The residents painted the walls of this village to celebrate the release of a movie in this village',
      answer: 'juzcar',
      match: 'exact',
      category: 'Pink or Blue',
    },
    {
      id: 8,
      title: 'webster',
      containsText: true,
      containsImage: false,
      text: 'Riddle me this hungry Batman! Smith, Louisiana, Hadley and Webster',
      answer: 'gotham pizza',
      match: 'exact',
      category: 'Houston',
    },
    {
      id: 9,
      title: 'street',
      containsText: true,
      containsImage: false,
      text: `It's Trash Day at Windsor Estates! If you were walking on Manobrook St on a typical trash day, how many cars would you have seen being photographed on the street (driveway, street or garage)?`,
      answer: ['20', 'twenty'],
      match: 'one',
      category: 'Houston',
    },
    {
      id: 10,
      title: 'fly',
      containsText: true,
      containsImage: false,
      text: `You want to fly? Me too! Lets fly to this village in Houston to deliver your Hogwart's acceptance letter.`,
      answer: ['hedwig', 'hedwig village'],
      match: 'one',
      category: 'Houston',
    },
    {
      id: 11,
      title: 'cat',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/cat.jpg',
      text: `Meow! I am stuck on the top here. Come find me!`,
      answer: ['williams', 'williams tower', 'transco tower'],
      match: 'one',
      category: 'Houston',
    },
    {
      id: 12,
      title: 'cocktails',
      containsText: true,
      containsImage: false,
      text: `Sip some cocktails, enjoy the live music and chow down variety of food in a rustic setting as you look at some of the most influential folks from Liverpool down the road. Where am I? `,
      answer: 'truck yard',
      match: 'exact',
      category: 'Houston',
    },
    {
      id: 13,
      title: 'menu',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/menu.jpg',
      text: 'This restaurant is more than 20 years old. What Houston dining room is this menu from?',
      answer: ['shri balaji bhavan', 'balaji bhavan'],
      match: 'one',
      category: 'Houston',
    },
    {
      id: 14,
      title: 'h3rc',
      containsText: true,
      containsImage: false,
      text: 'Some call me green, some call me H3RC. I make the world smaller no matter the season, but everyone remembers me for the wrong reason',
      answer: ['evergiven', 'ever given'],
      match: 'one',
    },
    {
      id: 15,
      title: 'layover',
      containsText: true,
      containsImage: false,
      text: 'Summer in Houston is no joke. So you crave a chilled beer at Wheelhouse brewing company and want to get there. You cannot get there without a layover at this airport. What is the code of this airport we are talking about?',
      answer: 'yvr',
      match: 'exact',
    },
    {
      id: 16,
      title: 'recipe',
      containsText: true,
      containsImage: false,
      text: 'When making his version of Fried Rice, Uncle Roger does not use onion because only ____ people use onion',
      answer: 'poor',
      match: 'exact',
    },
    {
      id: 17,
      title: 'grammy',
      containsText: true,
      containsImage: false,
      text: 'What recording did the actor of the 1983 academy award for best movie win a Grammy for?',
      answer: ['the words of gandhi', 'words of gandhi'],
      match: 'one',
    },

    {
      id: 18,
      title: 'poster',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/poster.jpg',
      text: 'Name the movie for your next clue',
      answer: 'agneepath',
      match: 'exact',
    },

    {
      id: 19,
      title: 'school',
      containsText: true,
      containsImage: false,
      text: `What is the name of the main character in the song 'e school ke tem pe'?`,
      answer: 'manoj',
      match: 'exact',
    },
    {
      id: 20,
      title: 'qr',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/qr.png',
      text: 'Solve this Wordle',
      answer: 'child',
      match: 'exact',
    },
    {
      id: 900,
      title: 'selfie',
      containsText: true,
      containsImage: false,
      text: 'Send a team selfie to Shashank on Whatsapp receive the final code. At-least 6 members should be in the selfie. Any one member can send it.',
      answer: 'youmadeit',
      match: 'exact',
    },
    {
      id: 999,
      title: 'thanks',
    },
  ];

  isTeamCodeValid(teamCode) {
    return teamCode in this.sequenceList;
  }

  getTeamName(teamCode) {
    return this.teamNames[teamCode];
  }

  getFirstQuestion(team) {
    let firstQuestionId: number = this.sequenceList[team][0];
    return this.questionList.find((element) => element.id === firstQuestionId);
  }

  getQuestionFromTitle(title) {
    console.log('Title: ', title);
    return this.questionList.find((element) => element.title === title);
  }

  getQuestionNumberForTeamInSequence(team, currentQuestionId) {
    let teamSequenceList = this.sequenceList[team];
    let currentQuestionIndex = teamSequenceList.indexOf(currentQuestionId);
    return currentQuestionIndex + 1;
  }

  getQuestionForId(questionId) {}

  getNextQuestion(team, currentQuestionId) {
    let teamSequenceList = this.sequenceList[team];
    let currentQuestionIndex = teamSequenceList.indexOf(currentQuestionId);
    let nextQuestionIndex = teamSequenceList[currentQuestionIndex + 1];
    return this.questionList.find((element) => element.id === nextQuestionIndex);
  }
}
