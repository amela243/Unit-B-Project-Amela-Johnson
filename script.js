let title = document.querySelector(".title");
let storyOpening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionTwoscreen = document.querySelector(".option-two-screen");
let optionOnescreen = document.querySelector(".option-one-screen"); 
let optionTwoend = document.querySelector(".option-two-end");
let optionOneend = document.querySelector(".option-one-end");





optionOne.onclick = function() {
  title.style.display = "none";
  storyOpening.style.display = "none";
  buttons.style.display = "none";
  optionOnescreen.style.display = "block";
  optionOneend.style.display = "none";
};

optionTwo.onclick = function() {
  title.style.display = "none";
  storyOpening.style.display = "none";
  buttons.style.display = "none";
  optionTwoscreen.style.display = "block";
  optionTwoend.style.display = "none";

};

optionOnescreen.onclick = function() {
  optionOnescreen.style.display = "none";
  optionOneend.style.display = "block";
};



optionTwoscreen.onkeydown = function() {
  title.style.display = "none";
  storyOpening.style.display = "none";
  buttons.style.display = "none";
  optionTwoend.style.display = "block";
};

optionTwoscreen.onkeydown = function() {
  optionTwoscreen.style.display = "none";
  optionTwoend.style.display = "block";
};

  