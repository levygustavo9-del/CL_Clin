const CONFIG = {
  whatsappNumber: "",
  whatsappMessage: "Olá! Gostaria de conhecer os cuidados da CL CLÍN.",
};

const treatmentDetails = {
  calos: {
    title: "Calos e calosidades",
    description: "O cuidado pode incluir avaliação da região, orientação sobre fatores de pressão e procedimentos indicados pelo profissional, sempre após avaliação individualizada.",
  },
  fissuras: {
    title: "Fissuras e rachaduras",
    description: "A avaliação busca compreender o estado da pele e definir cuidados adequados, com orientações responsáveis sobre hidratação e acompanhamento.",
  },
  micoses: {
    title: "Cuidados com micoses",
    description: "Após avaliação profissional, podem ser orientados cuidados específicos para a pele e as unhas, respeitando as necessidades de cada paciente.",
  },
  diabetico: {
    title: "Pé diabético",
    description: "O cuidado exige avaliação individualizada e atenção às orientações profissionais. O acompanhamento deve respeitar as condições de cada paciente.",
  },
  verruga: {
    title: "Verruga plantar",
    description: "Lesões na planta dos pés precisam ser avaliadas por um profissional, que poderá indicar a conduta adequada para cada situação.",
  },
  ozonio: {
    title: "Hidratação com ozônio",
    description: "Procedimento voltado ao cuidado e hidratação dos pés, sempre realizado após avaliação e conforme a indicação profissional.",
  },
};

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = [...document.querySelectorAll(".nav-link")];

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 30);
}

function closeMenu() {
  mainNav.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealElements = document.querySelectorAll(".reveal, .reveal-image");
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: "0px 0px -40px" });
revealElements.forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll("main section[id]")];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55%", threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

const timeline = document.querySelector(".timeline");
if (timeline) {
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("in-view", entry.isIntersecting));
  }, { threshold: 0.2 });
  timelineObserver.observe(timeline);
}

const treatmentModal = document.querySelector("#treatment-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
let lastModalTrigger = null;

function openTreatmentModal(key, trigger) {
  const detail = treatmentDetails[key];
  if (!detail) return;
  lastModalTrigger = trigger;
  modalTitle.textContent = detail.title;
  modalDescription.textContent = detail.description;
  treatmentModal.hidden = false;
  document.body.classList.add("modal-open");
  treatmentModal.querySelector(".modal-close").focus();
}

function closeTreatmentModal() {
  treatmentModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastModalTrigger) lastModalTrigger.focus();
}

document.querySelectorAll(".treatment-card").forEach((card) => {
  card.querySelector(".card-hit").addEventListener("click", (event) => {
    openTreatmentModal(card.dataset.treatment, event.currentTarget);
  });
});
treatmentModal.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeTreatmentModal);
});

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-img");
let lastLightboxTrigger = null;

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    lastLightboxTrigger = item;
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.hidden = false;
    document.body.classList.add("modal-open");
    lightbox.querySelector(".lightbox-close").focus();
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
  document.body.classList.remove("modal-open");
  if (lastLightboxTrigger) lastLightboxTrigger.focus();
}

document.querySelectorAll("[data-close-lightbox]").forEach((element) => element.addEventListener("click", closeLightbox));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!treatmentModal.hidden) closeTreatmentModal();
    if (!lightbox.hidden) closeLightbox();
  }
});

const whatsappUrl = CONFIG.whatsappNumber
  ? `https://wa.me/${CONFIG.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`
  : "#";

["whatsapp-link", "footer-whatsapp", "whatsapp-float"].forEach((id) => {
  const link = document.querySelector(`#${id}`);
  if (link) {
    link.href = whatsappUrl;
    if (!CONFIG.whatsappNumber) link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#contato").scrollIntoView({ behavior: "smooth" });
      document.querySelector("#message").focus({ preventScroll: true });
    });
  }
});

const form = document.querySelector("#contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;
  form.querySelectorAll("[required]").forEach((field) => {
    const row = field.closest(".form-row");
    const error = row.querySelector(".field-error");
    let message = "";
    if (!field.value.trim()) message = "Este campo é obrigatório.";
    if (field.type === "tel" && field.value.trim() && field.value.replace(/\D/g, "").length < 10) message = "Informe um telefone válido.";
    row.classList.toggle("invalid", Boolean(message));
    error.textContent = message;
    if (message) valid = false;
  });

  const status = form.querySelector(".form-status");
  if (!valid) {
    status.textContent = "Confira os campos destacados.";
    form.querySelector(".invalid input, .invalid select")?.focus();
    return;
  }

  status.textContent = "Formulário pronto. A integração de envio deve ser configurada antes da publicação.";
  form.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();

if (window.matchMedia("(min-width: 981px)").matches) {
  window.addEventListener("scroll", () => {
    const heroImage = document.querySelector(".hero-image");
    const offset = Math.min(window.scrollY * 0.08, 50);
    heroImage.style.transform = `scale(1.06) translateY(${offset}px)`;
  }, { passive: true });
}
