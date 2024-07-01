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
