(function () {
  "use strict";

  // Mobile nav
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".nav-mobile");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobileNav.classList.toggle("open", !open);
      document.body.style.overflow = open ? "" : "hidden";
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // Active page highlighting (already set via aria-current / class in HTML,
  // but ensure current path matches if needed)
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

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      reveals.forEach(function (el) { el.classList.add("visible"); });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      reveals.forEach(function (el) { io.observe(el); });
    }
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
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

      var name = (document.getElementById("name") || {}).value || "";
      var email = (document.getElementById("email") || {}).value || "";
      var company = (document.getElementById("company") || {}).value || "";
      var interest = (document.getElementById("interest") || {}).value || "";
      var message = (document.getElementById("message") || {}).value || "";

      name = name.trim();
      email = email.trim();
      company = company.trim();
      message = message.trim();

      setError("name", name.length < 2 ? "Please enter your name." : "");
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setError("email", !emailOk ? "Please enter a valid email address." : "");
      setError("company", company.length < 1 ? "Please enter your company or gym name." : "");
      setError("interest", !interest ? "Please select a topic." : "");
      setError("message", message.length < 10 ? "Please add a short message (at least 10 characters)." : "");

      if (!valid) {
        var firstErr = form.querySelector(".error");
        if (firstErr) firstErr.focus();
        return;
      }

      // Demo success — no backend
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

    // Clear error on input
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
