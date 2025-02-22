// Testimonials Carousel with Auto-Slide
let currentTestimonial = 0;
const testimonials = document.querySelectorAll("#testimonial-carousel > div");
const totalTestimonials = testimonials.length;
let autoSlideInterval;

// Function to show testimonial with GSAP animation
function showTestimonial(index) {
  gsap.to("#testimonial-carousel", {
    x: `-${index * 100}%`,
    duration: 1,
    ease: "power3.inOut",
  });
}

// Auto-slide functionality
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
  }, 5000); // Change slide every 5 seconds
}

// Manual navigation
document.getElementById("next-testimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  showTestimonial(currentTestimonial);
  resetAutoSlide();
});

document.getElementById("prev-testimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentTestimonial);
  resetAutoSlide();
});

// Reset auto-slide timer on manual navigation
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Initialize first testimonial and start auto-slide
showTestimonial(currentTestimonial);
startAutoSlide();



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
