"use strict";

const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".responsive-wrapper");
const logo = document.querySelector(".logo");

openBtn.addEventListener("click", () => {
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
  modal.style.display = "flex";
  modal.style.animationName = "fade-in";
  logo.style.color = "#0f1724";
});
closeBtn.addEventListener("click", () => {
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
  modal.style.display = "none";
  logo.style.color = "#fff";
});

const technologies = [
  {
    skill: "Html",
    level: 80,
  },
  {
    skill: "CSS",
    level: 80,
  },
  {
    skill: "JavaScript",
    level: 80,
  },
  {
    skill: "React",
    level: 50,
  },
];

function checkLevel(score) {
  if (score >= 80 && score <= 100) {
    return "Advanced";
  } else if (score >= 50 && score < 80) {
    return "Intermediary";
  } else return "Beginner";
}

const skill = checkLevel(89);
console.log(skill);
