(function () {
  "use strict";

  function tr(key, fallback) {
    if (window.CindaraI18n && typeof window.CindaraI18n.t === "function") {
      return window.CindaraI18n.t(key);
    }
    return fallback;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Mobile nav
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".nav-mobile");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? tr("nav.open", "Open menu") : tr("nav.close", "Close menu"));
      mobileNav.classList.toggle("open", !open);
      document.body.style.overflow = open ? "" : "hidden";
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", tr("nav.open", "Open menu"));
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // Sticky header state
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Active page highlighting
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-desktop a, .nav-mobile a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;
    var file = href.split("/").pop();
    if (file === path || (path === "" && file === "index.html")) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });

  // Scroll reveals
  var reveals = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else if ("IntersectionObserver" in window && reveals.length) {
    var revealObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    reveals.forEach(function (el) { revealObs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Bleed panel ken-burns trigger
  var bleeds = document.querySelectorAll(".bleed-panel");
  if (!reduceMotion && "IntersectionObserver" in window && bleeds.length) {
    var bleedObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          entry.target.classList.toggle("is-inview", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    bleeds.forEach(function (el) { bleedObs.observe(el); });
  } else {
    bleeds.forEach(function (el) { el.classList.add("is-inview"); });
  }

  // Hero slideshow
  var hero = document.querySelector(".hero-cinematic");
  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll(".hero-progress button"));
    var pauseBtn = hero.querySelector(".hero-pause");
    var index = 0;
    var paused = false;
    var timer = null;
    var DURATION = 7000;

    function show(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, n) {
        s.classList.toggle("is-active", n === index);
      });
      dots.forEach(function (d, n) {
        d.classList.toggle("is-active", n === index);
        d.setAttribute("aria-current", n === index ? "true" : "false");
      });
    }

    function next() {
      show(index + 1);
      schedule();
    }

    function schedule() {
      clearTimeout(timer);
      if (reduceMotion || paused || slides.length < 2) return;
      timer = setTimeout(next, DURATION);
    }

    show(0);
    schedule();

    dots.forEach(function (dot, n) {
      dot.addEventListener("click", function () {
        show(n);
        schedule();
      });
    });

    if (pauseBtn) {
      pauseBtn.addEventListener("click", function () {
        paused = !paused;
        hero.classList.toggle("is-paused", paused);
        pauseBtn.setAttribute("aria-pressed", String(paused));
        pauseBtn.setAttribute(
          "aria-label",
          paused ? tr("home.play", "Play slideshow") : tr("home.pause", "Pause slideshow")
        );
        var playIcon = pauseBtn.querySelector(".icon-play");
        var pauseIcon = pauseBtn.querySelector(".icon-pause");
        if (playIcon && pauseIcon) {
          playIcon.hidden = !paused;
          pauseIcon.hidden = paused;
        }
        if (paused) clearTimeout(timer);
        else schedule();
      });
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) clearTimeout(timer);
      else if (!paused) schedule();
    });
  }

  // Contact form validation (client-side only)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      function setError(id, message) {
        var field = document.getElementById(id);
        var err = document.getElementById(id + "-error");
        if (!field) return;
        if (message) {
          field.classList.add("error");
          field.setAttribute("aria-invalid", "true");
          if (err) {
            err.textContent = message;
            err.classList.add("show");
          }
          valid = false;
        } else {
          field.classList.remove("error");
          field.removeAttribute("aria-invalid");
          if (err) {
            err.textContent = "";
            err.classList.remove("show");
          }
        }
      }

      var name = ((document.getElementById("name") || {}).value || "").trim();
      var email = ((document.getElementById("email") || {}).value || "").trim();
      var company = ((document.getElementById("company") || {}).value || "").trim();
      var interest = (document.getElementById("interest") || {}).value || "";
      var message = ((document.getElementById("message") || {}).value || "").trim();

      setError("name", name.length < 2 ? tr("contact.err.name", "Please enter your name.") : "");
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setError("email", !emailOk ? tr("contact.err.email", "Please enter a valid email address.") : "");
      setError("company", company.length < 1 ? tr("contact.err.company", "Please enter your company name.") : "");
      setError("interest", !interest ? tr("contact.err.interest", "Please select a topic.") : "");
      setError(
        "message",
        message.length < 10
          ? tr("contact.err.message", "Please add a short message (at least 10 characters).")
          : ""
      );

      if (!valid) {
        var firstErr = form.querySelector(".error");
        if (firstErr) firstErr.focus();
        return;
      }

      var card = form.closest(".form-card");
      if (card) card.classList.add("submitted");
      var success = document.getElementById("form-success");
      if (success) {
        success.classList.add("show");
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
      form.reset();
    });

    form.querySelectorAll("input, select, textarea").forEach(function (el) {
      el.addEventListener("input", function () {
        el.classList.remove("error");
        el.removeAttribute("aria-invalid");
        var err = document.getElementById(el.id + "-error");
        if (err) {
          err.textContent = "";
          err.classList.remove("show");
        }
      });
    });
  }
})();
