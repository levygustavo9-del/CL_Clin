const CONFIG = {
  whatsappNumber: "", // TODO: número com DDI e DDD, somente dígitos.
  heroVideoSrc: "", // TODO: assets/media/hero.mp4 quando o vídeo estiver disponível.
  whatsappMessage: "Olá! Gostaria de conhecer os cuidados da CL CLÍN.",
};

const serviceDetails = {
  preventiva: {
    title: "Podologia Preventiva",
    intro: "Acompanhamento para observar os pés e orientar uma rotina de cuidado adequada a cada pessoa.",
    what: "É uma modalidade de cuidado voltada à avaliação da pele, das unhas, dos calçados e de áreas de pressão ou atrito. A conduta é definida após conversa e avaliação individual.",
    audience: "Pessoas que desejam manter uma rotina de cuidado ou que percebem desconfortos recorrentes relacionados à pele, às unhas ou ao calçado.",
    needs: [
      "Observação de alterações visíveis na pele e nas unhas.",
      "Desconfortos associados a pressão ou atrito do calçado.",
      "Orientações sobre higiene, calçados e cuidados cotidianos.",
    ],
    benefits: [
      "Orientações alinhadas à rotina e às necessidades observadas.",
      "Atenção regular a mudanças que possam precisar de avaliação.",
      "Mais clareza sobre quando buscar cuidado profissional.",
    ],
    approach: "O atendimento começa com uma conversa sobre saúde e hábitos. Em seguida, o profissional avalia os pés e apresenta opções de cuidado ou encaminhamento, conforme a necessidade e sua área de atuação.",
    care: "Evite remover calos ou cortar áreas doloridas com instrumentos em casa. Feridas, dor intensa ou sinais de infecção precisam de avaliação por um profissional de saúde.",
  },
  geriatrica: {
    title: "Podologia Geriátrica",
    intro: "Cuidado atento às necessidades dos pés de pessoas idosas, respeitando seu histórico, conforto e autonomia.",
    what: "É o cuidado podológico que considera as mudanças da pele e das unhas ao longo do envelhecimento, além de mobilidade, sensibilidade, condições de saúde e capacidade de realizar o autocuidado.",
    audience: "Pessoas idosas, especialmente quando há dificuldade para alcançar os pés, enxergar alterações ou cuidar das unhas com segurança. A participação de um acompanhante pode ser útil, se desejada.",
    needs: [
      "Dificuldade para manter a higiene e o corte seguro das unhas.",
      "Ressecamento, fragilidade ou alterações visíveis nas unhas e na pele.",
      "Desconfortos associados a calçados ou pontos de pressão.",
    ],
    benefits: [
      "Cuidado adaptado às condições e à rotina de cada pessoa.",
      "Orientações que podem apoiar uma rotina de autocuidado mais segura.",
      "Atenção a sinais que indiquem a necessidade de avaliação em saúde.",
    ],
    approach: "O profissional conversa sobre o histórico de saúde, os medicamentos informados e as dificuldades do dia a dia. A avaliação é cuidadosa, e qualquer procedimento é definido de acordo com as condições observadas.",
    care: "Informe diagnósticos, medicamentos e alterações de sensibilidade ou circulação. Feridas, mudança de cor ou temperatura, inchaço e dor nova devem ser avaliados por um profissional de saúde.",
  },
  infantil: {
    title: "Podologia Infantil",
    intro: "Atenção acolhedora à pele e às unhas da criança, com participação do responsável e cuidado adequado à idade.",
    what: "É o acompanhamento podológico das necessidades relacionadas à pele, às unhas, aos calçados e aos hábitos de cuidado na infância. A avaliação considera a idade e o desenvolvimento da criança.",
    audience: "Crianças com desconforto ou alterações percebidas nas unhas ou na pele dos pés, sempre acompanhadas por um responsável legal.",
    needs: [
      "Orientação sobre higiene e cuidados cotidianos dos pés.",
      "Observação de alterações nas unhas, na pele ou relacionadas ao calçado.",
      "Identificação de situações que possam exigir avaliação pediátrica ou médica.",
    ],
    benefits: [
      "Abordagem respeitosa, gradual e adequada à idade.",
      "Orientações para a criança e seu responsável.",
      "Encaminhamento responsável quando a situação exceder a atuação podológica.",
    ],
    approach: "O responsável participa da conversa e compartilha o histórico e as queixas. O profissional explica cada etapa, avalia os pés e propõe apenas cuidados apropriados à situação.",
    care: "Não force o corte de uma unha dolorida nem tente retirar lesões em casa. Dor persistente, inchaço, secreção ou vermelhidão precisam de avaliação pediátrica ou médica.",
  },
  esportiva: {
    title: "Podologia Esportiva",
    intro: "Cuidado dos pés de quem pratica atividade física, considerando modalidade, calçados, atrito e rotina de treino.",
    what: "É uma abordagem de cuidado podológico que observa as demandas repetidas da prática esportiva sobre a pele e as unhas, além do ajuste e do uso do calçado.",
    audience: "Pessoas que praticam esporte ou atividade física, de forma recreativa ou competitiva, e buscam orientação sobre cuidados com os pés.",
    needs: [
      "Atrito e pressão recorrentes relacionados ao calçado esportivo.",
      "Alterações percebidas nas unhas ou na pele após a atividade.",
      "Orientação de cuidados cotidianos compatíveis com a modalidade praticada.",
    ],
    benefits: [
      "Cuidado e orientações considerados em conjunto com a rotina esportiva.",
      "Atenção a áreas de atrito e pressão que mereçam acompanhamento.",
      "Mais clareza sobre quando uma queixa exige avaliação de outro profissional.",
    ],
    approach: "O profissional conversa sobre a modalidade, a frequência da atividade e os calçados utilizados, avalia a pele e as unhas e define as orientações cabíveis.",
    care: "A podologia não substitui avaliação de lesões esportivas. Dor persistente, hematoma, inchaço ou ferida devem ser avaliados por profissional de saúde antes de retomar a atividade.",
  },
  laboral: {
    title: "Podologia Laboral",
    intro: "Cuidado orientado pelas exigências da rotina de trabalho, como longos períodos em pé, caminhadas ou uso de calçados ocupacionais.",
    what: "É uma modalidade de cuidado podológico que considera as condições do trabalho e sua relação com conforto, atrito, pressão e hábitos de cuidado dos pés.",
    audience: "Pessoas que passam muitas horas em pé ou caminhando, ou que utilizam calçados ocupacionais durante a jornada.",
    needs: [
      "Desconfortos relacionados ao tempo em pé ou ao uso prolongado de calçados.",
      "Áreas de atrito e pressão que mereçam observação.",
      "Orientações de cuidado compatíveis com a rotina e as regras de segurança do trabalho.",
    ],
    benefits: [
      "Recomendações ajustadas às condições relatadas de trabalho.",
      "Atenção a mudanças na pele e nas unhas associadas a atrito e pressão.",
      "Orientações de cuidado sem substituir medidas de saúde e segurança ocupacional.",
    ],
    approach: "A conversa inclui a rotina, os calçados usados e os desconfortos percebidos. Após avaliar os pés, o profissional orienta cuidados possíveis e encaminha quando necessário.",
    care: "Calçados de proteção não devem ser modificados em desacordo com as normas de segurança. Dor persistente, inchaço ou feridas exigem avaliação de saúde.",
  },
  risco: {
    title: "Pé de Risco",
    intro: "Acompanhamento cuidadoso para pessoas com condições que podem reduzir a sensibilidade ou a circulação nos pés.",
    what: "É um cuidado preventivo individualizado para pés com fatores de risco, como diabetes, perda de sensibilidade, alterações circulatórias, deformidades ou histórico de lesões. Deve respeitar as orientações da equipe de saúde que acompanha a pessoa.",
    audience: "Pessoas com diabetes ou condições neurológicas ou circulatórias, sensibilidade reduzida ou histórico de úlcera ou amputação, conforme orientação de sua equipe de saúde.",
    needs: [
      "Observação cuidadosa da pele, das unhas e de áreas de pressão.",
      "Orientações de autocuidado e calçados compatíveis com a condição informada.",
      "Reconhecimento de alterações que necessitem de avaliação médica.",
    ],
    benefits: [
      "Conduta mais cautelosa e alinhada ao histórico relatado.",
      "Orientações de cuidado articuladas com as recomendações da equipe de saúde.",
      "Atenção a sinais que precisam ser avaliados sem demora.",
    ],
    approach: "O profissional conversa sobre o histórico, as orientações médicas e as alterações percebidas. A avaliação e qualquer cuidado são feitos com cautela; situações fora da atuação podológica são encaminhadas.",
    care: "Não tente cortar calos ou tratar feridas em casa. Ferida, secreção, vermelhidão, inchaço ou mudança de cor ou temperatura exigem contato rápido com a equipe de saúde ou avaliação médica.",
  },
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = [...document.querySelectorAll(".nav-link")];
let lenis;

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
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
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealTargets = document.querySelectorAll(".reveal, .reveal-image, .fade-in, .fade-up, .fade-down");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("in-view", entry.isIntersecting);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -36px" });
  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("in-view"));
}

