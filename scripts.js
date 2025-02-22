

// Testimonials Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll("#testimonial-carousel > div");
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

document.getElementById("next-testimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  showTestimonial(currentTestimonial);
});

document.getElementById("prev-testimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentTestimonial);
});

// Initialize first testimonial
showTestimonial(currentTestimonial);
// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("bg-gray-950");
  body.classList.toggle("text-white");
  body.classList.toggle("bg-white");
  body.classList.toggle("text-gray-900");
});
