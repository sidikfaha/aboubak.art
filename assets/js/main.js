/* ============================================================
   ABOUBAKAR SIDIK FAHA — ASTRAL
   Starfield canvas · GSAP + ScrollTrigger · Lenis · interactions
   ============================================================ */

(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  const hasST = typeof window.ScrollTrigger !== "undefined";
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (hasGSAP && hasST) gsap.registerPlugin(ScrollTrigger);

  /* ============================================================
     I18N — bascule EN/FR
     L'EN est capturé par clé avant toute modification
     (la duplication du marquee clone ensuite les data-i18n).
     ============================================================ */
  const enByKey = new Map();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (!enByKey.has(el.dataset.i18n)) enByKey.set(el.dataset.i18n, el.innerHTML);
  });
  const enAttrs = new Map();
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(":");
    enAttrs.set(el, { attr, key, value: el.getAttribute(attr) });
  });
  const metaDesc = document.querySelector('meta[name="description"]');
  const enTitle = document.title;
  const enDesc = metaDesc ? metaDesc.getAttribute("content") : "";

  const langToggle = document.getElementById("langToggle");
  const setLang = (lang) => {
    const fr = lang === "fr" && window.I18N_FR;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (fr && window.I18N_FR[key] !== undefined) el.innerHTML = window.I18N_FR[key];
      else if (enByKey.has(key)) el.innerHTML = enByKey.get(key);
    });
    enAttrs.forEach(({ attr, key, value }, el) => {
      if (fr && window.I18N_FR[key] !== undefined) el.setAttribute(attr, window.I18N_FR[key]);
      else el.setAttribute(attr, value);
    });
    document.documentElement.lang = lang;
    document.title = fr ? window.I18N_FR.meta_title : enTitle;
    if (metaDesc) metaDesc.setAttribute("content", fr ? window.I18N_FR.meta_description : enDesc);
    langToggle.querySelectorAll(".lang-toggle__opt").forEach((opt) => {
      opt.classList.toggle("is-active", opt.dataset.lang === lang);
    });
    langToggle.setAttribute("aria-label", fr ? "Switch to English" : window.I18N_FR.aria_lang);
    localStorage.setItem("aboubak-lang", lang);
  };
  langToggle.addEventListener("click", () => {
    setLang(document.documentElement.lang === "fr" ? "en" : "fr");
  });
  // Langue initiale : choix mémorisé, sinon détection navigateur
  const savedLang = localStorage.getItem("aboubak-lang");
  const browserLang = (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
  if ((savedLang || browserLang) === "fr") setLang("fr");

  if (!hasGSAP || prefersReducedMotion) {
    document.body.classList.add("anim-off");
    document.body.removeAttribute("data-loading");
    const pre = document.getElementById("preloader");
    if (pre) pre.remove();
  }

  /* ============================================================
     STARFIELD — étoiles scintillantes + étoiles filantes
     ============================================================ */
  const canvas = document.getElementById("starfield");
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext("2d");
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, stars = [], meteors = [], raf = null;
    let mouseX = 0.5, mouseY = 0.5, running = true;

    const build = () => {
      W = canvas.width = Math.floor(innerWidth * DPR);
      H = canvas.height = Math.floor(innerHeight * DPR);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      const count = Math.min(260, Math.floor((innerWidth * innerHeight) / 6500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: (Math.random() * 1.1 + 0.3) * DPR,
        a: Math.random() * 0.5 + 0.25,
        sp: Math.random() * 1.6 + 0.4,
        ph: Math.random() * Math.PI * 2,
        depth: Math.random() * 0.7 + 0.3,
      }));
    };

    const spawnMeteor = () => {
      const fromTop = Math.random() > 0.4;
      meteors.push({
        x: Math.random() * W * 0.7 + W * 0.15,
        y: fromTop ? -20 : Math.random() * H * 0.35,
        vx: (Math.random() * 4 + 5) * DPR * (Math.random() > 0.5 ? 1 : -1) * 0.6,
        vy: (Math.random() * 3 + 4) * DPR * 0.6,
        life: 1,
      });
    };
    setInterval(() => { if (running && meteors.length < 2 && Math.random() > 0.55) spawnMeteor(); }, 2600);

    let t = 0;
    const draw = () => {
      if (!running) return;
      t += 0.016;
      ctx.clearRect(0, 0, W, H);
      const px = (mouseX - 0.5) * 26 * DPR;
      const py = (mouseY - 0.5) * 18 * DPR;

      for (const s of stars) {
        const tw = 0.55 + 0.45 * Math.sin(t * s.sp + s.ph);
        ctx.globalAlpha = s.a * tw;
        ctx.fillStyle = "#eef2ff";
        ctx.beginPath();
        ctx.arc(s.x + px * s.depth, s.y + py * s.depth, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx; m.y += m.vy; m.life -= 0.012;
        if (m.life <= 0 || m.y > H + 40) { meteors.splice(i, 1); continue; }
        const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 9, m.y - m.vy * 9);
        grad.addColorStop(0, `rgba(238,242,255,${0.9 * m.life})`);
        grad.addColorStop(1, "rgba(90,215,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4 * DPR;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * 9, m.y - m.vy * 9);
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };

    build();
    draw();
    window.addEventListener("resize", build);
    window.addEventListener("mousemove", (e) => { mouseX = e.clientX / innerWidth; mouseY = e.clientY / innerHeight; });
    document.addEventListener("visibilitychange", () => {
      running = !document.hidden;
      if (running) { if (raf) cancelAnimationFrame(raf); draw(); }
    });
  }

  /* ============================================================
     LENIS
     ============================================================ */
  let lenis = null;
  if (!prefersReducedMotion && typeof window.Lenis !== "undefined") {
    lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    if (hasGSAP && hasST) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  const scrollToTarget = (target) => {
    const el = document.querySelector(target);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    else el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  /* ============================================================
     PRELOADER + INTRO HERO
     ============================================================ */
  const introHero = () => {
    if (!hasGSAP || prefersReducedMotion) return;
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.to(".hero__line > span", { y: 0, duration: 1.2, stagger: 0.1 }, 0)
      .to(".hero [data-intro]", { opacity: 1, y: 0, duration: 1, stagger: 0.12 }, 0.35)
      .from(".orbit__chip", { opacity: 0, scale: 0.4, duration: 0.7, stagger: 0.09, ease: "back.out(2)" }, 1);
  };

  const preloader = document.getElementById("preloader");
  if (preloader && hasGSAP && !prefersReducedMotion) {
    const counter = { value: 0 };
    const countEl = document.getElementById("preloaderCount");
    const tlPre = gsap.timeline({
      onComplete: () => {
        preloader.remove();
        document.body.removeAttribute("data-loading");
        introHero();
      },
    });
    tlPre
      .from(".preloader__orbit", { opacity: 0, scale: 0.6, duration: 0.6, ease: "back.out(1.8)" })
      .from(".preloader__label", { opacity: 0, duration: 0.5 }, 0.15)
      .to(counter, {
        value: 100, duration: 1.5, ease: "power2.inOut",
        onUpdate: () => { if (countEl) countEl.textContent = Math.round(counter.value); },
      }, 0.2)
      .to("#preloaderBar", { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, 0.2)
      .to(".preloader__inner", { opacity: 0, y: -22, duration: 0.45, ease: "power2.in" }, "+=0.15")
      .to(preloader, { yPercent: -100, duration: 0.8, ease: "power4.inOut" });
  } else if (preloader) {
    preloader.remove();
    document.body.removeAttribute("data-loading");
  }

  /* ============================================================
     REVEALS / PARALLAX / COMPTEURS
     ============================================================ */
  if (hasGSAP && hasST && !prefersReducedMotion) {
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });

    document.querySelectorAll("[data-counter]").forEach((el) => {
      const target = parseInt(el.dataset.counter, 10);
      ScrollTrigger.create({
        trigger: el, start: "top 92%", once: true,
        onEnter: () => gsap.fromTo(el, { textContent: 0 }, {
          textContent: target, duration: 1.6, ease: "power2.out", snap: { textContent: 1 },
        }),
      });
    });

    /* Marquee */
    document.querySelectorAll("[data-marquee]").forEach((track) => {
      track.innerHTML += track.innerHTML + track.innerHTML;
      gsap.to(track, { xPercent: -33.333, duration: 26, ease: "none", repeat: -1 });
    });

    /* Magnétique */
    if (finePointer) {
      document.querySelectorAll("[data-magnetic]").forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
          const r = btn.getBoundingClientRect();
          gsap.to(btn, {
            x: (e.clientX - r.left - r.width / 2) * 0.25,
            y: (e.clientY - r.top - r.height / 2) * 0.35,
            duration: 0.4, ease: "power3.out",
          });
        });
        btn.addEventListener("mouseleave", () =>
          gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" }));
      });
    }
  }

  /* ============================================================
     HEADER
     ============================================================ */
  const header = document.getElementById("header");
  let lastY = 0;
  const onScrollHeader = (y) => {
    header.classList.toggle("is-scrolled", y > 60);
    if (y > 450 && y > lastY + 4) header.classList.add("is-hidden");
    else if (y < lastY - 4 || y < 450) header.classList.remove("is-hidden");
    lastY = y;
    toTop.classList.toggle("is-visible", y > 750);
  };
  const toTop = document.getElementById("toTop");
  if (lenis) lenis.on("scroll", ({ scroll }) => onScrollHeader(scroll));
  window.addEventListener("scroll", () => onScrollHeader(window.scrollY), { passive: true });

  /* Lien actif */
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sectionObserver = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${e.target.id}`));
      }
    }),
    { rootMargin: "-35% 0px -60% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

  /* ============================================================
     MENU MOBILE
     ============================================================ */
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = () => {
    burger.classList.remove("is-open");
    mobileMenu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    if (lenis) lenis.start();
  };
  burger.addEventListener("click", () => {
    const open = !mobileMenu.classList.contains("is-open");
    burger.classList.toggle("is-open", open);
    mobileMenu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
    if (lenis) open ? lenis.stop() : lenis.start();
    if (open) {
      mobileMenu.querySelectorAll(".mobile-menu__link").forEach((link, i) => {
        link.style.transitionDelay = `${0.12 + i * 0.06}s`;
      });
    }
  });

  /* Ancres */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.length < 2) return;
      e.preventDefault();
      if (mobileMenu.classList.contains("is-open")) closeMenu();
      scrollToTarget(href);
    });
  });

  /* ============================================================
     CURSEUR ÉTOILE
     ============================================================ */
  const cursor = document.querySelector(".cursor");
  if (cursor && finePointer && hasGSAP && !prefersReducedMotion) {
    const star = document.getElementById("cursorStar");
    const halo = document.getElementById("cursorHalo");
    const xTo = gsap.quickTo(halo, "left", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(halo, "top", { duration: 0.4, ease: "power3" });
    window.addEventListener("mousemove", (e) => {
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      xTo(e.clientX); yTo(e.clientY);
    });
    document.querySelectorAll("[data-cursor]").forEach((el) => {
      const mode = el.dataset.cursor;
      el.addEventListener("mouseenter", () => cursor.classList.add(mode === "view" ? "is-view" : "is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover", "is-view"));
    });
  }

  /* ============================================================
     SERVICES — accordéon (clic / clavier, le hover est en CSS)
     ============================================================ */
  document.querySelectorAll(".svc__item").forEach((item) => {
    const toggle = () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".svc__item.is-open").forEach((i) => i.classList.remove("is-open"));
      if (!isOpen) item.classList.add("is-open");
      if (hasST) setTimeout(() => ScrollTrigger.refresh(), 650);
    };
    item.querySelector(".svc__head").addEventListener("click", toggle);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });
  // Premier service ouvert par défaut
  const firstSvc = document.querySelector(".svc__item");
  if (firstSvc) firstSvc.classList.add("is-open");

  /* ============================================================
     TÉMOIGNAGES — carrousel
     ============================================================ */
  const slides = [...document.querySelectorAll(".tstm__slide")];
  const dotsWrap = document.getElementById("tstmDots");
  let tstmIndex = 0;
  let tstmTimer = null;

  if (slides.length && dotsWrap) {
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "tstm__dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("aria-label", `Testimonial ${i + 1}`);
      dot.setAttribute("role", "tab");
      dot.addEventListener("click", () => goToSlide(i, true));
      dotsWrap.appendChild(dot);
    });
  }
  const dots = dotsWrap ? [...dotsWrap.children] : [];
  const goToSlide = (i, manual = false) => {
    tstmIndex = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("is-active", k === tstmIndex));
    dots.forEach((d, k) => d.classList.toggle("is-active", k === tstmIndex));
    if (manual) restartAutoplay();
  };
  const restartAutoplay = () => {
    clearInterval(tstmTimer);
    if (!prefersReducedMotion) tstmTimer = setInterval(() => goToSlide(tstmIndex + 1), 6500);
  };
  const prev = document.getElementById("tstmPrev");
  const next = document.getElementById("tstmNext");
  if (prev && next) {
    prev.addEventListener("click", () => goToSlide(tstmIndex - 1, true));
    next.addEventListener("click", () => goToSlide(tstmIndex + 1, true));
    const box = document.querySelector(".tstm");
    box.addEventListener("mouseenter", () => clearInterval(tstmTimer));
    box.addEventListener("mouseleave", restartAutoplay);
    restartAutoplay();
  }

  /* ============================================================
     DIVERS
     ============================================================ */
  toTop.addEventListener("click", () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  document.getElementById("currentYear").textContent = new Date().getFullYear();
})();
