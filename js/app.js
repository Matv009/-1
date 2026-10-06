/**
 * js/app.js
 * Главная точка входа приложения МИС
 */

import { misDB } from "./data.js";
import { renderAppointmentRow, renderDiagnosisCard, renderPatientCard } from "./render.js";

function mountCollection(containerElement, itemsArray, renderFunction) {
  if (!containerElement) {
    return;
  }
  itemsArray.forEach((item) => {
    const renderedNode = renderFunction(item);
    containerElement.append(renderedNode);
  });
}

function initDashboard() {
  // 1. Таблица приёмов
  const appointmentsTableBody = document.getElementById("appointments-table-body");
  mountCollection(appointmentsTableBody, misDB.appointments, renderAppointmentRow);

  // 2. Сетка диагнозов
  const diagnosesGrid = document.getElementById("diagnoses-grid");
  mountCollection(diagnosesGrid, misDB.diagnoses, renderDiagnosisCard);

  // 3. Список пациентов в боковой панели
  const patientsStack = document.getElementById("patients-stack");
  mountCollection(patientsStack, misDB.patients, renderPatientCard);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDashboard);
} else {
  initDashboard();
}