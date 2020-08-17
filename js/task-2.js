console.log("start: task-2");
console.log("");

var works = {
    a00:'Вы живёте в тихой и уютной деревеньке на окрайне страны.\n' +
    'Здесь есть практчески всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе.\n' +
    'Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
    a0: 2,
    a1: '1 - Поспать до обеда\n',
    a2: '2 - Пойти прогуляться\n',
    b00: 'Вы решили поспать до обеда.\n' +
    'После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни.\n' +
    'После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
    b0: 2,
    b1: '1 - Пойти прогуляться\n',
    b2: '2 - Пойти пообедать\n',
    c00: 'Вы решили пойти прогуляться.\n' +
    'Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади.\n' +
    'Вы решаете дойти до озера, полюбоваться его красотойю\n' +
    'С одной стороны тропинки Вы видите пшеничное поле, за которым веднеется лес.\n' +
    'С другой стороны течёт речка, а в далеке виднеются горы.\n' +
    'Вы наслаждаетесь пейзажами и не замечаете как летит время.\n' +
    'Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
    c0: 2,
    c1: '1 - Подождать обед в столовой\n',
    c2: '2 - Поколоть дров перед обедом\n',
    d00: 'Здесь пишем текст повествования.\n' +
    'Потом пишем несколько действий, например, два\n',
    d0: 2, // кол-во ответов
    d1: '1 - 1-й ответ\n',
    d2: '2 - 2-й ответ\n',
};

var event, ok;
var answers = [];


do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
if (event == 1) {
  answers.push(["a00", "a1"]);
} else if (event == 2) {
  answers.push(["a00", "a2"]);
}
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        if (event == 1) {
          answers.push(["b00", "b1"]);
        } else if (event == 2) {
          answers.push(["b00", "b2"]);
        }
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                if (event == 1) {
                  answers.push(["d00", "d1"]);
                } else if (event == 2) {
                  answers.push(["d00", "d2"]);
                }
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                if (event == 1) {
                  answers.push(["d00", "d1"]);
                } else if (event == 2) {
                  answers.push(["d00", "d2"]);
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        if (event == 1) {
          answers.push(["c00", "c1"]);
        } else if (event == 2) {
          answers.push(["c00", "c2"]);
        }
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                if (event == 1) {
                  answers.push(["d00", "d1"]);
                } else if (event == 2) {
                  answers.push(["d00", "d2"]);
                }
                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                if (event == 1) {
                  answers.push(["d00", "d1"]);
                } else if (event == 2) {
                  answers.push(["d00", "d2"]);
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

var step = prompt("Теперь вы можете посмотреть свои ходы!\nДля этого введите номер хода");
while(true) {
  if (step >= 1 && step <= 3) {
    alert("В ходе номер '" + step + "' в ситуации:\n" + works[answers[1][0]] + "\nВы выбрали: \n" +  works[answers[1][1 ]]);
    break;
  } else {
    step = prompt("Вы ввели недопустимый символ, или значение.\nВведите повторно номер хода");
  }
}
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;

}

console.log("");
console.log("end: task-2");
