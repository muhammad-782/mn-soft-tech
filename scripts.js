@import url("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css");

/* Custom Animations */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-left {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes slide-in-right {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}

.animate-slide-in-left {
  animation: slide-in-left 1s ease-in-out;
}

.animate-slide-in-right {
  animation: slide-in-right 1s ease-in-out;
}
