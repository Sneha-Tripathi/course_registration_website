const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000); // change every 4 sec
const slider = document.getElementById("courseSlider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

// Scroll right
rightArrow.addEventListener("click", () => {
  slider.scrollBy({ left: 270, behavior: "smooth" });
});

// Scroll left
leftArrow.addEventListener("click", () => {
  slider.scrollBy({ left: -270, behavior: "smooth" });
});

// Auto Slide Right to Left
setInterval(() => {
  slider.scrollBy({ left: 270, behavior: "smooth" });
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: "smooth" });
  }
}, 3000); // slide every 3 sec

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // prevent reload

      // Show success message
      successMessage.style.display = "block";

      // Clear form
      form.reset();

      // Hide message after 4 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 4000);
    });
  });

  $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    }
  });
});