const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-35% 0px -55%", threshold: 0 });
  sections.forEach((section) => sectionObserver.observe(section));
}

const heroVideo = document.querySelector(".hero-video");
heroVideo.addEventListener("playing", () => document.body.classList.add("hero-video-active"));
heroVideo.addEventListener("error", () => document.body.classList.remove("hero-video-active"));
if (reducedMotion.matches) {
  heroVideo.pause();
} else if (CONFIG.heroVideoSrc) {
  heroVideo.src = CONFIG.heroVideoSrc;
  heroVideo.load();
}

const serviceModal = document.querySelector("#service-modal");
const serviceModalTitle = document.querySelector("#service-modal-title");
const serviceModalBookingLink = document.querySelector("#service-modal-booking-link");
const serviceModalBookingLabel = document.querySelector("#service-modal-booking-label");
const serviceModalBookingNote = document.querySelector("#service-modal-booking-note");
let lastServiceTrigger;
let serviceModalClosing = false;

function fillServiceList(list, items) {
  const fragment = document.createDocumentFragment();
  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    fragment.append(item);
  });
  list.replaceChildren(fragment);
}

function openServiceModal(key, trigger) {
  const detail = serviceDetails[key];
  if (!detail) {
    console.error(`Não há informações cadastradas para o serviço "${key}".`);
    return;
  }

  lastServiceTrigger = trigger;
  serviceModalTitle.textContent = detail.title;
  document.querySelector("#service-modal-intro").textContent = detail.intro;
  document.querySelector("#service-modal-what").textContent = detail.what;
  document.querySelector("#service-modal-audience").textContent = detail.audience;
  document.querySelector("#service-modal-approach").textContent = detail.approach;
  document.querySelector("#service-modal-care").textContent = detail.care;
  fillServiceList(document.querySelector("#service-modal-needs"), detail.needs);
  fillServiceList(document.querySelector("#service-modal-benefits"), detail.benefits);

  const serviceWhatsappUrl = buildWhatsAppUrl(`${CONFIG.whatsappMessage} Tenho interesse em ${detail.title}.`);
  if (serviceWhatsappUrl) {
    serviceModalBookingLink.href = serviceWhatsappUrl;
    serviceModalBookingLink.target = "_blank";
    serviceModalBookingLink.rel = "noopener noreferrer";
    serviceModalBookingLabel.textContent = "Agendar pelo WhatsApp";
    serviceModalBookingLink.setAttribute("aria-label", `Agendar ${detail.title} pelo WhatsApp`);
    serviceModalBookingNote.hidden = true;
  } else {
    serviceModalBookingLink.href = "#contato";
    serviceModalBookingLink.removeAttribute("target");
    serviceModalBookingLink.removeAttribute("rel");
    serviceModalBookingLabel.textContent = "Solicitar contato";
    serviceModalBookingLink.setAttribute("aria-label", "Solicitar contato pelo formulário");
    serviceModalBookingNote.textContent = "O WhatsApp ainda não está configurado. Use o formulário de contato para solicitar atendimento.";
    serviceModalBookingNote.hidden = false;
  }

  serviceModal.hidden = false;
  document.body.classList.add("modal-open");
  lenis?.stop();
  window.requestAnimationFrame(() => {
    serviceModal.classList.add("is-open");
    serviceModal.querySelector(".service-modal-close").focus();
  });
}

