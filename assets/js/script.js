/* ==============================
   DARK MODE TOGGLE
============================== */
const toggleTheme = document.querySelector(".toggle-theme");
const body = document.body;

// Load theme dari localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleTheme.textContent = "☀️";
}

// Toggle theme
toggleTheme.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleTheme.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleTheme.textContent = "🌙";
  }
});

/* ==============================
   REVEAL ON SCROLL
============================== */
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ==============================
   ACTIVE NAV LINK
============================== */
const navLinks = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage || linkPage === "" && currentPage === "") {
    link.classList.add("active");
  }
});
