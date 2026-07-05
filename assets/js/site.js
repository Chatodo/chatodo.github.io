/* Site behaviour:
   - accessible light/dark theme toggle (persisted in localStorage)
   - scroll-reveal for .reveal elements
   - C++ easter-egg modal
   The FOUC-safe theme bootstrap runs inline in _includes/head.html;
   this file wires the interactive toggle, reveal observer and modal. */
(function () {
    "use strict";

    // localStorage can throw in privacy modes / sandboxed iframes — fail safe.
    var store = {
        get: function (k) {
            try {
                return localStorage.getItem(k);
            } catch (e) {
                return null;
            }
        },
        set: function (k, v) {
            try {
                localStorage.setItem(k, v);
            } catch (e) {
                /* ignore */
            }
        },
    };

    function prefersReducedMotion() {
        return (
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        );
    }

    function currentTheme() {
        return store.get("theme") === "dark" ? "dark" : "light";
    }

    function applyTheme(theme) {
        var n1 = document.getElementById("theme_source");
        var n2 = document.getElementById("theme_source_2");
        if (!n1 || !n2) return;

        // Suppress transitions during the swap, then restore after it has
        // painted (double rAF — no magic timing constant).
        var root = document.documentElement;
        root.classList.add("theme-switching");

        n1.disabled = theme === "dark";
        n2.disabled = theme !== "dark";
        store.set("theme", theme);

        var btn = document.querySelector(".theme-toggle");
        if (btn) btn.setAttribute("aria-pressed", String(theme === "dark"));

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                root.classList.remove("theme-switching");
            });
        });
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
        if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
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

    function initEasterEgg() {
        var trigger = document.querySelector(".cpp-easter-egg");
        var modal = document.getElementById("cpp-meme-modal");
        if (!trigger || !modal) return;
        var closeBtn = modal.querySelector(".cpp-modal__close");
        var lastFocus = null;

        function onKeydown(e) {
            if (e.key === "Escape") {
                close();
            } else if (e.key === "Tab" && closeBtn) {
                // Single focusable control — keep focus trapped on it.
                e.preventDefault();
                closeBtn.focus();
            }
        }
        function open() {
            lastFocus = document.activeElement;
            modal.classList.add("is-open");
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", onKeydown);
            if (closeBtn) closeBtn.focus();
        }
        function close() {
            modal.classList.remove("is-open");
            document.body.style.overflow = "";
            document.removeEventListener("keydown", onKeydown);
            if (lastFocus && lastFocus.focus) lastFocus.focus();
        }

        trigger.addEventListener("click", open);
        trigger.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
            }
        });
        if (closeBtn) closeBtn.addEventListener("click", close);
        // Close only on true backdrop clicks, not on the image/content.
        modal.addEventListener("click", function (e) {
            if (e.target === modal) close();
        });
    }

    // GreedyNav (theme script) measures the nav once at DOMContentLoaded;
    // web fonts swapping in later change the widths. Nudge it to re-check.
    function initNavResync() {
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(function () {
                window.dispatchEvent(new Event("resize"));
            });
        }
    }

    function init() {
        initToggle();
        initReveal();
        initEasterEgg();
        initNavResync();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
