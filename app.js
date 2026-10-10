/**
 * js/app.js
 * Главная точка входа приложения МИС
 * 4.1–4.2 Темы + localStorage
 * 4.3    Динамический акцентный цвет (HEX → RGB)
 * 4.4    Учёт системных настроек
 * 4.5    Плавные переходы (в CSS)
 */

import { misDB } from "./data.js";
import { renderAppointmentRow, renderDiagnosisCard, renderPatientCard } from "./render.js";

/* =========================================================================
   4.1–4.2, 4.4. УПРАВЛЕНИЕ ТЕМОЙ
   ========================================================================= */
const ThemeManager = (() => {
  const THEME_KEY = "mis-theme";
  const THEMES = ["light", "dark", "solarized"];
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function hasManualTheme() {
    try { return THEMES.includes(localStorage.getItem(THEME_KEY)); }
    catch { return false; }
  }
  function systemTheme() { return media.matches ? "dark" : "light"; }

  function syncSwitcherUI(activeTheme) {
    document.querySelectorAll("[data-theme-value]").forEach((btn) => {
      btn.setAttribute("aria-checked", String(btn.dataset.themeValue === activeTheme));
    });
  }

  function applyTheme(theme, { persist = false } = {}) {
    if (!THEMES.includes(theme)) return;
    root.setAttribute("data-theme", theme);
    if (persist) {
      try { localStorage.setItem(THEME_KEY, theme); } catch {}
    }
    syncSwitcherUI(theme);
  }

  function setTheme(theme) { applyTheme(theme, { persist: true }); }

  function resetToSystem() {
    try { localStorage.removeItem(THEME_KEY); } catch {}
    applyTheme(systemTheme());
  }

  // 4.4. Реакция на изменение системной темы в реальном времени
  function watchSystem() {
    const handler = (e) => {
      if (!hasManualTheme()) applyTheme(e.matches ? "dark" : "light");
    };
    if (media.addEventListener) media.addEventListener("change", handler);
    else if (media.addListener) media.addListener(handler);
  }

  function init() {
    const theme = hasManualTheme() ? localStorage.getItem(THEME_KEY) : systemTheme();
    applyTheme(theme);

    document.querySelectorAll("[data-theme-value]").forEach((btn) => {
      btn.addEventListener("click", () => setTheme(btn.dataset.themeValue));
    });
    const resetBtn = document.getElementById("theme-reset");
    if (resetBtn) resetBtn.addEventListener("click", resetToSystem);

    watchSystem();
  }

  return { init, setTheme, resetToSystem };
})();

/* =========================================================================
   4.3. ДИНАМИЧЕСКИЙ АКЦЕНТНЫЙ ЦВЕТ
   ========================================================================= */
const AccentManager = (() => {
  const ACCENT_KEY = "mis-accent";
  const root = document.documentElement;
  const DEFAULT_ACCENT = "#0284c7";

  function hexToRgb(hex) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(String(hex).trim());
    return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : null;
  }

  function apply(hex, { persist = false } = {}) {
    const rgb = hexToRgb(hex);
    if (!rgb) return;
    root.style.setProperty("--accent", hex);
    root.style.setProperty("--accent-rgb", rgb.join(", "));

    const picker = document.getElementById("accent-color");
    if (picker && picker.value.toLowerCase() !== hex.toLowerCase()) picker.value = hex;

    if (persist) { try { localStorage.setItem(ACCENT_KEY, hex); } catch {} }
  }

  function init() {
    const picker = document.getElementById("accent-color");
    let saved = null;
    try { saved = localStorage.getItem(ACCENT_KEY); } catch {}
    if (saved && hexToRgb(saved)) apply(saved);
    else if (picker) apply(picker.value || DEFAULT_ACCENT);

    if (picker) picker.addEventListener("input", (e) => apply(e.target.value, { persist: true }));
  }

  return { init, apply };
})();

/* =========================================================================
   РЕНДЕР
   ========================================================================= */
function mountCollection(containerElement, itemsArray, renderFunction) {
  if (!containerElement) return;
  itemsArray.forEach((item) => {
    containerElement.append(renderFunction(item));
  });
}

function initDashboard() {
  // Тема + акцент (4.1–4.4)
  ThemeManager.init();
  AccentManager.init();

  // 1. Таблица приёмов
  const appointmentsTableBody = document.getElementById("appointments-table-body");
  mountCollection(appointmentsTableBody, misDB.appointments, renderAppointmentRow);

  // 2. Сетка диагнозов
  const diagnosesGrid = document.getElementById("diagnoses-grid");
  mountCollection(diagnosesGrid, misDB.diagnoses, renderDiagnosisCard);

  // 3. Список пациентов
  const patientsStack = document.getElementById("patients-stack");
  mountCollection(patientsStack, misDB.patients, renderPatientCard);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDashboard);
} else {
  initDashboard();
}