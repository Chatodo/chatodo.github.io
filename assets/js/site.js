/* Theme toggle + C++ easter-egg dialog */
(function () {
    "use strict";

    var root = document.documentElement;
    var toggle = document.querySelector(".theme-toggle");
    var systemDark = matchMedia("(prefers-color-scheme: dark)");

    function isDark() {
        var chosen = root.getAttribute("data-theme");
        return chosen ? chosen === "dark" : systemDark.matches;
    }
    function reflect() {
        toggle.setAttribute("aria-pressed", String(isDark()));
    }

    reflect();
    systemDark.addEventListener("change", reflect);
    toggle.addEventListener("click", function () {
        var theme = isDark() ? "light" : "dark";
        root.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("theme", theme);
        } catch (e) {}
        reflect();
    });

    var meme = document.getElementById("cpp-meme-modal");
    var egg = document.querySelector(".cpp-easter-egg");
    if (meme && egg) {
        egg.addEventListener("click", function () {
            meme.showModal();
        });
        meme.querySelector(".cpp-modal__close").addEventListener("click", function () {
            meme.close();
        });
        // Backdrop clicks are dispatched to the dialog itself
        meme.addEventListener("click", function (e) {
            if (e.target === meme) meme.close();
        });
    }
})();
