"use strict";

const navigationToggle = document.querySelector(".nav-toggle");
const navigationMenu = document.querySelector("#primary-navigation");
const currentYear = document.querySelector("#current-year");

function closeNavigation() {
  if (!navigationToggle || !navigationMenu) {
    return;
  }

  navigationToggle.setAttribute("aria-expanded", "false");
  navigationToggle.setAttribute("aria-label", "Open navigation");
  navigationMenu.classList.remove("is-open");
}

if (navigationToggle && navigationMenu) {
  navigationToggle.addEventListener("click", () => {
    const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true";
    navigationToggle.setAttribute("aria-expanded", String(!isExpanded));
    navigationToggle.setAttribute(
      "aria-label",
      isExpanded ? "Open navigation" : "Close navigation",
    );
    navigationMenu.classList.toggle("is-open", !isExpanded);
  });

  navigationMenu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      navigationToggle.getAttribute("aria-expanded") === "true"
    ) {
      closeNavigation();
      navigationToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
      closeNavigation();
    }
  });
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
