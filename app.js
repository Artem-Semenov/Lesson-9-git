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
    modalPopup.classList.add('active')
    document.removeEventListener("scroll", showModalOnScroll);
  }
}
document.addEventListener("scroll", showModalOnScroll);

$('.slider').slick()