function closeServiceModal({ restoreFocus = true, onClose } = {}) {
  if (serviceModal.hidden || serviceModalClosing) return;
  serviceModalClosing = true;
  serviceModal.classList.remove("is-open");
  window.setTimeout(() => {
    serviceModal.hidden = true;
    serviceModalClosing = false;
    document.body.classList.remove("modal-open");
    lenis?.start();
    if (restoreFocus) lastServiceTrigger?.focus();
    onClose?.();
  }, 450);
}

document.querySelectorAll(".service-card-hit").forEach((card) => {
  card.addEventListener("click", (event) => openServiceModal(card.dataset.service, event.currentTarget));
});
serviceModal.querySelectorAll("[data-close-service-modal]").forEach((element) => {
  element.addEventListener("click", () => closeServiceModal());
});
serviceModalBookingLink.addEventListener("click", (event) => {
  if (serviceModalBookingLink.href.startsWith("https://wa.me/")) {
    closeServiceModal();
    return;
  }

  event.preventDefault();
  const messageField = document.querySelector("#message");
  if (messageField) messageField.value = `Olá! Gostaria de solicitar informações sobre ${serviceModalTitle.textContent}.`;
  closeServiceModal({
    restoreFocus: false,
    onClose() {
      const contact = document.querySelector("#contato");
      if (!contact) return;
      history.replaceState(null, "", "#contato");
      if (lenis) {
        lenis.scrollTo(contact);
      } else {
        contact.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" });
      }
    },
  });
});

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-img");
let lastLightboxTrigger;

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    lastLightboxTrigger = item;
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.hidden = false;
    document.body.classList.add("modal-open");
    lenis?.stop();
    lightbox.querySelector(".lightbox-close").focus();
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
  document.body.classList.remove("modal-open");
  lenis?.start();
  lastLightboxTrigger?.focus();
}

