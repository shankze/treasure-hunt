import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class SequenceService {
  constructor() {}

  teamNames = { '2769': 'Team 1', '7325': 'Team 2', '6345': 'Team 3' };

  sequenceList = { 
    '2769': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 17, 18, 19, 900, 999], 
    '7325': [17, 18, 19, 20, 15, 14, 13, 12, 11, 16, 10, 9, 8, 7, 6, 5, 4, 3, 1, 2, 900, 999], 
    '6345': [17, 18, 19, 20, 15, 14, 13, 12, 11, 16, 10, 9, 8, 7, 6, 5, 4, 3, 1, 2, 900, 999] 
  };
  //sequenceList = { '2769': [17, 18, 19, 900, 999], '7325': [19, 18, 17, 900, 999] };

  questionList = [
    {
      id: 1,
      title: 'bcn',
      containsText: true,
      containsImage: false,
      text: `"BCN Taste & Tradition, March, Le Jardinier, Tatemo and  ___."`,
      answer: ['Musaafer'],
      match: 'one',
      category: 'Pink or Blue',
    },
    {
      id: 2,
      title: 'movie',
      containsText: false,
      containsImage: true,
      imageURL: 'assets/ab.jpg',
      answer: ['great gambler', 'the great gambler'],
      match: 'one',
      category: 'Pink or Blue',
    },
    {
      id: 3,
      title: 'city',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/city_india.jpg',
      text: 'What city am I visiting?',
      answer: 'lucknow',
      match: 'exact',
      category: 'Pink or Blue',
    },
    {
      id: 4,
      title: 'restaurant',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/courtyard.jpg',
      text: 'Can you identify the restaurant we are standing in front of?',
      answer: 'saravana bhavan',
      match: 'exact',
      category: 'Pink or Blue',
    },
    {
      id: 5,
      title: 'zip',
      containsText: true,
      containsImage: false,
      text: 'What is the zip code of the location 29.9025511 -97.21386?',
      answer: ['78941-5907','78941'],
      match: 'one',
    },
    {
      id: 6,
      title: 'brixton',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/brixton.jpg',
      text: 'The address of this house is _____ Brixton Dr, Richmond TX!',
      answer: '13911',
      match: 'exact',
      category: 'Pink or Blue',
    },
    {
      id: 7,
      title: 'class',
      containsText: true,
      containsImage: false,
      text: "In the movie Mother (1999), Raj's family is against Jia and Raj's relationship because they are not of the same 'CLASS'. Instead, they want Raj to marry _____",
      answer: 'nisha',
      match: 'exact',
      category: 'Pink or Blue',
    },
    {
      id: 8,
      title: 'school',
      containsText: true,
      containsImage: false,
      text: 'In the song "e school ke tem pe", what brand of bike (bicycle) does Manoj have?',
      answer: 'avon',
      match: 'exact',
      category: 'Houston',
    },
    {
      id: 9,
      title: 'desert',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/desert.jpg',
      text: `What movie is this still from?`,
      answer: ['dhanak'],
      match: 'one',
      category: 'Houston',
    },
    {
      id: 10,
      title: 'h3rc',
      containsText: true,
      containsImage: false,
      text: 'Some call me green, some call me H3RC. I make the world smaller no matter the season, but everyone remembers me for the wrong reason',
      answer: ['evergiven', 'ever given'],
      match: 'one',
    },
    {
      id: 11,
      title: 'sound',
      containsText: true,
      containsImage: false,
      text: `This engineer frustrated by the poor performance of expensive stereo systems, founded a company that prioritized how sound was perceived rather than measured—and later gifted the majority of its shares to the university where he taught?.`,
      answer: 'amar gopal bose',
      match: 'exact',
      category: 'Houston',
    },
    {
      id: 12,
      title: 'river',
      containsText: true,
      containsImage: false,
      text: `This Indian city was renamed for a river, then for a poet, but locals still call it by its colonial name. Its airport code reflects none of these names. What is the airport code?`,
      answer: ['ixd','veab'],
      match: 'one',
      category: 'Houston',
    },
    {
      id: 13,
      title: 'park',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/national_park.jpg',
      text: `Which national park is this? `,
      answer: ['dry tortugas national park','dry tortugas'],
      match: 'one',
      category: 'Houston',
    },
    {
      id: 14,
      title: 'split',
      containsText: true,
      containsImage: false,
      text: 'He once studied the body, now he feeds the soul. Two years from a white coat, he traded textbooks for turmeric and set up this popular Indian restaurant. He was the James Beard 2019 semi-finalist. 3 of you go to this restaurant. How much extra does this restaurant charge for splitting checks?',
      answer: ['2.97', '$2.97'],
      match: 'one',
      category: 'Houston',
    },

    {
      id: 15,
      title: 'spotlight',
      containsText: true,
      containsImage: false,
      text: 'Under a sky full of stars, in a city known for revolution, the skyline pulsed with wristband light. The spotlight found him and and he ducked out of view. Who am I talking about?',
      answer: 'andy byron',
      match: 'exact',
    },
    {
      id: 16,
      title: 'silence',
      containsText: true,
      containsImage: false,
      text: "In a film where silence speaks louder than words, the hero’s voice is absent for twenty minutes. But when a mirror enters the frame, it doesn’t reflect just a face—it reflects a secret. No one explains it, yet everything changes.",
      answer: 'barfi',
      match: 'exact',
    },
    {
      id: 17,
      title: 'agas',
      containsText: true,
      containsImage: false,
      text: "On an average, how many people does Aga's serve on a Saturday?",
      answer: ['4000', 'four thousand'],
      match: 'one',
    },

    {
      id: 18,
      title: 'queen',
      containsText: true,
      containsImage: false,
      text: 'This city was once ruled by a queen who never wore shoes, and its streets still echo with her silence. It’s the only place where the sun rises twice—once over water, and once in a mirror. Locals say the city “eats its own shadow” during a festival when no lamps are lit, yet the night glows gold.',
      answer: 'udaipur',
      match: 'exact',
    },

    {
      id: 19,
      title: 'tbd',
      containsText: true,
      containsImage: false,
      text: `TBD`,
      answer: 'tbd',
      match: 'exact',
    },
    {
      id: 20,
      title: 'qr',
      containsText: true,
      containsImage: true,
      imageURL: 'assets/qr.png',
      text: 'Solve this Wordle',
      answer: 'crane',
      match: 'exact',
    },
    {
      id: 900,
      title: 'selfie',
      containsText: true,
      containsImage: false,
      text: 'Send a team selfie to Shashank on Whatsapp receive the final code. At-least 4 members should be in the selfie. Any one member can send it.',
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
