/* Site behaviour:
   - accessible light/dark theme toggle (persisted in localStorage)
   - scroll-reveal for .reveal elements
   The FOUC-safe theme bootstrap runs inline in _includes/head.html;
   this file wires the interactive toggle and reveal observer. */
(function () {
    "use strict";

    function currentTheme() {
        return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    }

    function applyTheme(theme) {
        var n1 = document.getElementById("theme_source");
        var n2 = document.getElementById("theme_source_2");
        if (!n1 || !n2) return;

        // Suppress transitions during the swap to avoid a flash
        var root = document.documentElement;
        root.classList.add("theme-switching");

        if (theme === "dark") {
            n1.setAttribute("rel", "stylesheet alternate");
            n2.setAttribute("rel", "stylesheet");
        } else {
            n1.setAttribute("rel", "stylesheet");
            n2.setAttribute("rel", "stylesheet alternate");
        }
        localStorage.setItem("theme", theme);

        var btn = document.querySelector(".theme-toggle");
        if (btn) btn.setAttribute("aria-pressed", String(theme === "dark"));

        window.setTimeout(function () {
            root.classList.remove("theme-switching");
        }, 80);
    }

    function initToggle() {
        var btn = document.querySelector(".theme-toggle");
        if (!btn) return;
        btn.setAttribute("aria-pressed", String(currentTheme() === "dark"));
        btn.addEventListener("click", function () {
            applyTheme(currentTheme() === "dark" ? "light" : "dark");
        });
    }

    function initReveal() {
        var els = document.querySelectorAll(".reveal");
        if (!els.length) return;
        if (!("IntersectionObserver" in window)) {
            els.forEach(function (el) {
                el.classList.add("is-visible");
            });
            return;
        }
        var io = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        els.forEach(function (el) {
            io.observe(el);
        });
    }

    function init() {
        initToggle();
        initReveal();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
