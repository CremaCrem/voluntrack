// Mobile Navigation Functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");

  // Toggle mobile menu
  function toggleMobileMenu() {
    mobileMenu.classList.toggle("translate-x-0");
    mobileMenu.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }

  // Close mobile menu when clicking overlay
  function closeMobileMenu() {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  // Event listeners
  mobileMenuButton.addEventListener("click", toggleMobileMenu);
  overlay.addEventListener("click", closeMobileMenu);

  // Close mobile menu when clicking a link
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Close mobile menu on window resize if open
  window.addEventListener("resize", function () {
    if (
      window.innerWidth >= 768 &&
      !mobileMenu.classList.contains("-translate-x-full")
    ) {
      closeMobileMenu();
    }
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
