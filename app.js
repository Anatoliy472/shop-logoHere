"use strict";
// add to cart

// for (let i = 0; i < buttonInBetweenForm.length; i++) {
//   buttonInBetweenForm[i].addEventListener("cklick", function (e) {
//     console.log("clicked");
//   });
// }

// prevProductsCouns = +productsCountEl.textContent;
//     console.log(prevProductsCouns);
//     productsCountEl.textContent = prevProductsCouns + 1;

let productsCountEl = document.getElementById("products-count");

let buttonInBetweenForm = document.querySelectorAll(".button-inBetweenForm");

buttonInBetweenForm.forEach((Item) => {
  Item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});

let likeBtns = document.querySelectorAll(".div-img-corect-heart");
console.log(likeBtns);
// change like state
likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }
  });
});

// change like state
// likeBtns.forEach((item) => {
//   item.addEventListener("click", function () {
//     item.classList.toggle("licked");
//   });
// });
// if (item.classList.contains("liked")) {
//   item.classList.remove("liked");
// } else {
//   item.classList.add("liked");
// }

// let likeBtns = document.querySelectorAll(".like");
// console.log(likeBtns);

// item.classList.remove("liked");

//more details
let moreDetails = document.querySelectorAll(".button-inBetweenForm-1");
let modal = document.querySelector(".modal");
moreDetails.forEach((item) => {
  item.addEventListener("click", openModal);
});

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

let moreForms = document.querySelectorAll(".button-inBetweenForm-1");
let form = document.querySelector(".form");
moreDetails.forEach((item) => {
  item.addEventListener("click", openModal);
});
form.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
});

//через function
// item.addEventListener("click", openModal)
// })
// function openModal () {
// modal.classList.add("show");
// modal.classList.remove("hide");
// }

//slick
$(".slider").slick();
