//increase cart counter on click on add to cart button

const cartButtons = document.querySelectorAll(".device-add-to-cart");
const counter = document.querySelector(".counter");
cartButtons.forEach((el) => {
  el.addEventListener("click", function (e) {
    counter.innerHTML = +counter.innerHTML + 1;
  });
});

//modal on click on more details
const moreDetailsBtns = document.querySelectorAll(".device-more-details");
const modalPopup = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".btn-close");

moreDetailsBtns.forEach((el) => {
  el.addEventListener("click", function () {
    modalPopup.classList.add("active");
  });
});

document.addEventListener("click", function (e) {
  if (e.target === modalPopup || e.target === modalCloseBtn) {
    modalPopup.classList.remove("active");
  }
});

// favorite buttons
const favBtns = document.querySelectorAll(".favorite-button");

favBtns.forEach((el) => {
  el.addEventListener("click", function (e) {
    el.classList.toggle("active");
  });
});

//show modal on scroll more than 50% of document

const htmlHeight = document.documentElement.offsetHeight;
const viewportHeight = window.innerHeight;

/* function showModalOnScroll(e) {
  if (window.pageYOffset > htmlHeight / 2 - viewportHeight / 2) {
    modalPopup.classList.add('active')
    document.removeEventListener("scroll", showModalOnScroll);
  }
} */
function showModalOnScroll(e) {
  if (window.scrollY >= document.body.scrollHeight / 2) {
    modalPopup.classList.add("active");
    document.removeEventListener("scroll", showModalOnScroll);
  }
}
document.addEventListener("scroll", showModalOnScroll);

$(".slider").slick();

////

let decrementBtn = document.querySelectorAll(".decrement-btn");
console.log(decrementBtn);

let incrementBtn = document.querySelectorAll(".increment-btn");
console.log(incrementBtn);

let productQuantity = document.querySelectorAll(".item-counter-value");
console.log(productQuantity);

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };
  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.toggleButtonState();
}

let counters = [];
productQuantity.forEach((el, i) => {
  counters[i] = new Counter(
    incrementBtn[i],
    decrementBtn[i],
    productQuantity[i]
  );
});

AOS.init();
