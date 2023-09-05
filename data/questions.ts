import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { capitalizeSentences } from '@/utils/capitalizeSentences'
import img1 from '../public/images/wesa/korek.png'
import img2 from '../public/images/wesa/wenflon.png'
import img3 from '../public/images/wesa/wlew.png'

export const questions = [
  {
    number: 1,
    question: 'Transport pobranej pełnej krwi żylnej (nieodwirowanej) powinien odbywać się w temperaturze: ',
    answers: [
      { option: 'lodówki 4-8 °C', isCorrect: false },
      { option: 'zamrożony w -20 °C;', isCorrect: false },
      { option: 'w pojemnku z temperaturą 37 °C', isCorrect: false },
      { option: 'w temperaturze pokojowej 20-25 °C', isCorrect: true },
    ],
  },
  {
    number: 2,
    question: 'Wybierz zdanie prawdziwe:',
    answers: [
      { option: 'materiał po pobraniu należy dokładnie, mocno wymieszać, wstrząsając probówką;', isCorrect: false },
      {
        option: 'materiał po pobraniu należy umieścić w ciepłym miejscu - może to być parapet lub obok kaloryfera;',
        isCorrect: false,
      },
      {
        option:
          'materiał po pobraniu należy bardzo delikatnie wymieszać i zabezpieczyć w miejscu nienarażonym na bezpośrednie działanie ciepła lub zimna;',
        isCorrect: true,
      },
      { option: 'materiał po pobraniu należy niezwłocznie umieścić w lodówce.', isCorrect: false },
    ],
  },
  {
    number: 3,
    question: 'Materiał powinien być dostarczony do laboratorium:',
    answers: [
      { option: 'najszybciej jak to możliwe - maksymalnie do godziny od pobrania;', isCorrect: true },
      { option: 'może być dostarczony w przeciągu 24 godzin od pobrania;', isCorrect: false },
      { option: 'do 8 godzin od pobrania;', isCorrect: false },
      { option: 'powinien dotrzeć do 48 godzin od pobrania.', isCorrect: false },
    ],
  },
  {
    number: 4,
    question: 'Hemoliza to:',
    answers: [
      {
        option: 'zmętnienie surowicy o jasnym kolorze wynikające z niezachowania 12 godzin postu przed badaniem:',
        isCorrect: false,
      },
      {
        option: 'lekko zażółcone zabarwienie materiału wynikające z dużego stężenia bilirubiny we krwi:',
        isCorrect: false,
      },
      {
        option:
          'czerwone zabarwienie surowicy wynikające z nieprawidłowego pobrania lub zbyt intensywnego wymieszania krwi',
        isCorrect: true,
      },
      {
        option:
          'naturalne zjawisko związane ze zmianą barwy krwi, wynikające ze stresu pacjenta przed pobraniem materialu.',
        isCorrect: false,
      },
    ],
  },
  {
    number: 5,
    question:
      'Po pobraniu próbki krwi do badania serologicznego w kierunku grupy krwi, etykietę probówki należy opisać:',
    answers: [
      { option: 'tylko imieniem i nazwiskiem pacjenta oraz podpis osoby pobierającej;', isCorrect: false },
      {
        option:
          'wymagane jest złożenie czytelnego podpisu oraz wpisanie daty i godziny pobrania materiału przez osobę pobierającą;',
        isCorrect: true,
      },
      { option: 'tylko data oraz nazwisko pacjenta;', isCorrect: false },
      { option: 'nie ma konieczności opisywania probówki. jedynie skierowanie.', isCorrect: false },
    ],
  },
  {
    number: 6,
    question: 'Do skierowania w kierunku badań genetycznych należy dołączyć:',
    answers: [
      { option: 'deklarację świadomej zgody;', isCorrect: true },
      { option: 'oświadczenie pacjenta o zgodzie na badania;', isCorrect: false },
      { option: 'upoważnienie na wykonanie badania;', isCorrect: false },
      { option: 'nic nie trzeba dołączać.', isCorrect: false },
    ],
  },
  {
    number: 7,
    question:
      'Jak należy opisać materiał do badania serologicznego w przypadku braku możliwości uzyskania danych pacjenta: ',
    answers: [
      {
        option:
          'na etykiecie probówki i na zleceniu na badanie grupy krwi należy wpisać symbol „NN”, płeć, numer księgi głównej lub niepowtarzalny numer identyfikacyjny pacjenta;',
        isCorrect: true,
      },
      { option: 'nie opisujemy takiego materiału, gdyż może to doprowadzić do pomyłki;', isCorrect: false },
      { option: 'wpisujemy tyko „NN;', isCorrect: false },
      { option: 'opisujemy jako „do wyjaśnienia”.', isCorrect: false },
    ],
  },
  {
    number: 8,
    question: 'Wskaż zdanie fałszywe:',
    answers: [
      { option: 'Skierowanie na badania powinno zawierać adres pacjenta', isCorrect: false },
      { option: 'Skierowanie na badania powinno zawierać telefon pacjenta', isCorrect: false },
      { option: 'Skierowanie na badania powinno zawierać aktualną wagę pacjenta,', isCorrect: true },
      { option: 'Skierowanie na badania powinno zawierać informacje o przyjmowanych lekach', isCorrect: false },
    ],
  },
  {
    number: 9,
    question: 'Wskaż zdanie prawdziwe:',
    answers: [
      { option: 'materiał po pobraniu delikatnie mieszamy i ustawiamy w statywie korkiem do góry:', isCorrect: true },
      { option: 'materiał po pobraniu kladziemy poziomo w pojemniku;', isCorrect: false },
      { option: 'materiał po pobraniu umieszczamy w lodówce do czasu przekazania do laboratorium:', isCorrect: false },
      { option: 'lipemia jest błędem, który wynika ze złego wymieszania materiału.', isCorrect: false },
    ],
  },
  {
    number: 10,
    question: 'Które z poniższych punktów nie jest błędem przedlaboratoryjnym:',
    answers: [
      { option: 'zbyt mało materiału;', isCorrect: false },
      { option: 'hemoliza;', isCorrect: false },
      { option: 'nieprawidłowe pobranie (zły antykoagulant);', isCorrect: false },
      { option: 'żadne z powyższych;', isCorrect: true },
    ],
  },
  {
    number: 11,
    question: 'Pojawiająca się w okresie starości autorefleksja dotycząca swojej drogi życiowej to: ',
    answers: [
      { option: 'Podsumowanie życia;', isCorrect: false },
      { option: 'Bilans życiowy;', isCorrect: true },
      { option: 'Rachunek sumienia;', isCorrect: false },
    ],
  },
  {
    number: 12,
    question:
      'Reagowanie na nowa sytuacje za pomoca wykształconego nawyku, odruchu i przyswojenie tego schematu przez własna strukturę osobową, czyli dopasowanie informacji o świecie zewnętrznym do posiadanych juz zasobów to:',
    answers: [
      { option: 'asymilacja', isCorrect: true },
      { option: 'akomodacja', isCorrect: false },
      { option: 'starzenie sie', isCorrect: false },
    ],
  },
  {
    number: 13,
    question: 'Potrzeby najniżej usytuowane w piramidzie potrzeb przez Abrahama Maslova:',
    answers: [
      { option: 'Potrzeby fizjologiczne', isCorrect: true },
      { option: 'Potrzeby poznawcze', isCorrect: false },
      { option: 'Potrzeby estetyczne', isCorrect: false },
    ],
  },
  {
    number: 14,
    question:
      'Według Zygmunta Freuda psychika człowieka składa się z trzech części: id, ego i superego. Najbardziej prymitywną częścią psychiki jest: ',
    answers: [
      { option: 'id', isCorrect: true },
      { option: 'ego', isCorrect: false },
      { option: 'superego', isCorrect: false },
    ],
  },
  {
    number: 15,
    question: 'Okres prenatalny w rozwoju człowieka obejmuje okres:',
    answers: [
      { option: 'Od poczęcia do narodzin;', isCorrect: true },
      { option: 'Do 1r.ż.', isCorrect: false },
      { option: 'Do ukończenia 18 r.ż.', isCorrect: false },
    ],
  },
  {
    number: 16,
    question:
      'Kiedy dziecko na skutek niewydolności rodzicielskiej przejmuje funkcje emocjonalne i społeczne w zaspakajaniu potrzeb osoby dorosłej mówimy o odwróceniu ról, które nazywa się inaczej: ',
    answers: [
      { option: 'akomodacją', isCorrect: false },
      { option: 'parentyfikacja', isCorrect: true },
      { option: 'dorastaniem', isCorrect: false },
    ],
  },
  {
    number: 17,
    question:
      'W Całościowej Ocenie Geriatrycznej (CO) do oceny funkcjonowania czynnościowego stosuje się różnego rodzaju skal Jedną z takich jest:',
    answers: [
      { option: 'Skala Katza', isCorrect: true },
      { option: 'Skala Lawtona', isCorrect: false },
      { option: 'Krótka skala oceny stanu psychicznego', isCorrect: false },
    ],
  },
  {
    number: 18,
    question:
      'Skala Barthel narzędzie służące do oceny stopnia samodzielności pacjenta. Aby pacjent mógł zostać objęty opieką długoterminową w ramach Narodowego Funduszu Zdrowia nie może uzyskać w skali Barthel więcej niż:',
    answers: [
      { option: '10 pkt', isCorrect: false },
      { option: '40 pkt', isCorrect: true },
      { option: '60 pkt ', isCorrect: false },
    ],
  },
  {
    number: 19,
    question:
      'Geriatryczna Skala oceny depresji to jedna z częściej stosowanych skal do przesiewowej samooceny depresji: ',
    answers: [
      { option: 'W wieku podeszłym;', isCorrect: true },
      { option: 'W wieku do 30 roku życia;', isCorrect: false },
      { option: 'Wśród młodzieży;', isCorrect: false },
    ],
  },
  {
    number: 20,
    question:
      'Proces diagnostyczny służący do określenia problemów zdrowotnych i funkcjonalnych pacjenta w starszym wieku to: ',
    answers: [
      { option: 'Całościowa Ocena Geriatryczna;', isCorrect: true },
      { option: 'Całościowa Ocena Medyczna;', isCorrect: false },
      { option: 'Całościowa Ocena Psychologiczna.', isCorrect: false },
    ],
  },
  {
    number: 21,
    question:
      'Jednym z testów do oceny sprawności funkcjonalnej ryzyka upadku jest test „Wstań idż". Podczas tego testu pacjent musi przejść dystans: ',
    answers: [
      { option: '3 metrów, ', isCorrect: true },
      { option: '30 metrów, ', isCorrect: false },
      { option: '300 metrów, ', isCorrect: false },
    ],
  },
  {
    number: 22,
    question:
      'Według skali Lawtona używanie telefonu, robienie zakupów, przygotowywanie posiłków,codzienne porządki, panie, korzystanie ze środków transportu, przyjmowanie leków, rozporządzanie swoimi pieniędzmi należy do: ',
    answers: [
      { option: 'Podstawowych czynności życia codziennego;', isCorrect: false },
      { option: 'Zawansowanych (instrumentalnych)czynności życia codziennego;', isCorrect: true },
      { option: 'Zależy od wieku pacjenta;', isCorrect: false },
    ],
  },
  {
    number: 23,
    question: 'Starzenie się jest uogólnionym, postępującym:',
    answers: [
      { option: 'spadkiem rezerwy fizjologicznej', isCorrect: true },
      { option: 'wzrostem rezerwy fizjologicznej', isCorrect: false },
      { option: 'schorzeniem neurodegeneracyjnym, czyli uszkadzającym komórki nerwowe', isCorrect: false },
    ],
  },
  {
    number: 24,
    question:
      'Test Tinetti jest powszechnie stosowany przy całościowe ocenie geriatrycznej, jednakże zastosowanie bardzo często na oddziałach neurologicznych czy ortopedycznych. Służy do oceny ryzyka ',
    answers: [
      { option: 'niedożywienie', isCorrect: false },
      { option: 'upadków', isCorrect: true },
      { option: 'wystąpienie otepienia', isCorrect: false },
    ],
  },
  {
    number: 25,
    question: 'W skali Barthel pacjent może maksymalnie uzyskać: ',
    answers: [
      { option: '10 punktów', isCorrect: false },
      { option: '30 punktów', isCorrect: false },
      { option: '100 punktów', isCorrect: true },
    ],
  },
  {
    number: 26,
    question:
      'Wyróżniamy cztery rodzaje starzenia się: starzenie biologiczne, psychiczne,społeczne i socjalne. Starzenie, które odnosi się do samoświadomości jednostki i jej zdolności przystosowania się do stopniowego starzenia się. Innymi słowy, postrzeganie starości przez jednostkę to rodzaj starzenia: ',
    answers: [
      { option: 'Biologicznego', isCorrect: false },
      { option: 'Psychicznego', isCorrect: true },
      { option: 'Społecznego', isCorrect: false },
    ],
  },
  {
    number: 27,
    question:
      'Nauka o starzeniu się i starości, która bada starzenie się z punktu biologii, medycyny. genetyki, psychologii, socjologii, demografii to: ',
    answers: [
      { option: 'Geriatria', isCorrect: false },
      { option: 'Gerontologia', isCorrect: true },
      { option: 'Geografia', isCorrect: false },
    ],
  },
  {
    number: 28,
    question: 'Według Światowej Organizacji Zdrowia wczesna starość rozpoczyna się po:',
    answers: [
      { option: '50 r.ż', isCorrect: false },
      { option: '60 r.ż', isCorrect: true },
      { option: '70 r.ż', isCorrect: false },
    ],
  },
  {
    number: 29,
    question:
      'Wraz z wiekiem zmniejsza się w organizmie produkcja enzymu rozkładającego laktozę, czyli laktazy. Prowadzi to do nietolerancji mleka przez osoby w podeszłym wieku. Objawem nietolerancji mleka są wówczas:',
    answers: [
      { option: 'Zaparcia,', isCorrect: false },
      { option: 'Biegunki', isCorrect: true },
      { option: 'Wymioty', isCorrect: false },
    ],
  },
  {
    number: 30,
    question: 'Jednym ze skutków długotrwałego unieruchomienia są przykurcze. Przykurcze to:',
    answers: [
      { option: 'wydłużenie długości mięśnia;', isCorrect: false },
      { option: 'skrócenie długości mięśnia;', isCorrect: true },
      { option: 'zwiększenie objętości mięśnia.', isCorrect: false },
    ],
  },
  {
    number: 31,
    question: 'Ryzyko powstania odleżyny ocenia się stosując skalę: ',
    answers: [
      { option: 'Norton;', isCorrect: true },
      { option: "Torrence'a,", isCorrect: false },
      { option: 'nie można ocenić ryzyka powstania odleżyn.', isCorrect: false },
    ],
  },
  {
    number: 32,
    question: 'Podanie heparyny drobnocząsteczkowej to jedna z metod zapobiegania:',
    answers: [
      { option: 'przykurczom;', isCorrect: false },
      { option: 'zanikom mięśniowym;', isCorrect: false },
      { option: 'chorobie zakrzepowo-zatorowej;', isCorrect: true },
    ],
  },
  {
    number: 33,
    question: 'Najważniejszym elementem profilaktyki powstawania zaników mięśniowych są:',
    answers: [
      { option: 'leki;', isCorrect: false },
      { option: 'ćwiczenia czynne i bierne;', isCorrect: true },
      { option: 'masaż kończyn dolnych', isCorrect: false },
    ],
  },
  {
    number: 34,
    question:
      'Szpitalne zapalenia płuc wywołane są drobnoustrojami, które charakteryzują się większą opornością na leczenie, niż drobnoustroje wywołujące zapalenia płuc nabyte poza środowiskiem szpitalnym. Większa oporność powoduje, że śmiertelność w szpitalnym zapaleniu płuc jest:',
    answers: [
      { option: 'mniejsza;', isCorrect: false },
      { option: 'większa;', isCorrect: true },
      { option: 'taka sama jak w poza szpitalnych zapaleniach płuc.', isCorrect: false },
    ],
  },
  {
    number: 35,
    question:
      'Pacjent podczas rozmowy z tobą zaczyna narzekać na lekarzy. Twierdzi, ze potrafią tyko liczyć pieniądze, a pacjenta mają w nosie. Jak zareagujesz?',
    answers: [
      {
        option:
          '"Co też Pan mówi, przecież to jest nieprawda. Kiedyś byłam w przychodni lekarz świetnie się mną zajął" ',
        isCorrect: false,
      },
      {
        option:
          '"Rozumiem, że chciałby Pan żeby lekarze poświęcał chorym więcej czasu na rozmowę. Rozumiem, że coś Pana szczególnie poruszyło ?"',
        isCorrect: true,
      },
    ],
  },
  {
    number: 36,
    question:
      'Jakie zawody medyczne mogą wchodzić w skład zespołu opiekuńczo-terapeutycznego ? Wybierz właściwy zestaw:',
    answers: [
      { option: 'Wyłącznie lekarz, pielęgniarka i opiekun medyczny', isCorrect: false },
      {
        option: 'Lekarz, pielęgniarka, rehabilitant, opiekun medyczny, duchowny, członek rodziny, psycholog',
        isCorrect: true,
      },
      { option: 'Wyłącznie lekarz. pielęgniarka, rehabilitant, opiekun medyczny, psycholog', isCorrect: false },
    ],
  },
  {
    number: 37,
    question: 'Za 65% błędów medycznych odpowiedzialna/y jest:',
    answers: [
      { option: 'Niewłaściwa higiena rąk', isCorrect: false },
      {
        option: 'Zła komunikacja',
        isCorrect: true,
      },
      { option: 'Wadliwy sprzęt', isCorrect: false },
    ],
  },
  {
    number: 38,
    question: 'W etyce wyróżnia się dwa uzasadnienia norm moralnych: utylitaryzm i personalizm. W personalizmie: ',
    answers: [
      {
        option:
          ' Podkreśla się wartość każdej osoby, bez względu na jej status społeczny, wiek, wyksztalcenie czy indywidualne właściwości',
        isCorrect: true,
      },
      {
        option: 'Miarą słuszności postępowania jest użyteczność jej skutków ',
        isCorrect: false,
      },
      {
        option:
          'Postepowanie jest słuszne, jeśli prowadzi do uzyskania jak największej ilości szczęścia i jak najmniejszej ilości nieszczęścia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 39,
    question:
      'Sytuacja, w której zachodzi konieczność wyboru pomiędzy co najmniej dwoma niezadowalającymi rozwiązania to:',
    answers: [
      {
        option: 'Dylemat moralny',
        isCorrect: true,
      },
      {
        option: 'kompromis',
        isCorrect: false,
      },
      {
        option: 'konflikt',
        isCorrect: false,
      },
    ],
  },
  {
    number: 40,
    question: 'Prowadząc rozmowę z pacjentem agresywnym aby nie dać mu poczucia przewagi należy:',
    answers: [
      {
        option: 'unikać kontaktu wzrokowego z nim',
        isCorrect: false,
      },
      {
        option: 'patrzeć mu miedzy oczy',
        isCorrect: true,
      },
      {
        option: 'patrzeć mu prosto w oczy ',
        isCorrect: false,
      },
    ],
  },
  {
    number: 41,
    question:
      'W etyce wyróżnia się następujące działy: etyka opisowa, etyka normatywna i etyka szczegółowa. Rodzaje, etyki która wskazuje, który system styczny jest najlepszy, mówi nam jak postępować to:',
    answers: [
      {
        option: 'etyka normatywna',
        isCorrect: true,
      },
      {
        option: 'etyka opisowa',
        isCorrect: false,
      },
      {
        option: 'etyka szczegółowa',
        isCorrect: false,
      },
    ],
  },
  {
    number: 42,
    question: 'Pierwszym kodeksem etyki zawodowej w Polsce był:',
    answers: [
      {
        option: 'Kodeks Etyki Lekarskiej',
        isCorrect: true,
      },
      {
        option: 'Kodeks Pielęgniarki i Położnej',
        isCorrect: false,
      },
      {
        option: 'Kodeks opiekuna medycznego',
        isCorrect: false,
      },
    ],
  },
  {
    number: 43,
    question:
      'W kontakcie z pacjentem agresywnym należy się przedstawić i o to samo prosić pacjenta agresywnego ponieważ:',
    answers: [
      {
        option: 'anonimowość zwiększa stan napięcia',
        isCorrect: true,
      },
      {
        option: 'bo kultura tego wymaga',
        isCorrect: false,
      },
      {
        option: 'aby moc zwracać się do niego po imieniu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 44,
    question: 'Powtarzanie swoimi słowami tego, co powiedział pacjent nazywa się:',
    answers: [
      {
        option: 'Parafrazowaniem',
        isCorrect: true,
      },
      {
        option: 'Porównywaniem',
        isCorrect: false,
      },
      {
        option: 'Słowotokiem',
        isCorrect: false,
      },
    ],
  },
  {
    number: 45,
    question: 'W przekazie informacji największy udział ma:',
    answers: [
      {
        option: 'słowo;',
        isCorrect: false,
      },
      {
        option: 'właściwości mowy;',
        isCorrect: false,
      },
      {
        option: 'wyraz twarzy.',
        isCorrect: true,
      },
    ],
  },
  {
    number: 46,
    question: 'Komunikacja dzieli się na werbalną i niewerbalną. Na komunikację werbalną składają się/składa się:',
    answers: [
      {
        option: 'słowa;',
        isCorrect: true,
      },
      {
        option: 'wyraz twarzy;',
        isCorrect: false,
      },
      {
        option: 'dotyk.',
        isCorrect: false,
      },
    ],
  },
  {
    number: 47,
    question:
      'Literatura podaje, że przestrzeń nas otaczająca dzieli się na 4 strefy: strefę intymną, osobistą, społeczną i publiczną. Najbliższą dla nas strefą zarezerwowaną dla osób najbliższych jest strefa:',
    answers: [
      {
        option: 'publiczna;',
        isCorrect: false,
      },
      {
        option: 'osobista;',
        isCorrect: false,
      },
      {
        option: 'intymna.',
        isCorrect: true,
      },
    ],
  },
  {
    number: 48,
    question: 'Podstawą zbudowania efektywnej terapeutycznej relacji jest:',
    answers: [
      {
        option: 'punktualność;',
        isCorrect: false,
      },
      {
        option: 'wiedza;',
        isCorrect: false,
      },
      {
        option: 'zaufanie.',
        isCorrect: true,
      },
    ],
  },
  {
    number: 49,
    question:
      'W wyniku upadku może dojść do wystąpienia tzw. zespołu poupadkowego. Zespół poupadkowy charakteryzuje się:',
    answers: [
      {
        option: 'lękiem przed kolejnym upadkiem;',
        isCorrect: true,
      },
      {
        option: 'złamaną kończyną górną, siniakami;',
        isCorrect: false,
      },
      {
        option: 'nogą w gipsie.',
        isCorrect: false,
      },
    ],
  },
  {
    number: 50,
    question: 'Najczęstszą przyczyną otępienia jest:',
    answers: [
      {
        option: 'cukrzyca;',
        isCorrect: false,
      },
      {
        option: 'choroba Alzheimera;',
        isCorrect: true,
      },
      {
        option: 'stwardnienie rozsiane.',
        isCorrect: false,
      },
    ],
  },
  {
    number: 51,
    question: 'Po napełnieniu termoforu wodą należy usunąć z niego powietrze, ponieważ:',
    answers: [
      {
        option: 'Powietrze ułatwia przewodzenie ciepła',
        isCorrect: false,
      },
      {
        option: 'Powietrze utrudnia przewodzenie ciepła',
        isCorrect: true,
      },
      {
        option: 'Zwiększa ryzyko poparzenia skóry',
        isCorrect: false,
      },
    ],
  },
  {
    number: 52,
    question:
      'Wydłużony czas stosowania ciepła skutkuje biernym przekrwieniem żylnym tkanek i skurczem naczyń krwionośnych, co zwiększa ryzyko oparzenia, dlatego termofor powinien pozostawać na miejscu leczonym przez okres:',
    answers: [
      {
        option: '20-30 min',
        isCorrect: true,
      },
      {
        option: '1 godziny',
        isCorrect: false,
      },
      {
        option: '2 godzin',
        isCorrect: false,
      },
    ],
  },
  {
    number: 53,
    question:
      'Przyczyny zapaleń można podzielić na kilka grup: biologiczne, fizyczne oraz chemiczne. Bakterie i wirusy należą do przyczyn:',
    answers: [
      {
        option: 'biologicznych',
        isCorrect: true,
      },
      {
        option: 'fizycznych',
        isCorrect: false,
      },
      {
        option: 'chemicznych',
        isCorrect: false,
      },
    ],
  },
  {
    number: 54,
    question: 'Woda w termoforze powinna mieć temperaturę:',
    answers: [
      {
        option: '40-50 °C',
        isCorrect: false,
      },
      {
        option: '70-80 °C',
        isCorrect: true,
      },
      {
        option: '70-100 °C',
        isCorrect: false,
      },
    ],
  },
  {
    number: 55,
    question: 'Warstwa mokra okładu rozgrzewającego powinna postać na miejscu leczonym przez okres:',
    answers: [
      {
        option: '2 godzin',
        isCorrect: false,
      },
      {
        option: '4 godzin',
        isCorrect: false,
      },
      {
        option: '6-8 godzin',
        isCorrect: true,
      },
    ],
  },
  {
    number: 56,
    question: 'Temperatura wody do wykonania okładu rozgrzewającego powinna wynosić: ',
    answers: [
      {
        option: 'ok 0 °C',
        isCorrect: false,
      },
      {
        option: '28-33 °C',
        isCorrect: true,
      },
      {
        option: '80 °C',
        isCorrect: false,
      },
    ],
  },
  {
    number: 57,
    question: 'Okład rozgrzewający składa się z: ',
    answers: [
      {
        option: 'dwóch warstw',
        isCorrect: false,
      },
      {
        option: 'trzech warstw',
        isCorrect: true,
      },
      {
        option: 'czterech warstw',
        isCorrect: false,
      },
    ],
  },
  {
    number: 58,
    question: 'Aby zapobiec maceracji skóry przed założeniem okładu rozgrzewającego należy:',
    answers: [
      {
        option: 'nałożyć na skórę wazelinę',
        isCorrect: true,
      },
      {
        option: 'posmarować skore maścią tlenku cynku ',
        isCorrect: false,
      },
      {
        option: 'posmarować skore oliwą z oliwek',
        isCorrect: false,
      },
    ],
  },
  {
    number: 59,
    question:
      'Podczas okładu rozgrzewającego stosuje się wazelinę, którą rozprowadza się na skórze. Celem tego zabiegu jest: ',
    answers: [
      {
        option: 'Ochrona skóry przed zbytnim nagrzaniem',
        isCorrect: false,
      },
      {
        option: 'Ochrona skóry przed maceracją',
        isCorrect: true,
      },
      {
        option: 'Ochrona skóry przed szkodliwym wpływem octanu glinu na skórę ',
        isCorrect: false,
      },
    ],
  },
  {
    number: 60,
    question:
      'Warstwa sucha okładu po zakończeniu okładu rozgrzewającego, powinna pozostać jeszcze na skórze przez okres:',
    answers: [
      {
        option: '5 minut',
        isCorrect: false,
      },
      {
        option: '10 minut',
        isCorrect: false,
      },
      {
        option: '30 minut',
        isCorrect: true,
      },
    ],
  },
  {
    number: 61,
    question:
      'Okład rozgrzewający powinien składać się z trzech warstw: mokrej, ceratki i suchej. Każda kolejna warstwa, powinna być większa od poprzedniej o: ',
    answers: [
      {
        option: '2 cm',
        isCorrect: true,
      },
      {
        option: '5 cm',
        isCorrect: false,
      },
      {
        option: '10 cm',
        isCorrect: false,
      },
    ],
  },
  {
    number: 62,
    question:
      'Aby wykonać zimny kompres żelowy należy przed zabiegiem, kompres żelowy należy umieścić w zamrażarce na okres:',
    answers: [
      {
        option: 'pól godziny ',
        isCorrect: false,
      },
      {
        option: '2 godziny',
        isCorrect: true,
      },
      {
        option: '5 godzin',
        isCorrect: false,
      },
    ],
  },
  {
    number: 63,
    question: 'Zimny kompres żelowy zostawia się na miejscu leczonym na okres: ',
    answers: [
      {
        option: '10 minut',
        isCorrect: false,
      },
      {
        option: '20-30 minut',
        isCorrect: true,
      },
      {
        option: '2 godzin',
        isCorrect: false,
      },
    ],
  },
  {
    number: 64,
    question: 'Przygotowując worek z lodem należy pamiętać, aby usunąć z niego powietrze, ponieważ powietrze: ',
    answers: [
      {
        option: 'Ogranicza przekazywanie zimna',
        isCorrect: true,
      },
      {
        option: 'Zwiększa przekazywanie zimna',
        isCorrect: false,
      },
      {
        option: 'Zwiększa ryzyko odmrożenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 65,
    question: 'Przygotowując worek z lodem należy pamiętać aby wypełnić go kostkami lodu maksymalnie do: ',
    answers: [
      {
        option: '1/2 objętości worka',
        isCorrect: false,
      },
      {
        option: '1/3 objętości worka ',
        isCorrect: false,
      },
      {
        option: '2/3 objętości worka',
        isCorrect: true,
      },
    ],
  },
  {
    number: 66,
    question: 'Okład wysychający obniża temperaturę ciała o ok. 1 st. C w czasie: ',
    answers: [
      {
        option: '2-3 godzin',
        isCorrect: true,
      },
      {
        option: '5-6 godzin',
        isCorrect: false,
      },
      {
        option: '10 godzin',
        isCorrect: false,
      },
    ],
  },
  {
    number: 67,
    question: 'Przeciwwskazaniem do okładu wysychającego jest: ',
    answers: [
      {
        option: 'Gorączka',
        isCorrect: false,
      },
      {
        option: 'Zaburzenia w dopływie krwi tętniczej',
        isCorrect: true,
      },
      {
        option: 'nerwobóle',
        isCorrect: false,
      },
    ],
  },
  {
    number: 68,
    question: 'Czas zastosowania okładu wysychającego (zimna wilgotnego) wynosi: ',
    answers: [
      {
        option: '2-3 godzin',
        isCorrect: true,
      },
      {
        option: '4-5 godzin',
        isCorrect: false,
      },
      {
        option: '10 godzin',
        isCorrect: false,
      },
    ],
  },
  {
    number: 69,
    question: 'Okład chłodzący jest stosowany na czas nie dłuższy niż: ',
    answers: [
      {
        option: '2-3 minuty',
        isCorrect: false,
      },
      {
        option: '15-20 minut',
        isCorrect: true,
      },
      {
        option: '2 godziny',
        isCorrect: false,
      },
    ],
  },
  {
    number: 70,
    question: 'Podczas stosowania okładu chłodzącego tkaniny należy wymieniać co:',
    answers: [
      {
        option: '2-3 minuty',
        isCorrect: true,
      },
      {
        option: '15-20 minut',
        isCorrect: false,
      },
      {
        option: 'godzine',
        isCorrect: false,
      },
    ],
  },
  {
    number: 71,
    question: 'Temperatura wody do stosowania okładu chłodzącego powinna wynosić:',
    answers: [
      {
        option: '0 °C',
        isCorrect: false,
      },
      {
        option: '5 °C',
        isCorrect: false,
      },
      {
        option: '21-27 °C',
        isCorrect: true,
      },
    ],
  },
  {
    number: 72,
    question:
      'Pomiar glikemii u pacjenta z cukrzycą, leczonego metodą wielokrotnych wstrzyknięć insuliny, czyli przynajmniej 3 razy dziennie, powinien być wykonywany przynajmniej: ',
    answers: [
      {
        option: '2 razy dziennie',
        isCorrect: false,
      },
      {
        option: '3 razy dziennie',
        isCorrect: false,
      },
      {
        option: '4 razy dziennie',
        isCorrect: true,
      },
    ],
  },
  {
    number: 73,
    question: 'Podczas wykonywania pomiaru cukru we krwi nie należy wyciskać kropli krwi, ponieważ: ',
    answers: [
      {
        option: 'dochodzi do rozcieńczenia jej płynem tkankowym',
        isCorrect: true,
      },
      {
        option: 'dochodzi do uszkodzenia nerwów obwodowych',
        isCorrect: false,
      },
      {
        option: 'spowoduje to uformowanie zbyt dużej ilości kropli krwi',
        isCorrect: false,
      },
    ],
  },
  {
    number: 74,
    question: 'Do pomiaru glikemii powinno wykorzystywać się: ',
    answers: [
      {
        option: 'pierwszą kroplę krwi',
        isCorrect: true,
      },
      {
        option: 'drugą kroplę krwi',
        isCorrect: false,
      },
      {
        option: 'trzecią kroplę krwi',
        isCorrect: false,
      },
    ],
  },
  {
    number: 75,
    question: 'Który z wymienionych czynników może utrudniać pomiar glikemii? ',
    answers: [
      {
        option: 'umycie rąk wodą z mydłem',
        isCorrect: false,
      },
      {
        option: 'masaż dłoni od nasady w kierunku nakłuwanego palca',
        isCorrect: false,
      },
      {
        option: 'zimne dłonie',
        isCorrect: true,
      },
    ],
  },
  {
    number: 76,
    question: 'Hipoglikemia to stężenie cukru we krwi: ',
    answers: [
      {
        option: 'poniżej 70 mg/dl',
        isCorrect: true,
      },
      {
        option: 'powyżej 70 mg/dl',
        isCorrect: false,
      },
      {
        option: 'powyżej 100 mg/dl',
        isCorrect: false,
      },
    ],
  },
  {
    number: 77,
    question: 'Dokumentowanie wartości pomiarów glikemii: ',
    answers: [
      {
        option: 'jest czynnością nieobowiązkową ',
        isCorrect: false,
      },
      {
        option: 'jest obowiązkowe, bo ułatwia zaplanowanie odpowiedniego leczenia ',
        isCorrect: true,
      },
      {
        option: 'jest obowiązkowe tylko w podmiotach leczniczych ',
        isCorrect: false,
      },
    ],
  },
  {
    number: 78,
    question: 'W podmiocie leczniczym kontrola glukometru powinna być przeprowadzona przynajmniej: ',
    answers: [
      {
        option: '4 razy w roku',
        isCorrect: false,
      },
      {
        option: '3 razy w roku ',
        isCorrect: false,
      },
      {
        option: 'raz w roku',
        isCorrect: true,
      },
    ],
  },
  {
    number: 79,
    question: 'Stężenie cukru zmierzone glukometrem podaje się albo w mg/dl (miligram na decylitr) albo w: ',
    answers: [
      {
        option: 'mmol/l',
        isCorrect: true,
      },
      {
        option: '%',
        isCorrect: false,
      },
      {
        option: 'mmHg',
        isCorrect: false,
      },
    ],
  },
  {
    number: 80,
    question:
      'W pojemniku z paskami testowymi znajduje się substancja osuszająca chroniąca testy przed wilgocią, znajduje się ona: ',
    answers: [
      {
        option: 'na dnie pojemnika',
        isCorrect: false,
      },
      {
        option: 'w pokrywce pojemnika',
        isCorrect: true,
      },
      {
        option: 'na ściankach pojemnika',
        isCorrect: false,
      },
    ],
  },
  {
    number: 81,
    question:
      'Nadrukowana data ważności na opakowaniu testów paskowych (np. 12.2023) oznacza, że produkt ważny jest do: ',
    answers: [
      {
        option: 'ostatniego dnia miesiąca',
        isCorrect: true,
      },
      {
        option: 'pierwszego dnia miesiąca',
        isCorrect: false,
      },
      {
        option: '15 dnia miesiąca',
        isCorrect: false,
      },
    ],
  },
  {
    number: 82,
    question: 'W leczeniu choroby Parkinsona złotym standardem jest/są: ',
    answers: [
      {
        option: 'Lewodopa',
        isCorrect: true,
      },
      {
        option: 'Leki antycholinergiczne',
        isCorrect: false,
      },
      {
        option: 'Inhibitory MAO',
        isCorrect: false,
      },
    ],
  },
  {
    number: 83,
    question: 'Choroby neurodegeneracyjne to choroby uszkadzające: ',
    answers: [
      {
        option: 'komórki układu nerwowego',
        isCorrect: true,
      },
      {
        option: 'komórki układu krwiotwórczego',
        isCorrect: false,
      },
      {
        option: 'korki wątrobowe',
        isCorrect: false,
      },
    ],
  },
  {
    number: 84,
    question: 'Istotą choroby Parkinsona jest zanik:',
    answers: [
      {
        option: 'komórek dopaminergicznych',
        isCorrect: true,
      },
      {
        option: 'komórek cholinergicznych',
        isCorrect: false,
      },
      {
        option: 'komórek noradrenergicznych',
        isCorrect: false,
      },
    ],
  },
  {
    number: 85,
    question:
      'Drżenie spoczynkowe, sztywność mięśniowa i bradykinezja stanowią tzw. triadę objawów choroby Parkinsona. Spowolnienie i zubożenie ruchów, szczególnie trudności z wykonywaniem ruchów precyzyjnych, chód szurający, drobnymi kroczkami, brak fizjologicznych współruchów to: ',
    answers: [
      {
        option: 'drżenie spoczynkowe',
        isCorrect: false,
      },
      {
        option: 'sztywność mięśniowa',
        isCorrect: false,
      },
      {
        option: 'bradykinezja',
        isCorrect: true,
      },
    ],
  },
  {
    number: 86,
    question: 'Bardzo drobne pismo to: ',
    answers: [
      {
        option: 'mikrografizm ',
        isCorrect: true,
      },
      {
        option: 'makrografizm',
        isCorrect: false,
      },
      {
        option: 'miligrafizm',
        isCorrect: false,
      },
    ],
  },
  {
    number: 87,
    question: 'Zanik mięśni krótkich, np. zanik mięśni języka lub mięśni kłębu kciuka jest charakterystyczny dla: ',
    answers: [
      {
        option: 'choroby Huntingtona',
        isCorrect: false,
      },
      {
        option: 'rdzeniowego zaniku mięśni',
        isCorrect: false,
      },
      {
        option: 'stwardnienia zanikowego bocznego',
        isCorrect: true,
      },
    ],
  },
  {
    number: 88,
    question:
      'Diagnozy tej choroby dokonuje się na podstawie objawów klinicznych. W badaniach obrazowych (TK i MRI) stwierdza się poszerzenie układu komorowego mózgowia z charakterystycznym obrazem komór bocznych mających kształt „skrzydeł motyla”. Mowa o: ',
    answers: [
      {
        option: 'chorobie Huntingtona',
        isCorrect: true,
      },
      {
        option: 'rdzeniowym zaniku mięśni',
        isCorrect: false,
      },
      {
        option: 'stwardnieniu zanikowym bocznym',
        isCorrect: false,
      },
    ],
  },
  {
    number: 89,
    question:
      "W Stanach Zjednoczonych choroba ta jest powszechnie znana pod nazwą „choroba Lou Gehriga” od nazwiska słynnego amerykańskiego bejsbolisty, Henry'ego Louisa Gehriga, który zmarł na nią w 1941 roku. Mowa o: ",
    answers: [
      {
        option: 'chorobie Huntingtona',
        isCorrect: false,
      },
      {
        option: 'stwardnieniu zanikowym bocznym',
        isCorrect: true,
      },
      {
        option: 'rdzeniowym zaniku mięśni',
        isCorrect: false,
      },
    ],
  },
  {
    number: 90,
    question:
      'Objawy tej choroby mogą wystąpić w każdym wieku — od okresu płodowego po wiek dorosły. U większości pacjentów (ok. 90%) ujawniają się jednak do końca 2 roku życia. Wczesne wystąpienie objawów wiąże się z cięższym przebiegiem i poważniejszym rokowaniem. Mowa o:',
    answers: [
      {
        option: 'chorobie Huntingtona',
        isCorrect: false,
      },
      {
        option: 'rdzeniowym zaniku mięśni',
        isCorrect: false,
      },
      {
        option: 'stwardnieniu zanikowym bocznym',
        isCorrect: true,
      },
    ],
  },
  {
    number: 91,
    question:
      'Ze stwardnieniem zanikowym bocznym zmagał się słynny astrofizyk Stephen Hawking. Jest to dowód na to, że stwardnienie zanikowe boczne nie dotyka sfery:',
    answers: [
      {
        option: 'intelektualnej',
        isCorrect: true,
      },
      {
        option: 'fizycznej',
        isCorrect: false,
      },
      {
        option: 'intymnej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 92,
    question:
      'Jest to jedna z nielicznych rzadkich chorób, w której możliwe jest leczenie celowane, czyli przyczynowe. Warunkiem jest jednak jej wczesne rozpoznanie. Najlepiej zanim jeszcze wystąpią objawy choroby. Dlatego też w Polsce od 2021 prowadzi się badania przesiewowe wśród noworodków w kierunku: ',
    answers: [
      {
        option: 'stwardnienia zanikowego bocznego',
        isCorrect: false,
      },
      {
        option: 'choroby Huntingtona',
        isCorrect: false,
      },
      {
        option: 'rdzeniowego zaniku mięśni',
        isCorrect: true,
      },
    ],
  },
  {
    number: 93,
    question:
      'Objawy rdzeniowego zaniku mięśni mogą wystąpić w każdym wieku — od okresu płodowego po wiek dorosły. U większości pacjentów (ok. 90%) ujawniają się jednak do:',
    answers: [
      {
        option: '2 roku życia',
        isCorrect: true,
      },
      {
        option: '20 roku życia',
        isCorrect: false,
      },
      {
        option: '30 roku życia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 94,
    question:
      'Wyobraź sobie, że pacjent Jan Kowalski w rozmowie z Tobą zaczął krzyczeć i używać obraźliwych słów. Co powiesz w takiej sytuacji? ',
    answers: [
      {
        option: 'Proszę nie krzyczeć',
        isCorrect: false,
      },
      {
        option: 'Proszę mówić ciszej',
        isCorrect: true,
      },
      {
        option: 'Ta rozmowa nie ma sensu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 95,
    question: 'Najczęstszym rodzajem agresji jest:',
    answers: [
      {
        option: 'agresja słowna',
        isCorrect: true,
      },
      {
        option: 'agresja fizyczna',
        isCorrect: false,
      },
      {
        option: 'agresja niema',
        isCorrect: false,
      },
    ],
  },
  {
    number: 96,
    question:
      'Wszelkie zachowanie podstępne, działania ukierunkowane są na wyrządzenie krzywdy, lecz agresor maskuje swoje zamiary poprzez np. uśmiech to: ',
    answers: [
      {
        option: 'Agresja fizyczna',
        isCorrect: false,
      },
      {
        option: 'Agresja bezpośrednia',
        isCorrect: false,
      },
      {
        option: 'Agresja pośrednia',
        isCorrect: true,
      },
    ],
  },
  {
    number: 97,
    question:
      'Przyczyny agresji dzielą się na somatyczne, środowiskowe i związane z ochroną zdrowia. Dysfunkcyjna rodzina należy do przyczyn: ',
    answers: [
      {
        option: 'Somatycznych',
        isCorrect: false,
      },
      {
        option: 'Środowiskowych',
        isCorrect: true,
      },
      {
        option: 'Związanych z ochroną zdrowia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 98,
    question:
      'Przymus bezpośredni w postaci unieruchomienia lub izolacji w domu pomocy społecznej może być zastosowany na czas nie dłuższy niż: ',
    answers: [
      {
        option: '8 godzin',
        isCorrect: true,
      },
      {
        option: '24 godzin',
        isCorrect: false,
      },
      {
        option: '36 godzin',
        isCorrect: false,
      },
    ],
  },
  {
    number: 99,
    question:
      'Otępienie może mieć różne przyczyny. Najczęstszą przyczyną otępienia, odpowiedzialną za 50% wszystkich przypadków, jest: ',
    answers: [
      {
        option: "otępienie z ciałami Lewy'ego",
        isCorrect: false,
      },
      {
        option: 'choroba Alzheimera',
        isCorrect: true,
      },
      {
        option: 'udar mózgu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 100,
    question:
      'Do przesiewowych testów neuropsychologicznych umożliwiających wstępną diagnostykę otępienia, podczas którego chory musi narysować godzinę trzecią, należy: ',
    answers: [
      {
        option: 'Krótka Skala Oceny Stanu Psychicznego',
        isCorrect: false,
      },
      {
        option: 'Skala Norton',
        isCorrect: false,
      },
      {
        option: 'Test zegara',
        isCorrect: true,
      },
    ],
  },
  {
    number: 101,
    question: 'Leczenie otępienia ma na celu: ',
    answers: [
      {
        option:
          'spowolnienie postępu choroby i utrzymanie chorego jak najdłużej na jak najlepszym poziomie funkcjonowania',
        isCorrect: true,
      },
      {
        option: 'zatrzymanie procesu chorobowego',
        isCorrect: false,
      },
      {
        option: 'wyleczenie chorego',
        isCorrect: false,
      },
    ],
  },
  {
    number: 102,
    question: 'Arteterapia to forma terapii, w której narzędziem do wyrażania uczuć jest: ',
    answers: [
      {
        option: 'muzyka',
        isCorrect: false,
      },
      {
        option: 'sztuka',
        isCorrect: true,
      },
      {
        option: 'gry planszowe',
        isCorrect: false,
      },
    ],
  },
  {
    number: 103,
    question: 'Fototerapia to: ',
    answers: [
      {
        option: 'leczenie naparami z roślin',
        isCorrect: false,
      },
      {
        option: 'leczenie poprzez fotografowanie',
        isCorrect: false,
      },
      {
        option: 'leczenie światłem',
        isCorrect: true,
      },
    ],
  },
  {
    number: 104,
    question: 'Po ilu dniach od założenia PEG-a można zacząć jego obracanie o 180 stopni ?',
    answers: [
      {
        option: 'po 3 dniach',
        isCorrect: true,
      },
      {
        option: 'po 14 dniach',
        isCorrect: false,
      },
      {
        option: 'po miesiącu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 105,
    question: 'Najważniejszym elementem opieki nad pacjentem z PEG-iem jest: ',
    answers: [
      {
        option: 'przemywanie zgłębnika gazikiem',
        isCorrect: false,
      },
      {
        option: 'smarowanie okolicy gastrostomii wazelina',
        isCorrect: false,
      },
      {
        option: 'przepłukiwanie zgłębnika wodą',
        isCorrect: true,
      },
    ],
  },
  {
    number: 106,
    question:
      'Kolostomie mogą być definitywne albo czasowe. Definitywne stomie są wytwarzane są na stałe, a czasowe wykonywane są dla odbarczenia chorej części jelita. Usunięcie odbytnicy wraz ze zwieraczami odbytu powoduje, że stomia ma charakter: ',
    answers: [
      {
        option: 'definitywny',
        isCorrect: true,
      },
      {
        option: 'tymczasowy',
        isCorrect: false,
      },
      {
        option: 'zależy od rodzaju zabiegu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 107,
    question:
      'Colon to z języka łacińskiego okrężnica, czyli część jelita grubego. Zatem kolostomia to stomia wykonana na:',
    answers: [
      {
        option: 'żołądku',
        isCorrect: false,
      },
      {
        option: 'jelicie cienkim',
        isCorrect: false,
      },
      {
        option: 'jelicie grubym',
        isCorrect: true,
      },
    ],
  },
  {
    number: 108,
    question:
      'Treść jelitowa z ileostomii jest płynna i zawiera drażniące enzymy trzustkowe. Treść z ileosotmii wypływa w sposób ciągły co utrudnia „wietrzenie” skóry wokół stomii. W porównaniu do kolostomii ileostomia jest:',
    answers: [
      {
        option: 'łatwiejsza w pielęgnacji',
        isCorrect: false,
      },
      {
        option: 'trudniejsza w pielęgnacji',
        isCorrect: true,
      },
      {
        option: 'stopień trudności pielęgnacji jest porównywalny ',
        isCorrect: false,
      },
    ],
  },
  {
    number: 109,
    question: 'Stomie dzielą się ze względu na funkcje na wydalnicze i odżywcze. Funkcją stomii odżywczych jest: ',
    answers: [
      {
        option: 'usuniecie z organizmu szkodliwych i zbędnych substancji',
        isCorrect: false,
      },
      {
        option: 'wprowadzanie do organizmu leków',
        isCorrect: false,
      },
      {
        option: 'dostarczenie składników pokarmowych do organizmu',
        isCorrect: true,
      },
    ],
  },
  {
    number: 110,
    question: 'Ze względu na anatomię stomie dzielą się końcowe i pętlowe. Inna nazwa stomii pętlowej to stomia:',
    answers: [
      {
        option: 'jednolufowa',
        isCorrect: false,
      },
      {
        option: 'dwulufowa',
        isCorrect: true,
      },
      {
        option: 'trzylufowa',
        isCorrect: false,
      },
    ],
  },
  {
    number: 111,
    question: 'Kolostomia jest zwykle wytwarzana po: ',
    answers: [
      {
        option: 'prawej stronie brzucha',
        isCorrect: false,
      },
      {
        option: 'lewej stronie brzucha',
        isCorrect: true,
      },
      {
        option: 'na żołądku',
        isCorrect: false,
      },
    ],
  },
  {
    number: 112,
    question: 'Ileostomia jest wykonana na: ',
    answers: [
      {
        option: 'jelicie grubym',
        isCorrect: false,
      },
      {
        option: 'jelicie krętym',
        isCorrect: true,
      },
      {
        option: 'jelicie czczym',
        isCorrect: false,
      },
    ],
  },
  {
    number: 113,
    question: 'Ileostomia występuje zwykle po: ',
    answers: [
      {
        option: 'lewej stronie brzucha',
        isCorrect: false,
      },
      {
        option: 'prawej stronie brzucha',
        isCorrect: true,
      },
      {
        option: 'na żołądku',
        isCorrect: false,
      },
    ],
  },
  {
    number: 114,
    question:
      'Stomie ze względu na funkcje jakie pełnią dzielą się na wydalnicze i odżywcze. Gastrostomia należy do stomii:',
    answers: [
      {
        option: 'wydalniczej',
        isCorrect: false,
      },
      {
        option: 'odżywczej',
        isCorrect: true,
      },
      {
        option: 'odbarczającej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 115,
    question:
      'Główny podział stomii dotyczy ich funkcji i dzieli je na karmiące, zwane inaczej odżywczymi, oraz odbarczające, zwane inaczej wydalniczymi. Stomie wydalnicze tworzy się w celu wydalenia z organizmu szkodliwych bądź zbędnych substancji. Z kolei stomie odżywcze tworzy się w celu wprowadzenia substancji odżywczych do światła przewodu pokarmowego. Do stomii wydalniczych należą: ',
    answers: [
      {
        option: 'kolostomia i gastrostomia',
        isCorrect: false,
      },
      {
        option: 'kolostomia i ileostomia',
        isCorrect: true,
      },
      {
        option: 'kolostomia i PEG',
        isCorrect: false,
      },
    ],
  },
  {
    number: 116,
    question:
      'Ileostomia to stomia wykonana na jelicie cienkim. Dokładnie na odcinku jelita cienkiego zwanym jelitem krętym. Kolostomia to stomia wykonana na: ',
    answers: [
      {
        option: 'jelicie grubym',
        isCorrect: true,
      },
      {
        option: 'żołądku',
        isCorrect: false,
      },
      {
        option: 'dwunastnicy',
        isCorrect: false,
      },
    ],
  },
  {
    number: 117,
    question:
      'Treść jelitowa wydobywająca się z ileostomii jest półpłynna i zawiera soki trzustkowe, które działają drażniąco na skórę. Aby ograniczyć kontakt skóry z treścią jelitową z ileostomii:',
    answers: [
      {
        option: 'kikut stomii wyprowadza się wyżej ponad poziom skóry, niż ma to miejsce w kolostomii',
        isCorrect: true,
      },
      {
        option: 'kikut stomii pozostawia się poniżej poziomu skóry, tak aby nie wystawał poza nią',
        isCorrect: false,
      },
      {
        option: 'na jakiś czas zakleja się plastrem kikut stomii, aby zatrzymać wydobywająca się z niej treść',
        isCorrect: false,
      },
    ],
  },
  {
    number: 118,
    question:
      'Powikłania po wyłonieniu stomii dzielą się na wczesne i późne. Powikłania wczesne to powikłania występujące:',
    answers: [
      {
        option: 'w pierwszej dobie po zabiegu',
        isCorrect: false,
      },
      {
        option: 'do 30 dni po zabiegu',
        isCorrect: true,
      },
      {
        option: 'po 30 dnniach od zabiegu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 119,
    question: 'Martwica stomii jest spowodowana niedokrwieniem stomii. W martwicy śluzówka stomii ma kolor: ',
    answers: [
      {
        option: 'różowo-czerwony',
        isCorrect: false,
      },
      {
        option: 'ciemnoczerwony, brązowy lub czarny',
        isCorrect: true,
      },
      {
        option: 'niebieski',
        isCorrect: false,
      },
    ],
  },
  {
    number: 120,
    question:
      'Przyczyn występowania powikłań stomii jest wiele. Może to być np. niedoskonała technika operacyjna, brak odpowiedniego przygotowania pacjenta do zabiegu lub brak wiedzy i umiejętności pacjenta w zakresie prawidłowej pielęgnacji i zaopatrzenia stomii. Wzrost masy ciała pacjenta może być przyczyną: ',
    answers: [
      {
        option: 'krwawienie stomii',
        isCorrect: false,
      },
      {
        option: 'zakażenia rany stomijnej',
        isCorrect: false,
      },
      {
        option: 'wciągnięcia stomii',
        isCorrect: true,
      },
    ],
  },
  {
    number: 121,
    question:
      'We wczesnym okresie pooperacyjnym do krwawienia ze stomii może dochodzić dość często. Zwykle spowodowane jest ono urazem śluzówki stomii, np. na skutek zabiegów higienicznych takich jak oczyszczanie stomii gazikiem, jak również w przypadku wysychania śluzówki stomii. Aby zapobiec wysychaniu śluzówki stomii zaleca się:',
    answers: [
      {
        option: 'moczenie jej w wodzie',
        isCorrect: false,
      },
      {
        option: 'natłuszczanie jej parafiną albo wazeliną',
        isCorrect: true,
      },
      {
        option: 'okładanie mokrym gazikiem',
        isCorrect: false,
      },
    ],
  },
  {
    number: 122,
    question: 'Niewielki obrzęk stomii na wczesnym etapie pooperacyjnym jest: ',
    answers: [
      {
        option: 'zawsze powodem do niepokoju',
        isCorrect: false,
      },
      {
        option: 'normą',
        isCorrect: true,
      },
      {
        option: 'wynikiem stresu pooperacyjnego',
        isCorrect: false,
      },
    ],
  },
  {
    number: 123,
    question: 'Powikłania metaboliczne w postaci nadmiernej utraty wody i elektrolitów najczęściej występują przy: ',
    answers: [
      {
        option: 'kolostomii',
        isCorrect: false,
      },
      {
        option: 'ileostomii',
        isCorrect: true,
      },
      {
        option: 'gastrostomii',
        isCorrect: false,
      },
    ],
  },
  {
    number: 124,
    question:
      'Patologiczne uwypuklanie się zawartości jamy brzusznej, a dokładnie głównie jelita cienkiego, rzadziej innych narządów, do otworu w ścianie brzucha, w którym wyłoniona została stomia to:',
    answers: [
      {
        option: 'wypadanie stomii',
        isCorrect: false,
      },
      {
        option: 'zwężenie stomii',
        isCorrect: false,
      },
      {
        option: 'przepuklina okołostomijna',
        isCorrect: true,
      },
    ],
  },
  {
    number: 125,
    question: 'Kontaktowe zapalenie skóry częściej dotyczy pacjentów z:',
    answers: [
      {
        option: 'kolostomią',
        isCorrect: false,
      },
      {
        option: 'ileostomią',
        isCorrect: true,
      },
      {
        option: 'gastrostomią',
        isCorrect: false,
      },
    ],
  },
  {
    number: 126,
    question:
      'Powikłania po wyłonieniu stomii dzielą się na wczesne i późne. Powikłania późne po wyłonieniu stomii powstają: ',
    answers: [
      {
        option: 'do 30 dniach od operacji wyłonienia stomii',
        isCorrect: false,
      },
      {
        option: 'po 30 dniach po operacji wyłonienia stomii',
        isCorrect: true,
      },
      {
        option: 'po 120 dniach po operacji wyłonienia stomii',
        isCorrect: false,
      },
    ],
  },
  {
    number: 127,
    question: 'Pasta stomijna:',
    answers: [
      {
        option: 'zapobiega przykremu zapachowi',
        isCorrect: false,
      },
      {
        option: 'ułatwia późniejsze odklejanie worka stomijnego',
        isCorrect: false,
      },
      {
        option:
          'wygładza nierówności na skórze wokół stomii przez co wydłuża czas noszenia worka i zapobiega przedostawaniu się treści jelitowej pod płytkę stomijną',
        isCorrect: true,
      },
    ],
  },
  {
    number: 128,
    question: 'Podczas zmiany worka na kolostomii zaleca się tzw. wietrzenie skóry, które polega na: ',
    answers: [
      {
        option: 'wachlowaniu stomii kartką papieru',
        isCorrect: false,
      },
      {
        option: 'pozostawieniu stomii na jakiś czas bez worka stomijnego',
        isCorrect: true,
      },
      {
        option: 'wyjściu na spacer w chłodny dzień ze stomia niezabezpieczona workiem stomijnym',
        isCorrect: false,
      },
    ],
  },
  {
    number: 129,
    question: 'Worki stomijne zamknięte stosuje się głównie do:',
    answers: [
      {
        option: 'ileostomii',
        isCorrect: false,
      },
      {
        option: 'kolostomii',
        isCorrect: true,
      },
      {
        option: 'tracheostomii',
        isCorrect: false,
      },
    ],
  },
  {
    number: 130,
    question: capitalizeSentences('WORKI STOMIJNE STOSUJE SIĘ GŁÓWNIE DO:'),
    answers: [
      {
        option: 'ILEOSTOMII'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'KOLOSTOMII'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'TRACHEOSTOMII'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 131,
    question: 'Ileostomia to stomia wytworzona na: ',
    answers: [
      {
        option: 'tchawicy',
        isCorrect: false,
      },
      {
        option: 'jelicie grubym',
        isCorrect: false,
      },
      {
        option: 'jelicie cienkim',
        isCorrect: true,
      },
    ],
  },
  {
    number: 132,
    question: 'Przed przyklejeniem worka stomijnego do skóry należy: ',
    answers: [
      {
        option: 'natłuścić skórę maścią',
        isCorrect: false,
      },
      {
        option: 'natrzeć skórę oliwka',
        isCorrect: false,
      },
      {
        option: 'osuszyć dokładnie skórę i nie nakładać żadnych maści',
        isCorrect: true,
      },
    ],
  },
  {
    number: 133,
    question: 'Irygacji nie wykonuje się u pacjentów z: ',
    answers: [
      {
        option: 'kolostomią',
        isCorrect: false,
      },
      {
        option: 'ileostomią',
        isCorrect: true,
      },
      {
        option: 'gastrostomią',
        isCorrect: false,
      },
    ],
  },
  {
    number: 134,
    question: 'Ze względu na konsystencję stolca oraz zwartość enzymów trawiennych trudniejsza w pielęgnacji jest:',
    answers: [
      {
        option: 'kolostomia',
        isCorrect: false,
      },
      {
        option: 'ileostomia',
        isCorrect: true,
      },
      {
        option: 'oba rodzaje stomii stwarzają jednakowe trudności w pielęgnacji',
        isCorrect: false,
      },
    ],
  },
  {
    number: 135,
    question: 'Uczucie suchości w jamie ustnej to:',
    answers: [
      {
        option: 'kserostomia',
        isCorrect: true,
      },
      {
        option: 'odynofagia',
        isCorrect: false,
      },
      {
        option: 'dysfagia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 136,
    question: 'Zaburzenia połykania to inaczej:',
    answers: [
      {
        option: 'edynofagia',
        isCorrect: false,
      },
      {
        option: 'dysfagia',
        isCorrect: true,
      },
      {
        option: 'kserostomia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 137,
    question:
      'Leczenie żywieniowe krótkoterminowe, np. za pomocą zgłębnika nosowo-żołądkowego może być prowadzone do: ',
    answers: [
      {
        option: '1 tygodnia',
        isCorrect: false,
      },
      {
        option: '2 tygodni',
        isCorrect: false,
      },
      {
        option: '4 tygodni',
        isCorrect: true,
      },
    ],
  },
  {
    number: 138,
    question: 'Diety przemysłowe po otwarciu są ważne przez: ',
    answers: [
      {
        option: '4 godziny',
        isCorrect: false,
      },
      {
        option: '24 godziny',
        isCorrect: true,
      },
      {
        option: '1 miesiąc',
        isCorrect: false,
      },
    ],
  },
  {
    number: 139,
    question: 'Przez zgłębnik nosowo-żołądkowy można jednorazowo podać maksymalnie:',
    answers: [
      {
        option: '50 ml pokarmu',
        isCorrect: false,
      },
      {
        option: '50-100 ml pokarmu',
        isCorrect: false,
      },
      {
        option: '200-300 ml pokarmu',
        isCorrect: true,
      },
    ],
  },
  {
    number: 140,
    question:
      'Najistotniejszym czynnikiem rozwoju raka płaskonabłonkowego jest oprócz picia wysokoprocentowego alkoholu: ',
    answers: [
      {
        option: 'palenie tytoniu',
        isCorrect: true,
      },
      {
        option: 'spożywanie dużych ilości soli',
        isCorrect: false,
      },
      {
        option: 'brak aktywności fizycznej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 141,
    question:
      'Stan, w którym na skutek zarzucania treści pokarmowej do przełyku dochodzi do zastąpienia prawidłowego nabłonka płaskiego dolnej części przełyku przez niewystępujący w tym miejscu w warunkach fizjologicznych nabłonek jelitowy lub żołądkowy to: ',
    answers: [
      {
        option: 'Przełyk Baretta',
        isCorrect: true,
      },
      {
        option: "Przełyk Ayliffe'a",
        isCorrect: false,
      },
      {
        option: 'Przełyk żołądkowy',
        isCorrect: false,
      },
    ],
  },
  {
    number: 142,
    question:
      'Każdy pacjent zgłaszający objawy sugerujące możliwość występowania nowotworu przełyku powinien, oprócz standardowego badania lekarskiego poddać się przede wszystkim gastroskopii lub badaniu radiologicznemu górnego odcinka przewodu pokarmowego z zastosowaniem kontrastu. Które z wymienionych badań umożliwia pobranie wycinków do badania histopatologicznego?',
    answers: [
      {
        option: 'Gastroskopia',
        isCorrect: true,
      },
      {
        option: 'Badanie radiologiczne',
        isCorrect: false,
      },
      {
        option: 'Żadne z powyższych',
        isCorrect: false,
      },
    ],
  },
  {
    number: 143,
    question: 'Gastroskopia to badanie endoskopowe umożliwiające obejrzenie błony śluzowej przełyku, żołądka oraz:',
    answers: [
      {
        option: 'jelita grubego',
        isCorrect: false,
      },
      {
        option: 'jelita krętego',
        isCorrect: false,
      },
      {
        option: 'dwunastnicy',
        isCorrect: true,
      },
    ],
  },
  {
    number: 144,
    question: 'Najczęściej występujący objaw raka przełyku, zgłaszany w ok. 75% przypadków to dysfagia, czyli: ',
    answers: [
      {
        option: 'Zaburzenia połykania',
        isCorrect: true,
      },
      {
        option: 'Zaburzenia mowy',
        isCorrect: false,
      },
      {
        option: 'Zaburzenia formowania kęsa pokarmowego',
        isCorrect: false,
      },
    ],
  },
  {
    number: 145,
    question: 'Odynofagia jeden z objawów raka przełyku. Odynofagia to: ',
    answers: [
      {
        option: 'Ból w klatce piersiowej',
        isCorrect: false,
      },
      {
        option: 'Ból przy połykaniu',
        isCorrect: true,
      },
      {
        option: 'Ból żołądka po zjedzeniu ciężkostrawnego posiłku',
        isCorrect: false,
      },
    ],
  },
  {
    number: 146,
    question: 'U pacjentów z przełykiem Baretta gastroskopię powinno się wykonywać: ',
    answers: [
      {
        option: 'Raz w roku',
        isCorrect: true,
      },
      {
        option: 'Raz na 3 lata',
        isCorrect: false,
      },
      {
        option: 'Raz na 5 lat',
        isCorrect: false,
      },
    ],
  },
  {
    number: 147,
    question: 'Wybierz zdanie prawdziwe: ',
    answers: [
      {
        option: 'Od placówek medycznych nie wymaga się rejestrowania zdarzeń niepożądanych',
        isCorrect: true,
      },
      {
        option: 'Od placówek medycznych wymaga się rejestrowania zdarzeń niepożądanych',
        isCorrect: false,
      },
      {
        option:
          'Jedynie placówki POZ (np. przychodnie specjalistyczne) mają obowiązek rejestrowania zdarzeń niepożądanych',
        isCorrect: false,
      },
    ],
  },
  {
    number: 148,
    question:
      'Jedyną sytuacją pozwalającą odejść od łóżka pacjenta podczas toalety ciała (pod warunkiem podniesienia barierek) jest:',
    answers: [
      {
        option: 'Konieczność odebrania telefonu',
        isCorrect: false,
      },
      {
        option: 'Przyniesienie grzebienia',
        isCorrect: false,
      },
      {
        option: 'Wymiana wody w misce na wodę',
        isCorrect: true,
      },
    ],
  },
  {
    number: 149,
    question:
      'Czynniki sprzyjające występowaniu zdarzeń niepożądanych obejmują: czynnik ludzki, czynniki z zakresu technologii i Środowiska pracy oraz czynniki systemowe. Do czynników z zakresu technologii i Środowiska pracy należą m. in.:',
    answers: [
      {
        option: 'Brak umiejętności i przemęczenie personelu',
        isCorrect: false,
      },
      {
        option: 'Oświetlenie i temperatura środowiska pracy',
        isCorrect: true,
      },
      {
        option: 'Nieprzestrzeganie norm zatrudnienia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 150,
    question:
      'Pomyłki, przeoczenia, pominięcia, nieprzestrzeganie zasad, reguł, procedur, niedostateczna wiedza, brak umiejętności, możliwości, przemęczenie, przepracowanie to czynniki sprzyjające występowaniu zdarzeń niepożądanych, które stanowią grupę: ',
    answers: [
      {
        option: 'Czynników systemowych',
        isCorrect: false,
      },
      {
        option: 'Czynników z zakresu technologii i środowiska pracy',
        isCorrect: false,
      },
      {
        option: 'Czynników ludzkich',
        isCorrect: true,
      },
    ],
  },
  {
    number: 151,
    question:
      'Jedną z wielu przyczyn występowania zdarzeń niepożądanych jest nieprawidłowa identyfikacja chorego. Chcąc sprawdzić tożsamość pacjenta zawsze należy pytać chorego: ',
    answers: [
      {
        option: '„Jak Pan/Pani się nazywa?”',
        isCorrect: true,
      },
      {
        option: '„Pan Jan Kowalski?”',
        isCorrect: false,
      },
      {
        option: '„Pan Kowalski?”',
        isCorrect: false,
      },
    ],
  },
  {
    number: 152,
    question: 'W Polsce nie ma obowiązku rejestrowania zdarzeń niepożądanych. Wyjątek stanowią: ',
    answers: [
      {
        option: 'Szpitale powiatowe',
        isCorrect: false,
      },
      {
        option: 'Niepubliczne placówki opieki zdrowotnej',
        isCorrect: false,
      },
      {
        option: 'Placówki posiadające certyfikat akredytacyjny Ministra Zdrowia',
        isCorrect: true,
      },
    ],
  },
  {
    number: 153,
    question: 'Podczas transportu pacjenta, który leży na leżance, chory powinien mieć ręce: ',
    answers: [
      {
        option: 'Ułożone na brzuchu',
        isCorrect: false,
      },
      {
        option: 'Założone pod głowę',
        isCorrect: false,
      },
      {
        option: 'Wzdłuż tułowia',
        isCorrect: true,
      },
    ],
  },
  {
    number: 154,
    question:
      'Gastrostomię wykonaną metodą klasyczną można odróżnić od gastrostomii wykonanej metodą przezskórną (PEG) stwierdzając występowanie na skórze pacjenta:',
    answers: [
      {
        option: 'Dodatkowego drenu wyprowadzonego z powłok brzucha',
        isCorrect: false,
      },
      {
        option: 'Dodatkowej linii cięcia',
        isCorrect: true,
      },
      {
        option:
          'Nie jest możliwie rozróżnienie gastrostomii wykonanej metoda klasyczna od gastrostomii wykonanej metoda przezskórną',
        isCorrect: false,
      },
    ],
  },
  {
    number: 155,
    question: 'Ileostomia to stomia wykonana na jelicie krętym. Jest to rodzaj stomii:',
    answers: [
      {
        option: 'odżywczej',
        isCorrect: false,
      },
      {
        option: 'wydalniczej',
        isCorrect: true,
      },
      {
        option: 'pokarmowej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 156,
    question:
      'Stomie odżywcze wykonuje się u pacjentów, u których planowany czas podawania diety przemysłowej drogą sztuczną, czyli np. przez zgłębnik nosowo-żołądkowy przekracza:',
    answers: [
      {
        option: '7 dni',
        isCorrect: false,
      },
      {
        option: '30 dni',
        isCorrect: true,
      },
      {
        option: '3 miesiące',
        isCorrect: false,
      },
    ],
  },
  {
    number: 157,
    question: 'Najczęstszą przyczyną wyłonienia stomii wydalniczych jest:',
    answers: [
      {
        option: 'Wrzodziejące zapalenie jelita grubego',
        isCorrect: false,
      },
      {
        option: 'Choroba Lesniowskiego-Crohna',
        isCorrect: false,
      },
      {
        option: 'Rak jelita grubego',
        isCorrect: true,
      },
    ],
  },
  {
    number: 158,
    question: 'Wykrywanie i usunięcie polipów jelita grubego umożliwia badanie endoskopowe zwane:',
    answers: [
      {
        option: 'Gastroskopią',
        isCorrect: false,
      },
      {
        option: 'Raktoskopią',
        isCorrect: false,
      },
      {
        option: 'Kolonoskopią',
        isCorrect: true,
      },
    ],
  },
  {
    number: 159,
    question:
      'Najsilniejszym czynnikiem ryzyka raka jelita grubego jest wiek. Szczyt zapadalności na to schorzenie przypada na:',
    answers: [
      {
        option: '3 dekadę życia',
        isCorrect: false,
      },
      {
        option: '5 dekadę życia',
        isCorrect: false,
      },
      {
        option: '7 i 8 dekadę życia',
        isCorrect: true,
      },
    ],
  },
  {
    number: 160,
    question:
      'Choroby układu krążenia (CHUK) stanowią najczęstszą przyczynę zgonów w Polsce i w Europie. Główną przyczyną chorób układu krążenia jest:',
    answers: [
      {
        option: 'Miażdżyca',
        isCorrect: true,
      },
      {
        option: 'Mutacja genetyczna',
        isCorrect: false,
      },
      {
        option: 'Przyczyna chorób układu krążenia nie została poznana',
        isCorrect: false,
      },
    ],
  },
  {
    number: 161,
    question: 'Dieta stosowana w leczeniu i zapobieganiu nadciśnieniu tętniczemu to:',
    answers: [
      {
        option: 'Dieta FOODMAP',
        isCorrect: false,
      },
      {
        option: 'Dieta Dunkana',
        isCorrect: false,
      },
      {
        option: 'Dieta DASH',
        isCorrect: true,
      },
    ],
  },
  {
    number: 162,
    question: 'Jedynym hormonem białkowym obniżającym stężenie glukozy we krwi jest:',
    answers: [
      {
        option: 'Glukogon',
        isCorrect: false,
      },
      {
        option: 'Insulina',
        isCorrect: true,
      },
      {
        option: 'Adrenalina',
        isCorrect: false,
      },
    ],
  },
  {
    number: 163,
    question: 'Zmniejszenie masy ciała o 10 kg spowoduje obniżenie skurczowego ciśnienia tętniczego o: ',
    answers: [
      {
        option: 'od 3 do 8 mmHg',
        isCorrect: false,
      },
      {
        option: 'od 5 do 20 mmHg',
        isCorrect: true,
      },
      {
        option: 'od 30 do 35 mmHg',
        isCorrect: false,
      },
    ],
  },
  {
    number: 164,
    question:
      'Stopa cukrzycowa należy do przewlekłych powikłań cukrzycy. Występuje zarówno u chorych na cukrzycę typu 1, jak i typu 2. Jest to owrzodzenie zlokalizowane zwykle na: ',
    answers: [
      {
        option: 'W okolicy kostki',
        isCorrect: false,
      },
      {
        option: 'podudziu',
        isCorrect: false,
      },
      {
        option: 'Części podeszwowej lub grzbietowej stopy',
        isCorrect: true,
      },
    ],
  },
  {
    number: 165,
    question: 'Zatorowość płucna jest spowodowana przemieszczeniem się do krążenia płucnego skrzeplin pochodzących z:',
    answers: [
      {
        option: 'Żył kończyn górnych',
        isCorrect: false,
      },
      {
        option: 'Żył kończyn dolnych',
        isCorrect: true,
      },
      {
        option: 'Tętnic kończyn górnych',
        isCorrect: false,
      },
    ],
  },
  {
    number: 166,
    question:
      'W zależności od przyczyn nadciśnienie tętnicze dzieli się na: pierwotne i wtórne. Nadciśnienie pierwotne to nadciśnienie o nieznanej przyczynie. Dotyczy ok. 90% przypadków. Nadciśnienie wtórne to nadciśnienie wynikające z:',
    answers: [
      {
        option: 'Chorób genetycznych',
        isCorrect: false,
      },
      {
        option: 'Chorób, które możemy leczyć przyczynowo',
        isCorrect: true,
      },
      {
        option: 'Chorób o podłożu autoimmunologicznym',
        isCorrect: false,
      },
    ],
  },
  {
    number: 167,
    question: 'Duszność pojawiająca się w pozycji leżącej, a ustępująca w pozycji siedzącej lub stojącej to duszność: ',
    answers: [
      {
        option: 'Wysiłkowa',
        isCorrect: false,
      },
      {
        option: 'Spoczynkowa',
        isCorrect: false,
      },
      {
        option: 'Ortopnoe',
        isCorrect: true,
      },
    ],
  },
  {
    number: 168,
    question:
      'Napadowa duszność nocna jest zaburzeniem objawiającym się napadami duszności, które występują głównie w pozycji leżącej,  np. w nocy, w czasie snu. Powoduje je: ',
    answers: [
      {
        option: 'Niewydolność lewej komory serca',
        isCorrect: true,
      },
      {
        option: 'Niewydolność prawej komory serca',
        isCorrect: false,
      },
      {
        option: 'Choroba płuc',
        isCorrect: false,
      },
    ],
  },
  {
    number: 169,
    question: 'Postać bardzo silnego bólu łydki i stopy, zmuszający do zatrzymania się, ustępujący po odpoczynku to:',
    answers: [
      {
        option: 'Maska brzuszna',
        isCorrect: false,
      },
      {
        option: 'Chromanie przestankowe',
        isCorrect: true,
      },
      {
        option: 'Zator kończyny dolnej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 170,
    question: 'Duszność wysiłkowa pojawia się:',
    answers: [
      {
        option: 'W czasie spoczynku',
        isCorrect: false,
      },
      {
        option: 'W czasie wysiłku',
        isCorrect: true,
      },
      {
        option: 'W czasie snu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 171,
    question:
      'Korzystając z metody 4-2-1 oraz informacji zawartych obok oblicz szacunkowe dobowe zapotrzebowanie na wodę dla osoby dorosłej ważącej 70 kg. Następnie wybierz prawidłową odpowiedź. ',
    answers: [
      {
        option: '2500 ml/dobę',
        isCorrect: true,
      },
      {
        option: '3000 ml/dobę',
        isCorrect: false,
      },
      {
        option: '4000 ml/dobę',
        isCorrect: false,
      },
    ],
  },
  {
    number: 172,
    question: 'Wydalanie na dobę mniej niż 100 ml moczu to: ',
    answers: [
      {
        option: 'anuria',
        isCorrect: true,
      },
      {
        option: 'poliuria',
        isCorrect: false,
      },
      {
        option: 'oliguria',
        isCorrect: false,
      },
    ],
  },
  {
    number: 173,
    question:
      'Różnicą pomiędzy wodą, którą wydalamy z organizmu, a wodą dostarczaną do organizmu wraz z napojami i produktami spożywczymi to:',
    answers: [
      {
        option: 'Bilans wodny',
        isCorrect: true,
      },
      {
        option: 'Odwodnienie',
        isCorrect: false,
      },
      {
        option: 'Przewodnienie',
        isCorrect: false,
      },
    ],
  },
  {
    number: 174,
    question: 'Dobowa utrata wody wraz z kałem wynosi:',
    answers: [
      {
        option: '30 ml',
        isCorrect: false,
      },
      {
        option: '150 ml',
        isCorrect: true,
      },
      {
        option: '500 ml',
        isCorrect: false,
      },
    ],
  },
  {
    number: 175,
    question: 'Przyjmowanie dużej ilości kofeiny: ',
    answers: [
      {
        option: 'Zmniejsza zapotrzebowanie na wodę',
        isCorrect: false,
      },
      {
        option: 'Zwiększa zapotrzebowanie na wodę',
        isCorrect: true,
      },
      {
        option: 'Zapotrzebowanie na wodę pozostaje bez zmian',
        isCorrect: false,
      },
    ],
  },
  {
    number: 176,
    question: 'Śmierć z odwodnienia następuje przy utracie wody:',
    answers: [
      {
        option: 'powyżej 4% masy ciała',
        isCorrect: false,
      },
      {
        option: 'powyżej 10% masy ciała',
        isCorrect: false,
      },
      {
        option: 'powyżej 20% masy ciała',
        isCorrect: true,
      },
    ],
  },
  {
    number: 177,
    question: 'Do czynników środowiskowych zwiększających zapotrzebowanie na wodę należy: ',
    answers: [
      {
        option: 'Gorączka',
        isCorrect: false,
      },
      {
        option: 'Wymioty',
        isCorrect: false,
      },
      {
        option: 'Wysoka temperatura powietrza',
        isCorrect: true,
      },
    ],
  },
  {
    number: 178,
    question:
      'Przyśpieszona akcja serca, utrata elastyczności skóry, zmniejszenie pocenia (sucha skóra w okolicach pachowych i pachwinowych), gorączka oraz zmniejszenie napięcia gałek ocznych to objawy: ',
    answers: [
      {
        option: 'lekkiego stopnia odwodnienia',
        isCorrect: false,
      },
      {
        option: 'umiarkowanego stopnia odwodnienia',
        isCorrect: true,
      },
      {
        option: 'ostrego stopnia odwodnienia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 179,
    question:
      'Dobowa zbiórka moczu (DZM) polega na zebraniu całej ilości oddanego w ciągu 24 godzin moczu, czyli np. zbiórka rozpoczęta w poniedziałek o godzinie 8:00 powinna zakończyć się we wtorek o godzinie:',
    answers: [
      {
        option: '7:00',
        isCorrect: false,
      },
      {
        option: '8:00',
        isCorrect: true,
      },
      {
        option: '9:00',
        isCorrect: false,
      },
    ],
  },
  {
    number: 180,
    question:
      'W dniu poprzedzającym dobową zbiórkę moczu oraz w trakcie prowadzenia zbiórki należy unikać dużego wysiłku fizycznego, spożywania znacznej ilości białka, spożywania alkoholu, gorących kąpieli oraz stresu, ponieważ mogą być one przyczyną: ',
    answers: [
      {
        option: 'białkomoczu i podwyższonego stężenia kwasu moczowego',
        isCorrect: true,
      },
      {
        option: 'wymiotów',
        isCorrect: false,
      },
      {
        option: 'zmniejszenia ilości oddawanego moczu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 181,
    question: 'Zgon może nastąpić, gdy ubytek wody w organizmie wyniesie powyżej: ',
    answers: [
      {
        option: '2% masy ciała',
        isCorrect: false,
      },
      {
        option: '15% masy ciała',
        isCorrect: true,
      },
      {
        option: '50% masy ciała',
        isCorrect: false,
      },
    ],
  },
  {
    number: 182,
    question: 'W czasie trwania dobowej zbiórki moczu pojemnik należy przechowywać w lodówce lub:',
    answers: [
      {
        option: 'w temperaturze pokojowej',
        isCorrect: false,
      },
      {
        option: 'w miejscu, gdzie temperatura wynosi ok. 4 °C',
        isCorrect: true,
      },
      {
        option: 'w zamrażarce',
        isCorrect: false,
      },
    ],
  },
  {
    number: 183,
    question: 'Wraz ze stolcem tracimy ok: ',
    answers: [
      {
        option: '50 ml wody',
        isCorrect: false,
      },
      {
        option: '150 ml wody',
        isCorrect: true,
      },
      {
        option: '500 ml wody',
        isCorrect: false,
      },
    ],
  },
  {
    number: 184,
    question: 'Do dobowej zbiórki moczu powinniśmy przygotować pojemnik o pojemności: ',
    answers: [
      {
        option: '1 litr',
        isCorrect: false,
      },
      {
        option: '2-3 litrów',
        isCorrect: true,
      },
      {
        option: '5 litrów',
        isCorrect: false,
      },
    ],
  },
  {
    number: 185,
    question: 'TIME to: ',
    answers: [
      {
        option: 'Koncepcja leczenia ran',
        isCorrect: true,
      },
      {
        option: 'Skala służąca do oceny ryzyka wystąpienia rany powikłanej',
        isCorrect: false,
      },
      {
        option: 'Skala służąca do oceny stopnia odżywienia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 186,
    question: 'Do oceny stopnia zagrożenia rany infekcją stosuje się skale: ',
    answers: [
      {
        option: 'Norton',
        isCorrect: false,
      },
      {
        option: 'W.A.R.',
        isCorrect: true,
      },
      {
        option: 'Tinetti',
        isCorrect: false,
      },
    ],
  },
  {
    number: 187,
    question:
      'Zastanów się, którą odpowiedź byś wybrał. Najczęstszym nośnikiem przenoszenia drobnoustrojów między pacjentami są/jest: ',
    answers: [
      {
        option: 'sprzęt stosowany do procedur',
        isCorrect: false,
      },
      {
        option: 'wózek pielęgnacyjny',
        isCorrect: false,
      },
      {
        option: 'ręce personelu',
        isCorrect: true,
      },
    ],
  },
  {
    number: 188,
    question:
      'Zastanów się, którą odpowiedź byś wybrał. Prawidłowo przeprowadzona higieniczna dezynfekcja rąk powinna być wykonana techniką:',
    answers: [
      {
        option: 'dowolną',
        isCorrect: false,
      },
      {
        option: "Ayliffe'a",
        isCorrect: true,
      },
      {
        option: 'Kowalskiego',
        isCorrect: false,
      },
    ],
  },
  {
    number: 189,
    question: 'Zastanów się, którą odpowiedź byś wybrał: Kran po umyciu rąk należy zakręcić/zamknąć: ',
    answers: [
      {
        option: 'bezpośrednio ręką',
        isCorrect: false,
      },
      {
        option: 'za pomocą ręcznika jednorazowego',
        isCorrect: true,
      },
      {
        option: 'nie ma znaczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 190,
    question: "Zastanów się, którą odpowiedź byś wybrał. Technika Ayliffe'a zwana jest inaczej techniką: ",
    answers: [
      {
        option: '6 kroków',
        isCorrect: true,
      },
      {
        option: '12 kroków',
        isCorrect: false,
      },
      {
        option: '20 kroków',
        isCorrect: false,
      },
    ],
  },
  {
    number: 191,
    question:
      'Zastanów się, którą odpowiedź byś wybrał. Po kontakcie z pacjentem z biegunką spowodowaną Clostridium difficile należy:  ',
    answers: [
      {
        option: 'umyć ręce',
        isCorrect: true,
      },
      {
        option: 'zdezynfekować ręce',
        isCorrect: false,
      },
      {
        option: 'nie ma znaczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 192,
    question:
      'Opatrunki przeznaczone do ciężko gojących się ran — owrzodzeń, oparzeń, ran zespołu stopy cukrzycowej czy odleżyn to: ',
    answers: [
      {
        option: 'Opatrunki medyczne',
        isCorrect: false,
      },
      {
        option: 'Opatrunki żelowe',
        isCorrect: false,
      },
      {
        option: 'Opatrunki specjalistyczne',
        isCorrect: true,
      },
    ],
  },
  {
    number: 193,
    question:
      'Błony poliuretanowe nie mają właściwości pochłaniających, tak więc aplikuje się je na odleżyny I i II stopnia pod warunkiem, że:',
    answers: [
      {
        option: 'Skóra nie jest zaczerwieniona',
        isCorrect: false,
      },
      {
        option: 'Skóra jest nieuszkodzona',
        isCorrect: true,
      },
      {
        option: 'Odleżyny występują na głowie',
        isCorrect: false,
      },
    ],
  },
  {
    number: 194,
    question:
      'Długość utrzymywania opatrunku na ranie zależy od zlecenia lekarskiego bądź pielęgniarskiego, które z kolei podyktowane jest ilością wysięku z rany oraz: ',
    answers: [
      {
        option: 'preferencjami pacjenta',
        isCorrect: false,
      },
      {
        option: 'lokalizacja rany',
        isCorrect: false,
      },
      {
        option: 'rodzajem opatrunku',
        isCorrect: true,
      },
    ],
  },
  {
    number: 195,
    question: 'Opatrunki z mechanizmem płucząco-absorbcyjnym nasączone są: ',
    answers: [
      {
        option: 'Solą fizjologiczną',
        isCorrect: false,
      },
      {
        option: 'Wodą utlenioną',
        isCorrect: false,
      },
      {
        option: 'Płynem Ringera',
        isCorrect: true,
      },
    ],
  },
  {
    number: 196,
    question: 'Jednym z rodzajów opatrunków są superabsorbenty. Superabsorbenty przeznaczone są do ran:',
    answers: [
      {
        option: 'bez wysięku',
        isCorrect: false,
      },
      {
        option: 'z małym wysiękiem',
        isCorrect: false,
      },
      {
        option: 'z dużym wysiękiem',
        isCorrect: true,
      },
    ],
  },
  {
    number: 197,
    question: 'Do wypełniania odleżyn z dużym ubytkiem tkanek stosuje się: ',
    answers: [
      {
        option: 'Alginiany',
        isCorrect: true,
      },
      {
        option: 'Opatrunki hydrożelowe',
        isCorrect: false,
      },
      {
        option: 'Opatrunki hydrokoloidowe',
        isCorrect: false,
      },
    ],
  },
  {
    number: 198,
    question: 'Porowatość opatrunku w piankach poliuretanowych zapobiega: ',
    answers: [
      {
        option: 'Nieprzyjemnemu zapachowi z rany',
        isCorrect: false,
      },
      {
        option: 'Zmniejsza ilość wysięku z rany',
        isCorrect: false,
      },
      {
        option: 'Zapobiega przywieraniu opatrunku do rany ',
        isCorrect: true,
      },
    ],
  },
  {
    number: 199,
    question: 'Typowa lokalizacja owrzodzenia żylnego to:',
    answers: [
      {
        option: 'Łydka nieco powyżej kostki',
        isCorrect: true,
      },
      {
        option: 'Pięta',
        isCorrect: false,
      },
      {
        option: 'Okolice palucha stopy',
        isCorrect: false,
      },
    ],
  },
  {
    number: 200,
    question: 'Rana niepowikłana to: ',
    answers: [
      {
        option: 'rana, w której nie stwierdza się cech zakażenia',
        isCorrect: true,
      },
      {
        option: 'rana, w której stwierdza się cechy zakażenia',
        isCorrect: false,
      },
      {
        option: 'każda rana, która powstała na kończynie dolnej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 201,
    question: 'Przemywając ranę niepowikłaną, należy wykonywać ruchy: ',
    answers: [
      {
        option: 'od środka na zewnątrz',
        isCorrect: true,
      },
      {
        option: 'od zewnątrz do środka',
        isCorrect: false,
      },
      {
        option: 'nie ma znaczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 202,
    question: 'Podczas przemywania rany obowiązuje zasada: ',
    answers: [
      {
        option: 'jeden gazik — jedno przetarcie',
        isCorrect: true,
      },
      {
        option: 'jeden gazik — dwa przetarcie',
        isCorrect: false,
      },
      {
        option: 'jeden gazik — trzy przetarcie',
        isCorrect: false,
      },
    ],
  },
  {
    number: 203,
    question: 'W przypadku rany niepowikłanej chirurgicznej zmieniamy opatrunek nie wcześniej niż: ',
    answers: [
      {
        option: '6 godzin po zabiegu',
        isCorrect: false,
      },
      {
        option: 'w 2. lub 3. dobie pooperacyjnej',
        isCorrect: true,
      },
      {
        option: 'w 7. dobie po zabiegu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 204,
    question:
      'Podczas zmiany opatrunku na ranie zaobserwowałeś następujące cechy: ropny wyciek, rumień, bolesność, obrzęk, ucieplenie otoczenia rany. Jak postąpisz?',
    answers: [
      {
        option: 'Przemyjesz ranę rywanolem i zmienisz opatrunek',
        isCorrect: false,
      },
      {
        option: 'Niezwłocznie powiadomisz pielęgniarkę lub lekarza',
        isCorrect: true,
      },
      {
        option: 'Przemyjesz ranę woda utleniona i zmienisz opatrunek',
        isCorrect: false,
      },
    ],
  },
  {
    number: 205,
    question: 'Po zdjęciu opatrunku brudnego, a przed założeniem rękawiczek jałowych, należy',
    answers: [
      {
        option: 'nałożyć rękawiczki niejałowe',
        isCorrect: false,
      },
      {
        option: 'wetrzeć w ręce krem odżywczy',
        isCorrect: false,
      },
      {
        option: 'zdezynfekować lub umyć ręce',
        isCorrect: true,
      },
    ],
  },
  {
    number: 206,
    question: 'Ranę powikłaną przemywamy w kierunku: ',
    answers: [
      {
        option: 'od środka na zewnątrz',
        isCorrect: false,
      },
      {
        option: 'od zewnątrz do środka',
        isCorrect: true,
      },
      {
        option: 'nie ma znaczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 207,
    question:
      'Rana, której stwierdza się cechy zakażenia (zaczerwienienie, ból, obrzęk, nadmierne ucieplenie, nadmierny wysięk to:',
    answers: [
      {
        option: 'rana powikłana',
        isCorrect: true,
      },
      {
        option: 'rana niepowikłana',
        isCorrect: false,
      },
      {
        option: 'rana gojąca się',
        isCorrect: false,
      },
    ],
  },
  {
    number: 208,
    question:
      'Podczas przygotowywania materiału opatrunkowego do zmiany opatrunku na ranie powikłanej zauważyłeś, że upłynął termin ważności gazików jałowych. Co w takiej sytuacji zrobisz?',
    answers: [
      {
        option: 'Mimo wszystko wykorzystasz gaziki do przemycia rany',
        isCorrect: false,
      },
      {
        option: 'Wymienisz gaziki na nowe opakowanie z aktualną datą',
        isCorrect: true,
      },
      {
        option:
          'Zapytasz pacjenta czy miałby cos przeciwko, jeśli wykorzystasz do przemycia rany gaziki, których termin upłynął',
        isCorrect: false,
      },
    ],
  },
  {
    number: 209,
    question: 'Podczas zmiany opatrunku na ranie niepowikłanej, użycie antyseptyku jest:',
    answers: [
      {
        option: 'konieczne',
        isCorrect: false,
      },
      {
        option: 'niekonieczne',
        isCorrect: true,
      },
      {
        option: 'zależy od rodzaju rany',
        isCorrect: false,
      },
    ],
  },
  {
    number: 210,
    question: 'Najczęstszym czynnikiem etiologicznym wywołującym zakażenia ran są:',
    answers: [
      {
        option: 'wirusy',
        isCorrect: false,
      },
      {
        option: 'bakterie',
        isCorrect: true,
      },
      {
        option: 'priony',
        isCorrect: false,
      },
    ],
  },
  {
    number: 211,
    question: 'Opatrunek na ranie powikłanej zmieniamy w zależności od: ',
    answers: [
      {
        option: 'zlecenia lekarskiego bądź pielęgniarskiego',
        isCorrect: true,
      },
      {
        option: 'co 2-3 dni',
        isCorrect: false,
      },
      {
        option: 'jeśli opatrunek zabrudzi się lub przesiąknie',
        isCorrect: false,
      },
    ],
  },
  {
    number: 212,
    question: 'Do płukania rany wykorzystuje się strzykawkę o pojemności:',
    answers: [
      {
        option: '2 ml',
        isCorrect: false,
      },
      {
        option: '20 ml',
        isCorrect: true,
      },
      {
        option: '50 ml',
        isCorrect: false,
      },
    ],
  },
  {
    number: 213,
    question: 'Do płukania rany można wykorzystać wenflon w kolorze:',
    answers: [
      {
        option: 'różowym',
        isCorrect: false,
      },
      {
        option: 'niebieskim',
        isCorrect: false,
      },
      {
        option: 'zielonym',
        isCorrect: true,
      },
    ],
  },
  {
    number: 214,
    question: 'Płukanie gardła nie wykonuje się u osób: ',
    answers: [
      {
        option: 'współpracujących',
        isCorrect: false,
      },
      {
        option: 'korzystających z protez zębowych',
        isCorrect: false,
      },
      {
        option: 'nieprzytomnych',
        isCorrect: true,
      },
    ],
  },
  {
    number: 215,
    question: 'Do płukania oka wykorzystuje się:',
    answers: [
      {
        option: 'Jałowy roztwór wody destylowanej',
        isCorrect: true,
      },
      {
        option: '5% glukoze',
        isCorrect: false,
      },
      {
        option: 'antyseptyk',
        isCorrect: false,
      },
    ],
  },
  {
    number: 216,
    question: 'Podczas płukania oko powinno pozostawać:',
    answers: [
      {
        option: 'Zamknięte',
        isCorrect: false,
      },
      {
        option: 'Otwarte',
        isCorrect: true,
      },
      {
        option: 'Na początku otwarte, a potem zamknięte',
        isCorrect: false,
      },
    ],
  },
  {
    number: 217,
    question: 'Główną przyczyną przewlekłej obturacyjnej choroby płuc (POCHP) jest:',
    answers: [
      {
        option: 'alergia',
        isCorrect: false,
      },
      {
        option: 'palenie tytoniu',
        isCorrect: true,
      },
      {
        option: 'niewłaściwa dieta',
        isCorrect: false,
      },
    ],
  },
  {
    number: 218,
    question: 'Obturacja w POChP ma charakter:',
    answers: [
      {
        option: 'odwracalny',
        isCorrect: false,
      },
      {
        option: 'okresowo odwracalny',
        isCorrect: false,
      },
      {
        option: 'nieodwracalny',
        isCorrect: true,
      },
    ],
  },
  {
    number: 219,
    question: 'Podstawą leczenia astmy oskrzelowej są: ',
    answers: [
      {
        option: 'leki rozszerzające oskrzela',
        isCorrect: false,
      },
      {
        option: 'antybiotyki',
        isCorrect: false,
      },
      {
        option: 'glikokortykosteroidy wziewne',
        isCorrect: true,
      },
    ],
  },
  {
    number: 220,
    question:
      'Samobójstwo, w której główną przyczyna jest bardzo silny lęk przed nieuchronnymi, przykrymi wydarzeniami, np. przekonanie o nadchodzącej katastrofie, wizja śmierci w męczarniach ',
    answers: [
      {
        option: 'Altruistyczne',
        isCorrect: false,
      },
      {
        option: 'Egoistyczne',
        isCorrect: false,
      },
      {
        option: 'Fatalistyczne',
        isCorrect: true,
      },
    ],
  },
  {
    number: 221,
    question:
      'Elementami składowymi samobójstwa są myśli, tendencje samobójcze, decyzja samobójcza oraz końcowy akt samobójczy. Jeśli dana osoba planuje samobójstwo, wyznaczyła datę oraz jego okoliczności to znaczy, że ma:',
    answers: [
      {
        option: 'Myśli samobójcze',
        isCorrect: false,
      },
      {
        option: 'Tendencje samobójcze',
        isCorrect: true,
      },
      {
        option: 'Dokonała już samobójstwa',
        isCorrect: false,
      },
    ],
  },
  {
    number: 222,
    question:
      'Na oddech składa się wdech oraz wydech. Wdech jest aktem czynnym, ponieważ podczas wdechu wprowadzenie powietrza do płuc następuje na skutek skurczu mięśni oddechowych. Z kolei wydech w spoczynku powstaje na skutek rozkurczu mięśni szkieletowych dlatego jest aktem:',
    answers: [
      {
        option: 'Biernym',
        isCorrect: true,
      },
      {
        option: 'Czynnym',
        isCorrect: false,
      },
      {
        option: 'Bierno-czynnym',
        isCorrect: false,
      },
    ],
  },
  {
    number: 223,
    question:
      'Oddech Kussmala polegający na pogłębieniu i przyśpieszeniu oddechu z krótkimi okresami bezdechu występujący, np. w kwasicy ketonowej, zwany jest inaczej:',
    answers: [
      {
        option: 'Oddechem gonionego psa',
        isCorrect: true,
      },
      {
        option: 'Oddechem biegnącego tygrysa',
        isCorrect: false,
      },
      {
        option: 'Oddechem zmęczonego turysty',
        isCorrect: false,
      },
    ],
  },
  {
    number: 224,
    question: 'Zapach acetonu z ust może świadczyć o:',
    answers: [
      {
        option: 'Nietrzeźwości',
        isCorrect: false,
      },
      {
        option: 'Kwasicy ketonowej',
        isCorrect: true,
      },
      {
        option: 'Grzybicy jamy ustnej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 225,
    question: 'Proces wymiany gazowej w organizmie mający na celu pobranie tlenu, a wydalenie dwutlenku węgla to: ',
    answers: [
      {
        option: 'oddychanie komórkowe',
        isCorrect: false,
      },
      {
        option: 'oddychanie wewnętrzne',
        isCorrect: false,
      },
      {
        option: 'oddychanie zewnętrzne',
        isCorrect: true,
      },
    ],
  },
  {
    number: 226,
    question: 'Tor oddychania jest zależny od płci oraz stanu zdrowia. U kobiet dominuje tor: ',
    answers: [
      {
        option: 'Piersiowy',
        isCorrect: true,
      },
      {
        option: 'Brzuszny',
        isCorrect: false,
      },
      {
        option: 'Płucny',
        isCorrect: false,
      },
    ],
  },
  {
    number: 227,
    question: 'Czynnikiem przyśpieszającym oddech jest: ',
    answers: [
      {
        option: 'Sen',
        isCorrect: false,
      },
      {
        option: 'Gorączka',
        isCorrect: true,
      },
      {
        option: 'Posiłek',
        isCorrect: false,
      },
    ],
  },
  {
    number: 228,
    question:
      'Kobiety oddychają torem piersiowym, a mężczyźni torem brzusznym. Uznaje się, że oddychanie wyłącznie torem piersiowym lub wyłącznie torem przeponowym jest niewłaściwe. Najbardziej optymalnym, najkorzystniejszym sposobem oddychania dla całego organizmu jest połączenie tych dwóch sposobów, a więc oddychanie torem: ',
    answers: [
      {
        option: 'piersiowo-brzusznym',
        isCorrect: true,
      },
      {
        option: 'piersiowo-żebrowym',
        isCorrect: false,
      },
      {
        option: 'piersiowo-płucnym',
        isCorrect: false,
      },
    ],
  },
  {
    number: 229,
    question: 'Jeśli pacjent samodzielnie wdycha tlen do dróg oddechowych, wówczas mówmy o tlenoterapii:',
    answers: [
      {
        option: 'biernej',
        isCorrect: true,
      },
      {
        option: 'czynnej',
        isCorrect: false,
      },
      {
        option: 'bierno-czynnej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 230,
    question: 'Minimalna szybkość przepływu, jaką można pacjentowi podać przez maskę tlenową, to:',
    answers: [
      {
        option: '3 l/min',
        isCorrect: false,
      },
      {
        option: '5 l/min',
        isCorrect: true,
      },
      {
        option: '10 l/min',
        isCorrect: false,
      },
    ],
  },
  {
    number: 231,
    question: 'Ze względu na uszkodzenia błony śluzowej przez wąsy tlenowe można podać tlen z maksymalną szybkością:',
    answers: [
      {
        option: '2 l/min',
        isCorrect: false,
      },
      {
        option: '5 l/min',
        isCorrect: true,
      },
      {
        option: '10 l/min',
        isCorrect: false,
      },
    ],
  },
  {
    number: 232,
    question: 'Tlen jest toksyczny. Przy stężeniach tlenu powyżej 50% może dojść do:',
    answers: [
      {
        option: 'zapalenia tchawicy i oskrzeli',
        isCorrect: true,
      },
      {
        option: 'astmy',
        isCorrect: false,
      },
      {
        option: 'alergii',
        isCorrect: false,
      },
    ],
  },
  {
    number: 233,
    question: 'Wentylacja mechaniczna nieinwazyjna: ',
    answers: [
      {
        option: 'nie wymaga mechanicznego udrożnienia dróg oddechowych',
        isCorrect: true,
      },
      {
        option: 'wymaga mechanicznego udrożnienia dróg oddechowych',
        isCorrect: false,
      },
      {
        option: 'wymaga maski tlenowej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 234,
    question: 'Tlenoterapia czynna polega na: ',
    answers: [
      {
        option: 'pobieraniu przez pacjenta samodzielnie mieszaniny oddechowej',
        isCorrect: false,
      },
      {
        option: 'wtłaczaniu pacjentowi do płuc mieszaniny oddechowej',
        isCorrect: true,
      },
      {
        option: 'stosowaniu wąsów tlenowych',
        isCorrect: false,
      },
    ],
  },
  {
    number: 235,
    question: 'Najlepszą pozycją do stosowania tlenoterapii jest: ',
    answers: [
      {
        option: 'pozycja leżąca',
        isCorrect: false,
      },
      {
        option: 'pozycja wysoka lub półwysoka',
        isCorrect: true,
      },
      {
        option: 'pozycja na brzuchu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 236,
    question: 'Tlen jest łatwopalny, dlatego podczas stosowania tlenoterapii bezwględnie zabrania się:',
    answers: [
      {
        option: 'palenia tytoniu',
        isCorrect: true,
      },
      {
        option: 'oglądania telewizji',
        isCorrect: false,
      },
      {
        option: 'korzystania z telefonu komórkowego',
        isCorrect: false,
      },
    ],
  },
  {
    number: 237,
    question: 'Skuteczność tlenoterapii można skontrolować za pomocą: ',
    answers: [
      {
        option: 'ciśnieniomierza',
        isCorrect: false,
      },
      {
        option: 'pulsoksymetru',
        isCorrect: true,
      },
      {
        option: 'termometru',
        isCorrect: false,
      },
    ],
  },
  {
    number: 238,
    question:
      'Warunkiem objęcia chorego długoterminową opieką stacjonarną w zakładzie opiekuńczym jest uzyskanie przez pacjenta w skali Barthel: ',
    answers: [
      {
        option: '40 pkt. lub mniej',
        isCorrect: true,
      },
      {
        option: '30 pkt. lub mniej',
        isCorrect: false,
      },
      {
        option: '20 pkt. lub mniej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 239,
    question: 'Koszty pobytu chorego w hospicjum stacjonarnym pokrywa: ',
    answers: [
      {
        option: 'pacjent',
        isCorrect: false,
      },
      {
        option: 'za zakwaterowanie i wyżywienie płaci pacjent, a NFZ pokrywa koszt świadczeń zdrowotnych',
        isCorrect: false,
      },
      {
        option: 'koszty w całości pokrywa NFZ',
        isCorrect: true,
      },
    ],
  },
  {
    number: 240,
    question:
      'Mieszkaniec domu ponosi opłatę za pobyt w Domu Pomocy Społecznej (prowadzonym przez jednostkę samorządu terytorialnego) w wysokości nie większej niż:',
    answers: [
      {
        option: '40% swojego dochodu',
        isCorrect: false,
      },
      {
        option: '50% swojego dochodu',
        isCorrect: false,
      },
      {
        option: '70% swojego dochodu',
        isCorrect: true,
      },
    ],
  },
  {
    number: 241,
    question: 'W Rodzinnym Domu Samopomocy może mieszkać nie więcej niż:',
    answers: [
      {
        option: '3 osoby',
        isCorrect: false,
      },
      {
        option: '5 osób',
        isCorrect: false,
      },
      {
        option: '8 osób',
        isCorrect: true,
      },
    ],
  },
  {
    number: 242,
    question:
      'Intermidiate care — stanowi swego rodzaju pomost pomiędzy szpitalem a domem pacjenta. Forma ta umożliwia wiele usług pozwalających na szybszą aktywizację chorego. Oczekuje się, że po maksymalnie 6 tygodniach intensywnej opieki i rehabilitacji osoba starsza będzie w stanie powrócić do własnego domu i samodzielnie w nim funkcjonować. Ta forma pomocy nie obejmuje opieką pacjentów w ostrych stanach chorobowych,wymagających 24-godzinnej opieki medycznej i pielęgniarskiej. Jest forma opieki instytucjonalnej charakterystyczna dla: ',
    answers: [
      {
        option: 'Norwegii',
        isCorrect: false,
      },
      {
        option: 'Finlandii',
        isCorrect: false,
      },
      {
        option: 'Wielkiej Brytanii',
        isCorrect: true,
      },
    ],
  },
  {
    number: 243,
    question: 'W Finlandii formami pośrednimi między opieką ambulatoryjną i instytucjonalną są: ',
    answers: [
      {
        option: 'Domy chronione',
        isCorrect: true,
      },
      {
        option: 'Środowiskowe domy samopomocy',
        isCorrect: false,
      },
      {
        option: 'Domy opieki społecznej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 244,
    question:
      'Centrum dla osób starszych to ośrodek świadczący opiekę nad osobą w podeszłym wieku, który oferuje pomoc lekarza, pielęgniarki i fizjoterapeuty. Niektóre z nich mogą dodatkowo oferować pedikiur, fryzjera czy wypożyczenie książek. Centra dla osób starszych funkcjonują w: ',
    answers: [
      {
        option: 'Finlandii',
        isCorrect: false,
      },
      {
        option: 'Norwegii',
        isCorrect: true,
      },
      {
        option: 'Polsce',
        isCorrect: false,
      },
    ],
  },
  {
    number: 245,
    question:
      'W Finlandii odpowiedzialne za zorganizowanie opieki społecznej i zdrowotnej dla osób w wieku podeszłym odpowiedzialne są/jest:',
    answers: [
      {
        option: 'Samorządy',
        isCorrect: true,
      },
      {
        option: 'Fundacje',
        isCorrect: false,
      },
      {
        option: 'Rząd centralny',
        isCorrect: false,
      },
    ],
  },
  {
    number: 246,
    question:
      'W ramach instytucjonalnej długoterminowej opieki nad pacjentem w wieku podeszłym w Wielkiej Brytanii wyróżnia się residental care home i nursing care home. W residental care home opiekę mogą sprawować opiekunowie socjalni, natomiast opieka w nursing care home powinna być sprawowana przez 24 godziny przez wykwalifikowany personel:',
    answers: [
      {
        option: 'Lekarski',
        isCorrect: false,
      },
      {
        option: 'Pielęgniarski',
        isCorrect: true,
      },
      {
        option: 'fizjoterapeutyczny',
        isCorrect: false,
      },
    ],
  },
  {
    number: 247,
    question:
      'W Finlandii opieka instytucjonalna jest uznawana za opiekę długoterminową, gdy czas jej sprawowania przekracza: ',
    answers: [
      {
        option: '14 dni',
        isCorrect: false,
      },
      {
        option: '90 dni',
        isCorrect: true,
      },
      {
        option: '180 dni',
        isCorrect: false,
      },
    ],
  },
  {
    number: 248,
    question: 'Przykładem dokumentacji indywidualnej zewnętrznej jest: ',
    answers: [
      {
        option: 'wykaz raportów pielęgniarskich',
        isCorrect: false,
      },
      {
        option: 'wykaz raportów lekarskich',
        isCorrect: false,
      },
      {
        option: 'skierowanie do szpitala',
        isCorrect: true,
      },
    ],
  },
  {
    number: 249,
    question: 'Dokumentacja medyczna powinna być prowadzona w wersji: ',
    answers: [
      {
        option: 'elektronicznej, a jeśli z przyczyn organizacyjno-technicznych jest to niemożliwe, papierowej',
        isCorrect: true,
      },
      {
        option: 'wyłącznie papierowej',
        isCorrect: false,
      },
      {
        option: 'w dwóch wersjach: papierowej i elektronicznej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 250,
    question:
      'Dokumentacja medyczna (z wyjątkiem zdjęć rentgenowskich i dotycząca pracowników narażonych na czynniki rakotwórcze) powinna być przechowywana przez okres: ',
    answers: [
      {
        option: '5 lat',
        isCorrect: false,
      },
      {
        option: '15 lat',
        isCorrect: false,
      },
      {
        option: '20 lat',
        isCorrect: true,
      },
    ],
  },
  {
    number: 251,
    question: 'Poprawkę w dokumentacji można nanieść po uprzednim: ',
    answers: [
      {
        option: 'zakorektorowaniu błędnego zapisu',
        isCorrect: false,
      },
      {
        option: 'zamazaniu błędnego zapisu tak, aby uniemożliwić jego odczytanie',
        isCorrect: false,
      },
      {
        option: 'przekreśleniu zapisu tak, aby możliwe było jego odczytanie',
        isCorrect: true,
      },
    ],
  },
  {
    number: 252,
    question: 'Który ze sposobów udostępnienia dokumentacji medycznej pacjentowi jest bezpłatny? ',
    answers: [
      {
        option: 'wydanie kopii',
        isCorrect: false,
      },
      {
        option: 'wydanie dokumentacji na płycie CD',
        isCorrect: false,
      },
      {
        option: 'umożliwienie wglądu w siedzibie podmiotu',
        isCorrect: true,
      },
    ],
  },
  {
    number: 253,
    question:
      'W chorobach wątroby dopuszcza się spożywanie tłuszczów pochodzenia roślinnego. Źródłem tłuszczu pochodzenia roślinnego jest: ',
    answers: [
      {
        option: 'oliwa z oliwek',
        isCorrect: true,
      },
      {
        option: 'masło',
        isCorrect: false,
      },
      {
        option: 'śmietana',
        isCorrect: false,
      },
    ],
  },
  {
    number: 254,
    question: 'Źródłem węglowodanów złożonych w diecie dla pacjenta z chorobami wątroby jest: ',
    answers: [
      {
        option: 'pieczywo',
        isCorrect: true,
      },
      {
        option: 'słodycze',
        isCorrect: false,
      },
      {
        option: 'cukier',
        isCorrect: false,
      },
    ],
  },
  {
    number: 255,
    question: 'Źródłem białka w chorobach wątroby powinno być/powinny być: ',
    answers: [
      {
        option: 'mięso czerwone',
        isCorrect: false,
      },
      {
        option: 'ryby',
        isCorrect: true,
      },
      {
        option: 'wołowina',
        isCorrect: false,
      },
    ],
  },
  {
    number: 256,
    question: 'Błonnik w diecie osób chorych na nieswoiste zapalenia jelit jest: ',
    answers: [
      {
        option: 'przeciwwskazany bez względu na fazę choroby',
        isCorrect: false,
      },
      {
        option: 'jest przeciwwskazany w fazie remisji choroby',
        isCorrect: false,
      },
      {
        option: 'jest przeciwwskazany jedynie w fazie zaostrzeń choroby',
        isCorrect: true,
      },
    ],
  },
  {
    number: 257,
    question:
      'Picie napojów z kofeiną u osób z niedoborami witaminowymi w przebiegu choroby Leśniowskiego-Crohna jest przeciwwskazane, ponieważ: ',
    answers: [
      {
        option: 'kofeina wypłukuje wapń z organizmu',
        isCorrect: true,
      },
      {
        option: 'kofeina wypłukuje witamine C z organizmu',
        isCorrect: false,
      },
      {
        option: 'kofeina powoduje zaparcia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 258,
    question: 'Najczęstszym powodem nietolerancji mleka u osób chorych na chorobę Leśniowskiego-Crohna jest: ',
    answers: [
      {
        option: 'brak enzymu - laktazy',
        isCorrect: true,
      },
      {
        option: 'brak żółci rozbijającej tłuszcze zawarte w mleku',
        isCorrect: false,
      },
      {
        option: 'nadmiar białka w organizmie',
        isCorrect: false,
      },
    ],
  },
  {
    number: 259,
    question:
      'Dieta pacjenta po resekcji pęcherzyka żółciowego w pierwszych 3-4 miesiącach po zabiegu jest w zasadzie taka sama: ',
    answers: [
      {
        option: 'jak w okresie zaostrzenia choroby',
        isCorrect: true,
      },
      {
        option: 'jak dieta osób zdrowych',
        isCorrect: false,
      },
      {
        option: 'jak w kamicy żółciowo bezobjawowej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 260,
    question:
      'Jednym z ogólnych zaleceń dotyczących diety osób z kamicą pęcherzyka żółciowego jest zwiększenie spożycia błonnika pokarmowego. Jednak w zaostrzeniu kamicy żółciowej stosuje się dietę łatwostrawną, niskotłuszczową z ograniczeniem produktów bogatych w: ',
    answers: [
      {
        option: 'węglowodany',
        isCorrect: false,
      },
      {
        option: 'białko',
        isCorrect: false,
      },
      {
        option: 'błonnik',
        isCorrect: true,
      },
    ],
  },
  {
    number: 261,
    question:
      'Przyczyną powstawania kamieni żółciowych są zaburzenia w składzie żółci produkowanej przez wątrobę. Jednym z czynników wpływających na zaburzenia w składzie żółci jest: ',
    answers: [
      {
        option: 'zbyt mała ilość błonnika',
        isCorrect: true,
      },
      {
        option: 'zbyt duża ilość błonnika',
        isCorrect: false,
      },
      {
        option: 'ilość błonnika w diecie nie ma wpływu na powstawanie kamieni',
        isCorrect: false,
      },
    ],
  },
  {
    number: 262,
    question:
      'Sprawujesz opiekę nad pacjentem w pierwszym miesiącu po przebytym ostrym zapaleniu trzustki. Wybierz menu na śniadanie uwzględniające zasady żywienia osób po przebytym ostrym zapaleniu trzustki.',
    answers: [
      {
        option:
          'czerstwe pieczywo pszenne z masłem i pastą z chudego twarożku i koperku, kawa zbożowa z niskotłuszczowym mlekiem',
        isCorrect: true,
      },
      {
        option:
          'świeże pieczywo żytnie z margaryną, pasta z twarogu i tuńczyka ze szczypiorkiem, herbata z cytryną, banan',
        isCorrect: false,
      },
      {
        option: 'świeże pieczywo pszenne z margaryną, omlet ze szpinakiem, napój z kefiru i soku wielowarzywnego ',
        isCorrect: false,
      },
    ],
  },
  {
    number: 263,
    question: 'W pierwszych 3 dniach leczenia ostrego zapalenia trzustki pacjent może: ',
    answers: [
      {
        option: 'jeść kleik',
        isCorrect: false,
      },
      {
        option: 'jeść potrawy łatwostrawne',
        isCorrect: false,
      },
      {
        option: 'nie może przyjmować pokarmów doustnie',
        isCorrect: true,
      },
    ],
  },
  {
    number: 264,
    question:
      'Podopieczny, którym się opiekujesz choruje na przewlekłe zapalenie trzustki. Przygotowując dla niego śniadanie, do zrobienia kanapek wybierzesz pieczywo:',
    answers: [
      {
        option: 'pszenne świeże',
        isCorrect: false,
      },
      {
        option: 'pszenne czerstwe',
        isCorrect: true,
      },
      {
        option: 'z mąki żytniej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 265,
    question: 'Indeks glikemiczny to: ',
    answers: [
      {
        option: 'liczba kalorii w pokarmach',
        isCorrect: false,
      },
      {
        option:
          'wskaźnik, który informuje o tym, jak gwałtownie po spożyciu danego produktu spożywczego wzrasta poziom glukozy we krwi',
        isCorrect: true,
      },
      {
        option: 'wskaźnik, który informuje nas o stopniu ciężkości uszkodzenia trzustki',
        isCorrect: false,
      },
    ],
  },
  {
    number: 266,
    question: 'W diecie pacjentów z cukrzycą powinny przeważać produkty o: ',
    answers: [
      {
        option: 'niskim indeksie glikemicznym',
        isCorrect: true,
      },
      {
        option: 'średnim indeksie glikemcznym',
        isCorrect: false,
      },
      {
        option: 'wysokim indeksie glikemicznym',
        isCorrect: false,
      },
    ],
  },
  {
    number: 267,
    question: 'W przypadku pacjentów z cukrzycą wysiłek fizyczny powinien być: ',
    answers: [
      {
        option: 'regularny, podejmowany co najmniej co 2-3 dni, a najlepiej codziennie',
        isCorrect: true,
      },
      {
        option: 'podejmowany nie częściej niż raz w tygodniu',
        isCorrect: false,
      },
      {
        option: 'nie powinien być podejmowany w ogóle',
        isCorrect: false,
      },
    ],
  },
  {
    number: 268,
    question: 'Spożywanie alkoholu przez osoby chore na cukrzycę jest zabronione, ponieważ alkohol: ',
    answers: [
      {
        option: 'podwyższa stężenie glukozy we krwi',
        isCorrect: false,
      },
      {
        option: 'ma dużo kalorii',
        isCorrect: false,
      },
      {
        option:
          'hamuje produkcję glukozy w wątrobie przez co zwiększa ryzyko wystąpienia hipoglikemii (obniżone stężenie cukru we krwi)',
        isCorrect: true,
      },
    ],
  },
  {
    number: 269,
    question: 'Odpowiednią formą wysiłku dla osób z cukrzycą w każdym wieku jest: ',
    answers: [
      {
        option: 'bieganie',
        isCorrect: false,
      },
      {
        option: 'nordic walking',
        isCorrect: true,
      },
      {
        option: 'podnoszenie ciężarów',
        isCorrect: false,
      },
    ],
  },
  {
    number: 270,
    question: 'Ilość soli pochodzącej ze wszystkich źródeł nie powinna przekraczać: ',
    answers: [
      {
        option: '5 g/dzień',
        isCorrect: true,
      },
      {
        option: '10 g/dzień',
        isCorrect: false,
      },
      {
        option: '15 g/dzień',
        isCorrect: false,
      },
    ],
  },
  {
    number: 271,
    question: 'Zespół jelita drażliwego: ',
    answers: [
      {
        option: 'można wyleczyć',
        isCorrect: false,
      },
      {
        option: 'nie da się wyleczyć',
        isCorrect: true,
      },
      {
        option: 'mogą się wyleczyć jedynie kobiety',
        isCorrect: false,
      },
    ],
  },
  {
    number: 272,
    question: 'W postaci zaparciowej powinno się stosować dietę bogatą w błonnik. Działanie błonnika polega na: ',
    answers: [
      {
        option: 'spowolnieniu przemieszczania się treści pokarmowej w jelitach',
        isCorrect: false,
      },
      {
        option: 'przyśpieszeniu przemieszczania się treści pokarmowej w jelitach i pochłonieniu wody',
        isCorrect: true,
      },
      {
        option: 'rozpuszczeniu niestrawionych resztek pokarmowych',
        isCorrect: false,
      },
    ],
  },
  {
    number: 273,
    question:
      'Dieta w postaci biegunkowej powinna uwzględniać produkty obniżające perystaltykę jelitową, np. mąka ziemniaczana. Źródłem mąki ziemniaczanej jest: ',
    answers: [
      {
        option: 'kisiel',
        isCorrect: true,
      },
      {
        option: 'marchewka',
        isCorrect: false,
      },
      {
        option: 'kleik',
        isCorrect: false,
      },
    ],
  },
  {
    number: 274,
    question:
      'Laktuloza jest popularnym lekiem na zaparcia, dostępnym bez recepty. Należy do grupy leków osmotycznych. Jej działanie polega na: ',
    answers: [
      {
        option: 'przyciąga wodę do światła jelita, zmiękczając w ten sposób stolec',
        isCorrect: true,
      },
      {
        option: 'drażni jelito',
        isCorrect: false,
      },
      {
        option: 'działa poślizgowo',
        isCorrect: false,
      },
    ],
  },
  {
    number: 275,
    question: 'W celiakii dochodzi do uszkodzenia:',
    answers: [
      {
        option: 'kosmków jelitowych',
        isCorrect: true,
      },
      {
        option: 'błony śluzowej jelita grubego',
        isCorrect: false,
      },
      {
        option: 'błony śluzowej żołądka',
        isCorrect: false,
      },
    ],
  },
  {
    number: 276,
    question: 'Osoba chora na celiakię musi przestrzegać diety bezglutenowej: ',
    answers: [
      {
        option: 'do końca 50 r.ż., ponieważ po tym okresie dochodzi do wyciszenia układu immunologicznego ',
        isCorrect: false,
      },
      {
        option: 'do ustąpienia objawów',
        isCorrect: false,
      },
      {
        option: 'przez całe życie',
        isCorrect: true,
      },
    ],
  },
  {
    number: 277,
    question: 'Gluten występuje w: ',
    answers: [
      {
        option: 'życie, pszenicy, jęczmieniu',
        isCorrect: true,
      },
      {
        option: 'ziemniakach, kukurydzy',
        isCorrect: false,
      },
      {
        option: 'fasoli, soi, soczewicy',
        isCorrect: false,
      },
    ],
  },
  {
    number: 278,
    question: 'Ze względu na różnorodność objawów celiakia jest nazywana: ',
    answers: [
      {
        option: 'chorobą o wielu twarzach',
        isCorrect: true,
      },
      {
        option: 'chorobą brudnych rąk',
        isCorrect: false,
      },
      {
        option: 'chorobą tropikalną',
        isCorrect: false,
      },
    ],
  },
  {
    number: 279,
    question: 'Dieta DASH jest stosowana przede wszystkim w: ',
    answers: [
      {
        option: 'nadciśnieniu tętniczym',
        isCorrect: true,
      },
      {
        option: 'reumatoidalnym zapaleniu stawów',
        isCorrect: false,
      },
      {
        option: 'przeziębieniu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 280,
    question: 'Główną zasadą diety DASH jest: ',
    answers: [
      {
        option: 'ograniczenie spożycia soli do 5 g/dobę',
        isCorrect: true,
      },
      {
        option: 'zwiększenie spożycia soli',
        isCorrect: false,
      },
      {
        option: 'zwiększeniu spożycia tłuszczy zwierzęcych',
        isCorrect: false,
      },
    ],
  },
  {
    number: 281,
    question: 'Nadciśnienie pierwotne to nadciśnienie: ',
    answers: [
      {
        option: 'spowodowane innymi chorobami',
        isCorrect: false,
      },
      {
        option: 'samoistne, do rozwoju którego nie przyczyniły się inne choroby',
        isCorrect: true,
      },
      {
        option: 'nadciśnienie spowodowane chorobami nerek',
        isCorrect: false,
      },
    ],
  },
  {
    number: 282,
    question: 'Dietę DASH mogą stosować: ',
    answers: [
      {
        option: 'wszystkie osoby w każdym wieku',
        isCorrect: true,
      },
      {
        option: 'wyłącznie osoby po 50 r. ż',
        isCorrect: false,
      },
      {
        option: 'wyłącznie osoby po 65 r. ż',
        isCorrect: false,
      },
    ],
  },
  {
    number: 283,
    question:
      'Dziedzina nauki zajmującą się badaniem wpływu leków zarówno na zdrowe, jak i chore tkanki oraz narządy ludzi i zwierząt: ',
    answers: [
      {
        option: 'botanika',
        isCorrect: false,
      },
      {
        option: 'farmakologia',
        isCorrect: true,
      },
      {
        option: 'fizjologia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 284,
    question: 'Dawka dobowa leku określa: ',
    answers: [
      {
        option: 'ilość danego leku w pojedynczych dawkach w ciągu doby',
        isCorrect: true,
      },
      {
        option:
          'ilość leku, która powoduje zaburzenia czynności organizmu w granicach patologicznych (wywołuje działanie trujące)',
        isCorrect: false,
      },
      {
        option:
          'najmniejsza ilość leku, która poraża czynności życiowe organizmu  takie jak oddychanie lub czynność serca i powoduje śmierć',
        isCorrect: false,
      },
    ],
  },
  {
    number: 285,
    question:
      'W wypadku leków do użytku wewnętrznego w ulotce jest podawana informacja, że najlepiej zażywać leki, popijając je wodą, ponieważ inne płyny takie jak mleko, soki mogą wpływać na przyswajalność oraz metabolizm leków. Który z soków ma największy wpływ na przyswajalność oraz metabolizm leków w organizmie? ',
    answers: [
      {
        option: 'sok pomarańczowy',
        isCorrect: false,
      },
      {
        option: 'sok truskawkowy',
        isCorrect: false,
      },
      {
        option: 'sok grejpfrutowy',
        isCorrect: true,
      },
    ],
  },
  {
    number: 286,
    question:
      'Które leki nie podlegają procesom uwalniania i wchłaniania, ponieważ bezpośrednio mieszają się z krwią? ',
    answers: [
      {
        option: 'leki podskórne',
        isCorrect: false,
      },
      {
        option: 'leki doustne',
        isCorrect: false,
      },
      {
        option: 'leki dożylne',
        isCorrect: true,
      },
    ],
  },
  {
    number: 287,
    question: 'Insulinę oraz niektóre probiotyki należy przechowywać w temperaturze: ',
    answers: [
      {
        option: 'pokojowej, czyli 25 stopni Celsjusza',
        isCorrect: false,
      },
      {
        option: 'ok. 2-3 stopni Celsjusza',
        isCorrect: true,
      },
      {
        option: 'temperatura przechowywania nie ma znaczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 288,
    question:
      'Z przyjmowaniem leków przez osoby starsze wiąże się zjawisko polipragmazji, zwane inaczej wielolekowością. Polipragmazja to przyjmowanie przez pacjenta co najmniej: ',
    answers: [
      {
        option: 'dwóch leków jednocześnie',
        isCorrect: false,
      },
      {
        option: 'trzech leków jednocześnie',
        isCorrect: false,
      },
      {
        option: 'pięciu leków jednocześnie',
        isCorrect: true,
      },
    ],
  },
  {
    number: 289,
    question: 'Każde niekorzystne i niezamierzone działanie produktu leczniczego to: ',
    answers: [
      {
        option: 'działanie uboczne',
        isCorrect: false,
      },
      {
        option: 'działanie niepożądane',
        isCorrect: true,
      },
      {
        option: 'polipragmazja',
        isCorrect: false,
      },
    ],
  },
  {
    number: 290,
    question: 'Leki w zależności od przygotowania dzielą się na apteczne i gotowe. Lek apteczny to:',
    answers: [
      {
        option:
          'produkt leczniczy sporządzony w aptece przez farmaceutę, dla określonej osoby, na podstawie indywidualnej recepty',
        isCorrect: true,
      },
      {
        option: 'produkt leczniczy w opakowaniu mający określona nazwę',
        isCorrect: false,
      },
      {
        option: 'każdy lek zakupiony w aptece',
        isCorrect: false,
      },
    ],
  },
  {
    number: 291,
    question: 'Leki mukolityczne, czyli rozrzedzające wydzielinę, powinno się podawać najpóźniej do godziny: ',
    answers: [
      {
        option: '12:00',
        isCorrect: false,
      },
      {
        option: '14:00',
        isCorrect: false,
      },
      {
        option: '16:00',
        isCorrect: true,
      },
    ],
  },
  {
    number: 292,
    question: 'W przypadku nieobecności pacjenta w trakcie podawania leków należy:',
    answers: [
      {
        option: 'pozostawić kieliszek na jego szafce',
        isCorrect: false,
      },
      {
        option: 'poprosić pacjenta z sąsiedniego lóżka o przekazanie kieliszka z lekami',
        isCorrect: false,
      },
      {
        option:
          'należy podać lek w późniejszym czasie, ponieważ nie wolno zostawić kieliszka z lekami pod nieobecność pacjenta',
        isCorrect: true,
      },
    ],
  },
  {
    number: 293,
    question: 'Lek zlecony doraźnie to lek, który podaje się: ',
    answers: [
      {
        option: 'w razie potrzeby',
        isCorrect: true,
      },
      {
        option: 'na prośbę pacjenta',
        isCorrect: false,
      },
      {
        option: 'przez pierwsze 3 dni leczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 294,
    question: 'Insulina po wyjęciu z lodówki jest ważna: ',
    answers: [
      {
        option: '15 dni',
        isCorrect: false,
      },
      {
        option: '30 dni',
        isCorrect: true,
      },
      {
        option: 'pól roku',
        isCorrect: false,
      },
    ],
  },
  {
    number: 295,
    question:
      'Lipohipertrofia to rozrost adipocytów, czyli komórek tkanki tłuszczowej. Lipohipertrofia potocznie nazywa się: ',
    answers: [
      {
        option: 'blizną',
        isCorrect: false,
      },
      {
        option: 'rozstępem',
        isCorrect: false,
      },
      {
        option: 'zrostem',
        isCorrect: true,
      },
    ],
  },
  {
    number: 296,
    question: 'Pen to z angielskiego długopis. Pen zwany jest inaczej: ',
    answers: [
      {
        option: 'wstrzykiwaczem',
        isCorrect: true,
      },
      {
        option: 'ampułkostrzykawką',
        isCorrect: false,
      },
      {
        option: 'insulinaczem',
        isCorrect: false,
      },
    ],
  },
  {
    number: 297,
    question: 'Aby zapobiec zrostom należy: ',
    answers: [
      {
        option: 'zawsze przed podaniem wymieszać insulinę',
        isCorrect: false,
      },
      {
        option: 'zawsze przed poddaniem ogrzać insulinę',
        isCorrect: false,
      },
      {
        option: 'zmieniać miejsca wkłucia',
        isCorrect: true,
      },
    ],
  },
  {
    number: 298,
    question: 'Podając insulinę w brzuch, należy zachować odstęp 1-2 cm od: ',
    answers: [
      {
        option: 'spojenia łonowego',
        isCorrect: false,
      },
      {
        option: 'żebra',
        isCorrect: false,
      },
      {
        option: 'pępka',
        isCorrect: true,
      },
    ],
  },
  {
    number: 299,
    question: 'Należy podawać insulinę o temperaturze pokojowej. Podanie zimnej insuliny jest:',
    answers: [
      {
        option: 'bardziej bolesne',
        isCorrect: true,
      },
      {
        option: 'powoduje powstanie krwiaka',
        isCorrect: false,
      },
      {
        option: 'zmienia właściwości insuliny',
        isCorrect: false,
      },
    ],
  },
  {
    number: 300,
    question: 'Podczas wstrzyknięcia insuliny należy przytrzymać fałd, aby: ',
    answers: [
      {
        option: 'ukłucie mniej bolało',
        isCorrect: false,
      },
      {
        option: 'oddzielić tkankę podskómą od mięśniowej',
        isCorrect: true,
      },
      {
        option: 'zasygnalizować pacjentowi zamiar ukłucia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 301,
    question:
      'Jedną z zasad podawania insuliny jest zmiana igły. Wielokrotne wstrzyknięcia tą sama igłą mogą być przyczyną powstawania: ',
    answers: [
      {
        option: 'siniaków',
        isCorrect: false,
      },
      {
        option: 'zrostów',
        isCorrect: true,
      },
      {
        option: 'krwiaków',
        isCorrect: false,
      },
    ],
  },
  {
    number: 302,
    question: 'Wyjmując wkład z insuliną z lodówki, należy: ',
    answers: [
      {
        option: 'oznaczyć datę wyjęcia z lodówki',
        isCorrect: true,
      },
      {
        option: 'ogrzać insulinę, wystawiając ja na działanie promieni słonecznych',
        isCorrect: false,
      },
      {
        option: 'ogrzać insulinę w kąpieli wodnej',
        isCorrect: false,
      },
    ],
  },
  {
    number: 303,
    question: 'Podając insulinę w brzuch, należy zachować odstęp: ',
    answers: [
      {
        option: '1-2 cm od pępka',
        isCorrect: true,
      },
      {
        option: '5-10 cm od pępka',
        isCorrect: false,
      },
      {
        option: 'nie jest wymagane zachowanie odstępu od pępka',
        isCorrect: false,
      },
    ],
  },
  {
    number: 304,
    question: 'Insulina po wyjęciu z lodówki jest ważna 30 dni. Po tym okresie należy wkład z insuliną: ',
    answers: [
      {
        option: 'zutylizować, oddając do apteki',
        isCorrect: true,
      },
      {
        option: 'włożyć do lodówki i po okresie 3 dni można ponownie z niego korzystać',
        isCorrect: false,
      },
      {
        option: 'wykorzystywać jedynie do podania w pośladek',
        isCorrect: false,
      },
    ],
  },
  {
    number: 305,
    question:
      'Insuliny w postaci zawiesiny wymagają zamieszania. Mieszanie wykonuje się delikatnie ruchem wahadłowym do uzyskania jednorodnego roztworu. Ruch wahadłowy należy wykonać: ',
    answers: [
      {
        option: '10 razy',
        isCorrect: false,
      },
      {
        option: '20 razy',
        isCorrect: false,
      },
      {
        option: '30 razy',
        isCorrect: true,
      },
    ],
  },
  {
    number: 306,
    question: 'W przypadku wkładu z insuliną należy wyjąć go z lodówki na: ',
    answers: [
      {
        option: 'pól godziny przed iniekcją',
        isCorrect: false,
      },
      {
        option: '1-2 godziny przed iniekcją',
        isCorrect: true,
      },
      {
        option: '6 godzin przed iniekcją',
        isCorrect: false,
      },
    ],
  },
  {
    number: 307,
    question: 'Hipoglikemia to stężenie glukozy we krwi poniżej: ',
    answers: [
      {
        option: '50 mg/dl',
        isCorrect: false,
      },
      {
        option: '60 mg/dl',
        isCorrect: false,
      },
      {
        option: '70 mg/dl',
        isCorrect: true,
      },
    ],
  },
  {
    number: 308,
    question: 'Przyczyną hipoglikemii może być: ',
    answers: [
      {
        option: 'spożycie większej ilości pokarmu',
        isCorrect: false,
      },
      {
        option: 'podanie zbyt dużej dawki insuliny',
        isCorrect: true,
      },
      {
        option: 'podanie zbyt małej dawki insuliny ',
        isCorrect: false,
      },
    ],
  },
  {
    number: 309,
    question: 'Glukagon to: ',
    answers: [
      {
        option: 'hormon zwiększający uwalnianie glukozy z wątroby',
        isCorrect: true,
      },
      {
        option: 'hormon zmniejszający uwalnianie glukozy z wątroby',
        isCorrect: false,
      },
      {
        option: 'obniżający stężenie glukozy we krwi',
        isCorrect: false,
      },
    ],
  },
  {
    number: 310,
    question:
      'Podczas wystąpienia hipoglikemii u pacjenta przytomnego, współpracującego i bez zaburzeń połykania należy: ',
    answers: [
      {
        option: 'podać 15 g glukozy i za 15 minut ponownie zmierzyć poziom cukru we krwi',
        isCorrect: true,
      },
      {
        option: 'podać glukagon donosowo lub podskórnie',
        isCorrect: false,
      },
      {
        option: 'podać 15g glukozy, np. 3/4 szklanki soku, ponownie zmierzenie  cukru we krwi nie jest konieczne',
        isCorrect: false,
      },
    ],
  },
  {
    number: 311,
    question: 'Glukagon podskórnie można podać: ',
    answers: [
      {
        option: 'w brzuch, ramię, pośladek, udo',
        isCorrect: true,
      },
      {
        option: 'w nogę i okolice podłopatkową',
        isCorrect: false,
      },
      {
        option: 'wyłącznie w pośladek',
        isCorrect: false,
      },
    ],
  },
  {
    number: 312,
    question: 'Glukagon należy przechowywać w temperaturze: ',
    answers: [
      {
        option: 'od 2 do 8 °C',
        isCorrect: true,
      },
      {
        option: 'w zamrażarce',
        isCorrect: false,
      },
      {
        option: 'powyżej 30 °C',
        isCorrect: false,
      },
    ],
  },
  {
    number: 313,
    question: 'Podczas podania glukagonu podskórnie należy: ',
    answers: [
      {
        option: 'uchwycić fałd skórny',
        isCorrect: false,
      },
      {
        option: 'nie należy wykonywać fałdu',
        isCorrect: true,
      },
      {
        option: 'należy utrzymać fałd skórny przez cały okres wstrzyknięcia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 314,
    question: 'Przeciwwskazaniem do podania glukagonu pacjentowi jest: ',
    answers: [
      {
        option: 'spożycie węglowodanów złożonych',
        isCorrect: false,
      },
      {
        option: 'hipoglikemia',
        isCorrect: false,
      },
      {
        option: 'spożycie alkoholu',
        isCorrect: true,
      },
    ],
  },
  {
    number: 315,
    question: 'Spożycie alkoholu: ',
    answers: [
      {
        option: 'nie ma wpływu na gospodarkę węglowodanową',
        isCorrect: false,
      },
      {
        option: 'zwiększa uwalnianie glukozy z wątroby',
        isCorrect: false,
      },
      {
        option: 'hamuje uwalnianie glukozy z wątroby',
        isCorrect: true,
      },
    ],
  },
  {
    number: 316,
    question: 'Heparyna drobnocząsteczkowa zapobiega: ',
    answers: [
      {
        option: 'zakrzepom krwi',
        isCorrect: true,
      },
      {
        option: 'krwawieniu',
        isCorrect: false,
      },
      {
        option: 'alergii',
        isCorrect: false,
      },
    ],
  },
  {
    number: 317,
    question: 'Heparyna drobnocząsteczkowa jest stosowana w profilaktyce: ',
    answers: [
      {
        option: 'żylnej choroby zakrzepowo-zatorowej',
        isCorrect: true,
      },
      {
        option: 'odleżyn',
        isCorrect: false,
      },
      {
        option: 'zapalenia płuc',
        isCorrect: false,
      },
    ],
  },
  {
    number: 318,
    question: 'Podając heparynę drobnocząsteczkowa należy pamiętać aby: ',
    answers: [
      {
        option: 'usunąć bąbelek powietrza',
        isCorrect: false,
      },
      {
        option: 'nie usuwać bąbelka powietrza',
        isCorrect: true,
      },
      {
        option: 'dokładnie wymieszać heparynę',
        isCorrect: false,
      },
    ],
  },
  {
    number: 319,
    question: 'Podając heparynę drobnocząsteczkową za pomocą ampułkostrzykawki należy: ',
    answers: [
      {
        option: 'Utrzymywać fałd do czasu wykonania ukłucia',
        isCorrect: false,
      },
      {
        option: 'Utrzymywać fałd skórny przez cały okres wstrzyknięcia, czyli do momentu wyjęcia igły ze skóry',
        isCorrect: true,
      },
      {
        option: 'Podając heparynę nie należy wykonywać fałdu skórnego',
        isCorrect: false,
      },
    ],
  },
  {
    number: 320,
    question: 'Najczęstszym powikłaniem po podaniu heparyny drobnocząsteczkowej jest: ',
    answers: [
      {
        option: 'krwiak',
        isCorrect: true,
      },
      {
        option: 'zapalenie żył',
        isCorrect: false,
      },
      {
        option: 'martwica skóry',
        isCorrect: false,
      },
    ],
  },
  {
    number: 321,
    question: 'Po podaniu heparyny drobnocząsteczkowej nie wolno: ',
    answers: [
      {
        option: 'Uciskać miejsca wstrzyknięcia',
        isCorrect: false,
      },
      {
        option: 'Masować miejsca wstrzyknięcia',
        isCorrect: true,
      },
      {
        option: 'Zabezpieczać jałowym gazikiem miejsca wstrzyknięcia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 322,
    question: 'Podanie heparyny drobnocząsteczkowej powinno być wykonane pod kątem:',
    answers: [
      {
        option: '15 stopni',
        isCorrect: false,
      },
      {
        option: '45 stopni',
        isCorrect: false,
      },
      {
        option: 'prostym, czyli 90 stopni',
        isCorrect: true,
      },
    ],
  },
  {
    number: 323,
    question: 'Najczęstszym miejscem podania heparyny drobnocząsteczkowej jest:',
    answers: [
      {
        option: 'ramię',
        isCorrect: false,
      },
      {
        option: 'udo',
        isCorrect: false,
      },
      {
        option: 'brzuch',
        isCorrect: true,
      },
    ],
  },
  {
    number: 324,
    question: 'Zakładając czopek do odbytu, powinno umieścić się go: ',
    answers: [
      {
        option: 'tuż za zwieraczem odbytu',
        isCorrect: true,
      },
      {
        option: 'na głębokość palca',
        isCorrect: false,
      },
      {
        option: 'nie ma znaczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 325,
    question: 'Określenie sub lingue oznacza podanie leku: ',
    answers: [
      {
        option: 'okołopoliczkowo',
        isCorrect: false,
      },
      {
        option: 'podjęzykowo',
        isCorrect: true,
      },
      {
        option: 'doodbytniczo',
        isCorrect: false,
      },
    ],
  },
  {
    number: 326,
    question: 'Zakładając czopek, należy ułożyć pacjenta w pozycji: ',
    answers: [
      {
        option: 'na plecach',
        isCorrect: false,
      },
      {
        option: 'na prawym boku',
        isCorrect: false,
      },
      {
        option: 'na lewym boku z kolanami przyciągniętymi do klatki piersiowej',
        isCorrect: true,
      },
    ],
  },
  {
    number: 327,
    question: 'Czopek należy przytrzymać w odbycie co najmniej: ',
    answers: [
      {
        option: '2 minut',
        isCorrect: false,
      },
      {
        option: '5 minut',
        isCorrect: false,
      },
      {
        option: '15 minut',
        isCorrect: true,
      },
    ],
  },
  {
    number: 328,
    question: 'Efekt pierwszego przejścia to: ',
    answers: [
      {
        option: 'eliminacja leku przed dostaniem się do krążenia ogólnoustrojowego',
        isCorrect: true,
      },
      {
        option: 'zrobienie dobrego wrażenia na rozmówcy',
        isCorrect: false,
      },
      {
        option: 'zespól objawów po odstawieniu leku',
        isCorrect: false,
      },
    ],
  },
  {
    number: 329,
    question:
      'Po jakiej grupie leków podanych przez układ oddechowy należy poprosić pacjenta o przepłukanie jamy ustnej i gardła? ',
    answers: [
      {
        option: 'leków rozszerzających oskrzela',
        isCorrect: false,
      },
      {
        option: 'glikokortykosteroidów',
        isCorrect: true,
      },
      {
        option: 'leków rozrzedzających wydzielinę',
        isCorrect: false,
      },
    ],
  },
  {
    number: 330,
    question:
      'Ze względu na zastosowaną metodę wytwarzania aerozolu inhalatory ultradźwiękowe nie nadają się do nebulizacji niektórych leków. Ultradźwięki oraz podwyższona temperatura, która podczas nebulizacji wzrasta powyżej 20*C, rozkłada lub zmienia strukturę niektórych antybiotyków oraz: ',
    answers: [
      {
        option: 'niesteroidowych leków przeciwzapalnych',
        isCorrect: false,
      },
      {
        option: 'leków rozszerzających oskrzela',
        isCorrect: false,
      },
      {
        option: 'glikokortykosteroidów',
        isCorrect: true,
      },
    ],
  },
  {
    number: 331,
    question: 'W inhalatorach kieszonkowych bardzo ważną kwestią wpływającą na skuteczność leczenia jest:',
    answers: [
      {
        option: 'skoordynowanie wdechu z uwolnioną dawką leku',
        isCorrect: true,
      },
      {
        option: 'ogrzanie leku do temperatury pokojowej',
        isCorrect: false,
      },
      {
        option: 'dokładne wymieszanie leku',
        isCorrect: false,
      },
    ],
  },
  {
    number: 332,
    question: 'Przyjęto, że 1 ml wodnego roztworu to: ',
    answers: [
      {
        option: '10 kropli',
        isCorrect: false,
      },
      {
        option: '20 kropli',
        isCorrect: true,
      },
      {
        option: '30 kropli',
        isCorrect: false,
      },
    ],
  },
  {
    number: 333,
    question:
      'Jeżeli stosowane są równocześnie: lek rozszerzający drogi oddechowe i lek glikokortykosteroidowy (przeciwzapalny), należy jako pierwszy przyjąć: ',
    answers: [
      {
        option: 'lek rozszerzający oskrzela',
        isCorrect: true,
      },
      {
        option: 'lek glikokortykosteroidowy',
        isCorrect: false,
      },
      {
        option: 'nie ma znaczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 334,
    question: 'Jedną z zalet inhalacji jest: ',
    answers: [
      {
        option: 'zwiększa działania ubocznego leków',
        isCorrect: false,
      },
      {
        option: 'zmniejszenie działania ubocznego leków',
        isCorrect: true,
      },
      {
        option: 'łatwość przyjmowania',
        isCorrect: false,
      },
    ],
  },
  {
    number: 335,
    question: 'Jeżeli na pełną dawkę leku przypada więcej niż jeden wziew, kolejny należy przyjąć po: ',
    answers: [
      {
        option: '30-60 sekundach',
        isCorrect: true,
      },
      {
        option: '2 minutach',
        isCorrect: false,
      },
      {
        option: 'nie ma znaczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 336,
    question: 'Działaniem niepożądanym glikokortykosteroidów podawanych wziewnie jest/są: ',
    answers: [
      {
        option: 'katar',
        isCorrect: false,
      },
      {
        option: 'kaszel',
        isCorrect: false,
      },
      {
        option: 'zakażenia grzybicze jamy ustnej i gardła',
        isCorrect: true,
      },
    ],
  },
  {
    number: 337,
    question:
      'W zależności od planowanego czasu prowadzenia żywienia drogą sztuczną dostęp do przewodu pokarmowego dzieli się na: krótkotrwały (żywienie będzie prowadzone nie dłużej niż 4 tygodnie) oraz długotrwały (żywienie będzie prowadzone dłużej niż 4 tygodnie). Do dostępu krótkotrwałego zaliczamy: ',
    answers: [
      {
        option: 'Gastrostomię',
        isCorrect: false,
      },
      {
        option: 'Jejunostomię',
        isCorrect: false,
      },
      {
        option: 'Zgłębnik nosowo-żołądkowy',
        isCorrect: true,
      },
    ],
  },
  {
    number: 338,
    question:
      'Leki w postaci tabletki wymagają rozkruszenia i wymieszania z wodą lub z solą fizjologiczną. Rozkruszone tabletki zawieszamy w soli fizjologicznej gdy mamy do czynienia z: ',
    answers: [
      {
        option: 'Gastrostomią',
        isCorrect: false,
      },
      {
        option: 'Zgłębnikiem nosowo-żołądkowym',
        isCorrect: false,
      },
      {
        option: 'Jejuonostomią',
        isCorrect: true,
      },
    ],
  },
  {
    number: 339,
    question:
      'Wyobraź sobie następującą sytuację: masz do podania przez zgłębnik nosowo-żołądkowy lek w postaci zawiesiny oraz syrop. W jaki sposób podasz leki?',
    answers: [
      {
        option:
          'Najpierw podasz zawiesinę rozcieńczoną w letniej przegotowanej wodzie, następnie syrop rozcieńczony w taki sam sposób',
        isCorrect: true,
      },
      {
        option: 'Rozcieńczysz lek razem i podasz pacjentowi jednoczasowo',
        isCorrect: false,
      },
      {
        option: 'Podasz przez zgłębnik jedynie syrop, ponieważ zawiesiny nie można podawać droga sztuczna',
        isCorrect: false,
      },
    ],
  },
  {
    number: 340,
    question:
      'Wyobraź sobie następującą sytuację: masz do podania przez zgłębnik nosowo-żołądkowy lek w postaci tabletek dojelitowych. W jaki sposób go podasz?',
    answers: [
      {
        option: 'Skontaktujesz się z lekarzem, ponieważ nie można kruszyć leków w postaci tabletek dojelitowych',
        isCorrect: true,
      },
      {
        option: 'Rozkruszysz go w moździerzu i wymieszasz z letnią przegotowaną wodą',
        isCorrect: false,
      },
      {
        option: 'Rozkruszysz go w moździerzu i wymieszasz z solą fizjologiczną',
        isCorrect: false,
      },
    ],
  },
  {
    number: 341,
    question:
      'Nie należy mieszać leków z dietą. Na czas podania leku należy wstrzymać podaż diety. Podając lek pacjentowi, jeśli to możliwe, należy zachować odstęp między dietą i podaniem leku wynoszący:',
    answers: [
      {
        option: '5 minut',
        isCorrect: false,
      },
      {
        option: '15 minut',
        isCorrect: false,
      },
      {
        option: '30 minut',
        isCorrect: true,
      },
    ],
  },
  {
    number: 342,
    question:
      'Większość leków podawanych do sondy nosowo-żołądkowej należy rozpuszczać w letniej przegotowanej wodzie w ilości:',
    answers: [
      {
        option: 'Od 10 do 30 ml',
        isCorrect: true,
      },
      {
        option: 'Od 50 do 100 ml',
        isCorrect: false,
      },
      {
        option: 'W co najmniej 100 ml',
        isCorrect: false,
      },
    ],
  },
  {
    number: 343,
    question: 'Naczynie służące do rozkruszania leków to:',
    answers: [
      {
        option: 'gilotyna',
        isCorrect: false,
      },
      {
        option: 'moździerz',
        isCorrect: true,
      },
      {
        option: 'tłuczek',
        isCorrect: false,
      },
    ],
  },
  {
    number: 344,
    question: 'Po rozkruszeniu leków w moździerzu należy moździerz:',
    answers: [
      {
        option: 'Umyć, zdezynfekować i osuszyć',
        isCorrect: false,
      },
      {
        option: 'Wyłącznie umyć i osuszyć',
        isCorrect: true,
      },
      {
        option: 'Nie trzeba myć ani dezynfekować moździerza',
        isCorrect: false,
      },
    ],
  },
  {
    number: 345,
    question:
      'W zależności od planowanego czasu prowadzenia żywienia drogą sztuczną dostęp do przewodu pokarmowego dzieli się na: krótkotrwały (żywienie będzie prowadzone nie dłużej niż 4 tygodnie) oraz długotrwały (żywienie będzie prowadzone dłużej niż 4 tygodnie). Do dostępu długotrwałego zaliczamy:',
    answers: [
      {
        option: 'Gastrostomię',
        isCorrect: true,
      },
      {
        option: 'Zgłębnik nosowo-jelitowy',
        isCorrect: false,
      },
      {
        option: 'Zgłębnik nosowo-żołądkowy',
        isCorrect: false,
      },
    ],
  },
  {
    number: 346,
    question: 'Preferowane i zalecane formy leków do podaży przez sztuczny dostęp odżywczy to: ',
    answers: [
      {
        option: 'Płynne postacie leków',
        isCorrect: true,
      },
      {
        option: 'Leki w postaci tabletek',
        isCorrect: false,
      },
      {
        option: 'Leki w postaci kapsułek',
        isCorrect: false,
      },
    ],
  },
  {
    number: 347,
    question: 'Opiekun medyczny zgodnie z zakresem swoich kompetencji może:',
    answers: [
      {
        option: 'podłączyć wlew kroplowy',
        isCorrect: false,
      },
      {
        option: 'odłączyć wlew kroplowy',
        isCorrect: true,
      },
      {
        option: 'zarówno podłączyć, jak i odłączyć wlew kroplowy',
        isCorrect: false,
      },
    ],
  },
  {
    number: 348,
    question: 'Opiekun medyczny zgodnie z zakresem swoich kompetencji może:',
    answers: [
      {
        option: 'podłączyć wlew kroplowy',
        isCorrect: false,
      },
      {
        option: 'odłączyć wlew kroplowy',
        isCorrect: true,
      },
      {
        option: 'zarówno podłączyć, jak i odłączyć wlew kroplowy',
        isCorrect: false,
      },
    ],
  },
  {
    number: 349,
    question:
      'Przed przystąpieniem do procedury odłączania wlewu kroplowego u pacjenta należy sprawdzić jego tożsamość. Aby to zrobić, należy zapytać:',
    answers: [
      {
        option: '„Pan Jan Kowalski?”',
        isCorrect: false,
      },
      {
        option: '„Przepraszam, czy nazywa się pan Jan Kowalski?”',
        isCorrect: false,
      },
      {
        option: '„Jak się pan nazywa?”',
        isCorrect: true,
      },
    ],
  },
  {
    number: 350,
    question:
      'Podczas odłączania kroplówki upadł Ci na podłogę koreczek jednorazowy. Jak zachowasz się w tej sytuacji?',
    answers: [
      {
        option: 'Podniesiesz koreczek, który Ci upadł i przykręcisz go do wenflonu',
        isCorrect: false,
      },
      {
        option: 'Pójdziesz po nowy koreczek',
        isCorrect: true,
      },
      {
        option:
          'Podniesiesz z podłogi koreczek, zdezynfekujesz go środkiem na bazie alkoholu i przykręcisz go do wenflonu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 351,
    question: 'Podczas przygotowywania sprzętu do odłączania kroplówki wyłożysz na wózek pielęgnacyjny:',
    answers: [
      {
        option: 'koreczek, gazik jałowy i rękawiczki sterylne',
        isCorrect: false,
      },
      {
        option: 'koreczek, gazik jałowy i rękawiczki niesterylne',
        isCorrect: true,
      },
      {
        option: 'koreczek, gazik jałowy, rękawiczki sterylne i płyn infuzyjny zgodny ze zleceniem lekarskim',
        isCorrect: false,
      },
    ],
  },
  {
    number: 352,
    question:
      'Krótka kaniula dożylna, czyli wenflon występuje w różnych rozmiarach. Każdemu rozmiarowi odpowiada inny kolor. Najczęściej stosowany rozmiar wenflonu, czyli 20 G jest koloru: ',
    answers: [
      {
        option: 'Niebieskiego',
        isCorrect: false,
      },
      {
        option: 'Szarego',
        isCorrect: false,
      },
      {
        option: 'Różowego',
        isCorrect: true,
      },
    ],
  },
  {
    number: 353,
    question: 'Wenflon może wystąpić w różnych kolorach: np. różowym. Jednak nie występuje w kolorze: ',
    answers: [
      {
        option: 'Czerwonym',
        isCorrect: true,
      },
      {
        option: 'Zielonym',
        isCorrect: false,
      },
      {
        option: 'Niebieskim',
        isCorrect: false,
      },
    ],
  },
  {
    number: 354,
    question:
      'Podczas odłączania kroplówki zauważasz, że miejsce założenia wenflonu jest obrzęknięte i zaczerwienione. Co w takiej sytuacji zrobisz?',
    answers: [
      {
        option: 'Zgłosisz ten fakt niezwłocznie pielęgniarce',
        isCorrect: true,
      },
      {
        option: 'Przyłożysz okład chłodzący',
        isCorrect: false,
      },
      {
        option: 'Posmarujesz okolice wenflonu maścią ze środkiem przeciwzapalnym',
        isCorrect: false,
      },
    ],
  },
  {
    number: 355,
    question:
      'Przygotowując zestaw do kroplowego wlewu dożylnego zauważasz, że upłynęła jego data ważności. Co zrobisz w takiej sytuacji?',
    answers: [
      {
        option: 'Wymienisz koreczek na nowy z aktualną datą',
        isCorrect: true,
      },
      {
        option: 'Użyjesz koreczka pomimo upływu terminu ważności',
        isCorrect: false,
      },
      {
        option: 'Przed użyciem koreczka zdezynfekujesz go środkiem na bazie alkoholu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 356,
    question: 'Kinezyterapia to dział fizjoterapii zajmujący się leczeniem:',
    answers: [
      {
        option: 'z wykorzystaniem bodźców fizykalnych, światła, prądu, pola magnetycznego',
        isCorrect: false,
      },
      {
        option: 'z wykorzystaniem ruchu.',
        isCorrect: true,
      },
      {
        option: 'z wykorzystaniem masażu.',
        isCorrect: false,
      },
      {
        option: 'żadne z wyżej wymienionych.',
        isCorrect: false,
      },
    ],
  },
  {
    number: 357,
    question:
      'W przypadku pacjenta leżącego, u którego doszło do wiotkiego porażenia kończyny dolnej lewej, powinniśmy zastosować ćwiczenia:',
    answers: [
      {
        option: 'czynne z oporem',
        isCorrect: false,
      },
      {
        option: 'czynne wspomagane',
        isCorrect: false,
      },
      {
        option: 'prowadzone',
        isCorrect: false,
      },
      {
        option: 'bierne',
        isCorrect: true,
      },
    ],
  },
  {
    number: 358,
    question: 'Jeżeli siedzimy i zginamy prawy łokieć to nasz mięsień ramienia (dwugłowy ramienia), pracuje w skurczu:',
    answers: [
      {
        option: 'koncentrycznym',
        isCorrect: true,
      },
      {
        option: 'ekscentrycznym',
        isCorrect: false,
      },
      {
        option: 'izometrycznym',
        isCorrect: false,
      },
      {
        option: 'izotonicznym',
        isCorrect: false,
      },
    ],
  },
  {
    number: 359,
    question: 'Najlepszym domowym sposobem schłodzenia oparzonej kończyny może być:',
    answers: [
      {
        option: 'kąpiel w wannie z lodem',
        isCorrect: false,
      },
      {
        option: 'krioterapia',
        isCorrect: false,
      },
      {
        option: 'polewanie zimną wodą',
        isCorrect: true,
      },
      {
        option: 'wykorzystanie masażu kostką lodem',
        isCorrect: false,
      },
    ],
  },
  {
    number: 360,
    question: 'Chwyt w masażu, od którego zaczynamy i kończymy zabieg to:',
    answers: [
      {
        option: 'oklepywanie',
        isCorrect: false,
      },
      {
        option: 'wstrząsanie',
        isCorrect: false,
      },
      {
        option: 'głaskanie',
        isCorrect: true,
      },
      {
        option: 'ugniatanie',
        isCorrect: false,
      },
    ],
  },
  {
    number: 361,
    question:
      'Problemy, które pojawiają się w komunikacji z chorym, związane są m.in. z zaburzeniem zwanym afazją, czyli zaburzenia mowy. Wyróżniamy afazję ruchową oraz:',
    answers: [
      {
        option: 'czuciową',
        isCorrect: true,
      },
      {
        option: 'werbalną',
        isCorrect: false,
      },
      {
        option: 'niewerbalną',
        isCorrect: false,
      },
    ],
  },
  {
    number: 362,
    question:
      'W chorobie Alzheimera zaleca się, aby stymulować, czyli pobudzać wszystkie zmysły chorego. Włączając ulubione utwory muzyczne, muzykę relaksacyjną, wspólnie odgadując dochodzące do uszu chorego dźwięki, stymulujemy:',
    answers: [
      {
        option: 'węch',
        isCorrect: false,
      },
      {
        option: 'słuch',
        isCorrect: true,
      },
      {
        option: 'dotyk',
        isCorrect: false,
      },
    ],
  },
  {
    number: 363,
    question:
      'Korzystanie przez opiekunów z podnośników transportowych zmniejsza ryzyko wystąpienia urazów związanych z podnoszeniem pacjentów praktycznie do zera. Aby transport transport pacjenta za pomocą podnośnika był bardziej stabilny należy:',
    answers: [
      {
        option: 'Ułożyć nogi podnośnika w pozycji zamkniętej',
        isCorrect: false,
      },
      {
        option: 'Ułożyć nogi podnośnika w pozycji rozwartej',
        isCorrect: true,
      },
      {
        option: 'Nie ma to znaczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 364,
    question:
      'Aby łatwiej przebiegało przenoszenie czy unoszenie chorego a także aby nie narazić na kontuzje swojego kręgosłupa należy:',
    answers: [
      {
        option: 'Zmniejszyć odległość między pacjentami a sobą',
        isCorrect: true,
      },
      {
        option: 'Zwiększyć odległość między pacjentem a sobą',
        isCorrect: false,
      },
      {
        option: 'Odległość między nami a pacjentem powinna wynosić 0,5 m',
        isCorrect: false,
      },
    ],
  },
  {
    number: 365,
    question:
      'Aby nie przeciążać swojego kręgosłupa przenosząc czy choćby unosząc tylko osobę niesprawną, ZAWSZE trzeba mieć:',
    answers: [
      {
        option: 'Wyprostowane kolana',
        isCorrect: false,
      },
      {
        option: 'Ugięte kolana i całkowicie proste plecy',
        isCorrect: true,
      },
      {
        option: 'Nie ma to znaczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 366,
    question:
      'Kiedy przenosi się osobę z niepełnosprawnością z wózka inwalidzkiego na łóżko lub odwrotnie, lub gdy pomaga jej się zmienić pozycję ciała, wsiąść do samochodu, umyć, ubrać, przemieszczać na wózku należy pamiętać podczas wykonywania tych czynności nogi opiekuna były:',
    answers: [
      {
        option: 'Ugięte w stawach kolanowych',
        isCorrect: true,
      },
      {
        option: 'Wyprostowane w stawach kolanowych',
        isCorrect: false,
      },
      {
        option: 'W stawie kolanowym powinna być wyprostowana jedynie prawa noga',
        isCorrect: false,
      },
    ],
  },
  {
    number: 367,
    question: 'Do kąpieli pacjenta pod prysznicem wykorzystuje się nosidło wykonane z:',
    answers: [
      {
        option: 'poliestru',
        isCorrect: false,
      },
      {
        option: 'siatki poliestrowej',
        isCorrect: true,
      },
      {
        option: 'bawełny',
        isCorrect: false,
      },
    ],
  },
  {
    number: 368,
    question:
      'Jedna z zasad korzystania z podnośników transportowych mówi, że zanim umieścisz pacjenta w podnośniku, sprawdź czy podnośnik jest dość mocny by unieść ciężar podopiecznego. Wyobraź sobie, że Twój podopieczny waży 160 kg a maksymalne obciążenia podnośnika transportowego wynosi 150 kg. Co zrobisz w tej sytuacji?',
    answers: [
      {
        option: 'Przetransportujesz pacjenta mimo wszystko. W końcu różnica 10 kg to nie jest sporo',
        isCorrect: false,
      },
      {
        option: 'Zrezygnujesz z transportu chorego za pomocą podnośnika',
        isCorrect: true,
      },
      {
        option: 'Poinformujesz pacjenta o ryzyku i jeśli się tylko zgodzi — przetransportujesz go',
        isCorrect: false,
      },
    ],
  },
  {
    number: 369,
    question:
      'Przyczyny wypadków dzielą się na zewnętrzne i wewnętrzne. Przyczyny zewnętrzne spowodowane są głównie otoczeniem, w którym znajduje się osoba starsza. Z kolei przyczyny wewnętrzne wynikają z:',
    answers: [
      {
        option: 'procesu starzenia się i chorób',
        isCorrect: true,
      },
      {
        option: 'niedostosowania mieszkania do ograniczeń osoby starszej',
        isCorrect: false,
      },
      {
        option: 'niewłaściwego oświetlenia mieszkania',
        isCorrect: false,
      },
    ],
  },
  {
    number: 370,
    question:
      'Jednym z działań zapobiegających konsekwencjom fizycznym upadków jest odpowiednia wysokość łóżka. Wysokość łóżka od górnego brzegu materaca do podłogi powinna wynosić:',
    answers: [
      {
        option: 'maksymalnie ok. 45-50 cm',
        isCorrect: true,
      },
      {
        option: 'maksymalnie ok. 1 m',
        isCorrect: false,
      },
      {
        option: 'minimum ok. 45-50 cm',
        isCorrect: false,
      },
    ],
  },
  {
    number: 371,
    question:
      'Wysokość lasek oraz kul łokciowych powinna być tak dobrana, aby przy oparciu się na niej zgięcie kończyny w stawie łokciowym wynosiło:',
    answers: [
      {
        option: '10 stopni',
        isCorrect: false,
      },
      {
        option: '20 stopni',
        isCorrect: true,
      },
      {
        option: '30 stopni',
        isCorrect: false,
      },
    ],
  },
  {
    number: 372,
    question:
      'Osoby w starszym wieku poruszają się wolniej, stawiają mniejsze kroki, stopy unoszą niżej w stosunku do podłoża, ruchy rotacji w stawach biodrowych i kolanowych, także wymachy kończyn górnych, ulegają ograniczeniu, a faza obunożnego podporu ulega wydłużeniu. Jest to tzw.',
    answers: [
      {
        option: 'chód starczy',
        isCorrect: true,
      },
      {
        option: 'chód małego dziecka',
        isCorrect: false,
      },
      {
        option: 'chód na szerokiej podstawie',
        isCorrect: false,
      },
    ],
  },
  {
    number: 373,
    question: 'Skala Tinetti służy do oceny ryzyka:',
    answers: [
      {
        option: 'zachłyśnięcia się',
        isCorrect: false,
      },
      {
        option: 'upadków',
        isCorrect: true,
      },
      {
        option: 'omdleń',
        isCorrect: false,
      },
    ],
  },
  {
    number: 374,
    question: 'Odleżyna to rodzaj owrzodzenia wynikający z niedokrwienia powstałego na skutek:',
    answers: [
      {
        option: 'ucisku',
        isCorrect: true,
      },
      {
        option: 'miażdżycy',
        isCorrect: false,
      },
      {
        option: 'krwotoku',
        isCorrect: false,
      },
    ],
  },
  {
    number: 375,
    question:
      'Do oceny ryzyka rozwoju odleżyn opracowano szereg standaryzowanych narzędzi predykcyjnych, analizujących obecność czynników ryzyka i stopniujących ich nasilenie za pomocą wartości punktowych. Jedną z najpopularniejszych skal do oceny ryzyka rozwoju odleżyn jest:',
    answers: [
      {
        option: "Skala Torrance'a",
        isCorrect: false,
      },
      {
        option: 'Skala Norton',
        isCorrect: true,
      },
      {
        option: 'Skala Tinetti',
        isCorrect: false,
      },
    ],
  },
  {
    number: 376,
    question: 'Oceniając ryzyko powstania odleżyny w skali Norton na ryzyko rozwoju odleżyn wskazuje wynik:',
    answers: [
      {
        option: 'Poniżej 3 punktów',
        isCorrect: false,
      },
      {
        option: 'Poniżej 14 punktów',
        isCorrect: true,
      },
      {
        option: 'Poniżej 20 punktów',
        isCorrect: false,
      },
    ],
  },
  {
    number: 377,
    question:
      'Literatura wyróżnia różne rodzaje konfliktów. Ze względu na przedmiot konfliktu wyróżniamy konflikty emocjonalne i konflikty:',
    answers: [
      {
        option: 'interpersonalne',
        isCorrect: false,
      },
      {
        option: 'rzeczowe',
        isCorrect: true,
      },
      {
        option: 'między grupami pracowniczymi',
        isCorrect: false,
      },
    ],
  },
  {
    number: 378,
    question:
      'Wyróżnia się kilka sposobów rozwiązywania konfliktów. Sposób zażegnania konfliktu, w którym konieczne jest, aby każda ze stron z czegoś zrezygnowała to:',
    answers: [
      {
        option: 'Unikanie',
        isCorrect: false,
      },
      {
        option: 'Łagodzenie',
        isCorrect: false,
      },
      {
        option: 'Kompromis',
        isCorrect: true,
      },
    ],
  },
  {
    number: 379,
    question:
      'W zespole terapeutycznym zachodzą takie same procesy jak w każdej innej grupie społecznej. Występowanie konfliktów w zespole terapeutycznym:',
    answers: [
      {
        option: 'Jest powszechnym i naturalnym zjawiskiem',
        isCorrect: true,
      },
      {
        option: 'Oznacza, ze zespól powinien wybrać innego lidera',
        isCorrect: false,
      },
      {
        option: 'Oznacza, ze zespól terapeutyczny nie potrafi ze sobą współpracować',
        isCorrect: false,
      },
    ],
  },
  {
    number: 380,
    question:
      'Wyobraź sobie następującą sytuację: Między opiekunem a jego przełożonym wywinął się konflikt. Przedmiotem konfliktu było to, kto weźmie dyżur w niedzielę. Niedzielny dyżur nie był na rękę opiekunowi, ponieważ planował on tego dnia małą rodzinną uroczystość. Wiedział jednak, że niebawem musi wyjechać na kilka dni i będzie potrzebował urlopu. Opiekun wyszedł z założenia, że lepiej będzie jeśli weźmie niedzielny dyżur, co też uczynił. Z jakim sposobem rozwiązania konfliktu mamy w tej historii do czynienia? ',
    answers: [
      {
        option: 'rywalizacja',
        isCorrect: false,
      },
      {
        option: 'unikanie',
        isCorrect: false,
      },
      {
        option: 'łagodzenie',
        isCorrect: true,
      },
    ],
  },
  {
    number: 381,
    question:
      'W komunikacji opisano 12 barier utrudniających aktywne słuchanie. Są to: porównywanie, domyślanie się, przygotowywanie odpowiedzi, filtrowanie, osądzanie, skojarzenia, utożsamianie się, udzielanie rad, sprzeciwianie się, przekonanie o swojej racji, zmiana toru i zjednywanie. Bariera, która polega na tym, że cokolwiek powie Twój rozmówca, odnosisz to do swojego doświadczenia to: ',
    answers: [
      {
        option: 'Udzielanie rad',
        isCorrect: false,
      },
      {
        option: 'Utożsamianie się',
        isCorrect: true,
      },
      {
        option: 'Osądzenie',
        isCorrect: false,
      },
    ],
  },
  {
    number: 382,
    question:
      'Słuchanie aktywne polega na przekazywaniu informacji zwrotnej. Dobra informacja zwrotna musi być: natychmiastowa, szczera i:',
    answers: [
      {
        option: 'Krytykująca',
        isCorrect: false,
      },
      {
        option: 'Wspierająca',
        isCorrect: true,
      },
      {
        option: 'Długa',
        isCorrect: false,
      },
    ],
  },
  {
    number: 383,
    question:
      'W komunikacji wyróżnia się 4 rodzaje ekspresji, czyli sposobu wyrażania swoich uczuć. Każdy z nich wymaga innego innego stylu wypowiedzi i często innego słownictwa. Należą do nich: obserwacje, myśli, uczucia i potrzeby. Efektywna komunikacja to pełna komunikacja, czyli taka która zawiera:',
    answers: [
      {
        option: 'Wyłącznie obserwacje',
        isCorrect: false,
      },
      {
        option: 'Myśli i uczucia',
        isCorrect: false,
      },
      {
        option: 'Obserwacje, myśli, uczucia i potrzeby',
        isCorrect: true,
      },
    ],
  },
  {
    number: 384,
    question:
      'Kontaktując się z pacjentem z zaburzeniami słuchu korzystającym z pomocy tłumacza pytanie kierujemy w stronę:',
    answers: [
      {
        option: 'pacjenta',
        isCorrect: true,
      },
      {
        option: 'tłumacza',
        isCorrect: false,
      },
      {
        option: 'nie ma znaczenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 385,
    question: 'Dla ułatwienia pacjentowi niewidomemu orientacji w przestrzeni warto ustalić z nim:',
    answers: [
      {
        option: 'gdzie znajduje się mapa oddziału',
        isCorrect: false,
      },
      {
        option: 'punkty orientacyjne',
        isCorrect: true,
      },
      {
        option: 'miejsce przebywania ordynatora',
        isCorrect: false,
      },
    ],
  },
  {
    number: 386,
    question: 'Podczas komunikacji z pacjentem niewidomym nie należy bać się używania takich słów jak:',
    answers: [
      {
        option: '„widział Pan”',
        isCorrect: true,
      },
      {
        option: '„tam”, „tu”',
        isCorrect: false,
      },
      {
        option: '„za tą szafką na lewo”',
        isCorrect: false,
      },
    ],
  },
  {
    number: 387,
    question: 'Wybierając salę chorych dla pacjenta niewidomego, należy wybrać taką salę chorych:',
    answers: [
      {
        option: 'w której jest dużo lóżek',
        isCorrect: false,
      },
      {
        option: 'w której nie ma łazienki',
        isCorrect: false,
      },
      {
        option: 'która jest wyposażona w łazienkę',
        isCorrect: true,
      },
    ],
  },
  {
    number: 388,
    question: 'Podając pacjentowi niewidomemu kieliszek z lekami najlepiej:',
    answers: [
      {
        option: 'podać mu go do ręki',
        isCorrect: true,
      },
      {
        option: 'położyć mu go na szafce nic nie mówiąc',
        isCorrect: false,
      },
      {
        option: 'położyć mu go na szafce mówiąc mu o tym',
        isCorrect: false,
      },
    ],
  },
  {
    number: 389,
    question: 'Pozycja Trendelenburga to pozycja w której:',
    answers: [
      {
        option: 'głowa pacjenta znajduje się niżej niż jego kończyny',
        isCorrect: true,
      },
      {
        option: 'głowa pacjenta znajduje się wyżej niż jego kończyny',
        isCorrect: false,
      },
      {
        option: 'głowa i kończyny pacjenta znajdują się na tej samej wysokości',
        isCorrect: false,
      },
    ],
  },
  {
    number: 390,
    question:
      'W demencji mamy do czynienia z zaburzeniami treści myślenia o typie paranoidalnym i urojeniowym. Typ urojeń, w którym chory zgłasza skargi dotyczące zaginięcia, kradzieży różnych przedmiotów, pieniędzy lub innego majątku to:',
    answers: [
      {
        option: 'urojenia zazdrości',
        isCorrect: false,
      },
      {
        option: 'urojenia okradania',
        isCorrect: true,
      },
      {
        option: 'urojenia porzucenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 391,
    question:
      'Oprócz zaburzeń myślenia w chorobach otępiennych możemy mieć również do czynienia z zaburzeniami spostrzegania. Przybierają one postać halucynacji lub iluzji. Halucynacje to inaczej:',
    answers: [
      {
        option: 'omamy',
        isCorrect: true,
      },
      {
        option: 'urojenia',
        isCorrect: false,
      },
      {
        option: 'iluzje',
        isCorrect: false,
      },
    ],
  },
  {
    number: 392,
    question:
      'W demencji zaburzenia rytmu dobowego objawiają się wzmożoną aktywnością występującą w nocy oraz sennością w dzień. Chory nie zasypia wieczorem lub budzi się w nocy i rozpoczyna aktywne funkcjonowanie, próbując porządkować swoje otoczenie, przygotowywać posiłki, wychodzić z domu. Rzadziej występującym w demencjach objawem jest hipersomnia, czyli:',
    answers: [
      {
        option: 'nadmierna żarłoczność',
        isCorrect: false,
      },
      {
        option: 'nadmierna senność',
        isCorrect: true,
      },
      {
        option: 'niedobór snu',
        isCorrect: false,
      },
    ],
  },
  {
    number: 393,
    question:
      'Jedną z charakterystycznych form zaburzeń zachowania występujących u osób z chorobami dementywnymi jest bezcelowe przemieszczanie się w bliższej lub dalszej przestrzeni. Zjawisko to jest zwane:',
    answers: [
      {
        option: 'podróżowaniem',
        isCorrect: false,
      },
      {
        option: 'wędrowaniem',
        isCorrect: true,
      },
      {
        option: 'spacerowaniem',
        isCorrect: false,
      },
    ],
  },
  {
    number: 394,
    question:
      '2 — 3 tygodniowe unieruchomienie, leżenie w łóżku, może skutkować osłabieniem siły mięśni antygrawitacyjnych:',
    answers: [
      {
        option: 'W minimalnym stopniu',
        isCorrect: false,
      },
      {
        option: 'Nawet w 30%',
        isCorrect: true,
      },
      {
        option: 'Nie dotyczy pacjentów po udarze',
        isCorrect: false,
      },
      {
        option: 'Maksimum w 5%',
        isCorrect: false,
      },
    ],
  },
  {
    number: 395,
    question:
      'Podaj najlepszą odpowiedź: U pacjentów po operacji endoprotezoplastyki stawu biodrowego powinniśmy szczególnie uważać na ruchy:',
    answers: [
      {
        option: 'Zgięcie i przywiedzenie',
        isCorrect: true,
      },
      {
        option: 'Odwiedzenia',
        isCorrect: false,
      },
      {
        option: 'Wyprost',
        isCorrect: false,
      },
      {
        option: 'Tylko przewiedzenia',
        isCorrect: false,
      },
    ],
  },
  {
    number: 396,
    question: 'Typowe objawy stanu zapalnego w stawach obejmują:',
    answers: [
      {
        option: 'Obrzęk',
        isCorrect: false,
      },
      {
        option: 'Ocieplenie',
        isCorrect: false,
      },
      {
        option: 'Zaczerwienienie',
        isCorrect: false,
      },
      {
        option: 'Wszystkie wyżej wymienione',
        isCorrect: true,
      },
    ],
  },
  {
    number: 397,
    question: 'Ćwiczenia bierne wykonywane są u pacjenta:',
    answers: [
      {
        option: 'Samodzielnego, chodzącego',
        isCorrect: false,
      },
      {
        option: 'W obrębie porażonej wiotko kończyny',
        isCorrect: true,
      },
      {
        option: 'Z osłabionym napięciem kończyny',
        isCorrect: false,
      },
      {
        option: 'Po złamaniu kończyny',
        isCorrect: false,
      },
    ],
  },
  {
    number: 398,
    question: 'Objawy sugerujące, że należy przerwać pionizację to:',
    answers: [
      {
        option: 'Pogorszenie kontaktu',
        isCorrect: false,
      },
      {
        option: 'Blednięcie',
        isCorrect: false,
      },
      {
        option: 'Zawroty głowy',
        isCorrect: false,
      },
      {
        option: 'Wszystkie wyżej wymienione',
        isCorrect: true,
      },
    ],
  },
  {
    number: 399,
    question: 'Pionizację z pacjentem leżącym w warunkach domowych zaczynamy zwykle od:',
    answers: [
      {
        option: 'Stania przy łóżku',
        isCorrect: false,
      },
      {
        option: 'Marszu z asekuracją',
        isCorrect: false,
      },
      {
        option: 'Siadu z podparciem w łóżku',
        isCorrect: true,
      },
      {
        option: 'Stania przy balkoniku',
        isCorrect: false,
      },
    ],
  },
  {
    number: 400,
    question: 'W trakcie chodu asekurujemy pacjenta:',
    answers: [
      {
        option: 'Przez tułów',
        isCorrect: true,
      },
      {
        option: 'Za silniejsza kończynę górną',
        isCorrect: false,
      },
      {
        option: 'Pozwalamy chodzić samodzielnie',
        isCorrect: false,
      },
      {
        option: 'Za obie kończyny górne',
        isCorrect: false,
      },
    ],
  },
  {
    number: 401,
    question: 'Prawidłowa wartości tętna w spoczynku wynosi:',
    answers: [
      {
        option: '60 uderzeń na minutę',
        isCorrect: false,
      },
      {
        option: '72 uderzeń na minutę',
        isCorrect: false,
      },
      {
        option: 'Mieści się w przedziale między 60 a 100 uderzeń na minutę',
        isCorrect: true,
      },
      {
        option: 'Mieści się w przedziale między 80 a 110 uderzeń na minutę',
        isCorrect: false,
      },
    ],
  },
  {
    number: 402,
    question: 'Prawidłowe wartości ciśnienia skurczowego i rozkurczowego wynoszą odpowiednio:',
    answers: [
      {
        option: '120 mm Hg i 80 mm Hg',
        isCorrect: true,
      },
      {
        option: '80 mm Hg i 120 mm Hg',
        isCorrect: false,
      },
      {
        option: '150 mm Hg i 80 mm Hg',
        isCorrect: false,
      },
      {
        option: '140 mm Hg i 100 mm Hg',
        isCorrect: false,
      },
    ],
  },
  {
    number: 403,
    question: 'U chorych na cukrzycę typu II wysiłek fizyczny wpływa na:',
    answers: [
      {
        option: 'Wzrost wrażliwości na działanie insuliny',
        isCorrect: false,
      },
      {
        option: 'Poprawę możliwości kontroli poziomu glukozy we krwi',
        isCorrect: false,
      },
      {
        option: 'Zmniejszenie ryzyka incydentów sercowo naczyniowych',
        isCorrect: false,
      },
      {
        option: 'Wszystkie wyżej wymienione',
        isCorrect: true,
      },
    ],
  },
  {
    number: 404,
    question: 'Ćwiczenia samowspomagane:',
    answers: [
      {
        option: 'Wykonujemy z kończyną porażoną wiotko',
        isCorrect: false,
      },
      {
        option: 'Pacjent wykonuje samodzielnie',
        isCorrect: true,
      },
      {
        option: 'Wspomagamy działanie kończyny pacjenta',
        isCorrect: false,
      },
      {
        option: 'Oporujemy ruch pacjenta kończyną fizjoterapeuty',
        isCorrect: false,
      },
    ],
  },
  {
    number: 405,
    question:
      'Metoda PNF służy do usprawniania pacjentów z zaburzeniam neurologicznymi, można ją wykorzystać dla pacjentów:',
    answers: [
      {
        option: 'Po udarze',
        isCorrect: false,
      },
      {
        option: 'Z SM',
        isCorrect: false,
      },
      {
        option: 'Z Mózgowym porażeniem dziecięcym',
        isCorrect: false,
      },
      {
        option: 'Wszystkie wyżej wymienione',
        isCorrect: true,
      },
    ],
  },
  {
    number: 406,
    question: 'Ruchy w metodzie PNF wykonywane są po liniach skośnych, diagonalnych, aby:',
    answers: [
      {
        option: 'Ułatwić ruch pacjentowi i zaangażować więcej grup mięśniowych',
        isCorrect: true,
      },
      {
        option: 'Utrudnić ruch pacjentowi',
        isCorrect: false,
      },
      {
        option: 'Ograniczyć aktywizacje grup mięśniowych',
        isCorrect: false,
      },
      {
        option: 'Ułatwić prace fizjoterapeucie',
        isCorrect: false,
      },
    ],
  },
  {
    number: 407,
    question: 'W metodzie PNF wyróżniamy techniki',
    answers: [
      {
        option: 'Agonistyczne',
        isCorrect: false,
      },
      {
        option: 'Antagonistyczne',
        isCorrect: false,
      },
      {
        option: 'Rozluźniające',
        isCorrect: false,
      },
      {
        option: 'Wszystkie wyżej wymienione',
        isCorrect: true,
      },
    ],
  },
  {
    number: 408,
    question: 'Kontakt manualny w metodzie PNF wykorzystywany jest głównie do:',
    answers: [
      {
        option: 'Masowanie pacjenta',
        isCorrect: false,
      },
      {
        option: 'Rozluźnianiu napiętych mięśni',
        isCorrect: false,
      },
      {
        option: 'Dawania sygnału do ruchu w określonym kierunku',
        isCorrect: true,
      },
      {
        option: 'Oporowaniu ruchu pacjenta',
        isCorrect: false,
      },
    ],
  },
  {
    number: 409,
    question: 'Worki stomijne otwarte stosuje się głównie do: ',
    answers: [
      {
        option: 'ileostomii',
        isCorrect: true,
      },
      {
        option: 'kolostomii',
        isCorrect: false,
      },
      {
        option: 'tracheostomii',
        isCorrect: false,
      },
    ],
  },
  {
    number: 410,
    question: 'PEG to: ',
    answers: [
      {
        option: 'przetoka odżywcza wykonana na dwunastnicy',
        isCorrect: false,
      },
      {
        option: 'przetoka odżywcza wykonana na jelicie czczym',
        isCorrect: false,
      },
      {
        option: 'przetoka odżywcza wykonana na żołądku',
        isCorrect: true,
      },
    ],
  },
  {
    number: 411,
    question: capitalizeFirstLetter('KONSTRUKTYWNA KRYTYKA ZAWIERA:'),
    answers: [
      {
        option: 'OCENĘ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'FAKTY'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'RADĘ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 412,
    question: capitalizeFirstLetter('AGRESJA SŁOWNA PRZEJAWIA SIĘ:'),
    answers: [
      {
        option: 'PRZEZWISKAMI, UPOKORZENIEM, SARKAZMEM, DRWINĄ'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'SZARPANIEM, POPYCHANIEM I LEKCEWAŻENIEM'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'CIĄGŁYM PODWAŻANIEM, CO MÓWI ROZMÓWCA'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 413,
    question: capitalizeFirstLetter(
      'DOSTOSOWANIE WŁASNEGO ZACHOWANIA I SPOSOBU MYŚLENIA DO ZACHOWANIA I MYŚLENIA INNYCH CZŁONKÓW DANEJ ZBIOROWOŚCI TO:'
    ),
    answers: [
      {
        option: 'KONFORMIZM'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'ULEGŁOŚĆ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'APODYKTYCZNOŚĆ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 414,
    question: capitalizeFirstLetter(
      'JEDNĄ Z FORM TERAPII CHOREGO JEST ZACHĘCANIE CHOREGO DO CZYNNEGO UCZESTNICZENIA W SPOTKANIACH TOWARZYSKICH, KULTURALNYCH, SPORTOWYCH, DO UCZESTNICZENIA W KLUBACH SENIORÓW ORAZ UNIWERSYTETACH:'
    ),
    answers: [
      {
        option: 'TRZECIEGO WIEKU'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'CZWARTEGO WIEKU'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'STARSZEGO WIEKU'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 415,
    question: capitalizeFirstLetter('KRÓTKA SKALA OCENY STANU PSYCHICZNEGO TO W SKRÓCIE:'),
    answers: [
      {
        option: 'MMSE',
        isCorrect: true,
      },
      {
        option: 'KSOSP',
        isCorrect: false,
      },
      {
        option: 'PSYCHOTEST',
        isCorrect: false,
      },
    ],
  },
  {
    number: 416,
    question: capitalizeFirstLetter(
      'W ZALEŻNOŚCI OD LICZBY ZGONÓW SAMOBÓJSTWA DZIELĄ SIĘ NA INDYWIDUALNE, ZBIOROWE LUB ROZSZERZONE. SAMOBÓJSTWO, KTÓRE JEST POPRZEDZONE DOKONANIEM ZABÓJSTWA INNEJ OSOBY ( JEDNEJ LUB WIĘCEJ ) TO SAMOBÓJSTWO:'
    ),
    answers: [
      {
        option: 'INDYWIDUALNE'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'GRUPOWE'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ROZSZERZONE'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 417,
    question: capitalizeFirstLetter(
      'DO CZYNNIKÓW ISTOTNIE WPŁYWAJĄCYCH NA PRZYSTOSOWANIE SIĘ DO CHOROBY NALEŻĄ WIEK OSOBY, RODZAJ NIEPEŁNOSPRAWNOŚCI ORAZ ROZMIAR NIEPEŁNOSPRAWNOŚCI. PRZYJMUJE SIĘ, ŻE IM WCZEŚNIEJ NIEPEŁOSPRAWNOŚĆ NASTĄPI, TYM:'
    ),
    answers: [
      {
        option: 'ŁATWIEJ PACJENTA REHABILITOWAĆ'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'TRUDNIEJ PACJENTA REHABILITOWAĆ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'WIĘKSZE RYZYKO WYSTĄPIENIA DEPRESJI'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 418,
    question: capitalizeFirstLetter(
      'FAZA, W KTÓREJ DOMINUJE PRZEKONANIE, ŻE „WSZYSTKO STRACONE”, W KTÓREJ POJAWIA SIĘ DEPRESJA, APATYCZNOŚĆ, ZREZYGNOWANIE, ŻYCIE TRACI SENS, CHORY MOŻE MIEĆ MYŚLI SAMOBÓJCZE TO FAZA: '
    ),
    answers: [
      {
        option: 'POGODZENIE SIĘ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'FAZA ZAPRZECZENIA I IZOLACJI'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'FAZA LAMENTU'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 419,
    question: capitalizeSentences(
      'PO FAZIE LAMENTU MOŻE NASTĄPIĆ ETAP OBRONY ZDROWEJ ALBO ETAP OBRONY NEUROTYCZNEJ. ETAP, W KTÓRYM CHORY STAWIA SOBIE NOWE CELE I REALIZUJE NOWE ZADANIA, JEST GOTOWY DO PODJĘCIA DZIAŁANIA O ISTOTNEJ WARTOŚCI, A TAKŻE AKCEPTUJE POŁOŻENIE ŻYCIOWE TO ETAP: '
    ),
    answers: [
      {
        option: 'OBRONY ZDROWEJ'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'ETAP OBRONY NEUROTYCZNEJ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ŻADNE Z POWYŻSZYCH'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 420,
    question: capitalizeSentences(
      'W STOSUNKU PACJENTA DO CHOROBY WYRÓŻNIA SIĘ DWIE POSTAWY: POSTAWĘ SPRZYJAJĄCA LECZENIU I POSTAWĘ NIEKORZYSTNĄ WOBEC LECZENIA. POSTAWA CHARAKTERYZUJĄCA SIĘ TYM, ŻE PACJENCI SELEKCJONUJĄ DOCIERAJĄCE DO NICH INFORMACJE O STANIE ZDROWIA W TAKI SPOSÓB ABY UNIKNĄC LĘKU I POMNIEJSZYĆ WAGĘ AKTUALNEJ SYTUACJI ZDROWOTNEJ TO POSTAWA:'
    ),
    answers: [
      {
        option: 'SPRZYJAJĄCA LECZENIU'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'POSTAWA NIEKORZYSTNA WOBEC LECZENIA'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'ŻADNA Z ODP. NIE JEST PRAWIDŁOWA'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 421,
    question: capitalizeSentences(
      'ISTNIEJE WIELE DEFINICJI CHOROBY PRZEWLEKŁEJ. JEDNA Z NICH MÓWI, ŻE CHOROBA PRZEWLEKŁA TO TAKI NIEKORZYSTNY STAN, KTÓRY TRWA DŁUŻEJ NIŻ 3 MIESIĄCE W ROKU LUB WYMAGA CIĄGŁEJ HOSPITALIZACJI CO NAJMNIEJ PRZEZ OKRES:'
    ),
    answers: [
      {
        option: '1 MIESIĄCA'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: '5 MIESIĘCY'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: '12 MIESIĘCY'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 422,
    question: capitalizeSentences('DO OKLEPYWANIA PLECÓW PACJENTA DŁUGOTRWALE UNIERUCHOMIONEGO ZALECA SIĘ UŻYWANIE:'),
    answers: [
      {
        option: 'ŻELU AKTYWIZUJĄCEGO Z GUARANĄ'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'SPIRYTUSU SALICYLOWEGO'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'WODY UTLENIONEJ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 423,
    question: capitalizeSentences('PODCZAS OKLEPYWANIA DŁOŃ UKŁADAMY:'),
    answers: [
      {
        option: 'PŁASKO'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'W KSZTAŁCIE ŁÓDKI'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'PŁASKO Z ROZSTAWIONYMI PALCAMI'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 424,
    question: capitalizeSentences('OKLEPUJĄC PLECY PACJENTA NALEŻY OMIJAĆ:'),
    answers: [
      {
        option: 'OKOLICE PŁUC'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'OKOLICE NEREK I KREGOSŁUPA'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'OKOLICE ŁOPATEK'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 425,
    question: capitalizeSentences('OKLEPUJĄC PLECY PACJENTA NALEŻY PAMIĘTAĆ O KIERUNKU OKLEPYWANIA, KTÓRY ODBYWA SIĘ:'),
    answers: [
      {
        option: 'OD DOŁU KU GÓRZE'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'OD GÓRY KU DOŁOWI'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'OD LEWEJ DO PRAWEJ STRONY PLECÓW'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 426,
    question: capitalizeSentences(
      'PO WYKONANIU NEBULIZACJI Z GLIKOKORTYKOSTEROIDÓW NALEŻY POINFORMOWAĆ PACJENTA O KONIECZNOŚCI:'
    ),
    answers: [
      {
        option: 'PRZEPŁUKANIA JAMY USTNEJ WODĄ'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'WYPICIA DWÓCH SZKLANEK WODY'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'SSANIA CUKIERKÓW MIĘTOWYCH'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 427,
    question: capitalizeSentences('ABY WYKONAĆ NEBULIZACJĘ U PACJENTA NALEŻY UŁOŻYĆ PACJENTA W POZYCJI:'),
    answers: [
      {
        option: 'PŁASKIEJ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'WYSOKIEJ'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'NA BOKU'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 428,
    question: capitalizeSentences('JEŚLI PODCZAS ODSYSANIA PACJENT ZROBI SIĘ SINY I NIESPOKOJNY NALEŻY:'),
    answers: [
      {
        option: 'WYCOFAĆ CEWNIK I ZAWIADOMIĆ PIELĘGNIARKĘ LUB LEKARZA'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'KONTYNUOWAĆ ODSYSANIE'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'WŁOŻYĆ GŁĘBIEJ CEWNIK'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 429,
    question: capitalizeSentences('ŚREDNICA CEWNIKA DO ODSYSANIA POWINNA BYĆ:'),
    answers: [
      {
        option: 'MNIEJSZA NIŻ POŁOWA ŚREDNICY RURKI TRACHEOSTOMIJNEJ'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'WIĘKSZA NIŻ POŁOWA ŚREDNICY RURKI TRACHEOSTOMIJNEJ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'TAKA SAMA JAK ŚREDNICA RURKI TRACHEOSTOMIJNEJ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 430,
    question: capitalizeSentences('ODSYSANIE JAMY USTNEJ A POŹNIEJ TCHAWICY TYM SAMYM CEWNIKIEM MOŻE POWODOWAĆ:'),
    answers: [
      {
        option: 'ZAKRZTUSZENIE SIĘ PACJENTA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ZADŁAWIENIE SIĘ PACJENTA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ZAPALENIE PŁUC'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 431,
    question: capitalizeSentences('ZBYT LUŹNE UMOCOWANIE RURKI TRACHEOSTOMIJNEJ:'),
    answers: [
      {
        option: 'POPRAWIA WYMIANĘ GAZOWĄ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'GROZI WYSUNIĘCIEM SIĘ RURKI'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'POPRAWIA ODKRZTUSZANIE WYDZIELINY'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 432,
    question: capitalizeSentences(
      'JEŚLI PODCZAS WYMIANY OPASKI DO RURKI TRACHEOSTOMIJNEJ PRZETNIESZ PRZEWÓD BALONU KONTROLONEGO WÓWCZAS MUSISZ:'
    ),
    answers: [
      {
        option: 'NIEZWŁOCZNIE POWIADOMIĆ PIELĘGNIARKĘ LUB LEKARZA'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'POSTARAĆ SIĘ PRZYKLEIĆ ODCIĘTY FRAGMENT'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ODCIĘCIE BALONIKA NIE WPŁYWA NA WYMIANĘ GAZOWĄ WIĘC NIE MUSISZ NIC ROBIĆ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 433,
    question: capitalizeSentences(
      'NIESTOSOWANIE WYMIENNIKÓW CIEPŁA I WILGOCI ,CZYLI TZW. „SZTUCZNYCH NOSÓW” PROWADZI:'
    ),
    answers: [
      {
        option: 'NADMIERNEGO WYSUSZENIA BŁONY ŚLUZOWEJ TCHAWICY'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'ZWIĘKSZENIA ODPORNOŚCI ORGANIZMU'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ZWIĘKSZENIA LICZBY ODDECHÓW'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 434,
    question: capitalizeSentences(
      'ETAPY CHOROBY WG. KÓBLER – ROSS TO ZAPRZECZENIE I IZOLACJA, GNIEW, TARGOWANIE, SIĘ, DEPRESJA, POGODZENIE SIĘ. ETAP W KTÓRYM OSOBA CHORA JEST PEŁNA BUNTU, DRAŻLIWOŚCI, PRETENSJI DO RODZINY I PERSONELU MEDYCZNEGO O NIEWYSTARCZAJĄCĄ OPIEKĘ. BEZ POWODU MOŻE WYBUCHAĆ GNIEWEM, JEST PEŁNA PRETENSJI, CO DO LECZENIA, MOŻE ŻĄDAĆ ZMIANY LEKARZA NA TAKIEGO, KTÓRY MU POMOŻE. CHORY JEST ZŁY NA LEKARZY, PIELĘGNIARKI, JEST NIEMIŁY DLA RODZINY TO ETAP:'
    ),
    answers: [
      {
        option: 'GNIEWU'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'POGODZENIE SIĘ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'TARGOWANIE'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 435,
    question: capitalizeSentences('STOSOWANIE POSTRZĘPIONYCH GAZIKÓW WOKÓŁ RURKI TRACHEOSTOMIJNEJ MOŻE BYĆ POWODEM:'),
    answers: [
      {
        option: 'ASPIRACJI NITKI'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'ZAKAŻENIA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ROZKRWAWIENIA SIĘ RANY'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 436,
    question: capitalizeSentences(
      'ZBYT MOCNE WYPEŁNIENIE MANKIETU USZCZELNIAJĄCEGO RURKI TRACHEOSTOMIJNEJ MOŻE SPOWODOWAĆ POWSTANIE:'
    ),
    answers: [
      {
        option: 'ODLEŻYNY'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'ZESPÓŁU ZŁEGO WCHŁANIANIA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ZADŁAWIENIE SIĘ PACJENTA'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 437,
    question: capitalizeSentences('W CELU ODŚLUZOWANIA DRÓG ODDECHOWYCH CEWNIK WPROWADZA SIĘ NA:'),
    answers: [
      {
        option: 'OTWARTM SSANIU'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ZAMKNIĘTYM SSANIU'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'NIE MA ZNACZENIA'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 438,
    question: capitalizeSentences('CZAS ODSYSANIA PACJENTA NIE POWINIEN TRWAĆ DŁUŻEJ NIŻ:'),
    answers: [
      {
        option: '2 SEKUNDY'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: '10-15 SEKUND'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: '2 MINUTY'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 439,
    question: capitalizeSentences('ZADANIEM WYMIENNIKA CIEPŁA I WILGOCI JEST:'),
    answers: [
      {
        option: 'ZAPOBIEGANIE DOSTANIU SIĘ DROBNOUSTROJOW DO TRACHEOSTOMII'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'PEŁNI FUNKCJĘ ESTETYCZNĄ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'OGRZEWA I NAWILŻA POWIETRZE, KTÓRE DOSTAJE SIĘ DO DOLNYCH DRÓG ODDECHOWYCH'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 440,
    question: capitalizeSentences('JAKI OPATRUNEK DO TRACHEOSTOMII POWINNO UŻYWAĆ SIĘ:'),
    answers: [
      {
        option: 'POSTRZĘPIONYCH GAZIKÓW'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'KOMPRESÓW TRACHEOTOMIJNYCH'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'NIE JEST WYMAGANY OPATRUNEK DO TRACHEOSTOMII'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 441,
    question: capitalizeSentences('PODCZAS ZABIEGU TRACHEOTOMII WYTWARZA SIĘ:'),
    answers: [
      {
        option: 'TRACHEOSTOMIĘ'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'GASTROSTOMIĘ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'JEJUNOSTOMIĘ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 442,
    question: capitalizeSentences('JEDNYM ZE WSKAZAŃ DO TRACHEOTOMII MOŻE BYĆ:'),
    answers: [
      {
        option: 'RAK TRZUSTKI'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'RAK WĄTROBY'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'RAK KRTANI'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 443,
    question: capitalizeSentences('WYMIENNIK CIEPŁA I WILGOCI JEST INACZEJ NAZYWANY:'),
    answers: [
      {
        option: '„SZTUCZNYM NOSEM”'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: '„SZTUCZNĄ KRTANIĄ”'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: '„SZTUCZNĄ TCHAWICĄ”'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 444,
    question: capitalizeSentences('MANKIET USZCZELNIAJĄCY WYPEŁNIA SIĘ:'),
    answers: [
      {
        option: 'WODĄ Z KRANU'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'POWIETRZEM'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'WYŁĄCZNIE SOLĄ FIZJOLOGICZNĄ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 445,
    question: capitalizeSentences('TRACHEOTOMIA TO:'),
    answers: [
      {
        option: 'INACZEJ TRACHEOSTOMIA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ZABIEG, PODCZAS KTÓREGO WYTWARZA SIĘ TRACHEOSTOMIĘ'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'USUNIĘCIE PĘCHERZYKA ŻÓŁCIOWEGO'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 446,
    question: capitalizeSentences('RURKA, KTÓRA UMOŻLIWA PRZEPŁYW POWIETRZA DO KRTANI I POWSTANIE GŁOSU TO:'),
    answers: [
      {
        option: 'KLASYCZNA RURKA TRACHEOSTOMIJNA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'RURKA FENESTRACYJNA'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'RURKA Z OKIENKIEM'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 447,
    question: capitalizeSentences(
      'GRUŹLICA MOŻE DOTYCZYĆ KAŻDEGO NARZĄDU W ORGANIZMIE CZŁOWIEKA, JEDNAK ZARAŹLIWA JEST TYLKO GRUŹLICA: '
    ),
    answers: [
      {
        option: 'PŁUC'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'NEREK'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'PRZYSADKI MÓZGOWEJ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 448,
    question: capitalizeSentences(
      'PŁEĆ MĘSKA , WIEK > 40 R.Ż. OTYŁOŚĆ, OBWÓD SZYI > 43 CM U MĘŻCZYZN I > 40 CM U KOBIET , ZMIANY ANATOMICZNE GÓRNYCH DRÓG ODDECHOWYCH, ZABURZENIA ROZWOJOWE ŻUCHWY, NADMIERNE SPOŻYWANIE ALKOHOLU, PALENIE PAPIEOSÓW TO CZYNNIKI RYZYKA: '
    ),
    answers: [
      {
        option: 'RAKA PŁUC'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'OBTURACYJNEGO BEZDECHU SENNEGO'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'GRUŹLICY'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 449,
    question: capitalizeSentences(
      'ZŁOTYM STANDARDEM I NAJSKUTECZNIEJSZĄ METODĄ LECZENIA OBTURACYJNEGO BEZDECHU SENNEGO, JEST WSPOMAGANIE ODDYCHANIA STAŁYM DODATNIM CIŚNIENIEM W DROGACH ODDECHOWYCH WYTWARZANYM ZA POMOCĄ TZW.'
    ),
    answers: [
      {
        option: 'aparatu CPAP',
        isCorrect: true,
      },
      {
        option: 'BUTLI TLENOWEJ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'RESPIRATORA'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 450,
    question: capitalizeSentences('OBJAWEM NAJCZĘŚCIEJ WYSTĘPUJĄCYM OBJAWEM RAKA PŁUC JEST/SĄ:'),
    answers: [
      {
        option: 'NAWRACAJĄCE STANY ZAPALNE DRÓG ODDECHOWYCH'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'KRWIOPLUCIE'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'KASZEL'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 451,
    question: capitalizeSentences(
      'OSTRE ZAPALENIE OSKRZELI TO OSTRE ZAKAŻENIE UKŁADU ODDECHOWEGO Z KASZLEM TRWAJĄCYM DO:'
    ),
    answers: [
      {
        option: '1 TYGODNIA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: '3 TYGODNI'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'PÓŁ ROKU'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 452,
    question: capitalizeSentences(
      'BADANIE POLIGRAFICZNE TO BADANIE POLEGAJĄCE NA REJESTRACJI PRZEPŁYWU POWIETRZA PRZEZ DROGI ODDECHOWE, SATURACJI, REJESTRACJI CHRAPANIA ORAZ POZYCJI CIAŁA W CZASIE SNU. BADANIE TO PRZEPROWADZA SIĘ ABY ZDIAGNOZOWAĆ:'
    ),
    answers: [
      {
        option: 'ZAPALENIE PŁUC'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'GRUŹLICĘ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'OBTURACYJNY BEZDECH SENNY'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 453,
    question: capitalizeSentences(
      'RAK PŁUCA JEST NAJCZĘSTSZYM NOWOTWOREM ZŁOŚLIWYM PŁUC WYWODZĄCYM SIĘ Z KOMÓREK NABŁONKA WYŚCIELAJĄCEGO DRZEWO OSKRZELOWEGO. GŁÓWNYM CZYNNIKIEM RYZYKA RAKA PŁUCA ODPOWIEDZIALNYM ZA 80-90% PRZYPADKÓW ZACHOROWAŃ NA TO SCHORZENIE JEST:'
    ),
    answers: [
      {
        option: 'WIEK'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'PALENIE TYTONIU'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'NIEWŁAŚCIWA DIETA'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 454,
    question: capitalizeSentences(
      'MUKOWISCYDOZA TO UWARUNKOWANA GENETYCZNIE CHOROBA POLEGAJĄCA NA ZABURZENIU WYDZIELANIA PRZEZ GRUCZOŁY ZEWNĄTRZWYDZIELNICZE CHLORU SODU I WODY. ZABURZENIA TE POLEGAJĄ NA:'
    ),
    answers: [
      {
        option: 'ZMNIEJSZENIU WYDZIELANIA CHLORU A ZWIEKSZENIE WYDZIELANIA WODY'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ZWIĘKSZENIE WYDZIELANIA CHLORU I SODU A ZMNIEJSZENIE WYDZIELANIA WODY'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'ZMNIEJSZENIE WYDZIELANIA CHLORU, SODU I WODY'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 455,
    question: capitalizeSentences(
      'OSTRE ZAPALENIE OSKRZELI TO OSTRE ZAKAŻENIE UKŁADU ODDECHOWEGO Z KASZLEM TRWAJĄCYM DO 3 TYGODNI, ROZPOZNAWANE PO WYKLUCZENIU ZAPALENIA PŁUC. NAJCZĘSTSZĄ PRZYCZYNĄ OSTREGO ZAPALNIA OSKRZELI SĄ: '
    ),
    answers: [
      {
        option: 'BAKTERIE'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'WIRUSY'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'PRIONY'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 456,
    question: capitalizeSentences('ASTMĘ ALERGICZNĄ , INACZEJ ZWANĄ ATOPOWĄ , POWODUJĄ/ POWODUJE:'),
    answers: [
      {
        option: 'INFEKCJE WIRUSOWE'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'STRES'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ALERGENY'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 457,
    question: capitalizeSentences('CZĘSTOŚĆ WYSTĘPOWANIA ASTMY ROŚNIE BARDZO SZYBKO WŚRÓD DZIECI MIESZKAJĄCYCH:'),
    answers: [
      {
        option: 'NA WSIACH'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'W DUŻYCH AGLOMERACJACH MIEJSKICH'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'WSKAŹNIK ZACHOROWALNOŚCI NA ASTMĘ NA WSI I W DUŻYCH AGLOMERACJACH JEST PORÓWNYWALNY'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 458,
    question: capitalizeSentences(
      'WSZYSTKIM CHORYM Z PRZEWLEKŁĄ OBTURACYJNĄ CHOROBA PŁUC ( POChP) ZALECA SIĘ SZCZEPIENIA PRZECIWKO:'
    ),
    answers: [
      {
        option: 'GRYPIE'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'ODRZE'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'MENINGOKOKOM'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 459,
    question: capitalizeSentences(
      'CHARAKTERYSTYCZNYM OBJAWEM DLA PRZEWLEKŁEJ OBTURACYJNEJ CHOROBY PŁUC ( POChP), KTÓRY NIE WYSTĘPUJE W ASTMIE OSKRZELOWEJ JEST: '
    ),
    answers: [
      {
        option: 'DUSZNOŚĆ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'KASZEL'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ODKSZTUSZANIE PLWOCINY'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 460,
    question: capitalizeSentences(
      'PODSTAWĄ LECZENIA ASTMY SĄ GLIKORTYKOSTEROIDY WZIEWNE. ABY ZAPOBIEC ICH SKUTKOM UBOCZNYM W POSTACI GRZYBICY JAMY USTNEJ I GARDŁA, NALEŻY: '
    ),
    answers: [
      {
        option: 'STOSOWAĆ PROFILAKTYCZNIE PREPARATY Z NYSTATYNĄ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'PŁUKAĆ JAMĘ USTNĄ I GARDŁO PO KAŻDEJ INHALACJI Z LEKU'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'PĘDZLOWAĆ JAMĘ USTNĄ BORAKSEM Z GLICERYNĄ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 461,
    question: 'Badania umożliwiające diagnostykę POChiP to:',
    answers: [
      {
        option: 'EKG wysiłkowe',
        isCorrect: false,
      },
      {
        option: 'BRONCHOSKOPIA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'SPIROMETRIA'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 462,
    question: capitalizeSentences(
      'TECHNIKA MAJĄCA NA CELU OCZYSZCZENIE RANY POPRZEZ FIZYCZNE USUNIĘCIE (WYPŁUKANIE) Z NIEJ SUBSTANCJI SZKODLIWYCH, TAKICH JAK ZIEMIA, ENDOGENNE I ENZOGENNE SUBSTANCJE TRUJĄCE, RESZTKI TKANKOWE, TOKSYNY RÓŻNEGO POCHODZENIA, MIKROORGANIZMY, W TYM MECHANICZNE USUNIĘCIE BIOFILMU BAKTERYJNEGO TO:'
    ),
    answers: [
      {
        option: 'LAWASEPTYKA'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'ANTYSEPTYKA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ASEPTYKA'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 463,
    question: capitalizeSentences('HIPOGLIKEMIA TO STĘŻENIE POZIOMU CUKRU WE KRWI: '),
    answers: [
      {
        option: 'PONIŻEJ 100 MG/DL'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'POWYŻEJ 70 MG/DL'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'PONIŻEJ 70 MG/DL'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 464,
    question:
      'Na pośladku długotrwale unieruchomionego zauważasz zaczerwienienie. Po uciśnięciu palcem zaczerwienienie blednie. W skali Torance’a jest to odleżyna:',
    answers: [
      {
        option: '1 STOPNIA (BLEDNĄCE ZACZERWIENIENIA)'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: '2 STOPNIA (NIE BLEDNIE)'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: '3 STOPNIA (USZKODZENIE SKÓRY DO TKAN. PODSKÓR.)'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: '4 STOPNIA (USZKODZENIE DO TKAN. TŁUSZCZOWEJ)'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: '5 STOPNIA (ZAAWANSOWANA MARTWICA)'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 465,
    question: capitalizeSentences(
      'PIONIZACJA PACJENTA PO DŁUGOTRWAŁYM UNIERUCHOMIENIU POWINNA ODBYWAĆ SIĘ STOPNIOWO. PIERWSZE SADZENIE NA ŁÓŻKU NIE POWINNO TRWAĆ DŁUŻEJ NIŻ: '
    ),
    answers: [
      {
        option: '2 MINUTY'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: '10 MINUT'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: '1 GODZINĘ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 466,
    question: capitalizeSentences(
      'JEDNĄ ZE ZMIAN W UKŁ.MIĘŚNIOWO – SZKIELETOWYM ZACHODZĄCĄ NA SKUTEK UBYTKU MASY MIĘŚNIOWEJ JEST SARKOPENIA. SARKOPENIA TO:'
    ),
    answers: [
      {
        option: 'ZMNIEJSZENIE MASY MIĘŚNIOWEJ'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'ZWIĘKSZENIE MASY MIĘŚNIOWEJ'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ZMNIEJSZENIE MASY KOSTNEJ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 467,
    question: 'Wg. Pól Lalonde’a największy wpływ na zdrowie człowieka ma:',
    answers: [
      {
        option: 'STYL ŻYCIA (PONAD 50%)'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'GENETYKA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'OPIEKA ZDROWOTNA'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 468,
    question: capitalizeSentences('DO OCENY ZAAWANSOWANYCH CZYNNOŚCI ŻYCIA CODZIENNEGO NALEŻĄ: '),
    answers: [
      {
        option: 'Skala Katza',
        isCorrect: false,
      },
      {
        option: 'Skala Lawtona',
        isCorrect: true,
      },
      {
        option: 'Skala Norton',
        isCorrect: false,
      },
    ],
  },
  {
    number: 469,
    question: capitalizeSentences('PODSTAWOWĄ JEDNOSTKĄ FUNKCJONALNĄ I BUDULCOWĄ KAŻDEGO ŻYWEGO ORGANIZMU JEST:'),
    answers: [
      {
        option: 'KOMÓRKA'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'TKANKA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'NARZĄD'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 470,
    question: capitalizeSentences('WSKAŻ ZASADY PRZECHOWYWANIA LEKÓW:'),
    answers: [
      {
        option: 'LEKÓW NIE MOŻNA PRZECHOWYWAĆ W MIEJSCACH WILGOTNYCH, CIEPŁYCH, NASŁONECZNIONYCH '.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'NIE WOLNO ODCINAĆ Z BLISTRÓW DATY WAŻNOŚCI I SERII LEKU'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'PRZETERMINOWANE LEKI WYRZUCA SIĘ DO MIEJSC DO TEGO PRZEZNACZONYCH, NP. APTEKI'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'WSZYSTKIE ODPOWIEDZI SĄ PRAWDZIWE'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 471,
    question:
      'Co oznacza "LADME" ? <L – liberation (uwolnienie) A – absorption (wchłanianie) D – distribution (rozmieszczenie) M – metabolism (metabolizm) E – excretion lub elimination (wydalanie/usuwanie)>',
    answers: [
      {
        option: 'CZAS, W JAKIM LEK POZOSTAJE W USTROJU'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'FARMAKOKINETYCZNY OPIS LEKÓW W ORGANIZMIE'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'POLE POD KRZYWĄ ZALEŻNOŚCI STĘŻENIA LEKU WE KRWI OD CZASU'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'KLIRENS LEKU'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 472,
    question: capitalizeSentences('WSKAŻ, CZEGO NALEŻY BEZWGLĘDNIE PRZESTRZEGAĆ PODCZAS STOSOWANIA ANTYBIOTYKÓW:'),
    answers: [
      {
        option: 'WŁAŚCIWEGO DAWKOWANIA LEKÓW'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'POZOSTAWIENIE ANTYBIOTYKU ,,NA PÓŹNIEJ” W RAZIE NIEPOWODZENIA TERAPII'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'POPIJANIA ANTYBIOTYKU MINIMALNĄ ILOŚCIĄ WODY'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'WSZYSTKIE ODPOWIEDZI SĄ POPRAWNE'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 473,
    question: capitalizeSentences('SERCE SKŁADA SIĘ Z: '),
    answers: [
      {
        option: 'Z 2 PRZEDSIONKÓW I 2 KOMÓR'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: '1 PRZEDSIONKA I 2 KOMÓR'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: '2 KOMÓR I 1 PRZEDSIONKA'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 474,
    question: capitalizeSentences(
      'PODCZAS ODWIEDZN W SZPITALU RODZINA CHOREGO PROSI CIĘ O INFORMACJĘ O STANIE ZROWIA PACJENTA, CHODZI O WYNIKI KTÓRE ZNASZ BO SŁYSZAŁEŚ ROZMOWĘ LEKARZY. JAK POSTĄPISZ?'
    ),
    answers: [
      {
        option: 'UDZIELASZ INFORMACJI WYŁĄCZNIE SIOSTRZE'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'GRZECZNIE POINFORMUJESZ ŻE NIE WOLNO CI UDZIELAĆ INF. O STANIE ZDROWIA'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'CHĘTNIE UDZIELASZ INF. PONIEWAŻ ZNASZ RODZINĘ'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
  {
    number: 475,
    question: capitalizeSentences(
      'WYRÓŻNIA SIĘ KILKA RODZAJÓW KORECZKÓW UŻYWANYCH DO ZAMYKANIA WENFLONU. PRZEDSTAWIONY NA RYSUNKU KORECZEK TO:'
    ),
    imgSrc: img1,
    answers: [
      {
        option: 'KOREK DWUSTRONNY'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'ZWYKŁY KORECZEK'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'KOREK- NIE KAPEK'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 476,
    question: capitalizeSentences(
      'WENFLON ZBUDOWANY JEST Z KILKU ELEMENTÓW: KANIULI, KTÓRĄ WPROWADZA SIĘ DO ŻYŁY, PORTU GŁÓWNEGO, PORTU POBOCZNEGO ORAZ SKRZYDEŁEK WENFLONU. ELEMENT ZAZNACZONY NA WENFLONIE TO:'
    ),
    imgSrc: img2,
    answers: [
      {
        option: 'PORT GŁÓWNY'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'PORT POBOCZNY'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'SKRZYDEŁKO WENFLONU'.toLowerCase(),
        isCorrect: true,
      },
    ],
  },
  {
    number: 477,
    question: capitalizeSentences(
      'ODŁĄCZAJĄC KROPLOWY WLEW DOŻYTNY WIDZISZ, ŻE KANIULA WENFLONU, KTÓRA POWINNATKWIĆ W NACZYNIU JEST WYSUNIĘTA, TAK JAK NA RYSUNKU OBOK. CO ZROBISZ?'
    ),
    imgSrc: img3,
    answers: [
      {
        option: 'ODŁĄCZYSZ KROPLOWY WLEW DOŻYTNY I UDASZ SIĘ DO NASTEPNEGO PACJENTA'.toLowerCase(),
        isCorrect: false,
      },
      {
        option: 'POINFORMUJESZ O TYM PIELĘGNIARKĘ'.toLowerCase(),
        isCorrect: true,
      },
      {
        option: 'USUNIESZ SAMODZIELNIE WENFLON'.toLowerCase(),
        isCorrect: false,
      },
    ],
  },
]
