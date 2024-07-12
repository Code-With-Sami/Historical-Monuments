// Pre Loader 
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
});

// Scroll To Top
const toTop = document.getElementById('scroll-up');
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    toTop.classList.add("scroll-up-active")
  } else {
    toTop.classList.remove("scroll-up-active")
  }
});

// Nav Bar Background On Scrolling effect
let navEl = document.querySelector(`.nav`);
window.addEventListener(`scroll`, () => {
  if (window.pageYOffset > 20) {
    navEl.classList.add(`nav-scrolled`);
    navEl.classList.add(`navbar-dark`);
  } else {
    navEl.classList.remove(`nav-scrolled`);
  }
});




// Gsap Animation
let timeline = gsap.timeline();
timeline.from(".hide2", {
  duration: 1.5,
  opacity: 0,
}, "1");
let timeline2 = gsap.timeline();
timeline.from(".hide", {
  duration: 1.5,
  opacity: 0,
}, "0.5");

// Form Vaildation
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();



