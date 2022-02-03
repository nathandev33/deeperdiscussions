// SELECTED ELEMENTS
const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".single-link");
const cardText = document.querySelector(".card-text");
const nextBtn = document.querySelector(".next-btn");
const shuffle = document.querySelector(".shuffle");
const card = document.querySelector(".card");
const cardInfo = document.querySelector(".card-number");
const saveSettings = document.querySelector(".save-settings");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const previousCardBtn = document.querySelector(".previous-card-btn");
import * as cs from "/db_questions/questions_cs.js";
import * as en from "/db_questions/questions_en.js";
console.log(cs.questions.length);

// POLE
//questions a poznavaci_ jsou duplikáty, když budu přidávat otázky, musím do obou, jinak nebudu mít aktuální!

// console.log("questions: " + questions.length);
// console.log("pozn: " + poznavaci_.length);
// console.log("hypo: " + hypoteticke_.length);
// console.log("crazy: " + crazy_.length);

const select = document.getElementById("select-language");
let selectedLanguage = select.value;
console.log(selectedLanguage);
// proměnná language určuje do jaké databáze otázek se budu dívat
let language = en;

select.addEventListener("change", function handleChange(event) {
  console.log(event.target.value);
  //podle toho, jaký jazyk vyberu, do proměnné language se uloží příslušný jazyk (klíčové pro rozhodnutí, do jaké databáze se budu dívat)
  selectedLanguage = event.target.value;

  switch (selectedLanguage) {
    case "en":
      language = en;
      break;
      debugger;
    case "cs":
      language = cs;
      break;
    default:
      language = en;
  }
  shuffle.click(); // po změně jazyku zamíchám balíček
});

console.log(language.questions[2].text);

let vygenerovanaRandomCisla = myRandomInts(
  language.questions.length - 1,
  language.questions.length - 1
);
// console.log("vygenerovanaRandomCisla");
// console.log(vygenerovanaRandomCisla);

// NAV - SIDEBAR
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
  });
});

let indexRandomCisla = 0;

nextBtn.addEventListener("click", () => {
  let questionIndex = vygenerovanaRandomCisla[indexRandomCisla];
  if (indexRandomCisla < language.questions.length) {
    cardText.textContent = language.questions[questionIndex].text;
    indexRandomCisla++;
    // console.log("číslo je: " + indexRandomCisla);
  } else {
    cardText.textContent =
      "THERE ARE NO NEW QUESTIONS TO DISPLAY IN THIS PACKAGE.";
  }
  numberInfo();
});

//previous card - button
previousCardBtn.addEventListener("click", function () {
  if (indexRandomCisla > 0) {
    indexRandomCisla--;
    questionIndex = vygenerovanaRandomCisla[indexRandomCisla - 1];
    numberInfo();
    // console.log("index je: " + questionIndex);
    cardText.textContent = language.questions[questionIndex].text;
    // console.log("číslo je: " + indexRandomCisla);
  } else {
    cardText.textContent =
      "YOU'RE AT THE VERY BEGINNING, DRAW THE FIRST QUESTION.";
    indexRandomCisla == 0;
  }
});

//shuffle button
shuffle.addEventListener("click", () => {
  indexRandomCisla = 0;
  vygenerovanaRandomCisla = myRandomInts(
    language.questions.length - 1,
    language.questions.length - 1
  );
  numberInfo();

  // hourglass
  cardText.innerHTML = `
<article class="hourglass-container">          
        <div class="hourglass"> 
        </div>
    </article>
`;
  setTimeout(() => {
    cardText.innerHTML = `<span style="font-size:8rem;">?</span>`;
  }, 2100);
});

window.addEventListener("DOMContentLoaded", function () {
  //card number info
  numberInfo();
});

// FUNKCE
function numberInfo() {
  cardInfo.innerHTML = `${indexRandomCisla} / ${language.questions.length - 1}`;
}

// vygeneruje arrae randoms - 121 random čísel od 1-121
function myRandomInts(quantity, max) {
  const set = new Set();
  while (set.size < quantity) {
    set.add(Math.floor(Math.random() * max)); // bylo původně ...."* max) + 1))
  }
  const randoms = Array.from(set);
  // console.log(randoms);
  // console.log(Math.max(...randoms));
  // console.log(Math.min(...randoms));
  return randoms;
}

saveSettings.addEventListener("click", checkCheckbox);

function checkCheckbox() {
  var poznavaciCheckbox = document.querySelector(".poznavaci");
  var hypotetickeCheckbox = document.querySelector(".hypoteticke");
  var crazyCheckbox = document.querySelector(".crazy");

  if (
    poznavaciCheckbox.checked == false &&
    hypotetickeCheckbox.checked == false &&
    crazyCheckbox.checked == false
  ) {
    questions = [];
    cardText.textContent = "Select at least 1 question type in the settings.";
  } else if (
    poznavaciCheckbox.checked == false &&
    hypotetickeCheckbox.checked == false &&
    crazyCheckbox.checked == true
  ) {
    questions = crazy_;
  } else if (
    poznavaciCheckbox.checked == false &&
    hypotetickeCheckbox.checked == true &&
    crazyCheckbox.checked == false
  ) {
    questions = hypoteticke_;
  } else if (
    poznavaciCheckbox.checked == false &&
    hypotetickeCheckbox.checked == true &&
    crazyCheckbox.checked == true
  ) {
    questions = [...hypoteticke_, ...crazy_];
  } else if (
    poznavaciCheckbox.checked == true &&
    hypotetickeCheckbox.checked == false &&
    crazyCheckbox.checked == false
  ) {
    questions = poznavaci_;
  } else if (
    poznavaciCheckbox.checked == true &&
    hypotetickeCheckbox.checked == false &&
    crazyCheckbox.checked == true
  ) {
    questions = [...poznavaci_, ...crazy_];
  } else if (
    poznavaciCheckbox.checked == true &&
    hypotetickeCheckbox.checked == true &&
    crazyCheckbox.checked == false
  ) {
    questions = [...poznavaci_, ...hypoteticke_];
  } else {
    questions = [...poznavaci_, ...hypoteticke_, ...crazy_];
  }

  vygenerovanaRandomCisla = myRandomInts(
    questions.length - 1,
    questions.length
  );
  numberInfo();

  // ocheckuje, jestli tam jsou duplikáty. Pokud jo, vypíše je, pokud ne, returne prázdné erej
  // const lookup = questions.reduce((a, e) => {
  //   a[e.text] = ++a[e.text] || 0;
  //   return a;
  // }, {});
  // console.log(questions.filter(e => lookup[e.text]));
  return questions;
}

window.addEventListener("load", function () {
  // add an event listener for the change event
  const radioButtons = document.querySelectorAll('input[name="sortType"]');
  for (const radioButton of radioButtons) {
    radioButton.addEventListener("change", showSelected);
  }

  function showSelected(e) {
    console.log(e);
    if (this.checked) {
      document.querySelector(
        "#output"
      ).innerText = `You selected ${this.value}`;
    }
  }
});

// function subjectMarks() {
//   console.log(58);
// }