document.querySelectorAll("[data-close-lightbox]").forEach((element) => element.addEventListener("click", closeLightbox));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!serviceModal.hidden) {
      closeServiceModal();
      return;
    }
    if (!lightbox.hidden) closeLightbox();
    closeMenu();
    return;
  }

  const activeDialog = !serviceModal.hidden ? serviceModal
    : (!lightbox.hidden ? lightbox : null);
  if (event.key !== "Tab" || !activeDialog) return;
  const focusable = [...activeDialog.querySelectorAll("a[href], button:not([disabled])")];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

function buildWhatsAppUrl(message = CONFIG.whatsappMessage) {
  const phone = CONFIG.whatsappNumber.replace(/\D/g, "");
  return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : null;
}

const whatsappUrl = buildWhatsAppUrl();

["header-whatsapp", "whatsapp-link", "footer-whatsapp", "whatsapp-float"].forEach((id) => {
  const link = document.getElementById(id);
  if (!link) return;
  if (whatsappUrl) {
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#contato";
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.title = "Configure o número do WhatsApp para ativar este link.";
  }
});

const form = document.querySelector("#contact-form");
const formStatus = form.querySelector(".form-status");

form.addEventListener("submit", (event) => {
  let valid = true;
  form.querySelectorAll("[required]").forEach((field) => {
    const row = field.closest(".form-row");
    const error = row.querySelector(".field-error");
    let message = "";
    if (!field.value.trim()) message = "Este campo é obrigatório.";
    if (field.type === "tel" && field.value.trim() && field.value.replace(/\D/g, "").length < 10) message = "Informe um telefone válido com DDD.";
    row.classList.toggle("invalid", Boolean(message));
    error.textContent = message;
    field.setAttribute("aria-invalid", String(Boolean(message)));
    if (message) valid = false;
  });

  if (!valid) {
    event.preventDefault();
    formStatus.textContent = "Confira os campos destacados.";
    form.querySelector(".invalid input, .invalid select")?.focus();
    return;
  }
  formStatus.textContent = "Enviando sua mensagem...";
});

