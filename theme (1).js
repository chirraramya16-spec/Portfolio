// Light/dark theme toggle.
// Respects a saved preference, falls back to the OS setting, and keeps
// the toggle button's icon/label in sync with the active theme.
// Runs before paint-blocking content loads so there's no flash of the
// wrong theme (see the inline snippet in <head> on every page).
document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  var iconEl = toggle.querySelector(".icon");
  var labelEl = toggle.querySelector(".label");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (iconEl) iconEl.textContent = theme === "light" ? "☀" : "☾";
    if (labelEl) labelEl.textContent = theme === "light" ? "Light" : "Dark";
    toggle.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
  }

  // The inline head script already set root[data-theme]; just sync the button.
  applyTheme(root.getAttribute("data-theme") || "dark");

  toggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(current);
    try { localStorage.setItem("theme", current); } catch (e) { /* storage unavailable */ }
  });
});
