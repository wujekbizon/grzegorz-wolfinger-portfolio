const QUESTIONPRESENTSIMPLE1 = `Choose the correct present simple forms of 'to be' for the gaps below: `
const QUESTIONPRESENTSIMPLE2 = "Complete the sentences with 'this, that, these, those': "
const QUESTIONPRESENTSIMPLE3 = "Choose 'this, that, these, those' to complete the following sentences: "
const QUESTIONPRESENTSIMPLE4 =
  'Choose the correct subject pronouns or possessive adjectives to complete the sentences: '
const QUESTIONPRESENTSIMPLE5 = 'Choose the correct forms with adjectives to complete the following sentences: '

export const a1Tests = [
  {
    number: 1,
    question: `${QUESTIONPRESENTSIMPLE1} A: _ you a teacher? B: Yes, I _`,
    answers: [
      { option: 'is you a teacher? Yes, I am', isCorrect: false },
      { option: 'Are you a teacher? Yes, I are', isCorrect: false },
      { option: 'is you a teacher? Yes, I are', isCorrect: false },
      { option: 'Are you a teacher? Yes, I am', isCorrect: true },
    ],
  },
  {
    number: 2,
    question: `${QUESTIONPRESENTSIMPLE1} A: _ your name Marcus? B: Yes, it _`,
    answers: [
      { option: 'Is your name Marcus? Yes, it are', isCorrect: false },
      { option: 'Is your name Marcus? B: Yes, it is', isCorrect: true },
      { option: 'Are your name Marcus? B: Yes, it is', isCorrect: false },
      { option: 'Are your name Marcus? B: Yes, it are', isCorrect: false },
    ],
  },
  {
    number: 3,
    question: `${QUESTIONPRESENTSIMPLE1} A: _ your children here? B: No, they _`,
    answers: [
      { option: "Are your children here? No, they aren't", isCorrect: true },
      { option: "Am your children here? No, they aren't", isCorrect: false },
      { option: "Am your children here? No, they isn't", isCorrect: false },
      { option: "Are your children here? No, they isn't", isCorrect: false },
    ],
  },
  {
    number: 4,
    question: `${QUESTIONPRESENTSIMPLE1} A: _ this your suitcase? B: No, it _`,
    answers: [
      { option: "Is this your suitcase? No, it isn't", isCorrect: true },
      { option: "Are this your suitcase? No, it aren't", isCorrect: false },
      { option: "Is this your suitcase? No, it aren't", isCorrect: false },
      { option: "Are this your suitcase? No, it isn't", isCorrect: false },
    ],
  },
  {
    number: 5,
    question: `${QUESTIONPRESENTSIMPLE1} A: Where _ we? B: I think this _ Oxford street.`,
    answers: [
      { option: 'Where is we? I think this are Oxford street.', isCorrect: false },
      { option: 'Where are we? I think this are Oxford street.', isCorrect: false },
      { option: 'Where are we? I think this is Oxford street.', isCorrect: true },
      { option: 'Where am we? I think this is Oxford street.', isCorrect: false },
      { option: 'Where am we? I think this is Oxford street.', isCorrect: false },
    ],
  },
  {
    number: 6,
    question: `${QUESTIONPRESENTSIMPLE1} A: _ it Saturday today? B: No, It _ Sunday.`,
    answers: [
      { option: "Are it Saturday today? No, It 's Sunday.", isCorrect: false },
      { option: "Is it Saturday today? No, It 're Sunday.", isCorrect: false },
      { option: "Is it Saturday today? No, It 's Sunday.", isCorrect: true },
      { option: "Are it Saturday today? No, It 're Sunday.", isCorrect: false },
    ],
  },
  {
    number: 7,
    question: `${QUESTIONPRESENTSIMPLE1} A: _ your friends from the UK? B: No, _ from the US.`,
    answers: [
      { option: 'Are your friends from the UK? No, they are from the US.', isCorrect: true },
      { option: 'Is your friends from the UK? No, he is from the US.', isCorrect: false },
      { option: 'Are your friends from the UK? No, he is from the US.', isCorrect: false },
      { option: 'Is your friends from the UK? No, they are from the US.', isCorrect: false },
    ],
  },
  {
    number: 8,
    question: `${QUESTIONPRESENTSIMPLE1} A: Hello, Maria. How _ you? B: _ fine, thanks.`,
    answers: [
      { option: 'Hello, Maria. How are you? I are fine, thanks.', isCorrect: false },
      { option: 'Hello, Maria. How am you? I are fine, thanks.', isCorrect: false },
      { option: "Hello, Maria. How are you? I 'm fine, thanks.", isCorrect: true },
      { option: "Hello, Maria. How am you? I 'm fine, thanks.", isCorrect: false },
    ],
  },
  {
    number: 9,
    question: `${QUESTIONPRESENTSIMPLE1} A: How old _ Peter? B: I thin _ 30 years old.`,
    answers: [
      { option: 'How old is Peter? I think he is 30 years old.', isCorrect: true },
      { option: 'How old are Peter? I think it is 30 years old.', isCorrect: false },
      { option: 'How old are Peter? I think he is 30 years old.', isCorrect: false },
      { option: 'How old is Peter? I think it is 30 years old.', isCorrect: false },
    ],
  },
  {
    number: 10,
    question: `${QUESTIONPRESENTSIMPLE1} A: _ David and Molly here? B: Yes, _ next to the door.`,
    answers: [
      { option: "Is David and Molly here? Yes, we're next to the door.", isCorrect: false },
      { option: "Are David and Molly here? Yes, we're next to the door.", isCorrect: false },
      { option: "Is David and Molly here? Yes, they're next to the door.", isCorrect: false },
      { option: "Are David and Molly here? Yes, they're next to the door.", isCorrect: true },
    ],
  },
  {
    number: 11,
    question: `${QUESTIONPRESENTSIMPLE2} _are my trousers.`,
    answers: [
      { option: 'Those are my trousers.', isCorrect: false },
      { option: 'This are my trousers.', isCorrect: false },
      { option: 'These are my trousers.', isCorrect: true },
    ],
  },
  {
    number: 12,
    question: `${QUESTIONPRESENTSIMPLE2} A: Hi, Chris. _ is my friend Jona. B: Hi, Jona. Nice to meet you.`,
    answers: [
      { option: 'A: Hi, Chris. This is my friend Jona. B: Hi, Jona. Nice to meet you.', isCorrect: true },
      { option: 'A: Hi, Chris. That is my friend Jona. B: Hi, Jona. Nice to meet you.', isCorrect: false },
      { option: 'A: Hi, Chris. These is my friend Jona. B: Hi, Jona. Nice to meet you.', isCorrect: false },
    ],
  },
  {
    number: 13,
    question: `${QUESTIONPRESENTSIMPLE2} Look at _ birds in the sky.`,
    answers: [
      { option: 'Look at these birds in the sky.', isCorrect: false },
      { option: 'Look at those birds in the sky.', isCorrect: true },
      { option: 'Look at this birds in the sky.', isCorrect: false },
    ],
  },
  {
    number: 14,
    question: `${QUESTIONPRESENTSIMPLE2} A: What are _ ? B: They are my books.`,
    answers: [
      { option: 'A: What are those ? B: They are my books.', isCorrect: true },
      { option: 'A: What are these ? B: They are my books.', isCorrect: false },
      { option: 'A: What are that ? B: They are my books.', isCorrect: false },
    ],
  },
  {
    number: 15,
    question: `${QUESTIONPRESENTSIMPLE2} Is _ hotel nice ? `,
    answers: [
      { option: 'Is that hotel nice ?', isCorrect: true },
      { option: 'Is those hotel nice ?', isCorrect: false },
      { option: 'Is this hotel nice ?', isCorrect: false },
    ],
  },
  {
    number: 16,
    question: `${QUESTIONPRESENTSIMPLE2} Are _ your friends?`,
    answers: [
      { option: 'Are this your friends?', isCorrect: false },
      { option: 'Are these your friends?', isCorrect: true },
      { option: 'Are those your friends?', isCorrect: false },
    ],
  },
  {
    number: 17,
    question: `${QUESTIONPRESENTSIMPLE2} Who is _ man over there?`,
    answers: [
      { option: 'Who is this man over there?', isCorrect: false },
      { option: 'Who is these man over there?', isCorrect: false },
      { option: 'Who is that man over there?', isCorrect: true },
    ],
  },
  {
    number: 18,
    question: `${QUESTIONPRESENTSIMPLE2} Isn\'t _ your friend Erik?`,
    answers: [
      { option: "Isn't that your friend Erik?", isCorrect: false },
      { option: "Isn't this your friend Erik?", isCorrect: true },
      { option: "Isn't these your friend Erik?", isCorrect: false },
    ],
  },
  {
    number: 19,
    question: `${QUESTIONPRESENTSIMPLE2} Why are _ boxes here?`,
    answers: [
      { option: 'Why are those boxes here?', isCorrect: false },
      { option: 'Why are these boxes here?', isCorrect: true },
      { option: 'Why are that boxes here?', isCorrect: false },
    ],
  },
  {
    number: 20,
    question: `${QUESTIONPRESENTSIMPLE2} _ are my glasses.`,
    answers: [
      { option: 'That are my glasses.', isCorrect: false },
      { option: 'These are my glasses.', isCorrect: true },
      { option: 'Those are my glasses.', isCorrect: false },
    ],
  },
  {
    number: 21,
    question: `${QUESTIONPRESENTSIMPLE3} A: What's _____? B: It's a calculator.`,
    answers: [
      { option: 'this', isCorrect: true },
      { option: 'these', isCorrect: false },
      { option: 'that', isCorrect: false },
    ],
  },
  {
    number: 22,
    question: `${QUESTIONPRESENTSIMPLE3} ______ are John and Teresa.`,
    answers: [
      { option: 'This', isCorrect: false },
      { option: 'These', isCorrect: true },
      { option: 'Those', isCorrect: false },
    ],
  },
  {
    number: 23,
    question: `${QUESTIONPRESENTSIMPLE3} Hi, Richard, _____ is Julia. (On the phone)`,
    answers: [
      { option: 'this', isCorrect: true },
      { option: 'that', isCorrect: false },
      { option: 'these', isCorrect: false },
    ],
  },
  {
    number: 24,
    question: `${QUESTIONPRESENTSIMPLE3} Look at _____ cloud. It's very strange.`,
    answers: [
      { option: 'this', isCorrect: false },
      { option: 'that', isCorrect: true },
      { option: 'these', isCorrect: false },
    ],
  },
  {
    number: 25,
    question: `${QUESTIONPRESENTSIMPLE3} What are _____?' They are little cakes`,
    answers: [
      { option: 'that', isCorrect: false },
      { option: 'these', isCorrect: false },
      { option: 'those', isCorrect: true },
    ],
  },
  {
    number: 26,
    question: `${QUESTIONPRESENTSIMPLE3} ____ are mykeys.`,
    answers: [
      { option: 'That', isCorrect: false },
      { option: 'These', isCorrect: false },
      { option: 'Those', isCorrect: true },
    ],
  },
  {
    number: 27,
    question: `${QUESTIONPRESENTSIMPLE3} Is _____ your mother?`,
    answers: [
      { option: 'this', isCorrect: true },
      { option: 'these', isCorrect: false },
      { option: 'that', isCorrect: false },
    ],
  },
  {
    number: 28,
    question: `${QUESTIONPRESENTSIMPLE3} What is in _____ box over there?`,
    answers: [
      { option: 'that', isCorrect: true },
      { option: 'this', isCorrect: false },
      { option: 'those', isCorrect: false },
    ],
  },
  {
    number: 29,
    question: `${QUESTIONPRESENTSIMPLE3} _____ is my hand!`,
    answers: [
      { option: 'That', isCorrect: false },
      { option: 'This', isCorrect: true },
      { option: 'These', isCorrect: false },
    ],
  },
  {
    number: 30,
    question: `${QUESTIONPRESENTSIMPLE3} _____ are my cats.`,
    answers: [
      { option: 'Those', isCorrect: true },
      { option: 'This', isCorrect: false },
      { option: 'These', isCorrect: false },
    ],
  },
  {
    number: 31,
    question: `${QUESTIONPRESENTSIMPLE4} Harry is ___ friend. ___ has a nice house.`,
    answers: [
      { option: 'Harry is my friend. He has a nice house.', isCorrect: true },
      { option: 'Harry is I friend. His has a nice house.', isCorrect: false },
      { option: 'Harry is my friend. His has a nice house.', isCorrect: false },
      { option: 'Harry is I friend. He has a nice house.', isCorrect: false },
    ],
  },
  {
    number: 32,
    question: `${QUESTIONPRESENTSIMPLE4} ___ are very happy with ___ new dog.`,
    answers: [
      { option: 'Their are very happy with they new dog.', isCorrect: false },
      { option: 'They are very happy with they new dog.', isCorrect: false },
      { option: 'They are very happy with their new dog.', isCorrect: true },
      { option: 'Their are very happy with their new dog.', isCorrect: false },
    ],
  },
  {
    number: 33,
    question: `${QUESTIONPRESENTSIMPLE4} We love ___ little dog `,
    answers: [
      { option: ' We love we little dog', isCorrect: false },
      { option: ' We love our little dog', isCorrect: true },
      { option: ' We love ours little dog', isCorrect: false },
    ],
  },
  {
    number: 34,
    question: `${QUESTIONPRESENTSIMPLE4} ___ wants ___ breakfast`,
    answers: [
      { option: 'His wants he breakfast', isCorrect: false },
      { option: 'He wants he breakfast', isCorrect: false },
      { option: 'His wants his breakfast', isCorrect: false },
      { option: 'He wants his breakfast', isCorrect: true },
    ],
  },
  {
    number: 35,
    question: `${QUESTIONPRESENTSIMPLE4} We want to see __ children.`,
    answers: [
      { option: 'We want to see ours children.', isCorrect: false },
      { option: 'We want to see they children.', isCorrect: false },
      { option: 'We want to see our children.', isCorrect: true },
    ],
  },
  {
    number: 36,
    question: `${QUESTIONPRESENTSIMPLE4} Scotland is famous for ___ rainy weather.`,
    answers: [
      { option: "Scotland is famous for it's rainy weather.", isCorrect: false },
      { option: 'Scotland is famous for their rainy weather.', isCorrect: false },
      { option: 'Scotland is famous for its rainy weather.', isCorrect: true },
    ],
  },
  {
    number: 37,
    question: `${QUESTIONPRESENTSIMPLE4} Susan lives on ___ street. ___ house is very near.`,
    answers: [
      { option: 'Susan lives on my street. His house is very near.', isCorrect: false },
      { option: 'Susan lives on I street. Her house is very near.', isCorrect: false },
      { option: 'Susan lives on my street. Her house is very near.', isCorrect: true },
      { option: 'Susan lives on I street. His house is very near.', isCorrect: false },
    ],
  },
  {
    number: 38,
    question: `${QUESTIONPRESENTSIMPLE4} A: What are those? B: ___ postcards.`,
    answers: [
      { option: 'A: What are those? B: They are postcards.', isCorrect: true },
      { option: 'A: What are those? B: It is postcards.', isCorrect: false },
      { option: 'A: What are those? B: Their are postcards.', isCorrect: false },
    ],
  },
  {
    number: 39,
    question: `${QUESTIONPRESENTSIMPLE4} I like this place and ___ special atmosphere.`,
    answers: [
      { option: "I like this place and it's special atmosphere.", isCorrect: false },
      { option: 'I like this place and its special atmosphere.', isCorrect: true },
      { option: "I like this place and isn't special atmosphere.", isCorrect: false },
    ],
  },
  {
    number: 40,
    question: `${QUESTIONPRESENTSIMPLE4} I love this place. ___very special.`,
    answers: [
      { option: 'I love this place. Its very special.', isCorrect: false },
      { option: 'I love this place. They are very special.', isCorrect: false },
      { option: "I love this place. It's very special.", isCorrect: true },
    ],
  },
  {
    number: 41,
    question: `${QUESTIONPRESENTSIMPLE4} Go to ___ office.`,
    answers: [
      { option: 'Go to you office.', isCorrect: false },
      { option: 'Go to yours office.', isCorrect: false },
      { option: 'Go to your office.', isCorrect: true },
    ],
  },
  {
    number: 42,
    question: `${QUESTIONPRESENTSIMPLE4} ___ six oclock. Let's go home.`,
    answers: [
      { option: "Its six oclock. Let's go home.", isCorrect: false },
      { option: "It's six oclock. Let's go home.", isCorrect: true },
      { option: "His six oclock. Let's go home.", isCorrect: false },
    ],
  },
  {
    number: 43,
    question: `${QUESTIONPRESENTSIMPLE4} Our products are famous for ___ durability.`,
    answers: [
      { option: 'Our products are famous for its durability.', isCorrect: false },
      { option: 'Our products are famous for their durability.', isCorrect: true },
      { option: 'Our products are famous for they durability.', isCorrect: false },
    ],
  },
  {
    number: 44,
    question: `${QUESTIONPRESENTSIMPLE4} I'm very happy about ___ marks.`,
    answers: [
      { option: "I'm very happy about you marks.", isCorrect: false },
      { option: "I'm very happy about yours marks.", isCorrect: false },
      { option: "I'm very happy about your marks.", isCorrect: true },
    ],
  },
  {
    number: 45,
    question: `${QUESTIONPRESENTSIMPLE4} Valeria is from Italy, but ___'s in Ireland now.`,
    answers: [
      { option: "Valeria is from Italy, but his's in Ireland now.", isCorrect: false },
      { option: "Valeria is from Italy, but she's in Ireland now.", isCorrect: true },
      { option: "Valeria is from Italy, but her's in Ireland now.", isCorrect: false },
    ],
  },
  {
    number: 46,
    question: `${QUESTIONPRESENTSIMPLE4} These are my friends. ___ from Finland. `,
    answers: [
      { option: 'These are my friends. Their from Finland. ', isCorrect: false },
      { option: "These are my friends. They're from Finland. ", isCorrect: true },
      { option: 'These are my friends. They from Finland. ', isCorrect: false },
    ],
  },
  {
    number: 47,
    question: `${QUESTIONPRESENTSIMPLE4} The apartment has ___ own private garden. `,
    answers: [
      { option: 'The apartment has its own private garden. ', isCorrect: true },
      { option: 'The apartment has his own private garden. ', isCorrect: false },
      { option: "The apartment has it's own private garden. ", isCorrect: false },
    ],
  },
  {
    number: 48,
    question: `${QUESTIONPRESENTSIMPLE4} Are ___ umbrellas here?`,
    answers: [
      { option: 'Are our umbrellas here?', isCorrect: true },
      { option: 'Are we umbrellas here?', isCorrect: false },
      { option: 'Are ours umbrellas here?', isCorrect: false },
    ],
  },
  {
    number: 49,
    question: `${QUESTIONPRESENTSIMPLE4} Mark and Linda are in ___ caravan.`,
    answers: [
      { option: 'Mark and Linda are in they caravan.', isCorrect: false },
      { option: 'Mark and Linda are in its caravan.', isCorrect: false },
      { option: 'Mark and Linda are in their caravan.', isCorrect: true },
    ],
  },
  {
    number: 50,
    question: `${QUESTIONPRESENTSIMPLE4} I need ___ tools, please.`,
    answers: [
      { option: 'I need yours tools, please.', isCorrect: false },
      { option: 'I need you tools, please.', isCorrect: false },
      { option: 'I need your tools, please.', isCorrect: true },
    ],
  },
  {
    number: 51,
    question: "Choose a/an for the following words. It's __ animal ",
    answers: [
      { option: "It's a animal", isCorrect: false },
      { option: "It's an animal", isCorrect: true },
    ],
  },
  {
    number: 52,
    question: 'Choose a/an for the following words. I need ___ new bed',
    answers: [
      { option: 'I need a new bed', isCorrect: true },
      { option: 'I need an new bed', isCorrect: false },
    ],
  },
  {
    number: 53,
    question: "Choose a/an for the following words. It's ___ useful machine.",
    answers: [
      { option: "It's a useful machine.", isCorrect: true },
      { option: "It's an useful machine.", isCorrect: false },
    ],
  },
  {
    number: 54,
    question: 'Choose a/an for the following words.  Do you have ___ umbrella? ',
    answers: [
      { option: 'Do you have a umbrella?', isCorrect: false },
      { option: 'Do you have an umbrella?', isCorrect: true },
    ],
  },
  {
    number: 55,
    question: "Choose a/an for the following words.  I'm ___ English teacher. ",
    answers: [
      { option: "I'm a English teacher.", isCorrect: false },
      { option: "I'm an English teacher.", isCorrect: true },
    ],
  },
  {
    number: 56,
    question: "Choose a/an for the following words.  I'm ___ waiter. ",
    answers: [
      { option: "I'm a waiter.", isCorrect: true },
      { option: "I'm an waiter.", isCorrect: false },
    ],
  },
  {
    number: 57,
    question: 'Choose a/an for the following words.  I need ___ hat. ',
    answers: [
      { option: 'I need a hat.', isCorrect: true },
      { option: 'I need an hat.', isCorrect: false },
    ],
  },
  {
    number: 58,
    question: 'Choose a/an for the following words.  Is she ___ student? ',
    answers: [
      { option: 'Is she an student?', isCorrect: false },
      { option: 'Is she a student?', isCorrect: true },
    ],
  },
  {
    number: 59,
    question: 'Choose a/an for the following words.  We have ___ ugly duck. ',
    answers: [
      { option: 'We have an ugly duck.', isCorrect: true },
      { option: 'We have a ugly duck.', isCorrect: false },
    ],
  },
  {
    number: 60,
    question: 'Choose a/an for the following words.  I need ___ hour. ',
    answers: [
      { option: 'I need an hour.', isCorrect: true },
      { option: 'I need a hour.', isCorrect: false },
    ],
  },
  {
    number: 61,
    question: 'Is the plural form of the following singular words correct? : A university ⇒ universities',
    answers: [
      { option: 'correct', isCorrect: true },
      { option: 'incorrect', isCorrect: false },
    ],
  },
  {
    number: 62,
    question: 'Is the plural form of the following singular word correct? : a sandwich ⇒ sandwiches',
    answers: [
      { option: 'correct', isCorrect: true },
      { option: 'incorrect', isCorrect: false },
    ],
  },
  {
    number: 63,
    question: 'Is the plural form of the following singular word correct? : a street ⇒ streets',
    answers: [
      { option: 'correct', isCorrect: true },
      { option: 'incorrect', isCorrect: false },
    ],
  },
  {
    number: 64,
    question: 'Is the plural form of the following singular word correct? : a rich man ⇒ rich mens',
    answers: [
      { option: 'correct', isCorrect: false },
      { option: 'incorrect', isCorrect: true },
    ],
  },
  {
    number: 65,
    question: 'Is the plural form of the following singular word correct? : onet foot ⇒ two foots',
    answers: [
      { option: 'correct', isCorrect: false },
      { option: 'incorrect', isCorrect: true },
    ],
  },
  {
    number: 66,
    question: 'Is the plural form of the following singular word correct? : an expensive watch ⇒ expensive watches',
    answers: [
      { option: 'correct', isCorrect: true },
      { option: 'incorrect', isCorrect: false },
    ],
  },
  {
    number: 67,
    question: 'Is the plural form of the following singular word correct? : a dirty bag ⇒ dirty bags',
    answers: [
      { option: 'correct', isCorrect: true },
      { option: 'incorrect', isCorrect: false },
    ],
  },
  {
    number: 68,
    question: 'Is the plural form of the following singular word correct? : a new phone ⇒ new phones',
    answers: [
      { option: 'correct', isCorrect: true },
      { option: 'incorrect', isCorrect: false },
    ],
  },
  {
    number: 69,
    question: 'Is the plural form of the following singular word correct? : onet foot ⇒ two feet',
    answers: [
      { option: 'correct', isCorrect: true },
      { option: 'incorrect', isCorrect: false },
    ],
  },
  {
    number: 70,
    question: 'Is the plural form of the following singular word correct? : One glass of wine ⇒ two glasses of wine',
    answers: [
      { option: 'correct', isCorrect: true },
      { option: 'incorrect', isCorrect: false },
    ],
  },
  {
    number: 71,
    question: "Write 'a/an' before the singular words and write the plural forms. __ bus ⇒ __ ",
    answers: [
      { option: 'A bus ⇒ buses', isCorrect: true },
      { option: 'An bus ⇒ buses', isCorrect: false },
      { option: 'A bus ⇒ busies', isCorrect: false },
    ],
  },
  {
    number: 72,
    question: "Write 'a/an' before the singular words and write the plural forms. __ nice family ⇒ nice __ ",
    answers: [
      { option: 'An nice family ⇒ nice familyes', isCorrect: false },
      { option: 'A nice family ⇒ nice families', isCorrect: true },
      { option: 'A nice family ⇒ nice familes', isCorrect: false },
    ],
  },
  {
    number: 73,
    question: "Write 'a/an' before the singular words and write the plural forms. __ Italian child  ⇒ Italian __ ",
    answers: [
      { option: 'A Italian child  ⇒ Italian childs', isCorrect: false },
      { option: 'An Italian child  ⇒ Italian childrens', isCorrect: false },
      { option: 'An Italian child  ⇒ Italian children', isCorrect: true },
    ],
  },
  {
    number: 74,
    question: "Write 'a/an' before the singular words and write the plural forms. __ strong tooth ⇒ strong __ ",
    answers: [
      { option: 'A strong tooth ⇒ strong teeth', isCorrect: true },
      { option: 'An strong tooth ⇒ strong tooths', isCorrect: false },
      { option: 'A strong tooth ⇒ strong teeths', isCorrect: false },
    ],
  },
  {
    number: 75,
    question: "Write 'a/an' before the singular words and write the plural forms. __ nice dress ⇒ nice __ ",
    answers: [
      { option: 'A nice dress ⇒ nice dres', isCorrect: false },
      { option: 'An nice dress ⇒ nice dresses', isCorrect: false },
      { option: 'A nice dress ⇒ nice dresses', isCorrect: true },
    ],
  },
  {
    number: 76,
    question: "Write 'a/an' before the singular words and write the plural forms. __ angry wife ⇒ angry __ ",
    answers: [
      { option: 'A angry wife ⇒ angry wives', isCorrect: false },
      { option: 'An angry wife ⇒ angry wives', isCorrect: true },
      { option: 'An angry wife ⇒ angry wifes', isCorrect: false },
    ],
  },
  {
    number: 77,
    question: "Write 'a/an' before the singular words and write the plural forms. __ uniform ⇒ __ ",
    answers: [
      { option: 'An uniform ⇒ uniforms', isCorrect: false },
      { option: 'A uniform ⇒ uniforms', isCorrect: true },
      { option: 'A uniform ⇒ uniformes', isCorrect: false },
    ],
  },
  {
    number: 78,
    question: "Write 'a/an' before the singular words and write the plural forms. __ amazing websites ⇒ amazing __ ",
    answers: [
      { option: 'A amazing website ⇒ amazing websites', isCorrect: false },
      { option: 'An amazing website ⇒ amazing website', isCorrect: false },
      { option: 'An amazing website ⇒ amazing websites', isCorrect: true },
    ],
  },
  {
    number: 79,
    question: "Write 'a/an' before the singular words and write the plural forms. __ elephant ⇒ __ ",
    answers: [
      { option: 'A elephant ⇒ elephants', isCorrect: false },
      { option: 'An elephant ⇒ elephants', isCorrect: true },
      { option: 'An elephant ⇒ elephantes', isCorrect: false },
    ],
  },
  {
    number: 80,
    question: "Write 'a/an' before the singular words and write the plural forms. __ empty library ⇒ empty __ ",
    answers: [
      { option: 'A empty library ⇒ empty librarys', isCorrect: false },
      { option: 'A empty library ⇒ empty libraries', isCorrect: false },
      { option: 'An empty library ⇒ empty libraries', isCorrect: true },
    ],
  },
  {
    number: 81,
    question: `${QUESTIONPRESENTSIMPLE5} With this makeup, your eyes ___.`,
    answers: [
      { option: 'With this makeup, your eyes look differents', isCorrect: false },
      { option: 'With this makeup, your eyes different look', isCorrect: false },
      { option: 'With this makeup, your eyes look different', isCorrect: true },
    ],
  },
  {
    number: 82,
    question: `${QUESTIONPRESENTSIMPLE5} These are ___.`,
    answers: [
      { option: 'These are important documents important', isCorrect: false },
      { option: 'These are important documents importants', isCorrect: false },
      { option: 'These are important documents', isCorrect: true },
    ],
  },
  {
    number: 83,
    question: `${QUESTIONPRESENTSIMPLE5}  ___ in their new house?`,
    answers: [
      { option: 'Are happy they in their new house?', isCorrect: false },
      { option: 'Are they happy in their new house?', isCorrect: true },
      { option: 'Are they happies in their new house?', isCorrect: false },
    ],
  },
  {
    number: 84,
    question: `${QUESTIONPRESENTSIMPLE5} He has ___.`,
    answers: [
      { option: 'He has an interesting job.', isCorrect: true },
      { option: 'He has a job interesting.', isCorrect: false },
    ],
  },
  {
    number: 85,
    question: `${QUESTIONPRESENTSIMPLE5} Sit down. You ___.`,
    answers: [
      { option: 'Sit down. You look tired.', isCorrect: true },
      { option: 'Sit down. You tired look.', isCorrect: false },
      { option: 'Sit down. You look tired.', isCorrect: false },
    ],
  },
  {
    number: 86,
    question: `${QUESTIONPRESENTSIMPLE5} Our holidays ___.`,
    answers: [
      { option: 'Our holidays are fantastic.', isCorrect: true },
      { option: 'Our holidays are fantastics.', isCorrect: false },
      { option: 'Our holidays fantastic are.', isCorrect: false },
    ],
  },
  {
    number: 87,
    question: `${QUESTIONPRESENTSIMPLE5} John has problems at home. ___?`,
    answers: [
      { option: 'John has problems at home. Are his good marks?', isCorrect: false },
      { option: 'John has problems at home. Are his goods marks?', isCorrect: false },
      { option: 'John has problems at home. Are his marks good?', isCorrect: true },
    ],
  },
  {
    number: 88,
    question: `${QUESTIONPRESENTSIMPLE5} Their project ___.`,
    answers: [
      { option: 'Their project sounds interesting.', isCorrect: true },
      { option: 'Their project tastes interesting.', isCorrect: false },
      { option: 'Their project interesting looks.', isCorrect: false },
    ],
  },
  {
    number: 89,
    question: `${QUESTIONPRESENTSIMPLE5} These cookies ___.`,
    answers: [
      { option: 'These cookies are excellents.', isCorrect: false },
      { option: 'These cookies are excellent.', isCorrect: true },
      { option: 'These cookies excellent are.', isCorrect: false },
    ],
  },
  {
    number: 90,
    question: `${QUESTIONPRESENTSIMPLE5} Her eyes ___.`,
    answers: [
      { option: 'Her eyes are blue.', isCorrect: true },
      { option: 'Her eyes blue are.', isCorrect: false },
      { option: 'Her eyes are blues.', isCorrect: false },
    ],
  },
  {
    number: 91,
    question: `Put the words in the correct order.`,
    answers: [
      { option: 'This is our restaurant favourite.', isCorrect: false },
      { option: 'Our favourite restaurant is this.', isCorrect: false },
      { option: 'Is this our restaurant favourite?', isCorrect: false },
      { option: 'This is our favourite restaurant.', isCorrect: true },
    ],
  },
  {
    number: 92,
    question: `Put the words in the correct order.`,
    answers: [
      { option: "It's a building very modern.", isCorrect: false },
      { option: "It's a very modern building.", isCorrect: true },
      { option: "Very modetn it's a building.", isCorrect: false },
      { option: 'A building very modern is.', isCorrect: false },
    ],
  },
  {
    number: 93,
    question: `Put the words in the correct order.`,
    answers: [
      { option: 'Are your friends German?', isCorrect: true },
      { option: 'Are German your friends?', isCorrect: false },
      { option: 'German are your friends?', isCorrect: false },
      { option: 'Your friends are German?', isCorrect: false },
    ],
  },
  {
    number: 94,
    question: `Put the words in the correct order.`,
    answers: [
      { option: 'This language difficult is.', isCorrect: false },
      { option: 'A language difficult this is.', isCorrect: false },
      { option: 'This is a difficult language.', isCorrect: true },
      { option: 'This is a language difficult.', isCorrect: false },
    ],
  },
  {
    number: 95,
    question: `Put the words in the correct order.`,
    answers: [
      { option: 'Your great idea is.', isCorrect: false },
      { option: 'Your idea is great.', isCorrect: true },
      { option: 'Great your idea is', isCorrect: false },
      { option: 'Your idea great is.', isCorrect: false },
    ],
  },
  {
    number: 96,
    question: `Put the words in the correct order.`,
    answers: [
      { option: 'She an exceptional student is.', isCorrect: false },
      { option: 'She is a student exceptional.', isCorrect: false },
      { option: 'She is an exceptional student.', isCorrect: true },
      { option: 'She a student exceptional is.', isCorrect: false },
    ],
  },
  {
    number: 97,
    question: `Put the words in the correct order.`,
    answers: [
      { option: 'Is this shirt Italian?.', isCorrect: true },
      { option: 'Is Italian this shirt?', isCorrect: false },
      { option: 'This shirt Italian is?', isCorrect: false },
      { option: 'This shirt is Italian?', isCorrect: false },
    ],
  },
  {
    number: 98,
    question: `Put the words in the correct order.`,
    answers: [
      { option: 'That restaurant very dirty is.', isCorrect: false },
      { option: 'That is a restaurant very dirty.', isCorrect: false },
      { option: 'Very dirty is that restaurant.', isCorrect: false },
      { option: 'That restaurant is very dirty.', isCorrect: true },
    ],
  },
  {
    number: 99,
    question: `Put the words in the correct order.`,
    answers: [
      { option: 'He a Korean car has.', isCorrect: false },
      { option: 'He has a Korean car.', isCorrect: true },
      { option: 'He has a car Korean.', isCorrect: false },
      { option: 'A car Korean he has.', isCorrect: false },
    ],
  },
  {
    number: 100,
    question: `Put the words in the correct order.`,
    answers: [
      { option: 'This language is difficult.', isCorrect: true },
      { option: 'This language difficult is.', isCorrect: false },
      { option: 'Is difficult this language?', isCorrect: false },
      { option: 'This language is difficult?', isCorrect: false },
    ],
  },
]