form.querySelectorAll("input, select").forEach((field) => {
  field.addEventListener("input", () => {
    const row = field.closest(".form-row");
    if (!row) return;
    row.classList.remove("invalid");
    row.querySelector(".field-error").textContent = "";
    field.removeAttribute("aria-invalid");
  });
});

if (new URLSearchParams(window.location.search).has("enviado")) {
  formStatus.textContent = "Mensagem enviada. A equipe da CL CLÍN entrará em contato.";
}

document.querySelector("#year").textContent = new Date().getFullYear();

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Não foi possível carregar ${src}`));
    document.head.append(script);
  });
}

function loadStylesheet(href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = resolve;
    link.onerror = () => reject(new Error(`Não foi possível carregar ${href}`));
    document.head.append(link);
  });
}

const carousels = [...document.querySelectorAll(".differential-swiper, .gallery-swiper, .testimonials-swiper")];
const procedureCarouselElement = document.querySelector(".procedure-swiper");
let carouselInstances = [];
let procedureCarousel = null;
let carouselAssetsLoaded = false;
let carouselAssetsPromise;

async function loadCarouselAssets() {
  if (carouselAssetsLoaded) return;
  if (!carouselAssetsPromise) {
    carouselAssetsPromise = Promise.all([
      loadStylesheet("https://cdn.jsdelivr.net/npm/swiper@11.2.10/swiper-bundle.min.css"),
      loadScript("https://cdn.jsdelivr.net/npm/swiper@11.2.10/swiper-bundle.min.js"),
    ]).then(() => {
      carouselAssetsLoaded = true;
    }).catch((error) => {
      carouselAssetsPromise = null;
      throw error;
    });
  }
  await carouselAssetsPromise;
}

async function updateCarousels() {
  if (window.innerWidth > 1120) {
    carouselInstances.forEach((instance) => instance.destroy(true, true));
    carouselInstances = [];
    return;
  }
  if (!carousels.length || carouselInstances.length) return;

  try {
    await loadCarouselAssets();

    if (window.innerWidth > 1120 || carouselInstances.length) return;
    carouselInstances = carousels.map((element) => {
      const swiper = new window.Swiper(element, {
        slidesPerView: 1.18,
        spaceBetween: 16,
        freeMode: { enabled: true, sticky: false },
        speed: 450,
        resistance: true,
        resistanceRatio: 0.72,
        watchOverflow: true,
        grabCursor: true,
        keyboard: { enabled: true, onlyInViewport: true },
        a11y: {
          enabled: true,
          prevSlideMessage: "Item anterior",
          nextSlideMessage: "Próximo item",
          firstSlideMessage: "Este é o primeiro item",
          lastSlideMessage: "Este é o último item",
          paginationBulletMessage: "Ir para o item {{index}}",
        },
        pagination: { el: element.querySelector(".swiper-pagination"), clickable: true },
        breakpoints: {
          681: { slidesPerView: 2.2, spaceBetween: 22 },
        },
      });
      return swiper;
    });
  } catch (error) {
    console.error("Carrosséis indisponíveis; mantenha o gesto horizontal nativo.", error);
    carousels.forEach((element) => element.classList.add("swiper-unavailable"));
  }
}

async function updateProcedureCarousel() {
  if (!procedureCarouselElement) return;
  if (window.innerWidth > 680) {
    if (procedureCarousel) {
      procedureCarousel.destroy(true, true);
      procedureCarousel = null;
    }
    procedureCarouselElement.classList.remove("swiper-unavailable");
    return;
  }
  if (procedureCarousel) return;

  try {
    await loadCarouselAssets();
    if (window.innerWidth > 680 || procedureCarousel) return;

    procedureCarouselElement.classList.remove("swiper-unavailable");
    procedureCarousel = new window.Swiper(procedureCarouselElement, {
      slidesPerView: 1.12,
      centeredSlides: true,
      spaceBetween: 16,
      speed: 900,
      freeMode: {
        enabled: true,
        sticky: true,
        momentum: true,
        momentumRatio: 0.65,
        momentumVelocityRatio: 0.65,
      },
      resistance: true,
      resistanceRatio: 0.76,
      threshold: 3,
      longSwipesRatio: 0.2,
      roundLengths: true,
      watchSlidesProgress: true,
      watchOverflow: true,
      grabCursor: true,
      keyboard: { enabled: true, onlyInViewport: true },
      a11y: {
        enabled: true,
        containerMessage: "Carrossel de tratamentos. Deslize para navegar entre os procedimentos.",
        slideLabelMessage: "Tratamento {{index}} de {{slidesLength}}",
        prevSlideMessage: "Tratamento anterior",
        nextSlideMessage: "Próximo tratamento",
        firstSlideMessage: "Este é o primeiro tratamento",
        lastSlideMessage: "Este é o último tratamento",
        paginationBulletMessage: "Ir para o tratamento {{index}}",
      },
      pagination: {
        el: procedureCarouselElement.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });
  } catch (error) {
    console.error("O carrossel de tratamentos não pôde ser carregado; usando navegação horizontal nativa.", error);
    procedureCarouselElement.classList.add("swiper-unavailable");
  }
}

let carouselResizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(carouselResizeTimer);
  carouselResizeTimer = window.setTimeout(() => {
    updateCarousels();
    updateProcedureCarousel();
  }, 180);
});
updateCarousels();
updateProcedureCarousel();

async function setupScrollExperience() {
  if (!document.querySelector("[data-timeline]")) return;

  try {
    await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js");
    await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js");
    await loadScript("https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js");

    const { gsap, ScrollTrigger, Lenis } = window;
    gsap.registerPlugin(ScrollTrigger);
    lenis = new Lenis({ duration: 1.1, smoothWheel: true, syncTouch: false });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const timeline = document.querySelector("[data-timeline]");
    const line = timeline.querySelector(".timeline-line span");
    const steps = [...timeline.querySelectorAll(".timeline-step")];
    let timelineContext;

    function buildTimeline() {
      timelineContext?.revert();
      const heroVisuals = [...document.querySelectorAll(".hero-image, .hero-video")];
      heroVisuals.forEach((visual) => {
        visual.style.animation = "none";
      });
      timelineContext = gsap.context(() => {
        heroVisuals.forEach((visual) => {
          gsap.fromTo(visual, { yPercent: 0, scale: 1.045 }, {
            yPercent: 12,
            scale: 1.12,
            ease: "none",
            scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: true },
          });
        });
        const artwork = document.querySelector(".timeline-artwork");
        if (artwork) {
          gsap.to(artwork, {
            y: 64,
            ease: "none",
            scrollTrigger: { trigger: timeline, start: "top bottom", end: "bottom top", scrub: true },
          });
        }
        timeline.querySelectorAll(".step-watermark").forEach((watermark, index) => {
          const direction = index % 2 === 0 ? -1 : 1;
          gsap.fromTo(watermark, { y: 18 * direction }, {
            y: -18 * direction,
            ease: "none",
            scrollTrigger: {
              trigger: steps[index],
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
        gsap.fromTo(line, { scaleY: 0 }, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: timeline, start: "top 70%", end: "bottom 48%", scrub: true },
        });
        steps.forEach((step) => {
          gsap.fromTo(step, { y: 24, opacity: 0.38, scale: 0.985 }, {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: step,
              start: "top 82%",
              end: "top 50%",
              scrub: 0.6,
              onEnter: () => activateStep(step),
              onEnterBack: () => activateStep(step),
              onLeaveBack: () => {
                if (step === steps[0]) activateStep(null);
              },
            },
          });
        });
      }, timeline);
      ScrollTrigger.refresh();
    }

    function activateStep(activeStep) {
      steps.forEach((step) => step.classList.toggle("is-active", step === activeStep));
    }

    buildTimeline();
    let resizeTimer;
    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(buildTimeline, 180);
    });
  } catch (error) {
    console.error("As animações de rolagem não puderam ser carregadas.", error);
  }
}

setupScrollExperience();

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reducedMotion.matches) {
  const cursor = document.createElement("span");
  cursor.className = "custom-cursor";
  cursor.setAttribute("aria-hidden", "true");
  document.body.append(cursor);
  window.addEventListener("pointermove", (event) => {
    cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  }, { passive: true });
  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("pointerenter", () => cursor.classList.add("is-hovering"));
    element.addEventListener("pointerleave", () => cursor.classList.remove("is-hovering"));
  });
}
