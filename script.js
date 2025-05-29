// Initialize animations when elements come into view
function initAnimations() {
  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Collection card animations
  const collectionCards = document.querySelectorAll(".collection-card");
  collectionCards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.classList.add("animate");
    }
  });

  // About image animation
  const aboutImage = document.querySelector(".about-image");
  if (isElementInViewport(aboutImage)) {
    aboutImage.classList.add("animate");
  }

  // Testimonial animations
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card, index) => {
    if (isElementInViewport(card)) {
      setTimeout(() => {
        card.classList.add("animate");
      }, index * 200);
    }
  });

  // Add scroll listener to animate elements as they come into view
  window.addEventListener("scroll", () => {
    collectionCards.forEach((card) => {
      if (isElementInViewport(card) && !card.classList.contains("animate")) {
        card.classList.add("animate");
      }
    });

    if (
      isElementInViewport(aboutImage) &&
      !aboutImage.classList.contains("animate")
    ) {
      aboutImage.classList.add("animate");
    }

    testimonialCards.forEach((card, index) => {
      if (isElementInViewport(card) && !card.classList.contains("animate")) {
        setTimeout(() => {
          card.classList.add("animate");
        }, index * 200);
      }
    });
  });
}

// Check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Initialize everything when the page loads
window.addEventListener("DOMContentLoaded", () => {
  initAnimations();
});
