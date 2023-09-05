import {
  SelectedOptions1,
  SelectedOptions2,
  SelectedOptions3,
  SelectedOptions4,
  SelectedOptions5,
} from '../types/enums'

export const questionnaireOptions = [
  {
    title: 'Jak oceniasz platformę WESA E-Learning Platform 2023 ?',
    options: [
      {
        label: 'Słabo',
        value: SelectedOptions1.WEAK,
        name: 'selectedOption1',
      },
      {
        label: 'Przeciętnie',
        value: SelectedOptions1.AVERAGE,
        name: 'selectedOption1',
      },
      {
        label: 'Dobrze',
        value: SelectedOptions1.GOOD,
        name: 'selectedOption1',
      },
      {
        label: 'Bardzo dobrze',
        value: SelectedOptions1.VERY_GOOD,
        name: 'selectedOption1',
      },
    ],
  },
  {
    title: 'Czy chciałbyś/chiałabyś żeby platforma była dalej rozwijana?',
    options: [
      {
        label: 'Tak',
        value: SelectedOptions2.YES,
        name: 'selectedOption2',
      },
      {
        label: 'Nie',
        value: SelectedOptions2.NO,
        name: 'selectedOption2',
      },
      {
        label: 'Raczej nie',
        value: SelectedOptions2.PROBABLY,
        name: 'selectedOption2',
      },
      {
        label: 'Nie ma znaczneia',
        value: SelectedOptions2.DOESNT_MATTER,
        name: 'selectedOption2',
      },
    ],
  },
  {
    title: 'O jakie treści dotyczące Opiekuna Medycznego powinniśmy rozszerzyć platformę ?',
    options: [
      {
        label: 'Instruktaże',
        value: SelectedOptions3.INSTRUCTIONS,
        name: 'selectedOption3',
      },
      {
        label: 'Testy',
        value: SelectedOptions3.TESTS,
        name: 'selectedOption3',
      },
      {
        label: 'Wszytko',
        value: SelectedOptions3.ALL,
        name: 'selectedOption3',
      },
      {
        label: 'Nie ma znaczneia',
        value: SelectedOptions3.DOESNT_MATTER,
        name: 'selectedOption3',
      },
    ],
  },
  {
    title: 'Jaką nową funkcję naszej platformy wprowadzić w pierszej kolejności?',
    options: [
      {
        label: 'Komunikator',
        value: SelectedOptions4.COMMUNICATOR,
        name: 'selectedOption4',
      },
      {
        label: 'Blog Medyczny',
        value: SelectedOptions4.BLOG,
        name: 'selectedOption4',
      },
      {
        label: 'Asystent AI',
        value: SelectedOptions4.ASSISTANT,
        name: 'selectedOption4',
      },
      {
        label: 'Newsy Medyczne',
        value: SelectedOptions4.NEWS,
        name: 'selectedOption4',
      },
    ],
  },
  {
    title: 'Gdyby to była aplikacja płatna, ile byłbyś/byłabyś skora za nią zapłacić?',
    options: [
      {
        label: 'Za darmo',
        value: SelectedOptions5.FREE,
        name: 'selectedOption5',
      },
      {
        label: '100 zł',
        value: SelectedOptions5.HUNDRED,
        name: 'selectedOption5',
      },
      {
        label: '250 zł',
        value: SelectedOptions5.TWO_HUNDRED,
        name: 'selectedOption5',
      },
      {
        label: '19.99zł/miesiąc',
        value: SelectedOptions5.MONTHLY,
        name: 'selectedOption5',
      },
    ],
  },
]
