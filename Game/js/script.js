'use strict'

let firstSquare = document.querySelector('.firstSquare');
let secondSquare = document.querySelector('.secondSquare');
let gameArea = document.querySelector(".game");
let form = document.querySelector(".form");

function buttonClicked() {
  //получаю введенные параметры
  let firstSquareParameters = document.querySelector("#firstPlayer").value;
  let secondSquareParameters = document.querySelector("#secondPlayer").value;
  //скрываю форму, показываю игровое поле
  form.classList.add("disabled");
  gameArea.classList.add("active");
  //передаю параметры первому квадрату
  firstSquare.style.height = +firstSquareParameters + 'px';
  firstSquare.style.width = +firstSquareParameters + 'px';
  //передаю параметры второму квадрату
  secondSquare.style.height = +secondSquareParameters + 'px';
  secondSquare.style.width = +secondSquareParameters + 'px';
}

//определение управления, слушатели отшатия и нажатия
  const pressedKeys = new Set();

  addEventListener("keydown", event => {
  pressedKeys.add(event.code);
  });

  addEventListener("keyup", event => {
  pressedKeys.delete(event.code);
  });

  let dt, lastT = performance.now();
  const players = document.querySelectorAll(".square");
  const userKeys = [
  [
    ["ArrowUp", .2],
    ["ArrowDown", -.2],
    ["ArrowRight", .2],
    ["ArrowLeft", -.2]
  ],
  [
    ["KeyW", .2],
    ["KeyS", -.2],
    ["KeyD", .2],
    ["KeyA", -.2]
  ]
  ]
  const users = userKeys.map((keys, i) => ({
  matrix: new DOMMatrix(),
  user: players[i],
  keys
  }));

//определение столкновений
const checkCollision = users => {
  const [{ user: one }, { user: two }] = users;
  let { top: a, left: c, width: w1, height: h1 } = one.getBoundingClientRect();
  let { top: b, left: d, width: w2, height: h2 } = two.getBoundingClientRect();
  a -= b;
  c -= d;
  return a >= -w1 && a <= h2 && c >= -w1 && c <= h2
}

//векторное движение
  (function loop(t) {
    dt = t - lastT;
    lastT = t;
    users.forEach(({ matrix, user, keys }) => {
        keys.forEach(([key, delta], i) => {
            let vector = i < 2 ? [0, delta * -dt] : [delta * dt, 0];
            if (pressedKeys.has(key)) matrix.translateSelf(...vector);
        })
    user.style.transform = matrix;
    })

//вывод алерта
    if (checkCollision(users)) {
      const [{ user: one }, { user: two }] = users;
      let { top: a, left: c, width: w1, height: h1 } = one.getBoundingClientRect();
      let { top: b, left: d, width: w2, height: h2 } = two.getBoundingClientRect();
      if (w2 > w1) {
        alert('Второй игрок выйграл');
        location.reload();
      }
      if (w1 > w2) {
        alert('Первый игрок выйграл');
        location.reload();
      }
    }
    requestAnimationFrame(loop);
})(lastT);
    