// script.js — Best of the Best Animation Effects

document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll("section, .project-card, .skills-list li, .company-list span");

  // Intersection Observer for scroll-based fade/slide popups
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeInElements.forEach(el => {
    el.classList.add("reveal-hidden");
    observer.observe(el);
  });

  // Click ripple effect on all links and buttons
  document.body.addEventListener("click", e => {
    const target = e.target.closest("a, button");
    if (!target) return;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const rect = target.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    target.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });

  // Smooth scroll behavior
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});
