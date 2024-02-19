const QUESTIONPSPC1 = 'Choose the present simple or present continuous to complete the sentence below: '
const QUESTIONPSPC2 = 'Choose the present simple or present continuous for each gap below: '
const QUESTIONPSPC3 = 'Choose the most suitable future forms for the gaps below: '
const QUESTIONPSPC4 =
  'Choose the present perfect simple or present perfect continuous to complete the sentences below. If both tenses are possible, use the present perfect continuous.: '

export const b1Tests = [
  {
    number: 1,
    question: `${QUESTIONPSPC1} In Johannesburg most people ___ at least five languages.`,
    answers: [
      { option: 'speak', isCorrect: true },
      { option: 'are speaking', isCorrect: false },
    ],
  },
  {
    number: 2,
    question: `${QUESTIONPSPC1} Languages ___ very fast. Half of world's languages will disappear by 2100.`,
    answers: [
      { option: 'disappear', isCorrect: false },
      { option: 'are disappearing', isCorrect: true },
    ],
  },
  {
    number: 3,
    question: `${QUESTIONPSPC1} You can\'t see Tim now, he ___ a bath.`,
    answers: [
      { option: "'s having", isCorrect: true },
      { option: 'has', isCorrect: false },
    ],
  },
  {
    number: 4,
    question: `${QUESTIONPSPC1} Please keep quiet, I ___ to the radio. You know I ___ to the news in the mornings.`,
    answers: [
      { option: "'m listening / 'm listening", isCorrect: false },
      { option: "'m listening / listen", isCorrect: true },
      { option: 'listen / listen', isCorrect: false },
      { option: "listen / 'm listening", isCorrect: false },
    ],
  },
  {
    number: 5,
    question: `${QUESTIONPSPC1} What time ___ ?`,
    answers: [
      { option: 'is the first train leaving', isCorrect: false },
      { option: 'does the first train leave', isCorrect: true },
    ],
  },
  {
    number: 6,
    question: `${QUESTIONPSPC1} I ___ a scarf, but today I ___ one because it's unusually cold.`,
    answers: [
      { option: "'m never wearing / wear", isCorrect: false },
      { option: 'never wear / wear', isCorrect: false },
      { option: "'m never wearing / 'm wearing", isCorrect: false },
      { option: "never wear / 'm wearing", isCorrect: true },
    ],
  },
  {
    number: 7,
    question: `${QUESTIONPSPC1} I finished watching the series you recommended. Now ___ I another one.`,
    answers: [
      { option: 'watch', isCorrect: false },
      { option: "'m watching", isCorrect: true },
    ],
  },
  {
    number: 8,
    question: `${QUESTIONPSPC1} What ___ tonight? Would you like to come and watch the game?`,
    answers: [
      { option: 'are you doing ', isCorrect: true },
      { option: 'do you do', isCorrect: false },
    ],
  },
  {
    number: 9,
    question: `${QUESTIONPSPC1} Nobody ___ they will win the match.`,
    answers: [
      { option: 'thinks', isCorrect: true },
      { option: 'is thinking', isCorrect: false },
    ],
  },
  {
    number: 10,
    question: `${QUESTIONPSPC1} You look worried. What ___ ?`,
    answers: [
      { option: 'are you thinking', isCorrect: false },
      { option: 'do you think', isCorrect: true },
    ],
  },
  {
    number: 11,
    question: `${QUESTIONPSPC2} A:We ____to the cinema tonight. B: ____ to the cinema?`,
    answers: [
      { option: 'are going / Do you often go', isCorrect: true },
      { option: 'go / Do you often go', isCorrect: false },
      { option: 'are going / Are you often going', isCorrect: false },
    ],
  },
  {
    number: 12,
    question: `${QUESTIONPSPC2} A: What time ____ this afternoon? B: I don't know. We ____ tomorrow.`,
    answers: [
      { option: 'does the train leave / leave', isCorrect: false },
      { option: 'is the train leaving / leave', isCorrect: false },
      { option: 'does the train leave / are leaving', isCorrect: true },
    ],
  },
  {
    number: 13,
    question: `${QUESTIONPSPC2} A:____?  B: Yes, but I____ to quit.`,
    answers: [
      { option: "Do you smoke / 'm trying", isCorrect: true },
      { option: 'Do you smoke / try', isCorrect: false },
      { option: 'Are you smoking / try', isCorrect: false },
    ],
  },
  {
    number: 14,
    question: `${QUESTIONPSPC2} A: I ____ on holiday two or three times a year. B: That's great! And where ____ this year?`,
    answers: [
      { option: 'go / do you go', isCorrect: false },
      { option: 'I go / are you going', isCorrect: true },
      { option: "'m going / do you go", isCorrect: false },
    ],
  },
  {
    number: 15,
    question: `${QUESTIONPSPC2} I think it's better to stay. It _____ and we _____ an umbrella.`,
    answers: [
      { option: "'s raining / don't have", isCorrect: true },
      { option: "rains / don't have", isCorrect: false },
      { option: "'s raining / aren't having", isCorrect: false },
    ],
  },
  {
    number: 16,
    question: `${QUESTIONPSPC2} A: Children _____ more and more dependent to mobile phones. B: Yes, they _____ their imagination anymore.`,
    answers: [
      { option: "become / don't use", isCorrect: false },
      { option: "are becoming / don't use", isCorrect: true },
      { option: "become / aren't using", isCorrect: false },
    ],
  },
  {
    number: 17,
    question: `${QUESTIONPSPC2} I _____ an article about the myth that says that we _____ 10% of our brains.`,
    answers: [
      { option: "'m writing / are only using", isCorrect: false },
      { option: 'write / are only using', isCorrect: false },
      { option: "'m writing / only use", isCorrect: true },
    ],
  },
  {
    number: 18,
    question: `${QUESTIONPSPC2} I_____ of quitting my job._____ it is a good idea?`,
    answers: [
      { option: "'m thinking / Are you thinking", isCorrect: false },
      { option: "'m thinking / Do you think", isCorrect: true },
      { option: 'think / Do you think', isCorrect: false },
    ],
  },
  {
    number: 19,
    question: `${QUESTIONPSPC2} Who is that man? Why _____ at us? What _____? `,
    answers: [
      { option: 'is he looking / does he want', isCorrect: true },
      { option: 'is he looking / is he wanting', isCorrect: false },
      { option: 'does he look / he wants', isCorrect: false },
    ],
  },
  {
    number: 20,
    question: `${QUESTIONPSPC2}A: Tomorrow I _____ my doctor in the morning. B. Isn't your doctor that woman I _____ over there? `,
    answers: [
      { option: "'m seeing / see ", isCorrect: true },
      { option: "see / 'm seeing", isCorrect: false },
      { option: 'see / see', isCorrect: false },
    ],
  },
  {
    number: 21,
    question: `${QUESTIONPSPC3} What time _____ work on Monday?`,
    answers: [
      { option: 'will you finish', isCorrect: false },
      { option: 'do you finish', isCorrect: true },
      { option: 'are you going to finish', isCorrect: false },
    ],
  },
  {
    number: 22,
    question: `${QUESTIONPSPC3} ____ this weekend?`,
    answers: [
      { option: 'Do you go out', isCorrect: false },
      { option: 'Are you going out', isCorrect: true },
      { option: 'Will you go out', isCorrect: false },
    ],
  },
  {
    number: 23,
    question: `${QUESTIONPSPC3} I'm sorry I made you so angry. I _____ it again`,
    answers: [
      { option: "won't do", isCorrect: true },
      { option: "'m not doing", isCorrect: false },
      { option: "'m not going to do", isCorrect: false },
    ],
  },
  {
    number: 24,
    question: `${QUESTIONPSPC3} It's really hot _____ the window, please?`,
    answers: [
      { option: 'Will you open', isCorrect: true },
      { option: 'Are you going to open', isCorrect: false },
      { option: 'Do you open', isCorrect: false },
    ],
  },
  {
    number: 25,
    question: `${QUESTIONPSPC3} I don't think I _____ come tomorrow.`,
    answers: [
      { option: "'m being able to", isCorrect: false },
      { option: 'am able to', isCorrect: false },
      { option: 'will be able to ', isCorrect: true },
    ],
  },
  {
    number: 26,
    question: `${QUESTIONPSPC3} A: Where are you going? B:I _____ something for dinner.`,
    answers: [
      { option: "'ll buy", isCorrect: false },
      { option: "'m going to buy", isCorrect: true },
      { option: "'m buying", isCorrect: false },
    ],
  },
  {
    number: 27,
    question: `${QUESTIONPSPC3} You can insist all you want; I _____ you`,
    answers: [
      { option: "won't help", isCorrect: true },
      { option: "'m not helping", isCorrect: false },
      { option: "don't help", isCorrect: false },
    ],
  },
  {
    number: 28,
    question: `${QUESTIONPSPC3}  ___ doing that, please? I'm trying to concentrate.`,
    answers: [
      { option: 'Are you going to stop', isCorrect: false },
      { option: 'Do you stop', isCorrect: false },
      { option: 'Will you stop', isCorrect: true },
    ],
  },
  {
    number: 29,
    question: `${QUESTIONPSPC3} ____ tonight? There's a new restaurant that looks promising.`,
    answers: [
      { option: 'Shall we eat out', isCorrect: true },
      { option: 'Will we eat out', isCorrect: false },
      { option: 'Are we going to eat out', isCorrect: false },
    ],
  },
  {
    number: 30,
    question: `${QUESTIONPSPC3} I'm sure the baby ______ blue eyes, like her mother.`,
    answers: [
      { option: 'will have', isCorrect: true },
      { option: 'is having', isCorrect: false },
      { option: 'is going to have', isCorrect: false },
    ],
  },
  {
    number: 31,
    question: `Choose the most suitable future forms to complete the sentences below: Look! That car over there ___!`,
    answers: [
      { option: 'is crashing', isCorrect: false },
      { option: 'is going to crash', isCorrect: true },
      { option: 'will crash', isCorrect: false },
    ],
  },
  {
    number: 32,
    question: `Choose the most suitable future forms to complete the sentences below: ___ the music down, please?`,
    answers: [
      { option: 'Are your turning', isCorrect: false },
      { option: 'Are you going to turn', isCorrect: false },
      { option: 'Will your turn', isCorrect: true },
    ],
  },
  {
    number: 33,
    question: `Choose the most suitable future forms to complete the sentences below: The film ___ at 5 p.m.`,
    answers: [
      { option: 'starts', isCorrect: true },
      { option: 'is going to start', isCorrect: false },
      { option: 'is starting', isCorrect: false },
    ],
  },
  {
    number: 34,
    question: `Choose the most suitable future forms to complete the sentences below: I'm sure you the ___ lottery one day.`,
    answers: [
      { option: 'are winning', isCorrect: false },
      { option: 'will win', isCorrect: true },
      { option: 'are going to win', isCorrect: false },
    ],
  },
  {
    number: 35,
    question: `Choose the most suitable future forms to complete the sentences below: Don't you have any money on you? Don't worry, I ___  for the taxi`,
    answers: [
      { option: "'m paying", isCorrect: false },
      { option: "'ll pay", isCorrect: false },
      { option: "'m going to pay", isCorrect: true },
    ],
  },
  {
    number: 36,
    question: `Choose the most suitable future forms to complete the sentences below: According to my diary, we ___ the buyers at 7p.m. tomorrow.`,
    answers: [
      { option: 'are meeting', isCorrect: true },
      { option: 'will meet', isCorrect: false },
      { option: 'meet', isCorrect: false },
    ],
  },
  {
    number: 37,
    question: `Choose the most suitable future forms to complete the sentences below: It's cold. ___ the heating on?`,
    answers: [
      { option: 'Do I turn', isCorrect: false },
      { option: 'Am I going to turn', isCorrect: false },
      { option: 'Shall I turn', isCorrect: true },
    ],
  },
  {
    number: 38,
    question: `Choose the most suitable future forms to complete the sentences below: I can't see you tomorrow. I ___ football with my university friends.`,
    answers: [
      { option: 'play', isCorrect: false },
      { option: "'m playing'", isCorrect: true },
      { option: 'will play', isCorrect: false },
    ],
  },
  {
    number: 39,
    question: `Choose the most suitable future forms to complete the sentences below: A: Maria phoned you. B: OK. I ___ her back.`,
    answers: [
      { option: 'am going to call', isCorrect: false },
      { option: 'will call', isCorrect: true },
      { option: 'am calling', isCorrect: false },
    ],
  },
  {
    number: 40,
    question: `Choose the most suitable future forms to complete the sentences below: Thanks for the money. I ___ you back on Friday.`,
    answers: [
      { option: 'will pay', isCorrect: true },
      { option: "'m going to pay", isCorrect: false },
      { option: "'m paying'", isCorrect: false },
    ],
  },
  {
    number: 41,
    question: `${QUESTIONPSPC1} ___ painting the bedroom yet? Not yet. I'll finish it tomorrow`,
    answers: [
      { option: 'Have you finished', isCorrect: true },
      { option: 'Did you finish', isCorrect: false },
    ],
  },
  {
    number: 42,
    question: `${QUESTIONPSPC1} I ___ much last year, but I ___ a lot this year.`,
    answers: [
      { option: "havent't earned / earned", isCorrect: false },
      { option: "didn't earn / 've earned", isCorrect: true },
      { option: "havent't earned / 've earned", isCorrect: false },
      { option: "didn't earn / earned", isCorrect: false },
    ],
  },
  {
    number: 43,
    question: `${QUESTIONPSPC1} ___ a holiday recently? `,
    answers: [
      { option: 'Did you have', isCorrect: true },
      { option: 'Have you had', isCorrect: false },
    ],
  },
  {
    number: 44,
    question: `${QUESTIONPSPC1} We ___ last week. We ___ here for 5 days.`,
    answers: [
      { option: 'have arrived / have been', isCorrect: false },
      { option: 'have arrived / were', isCorrect: false },
      { option: 'arrived / have been', isCorrect: true },
      { option: 'arrived / were', isCorrect: false },
    ],
  },
  {
    number: 45,
    question: `${QUESTIONPSPC1} Mr. Barnes is very important in this company. He ___ here for 30 years.`,
    answers: [
      { option: 'has worked', isCorrect: true },
      { option: 'worked', isCorrect: false },
    ],
  },
  {
    number: 46,
    question: `${QUESTIONPSPC1} He loves gardening. He ___ a gardener all his life.`,
    answers: [
      { option: 'has been', isCorrect: true },
      { option: 'was', isCorrect: false },
    ],
  },
  {
    number: 47,
    question: `${QUESTIONPSPC1} ___ anything like this before?`,
    answers: [
      { option: 'Did you see', isCorrect: false },
      { option: 'Have you seen', isCorrect: true },
    ],
  },
  {
    number: 48,
    question: `${QUESTIONPSPC1} This the the most delicious dish I ___`,
    answers: [
      { option: 'ever ate', isCorrect: false },
      { option: 'have ever eaten', isCorrect: true },
    ],
  },
  {
    number: 49,
    question: `${QUESTIONPSPC1} I ___ him behave like this before. `,
    answers: [
      { option: 'never saw', isCorrect: false },
      { option: "'ve never seen", isCorrect: true },
    ],
  },
  {
    number: 50,
    question: `${QUESTIONPSPC1} My mother ___ in Scotland.`,
    answers: [
      { option: 'has grown up', isCorrect: false },
      { option: 'grew up', isCorrect: true },
    ],
  },
  {
    number: 51,
    question: `${QUESTIONPSPC1} A: Mary isn't here. She ______to Egypt. B:I______ to Egypt`,
    answers: [
      { option: 'has gone / have never gone', isCorrect: false },
      { option: 'went / have never gone', isCorrect: false },
      { option: 'has gone / have never been', isCorrect: true },
    ],
  },
  {
    number: 52,
    question: `${QUESTIONPSPC1} I_____ my arm. _____ it playing with my cousin. `,
    answers: [
      { option: "'ve broken / broke", isCorrect: true },
      { option: "'ve broken / 've broken", isCorrect: false },
      { option: "broke / 've broken", isCorrect: false },
    ],
  },
  {
    number: 53,
    question: `${QUESTIONPSPC1} ___ a ghost? `,
    answers: [
      { option: 'Did you ever see', isCorrect: false },
      { option: 'Have your ever see', isCorrect: false },
      { option: 'Have you ever seen', isCorrect: true },
    ],
  },
  {
    number: 54,
    question: `${QUESTIONPSPC1} A: I _____ to China this year B: When ______ there?`,
    answers: [
      { option: 'have been / did you go', isCorrect: true },
      { option: 'have been / have you been', isCorrect: false },
      { option: 'was / have you gone', isCorrect: false },
    ],
  },
  {
    number: 55,
    question: `${QUESTIONPSPC1} I'm sure I _____ this man before.`,
    answers: [
      { option: 'saw', isCorrect: false },
      { option: "'ve seen", isCorrect: true },
      { option: "'ve see", isCorrect: false },
    ],
  },
  {
    number: 56,
    question: `${QUESTIONPSPC1} A: How long ______a teacher? B: |______ teaching a long time ago.`,
    answers: [
      { option: 'were / started', isCorrect: false },
      { option: 'have you been / started', isCorrect: true },
      { option: 'have you been / have started', isCorrect: false },
    ],
  },
  {
    number: 57,
    question: `${QUESTIONPSPC1} ____ Titanic?`,
    answers: [
      { option: 'Did you see', isCorrect: false },
      { option: 'Have you seen', isCorrect: true },
      { option: 'You have seen', isCorrect: false },
    ],
  },
  {
    number: 58,
    question: `${QUESTIONPSPC1} A: I ____ the keys. B: Where ______ them?`,
    answers: [
      { option: 'found / did you find', isCorrect: false },
      { option: 'have found / did you find', isCorrect: true },
      { option: 'found / have you found', isCorrect: false },
    ],
  },
  {
    number: 59,
    question: `${QUESTIONPSPC1} Here are your shoes. I _____ them.`,
    answers: [
      { option: 'just have cleaned', isCorrect: false },
      { option: 'just cleaned', isCorrect: false },
      { option: "'ve just cleaned", isCorrect: true },
    ],
  },
  {
    number: 60,
    question: `${QUESTIONPSPC1} She ______to be a singer since she ______ a kid.`,
    answers: [
      { option: 'wanted / was', isCorrect: false },
      { option: 'has wanted / has been', isCorrect: false },
      { option: 'has wanted / was', isCorrect: true },
    ],
  },
  {
    number: 61,
    question: `${QUESTIONPSPC4} I ___ and my legs are really tired now.`,
    answers: [
      { option: "'ve been cycling", isCorrect: true },
      { option: "'ve cycled", isCorrect: false },
    ],
  },
  {
    number: 62,
    question: `${QUESTIONPSPC4} I'm sorry I'm late, ___ for a long time?`,
    answers: [
      { option: 'have you been waiting', isCorrect: true },
      { option: 'have you waited', isCorrect: false },
    ],
  },
  {
    number: 63,
    question: `${QUESTIONPSPC4} How long ___ Peter?`,
    answers: [
      { option: 'have you known', isCorrect: true },
      { option: 'have you been knowing', isCorrect: false },
    ],
  },
  {
    number: 64,
    question: `${QUESTIONPSPC4} Somebody ___ my cookies. There are none left.`,
    answers: [
      { option: 'has been eating', isCorrect: false },
      { option: 'has eaten', isCorrect: true },
    ],
  },
  {
    number: 65,
    question: `${QUESTIONPSPC4} Somebody ___ my cookies. There are very few left.`,
    answers: [
      { option: 'has been eating', isCorrect: true },
      { option: 'has eaten', isCorrect: false },
    ],
  },
  {
    number: 66,
    question: `${QUESTIONPSPC4} How many books ___ ?`,
    answers: [
      { option: 'has she written', isCorrect: true },
      { option: 'has she been writing', isCorrect: false },
    ],
  },
  {
    number: 67,
    question: `${QUESTIONPSPC4} She must be tired. She ___ all afternoon.`,
    answers: [
      { option: 'has she written', isCorrect: false },
      { option: 'has she been writing', isCorrect: true },
    ],
  },
  {
    number: 68,
    question: `${QUESTIONPSPC4} I ___ all afternoon. I ___ 5 chapters.`,
    answers: [
      { option: "'ve been reading / 've been reading", isCorrect: false },
      { option: "'ve been reading / 've read", isCorrect: true },
      { option: "'ve read / 've read", isCorrect: false },
      { option: "'ve read / 've been reading", isCorrect: false },
    ],
  },
  {
    number: 69,
    question: `${QUESTIONPSPC4} I think I ___ chocolate since I was born.`,
    answers: [
      { option: "'ve been liking'", isCorrect: false },
      { option: "'ve liked", isCorrect: true },
    ],
  },
  {
    number: 70,
    question: `${QUESTIONPSPC4} They ___ for months, and they ___ three countries so far.`,
    answers: [
      { option: 'have travelled / have been visiting', isCorrect: false },
      { option: 'have travelled / have visited', isCorrect: false },
      { option: 'have been travelling / have been visiting', isCorrect: false },
      { option: 'have been travelling / have visited', isCorrect: true },
    ],
  },
  {
    number: 71,
    question: `${QUESTIONPSPC2} I ____ the book you lent me and it's great. I'll give it back to you when I finish it. `,
    answers: [
      { option: "'ve read", isCorrect: false },
      { option: "'ve been reading", isCorrect: true },
      { option: 'was read', isCorrect: false },
    ],
  },
  {
    number: 72,
    question: `${QUESTIONPSPC2} Bruce ____ tennis since he was a child. He _____ many trophies.`,
    answers: [
      { option: 'has been playing / has won', isCorrect: true },
      { option: 'is playing / has won', isCorrect: false },
      { option: 'has played / has been winning', isCorrect: false },
    ],
  },
  {
    number: 73,
    question: `${QUESTIONPSPC2} You _____ too much time playing that stupid game!`,
    answers: [
      { option: "'ve spending", isCorrect: false },
      { option: "'ve been spending", isCorrect: false },
      { option: "'ve spent", isCorrect: true },
    ],
  },
  {
    number: 74,
    question: `${QUESTIONPSPC2} You _____ tennis since 10 o'clock. How many sets _____?`,
    answers: [
      { option: 'have played / have you been playing', isCorrect: false },
      { option: 'are playing / have you played', isCorrect: false },
      { option: 'have been playing / have you played', isCorrect: true },
    ],
  },
  {
    number: 75,
    question: `${QUESTIONPSPC2}(Choose TWO correct options): He ______ since he was a little boy.`,
    answers: [
      { option: 'has fished', isCorrect: true },
      { option: 'is fishing', isCorrect: false },
      { option: 'has been fishing', isCorrect: true },
    ],
  },
  {
    number: 76,
    question: `${QUESTIONPSPC2} He _____ to me since we met last summer. He ______ over 100 emails.`,
    answers: [
      { option: "'s written / 's been sending", isCorrect: false },
      { option: "is writing / 's sent", isCorrect: false },
      { option: "'s been writing / 's sent", isCorrect: true },
    ],
  },
  {
    number: 77,
    question: `${QUESTIONPSPC2} ___ any fish today?`,
    answers: [
      { option: 'Have you caught', isCorrect: true },
      { option: 'Have you been catching', isCorrect: false },
      { option: 'Have you catching', isCorrect: false },
    ],
  },
  {
    number: 78,
    question: `${QUESTIONPSPC2} A: He _____ hundreds of job applications, but he's got no answers yet. B: How long _____ for a job?`,
    answers: [
      { option: "'s been sending / has he been looking", isCorrect: false },
      { option: "'s sent / has he been looking", isCorrect: true },
      { option: "'s sent / has he looked", isCorrect: false },
    ],
  },
  {
    number: 79,
    question: `${QUESTIONPSPC2} Now that I _____ tidying the house, I'm going to clean it.`,
    answers: [
      { option: 'am finishing', isCorrect: false },
      { option: 'have been finishing', isCorrect: false },
      { option: 'have finished', isCorrect: true },
    ],
  },
  {
    number: 80,
    question: `${QUESTIONPSPC2} We ____ this TV for ages. I think it's time to buy a new one.`,
    answers: [
      { option: 'have', isCorrect: false },
      { option: "'ve had", isCorrect: true },
      { option: "'ve been having", isCorrect: false },
    ],
  },
]
