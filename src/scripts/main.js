// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".md\\:hidden");
  const navLinks = document.querySelector(".hidden.md\\:flex");

  if (mobileMenuButton && navLinks) {
    mobileMenuButton.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
      navLinks.classList.toggle("flex");
      navLinks.classList.toggle("flex-col");
      navLinks.classList.toggle("absolute");
      navLinks.classList.toggle("top-16");
      navLinks.classList.toggle("left-0");
      navLinks.classList.toggle("right-0");
      navLinks.classList.toggle("bg-[#184085]");
      navLinks.classList.toggle("p-4");
      navLinks.classList.toggle("space-y-4");
    });
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// Add hover effect for cards
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".transform");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
});
