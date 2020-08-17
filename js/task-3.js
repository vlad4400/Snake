console.log("start: task-3");
console.log("");

var money = ["1 000", "5 000", "50 000", "250 000", "1 000 000"];

var data = [
  {
    question: "Кто из этих философов в 1864 году написал музыку на стихи А.С. Пушкина «Заклинание» и «Зимний вечер»?",
    a1: "Юнг",
    a2: "Гегель",
    a3: "Ницше",
    a4: "Шопенгауэр",
    correctAnswer: 3
  },
  {
    question: "Сколько раз в сутки подзаводят куранты Спасской башни Кремля?",
    a1: "Один",
    a2: "Два",
    a3: "Три",
    a4: "Четыре",
    correctAnswer: 2
  },
  {
    question: "Кто 1-м получил Нобелевскую премию по литературе?",
    a1: "Романист",
    a2: "Драматург",
    a3: "Поэт",
    a4: "Эссеист",
    correctAnswer: 3
  },
  {
    question: "С какой буквы начинаются слова, опубликованные в 16-м томе последнего издания Большой советской энциклопедии?",
    a1: "М",
    a2: "Н",
    a3: "О",
    a4: "П",
    correctAnswer: 1
  },
  {
    question: "Кто из перечисленных был пажом во времена Екатерины II?",
    a1: "Д.И. Фонвизин",
    a2: "Г.Р. Державин",
    a3: "А.Н. Радищев",
    a4: "Н.М. Карамзин",
    correctAnswer: 3
  }
];

/*START MAIN PART*/
alert("Добропожаловать в игру как стать милионером!\n(Для продолжения нажмите 'Enter' или 'Esc')");
var answer = 0;
var NUMBER_ROUNDS = 5;
for (var i = 0; i < NUMBER_ROUNDS; i++) {
  answer = prompt(data[i].question + "\n\nВарианты ответа:\n1 - " + data[i].a1 + "\n2 - " + data[i].a2 + "\n3 - " + data[i].a3 + "\n4 - " + data[i].a4);
  while(answer != 1 && answer != 2 && answer != 3 && answer != 4) {
    answer = prompt("Вы ввели некоректные символ, или цифру!\n\n" + data[i].question + "\n\nВарианты ответа:\n1 - " + data[i].a1 + "\n2 - " + data[i].a2 + "\n3 - " + data[i].a3 + "\n4 - " + data[i].a4);
  }
  if (answer == data[i].correctAnswer) {
    if (NUMBER_ROUNDS != i + 1) {
      do {
        answer = prompt("Вы выиграли " + money[i] + " рублей. Вы хотите забрать эти деньги, или рискнуть и попробовать выиграть " + money[i+1] + " рублей?\n(1 - продолжить, 2 - забрать)");
      } while (answer != 1 && answer != 2);
      if (answer == 1) {
        continue;
      } else {
        alert("Поздравляю! Вы выиграли " + money[i] + " рублей!");
        break;
      }
    } else {
      alert("Поздравляю! Вы выиграли главный приз " + money[i] + " рублей!")
    }
  } else {
    alert("Вы програли игру. Вы уходите без денег ;(");
    break;
  }
}
/*END MAIN PART*/

console.log("");
console.log("end: task-3");
