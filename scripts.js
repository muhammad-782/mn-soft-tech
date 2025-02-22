// Example: Add interactivity to the "Contact Me" button
document.addEventListener("DOMContentLoaded", () => {
  const contactButton = document.querySelector("#hero button:last-child");
  contactButton.addEventListener("click", () => {
    alert("Contact form will be added here!");
  });
});
