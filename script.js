// Aparecer no load: h1 e botões com .fade-in
window.addEventListener("load", function () {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.classList.add("show");
  });

  revealOnScroll(); // também checa se já tem coisas visíveis ao carregar
});

// Função para animar .reveal (elementos sozinhos)
function revealElements() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const isVisible = top < windowHeight - 150;

    if (isVisible) {
      el.classList.add('active');
    }
  });
}

// Função para animar grupos com delay (ex: logos, cards, etc)
function revealGroups() {
  const groups = document.querySelectorAll('.reveal-group');
  const windowHeight = window.innerHeight;

  groups.forEach(group => {
    const top = group.getBoundingClientRect().top;
    const isVisible = top < windowHeight - 150;

    if (isVisible && !group.classList.contains('active')) {
      group.classList.add('active');

      const items = group.querySelectorAll('.reveal-item');
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
      });
    }
  });
}

// Chama ambas as funções no scroll
function revealOnScroll() {
  revealElements();
  revealGroups();
}

window.addEventListener('scroll', revealOnScroll);

///////////////////////////////////////////////////////////

const backToTopBtn = document.getElementById("backToTop");
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  // Verifica se o scroll passou do header
  const headerBottom = header.offsetTop + header.offsetHeight;
  if (window.scrollY > headerBottom) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

//////////////////////////////////////////////////

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobile = document.querySelector('.close-mobile');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeMobile.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

// Fecha menu ao clicar em link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});