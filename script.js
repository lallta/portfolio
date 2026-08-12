const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "66px";
  nav.style.right = "7vw";
  nav.style.flexDirection = "column";
  nav.style.gap = "18px";
  nav.style.padding = "20px";
  nav.style.background = "rgba(16,16,16,.94)";
  nav.style.color = "#fff";
  nav.style.backdropFilter = "blur(10px)";
});
