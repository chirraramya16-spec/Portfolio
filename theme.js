// Light/dark theme toggle.
// Respects saved preference, falls back to OS setting, and keeps
// the toggle button's label/icon in sync with the active theme.
document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  var iconEl = toggle.querySelector(".icon");
  var labelEl = toggle.querySelector(".label");

  function systemPrefersLight() {
    return window.matchMedia("(prefers-color-scheme: light)").matches;
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (iconEl) iconEl.textContent = theme === "light" ? "☀" : "☾";
    if (labelEl) labelEl.textContent = theme === "light" ? "Light" : "Dark";
    toggle.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
  }

  var saved = localStorage.getItem("theme");
  applyTheme(saved || (systemPrefersLight() ? "light" : "dark"));

  toggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(current);
    localStorage.setItem("theme", current);
  });
});
