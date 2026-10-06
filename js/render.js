/**
 * js/render.js
 * Чистые функции рендера DOM-элементов
 * Полный запрет на innerHTML: только createElement, textContent, setAttribute, append
 */

// Вспомогательные функции
function formatDateRussian(isoString) {
  const d = new Date(isoString);
  return d.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function formatDateTimeRussian(isoString) {
  const d = new Date(isoString);
  const datePart = d.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit" });
  const timePart = d.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  return `${datePart} в ${timePart}`;
}

function getStatusBadgeConfig(status) {
  const configs = {
    // Приёмы
    scheduled: { label: "Запланирован", className: "status-badge status-badge--info" },
    in_progress: { label: "Идёт приём", className: "status-badge status-badge--warning" },
    completed: { label: "Завершён", className: "status-badge status-badge--success" },
    cancelled: { label: "Отменён", className: "status-badge status-badge--error" },
    waiting: { label: "Ожидает у кабинета", className: "status-badge status-badge--warning" },

    // Диагнозы
    active_phase: { label: "Острая фаза", className: "status-badge status-badge--error" },
    chronic: { label: "Хронический", className: "status-badge status-badge--warning" },
    remission: { label: "Ремиссия", className: "status-badge status-badge--info" },
    observation: { label: "Наблюдение", className: "status-badge status-badge--warning" },
    cured: { label: "Излечен / Здоров", className: "status-badge status-badge--success" },

    // Пациенты
    attached: { label: "Прикреплён", className: "status-badge status-badge--success" },
    dispensary: { label: "Диспансерный учёт", className: "status-badge status-badge--warning" },
    preferential: { label: "Льготная категория", className: "status-badge status-badge--info" },
    temporarily_attached: { label: "Временный ДМС", className: "status-badge status-badge--info" },
    archived: { label: "В архиве", className: "status-badge status-badge--error" }
  };

  return configs[status] || { label: status, className: "status-badge status-badge--info" };
}

// 1. Рендер строки таблицы приёмов
export function renderAppointmentRow(appt) {
  const tr = document.createElement("tr");

  // Талон / Номер
  const tdNumber = document.createElement("td");
  const strongNumber = document.createElement("strong");
  strongNumber.textContent = `${appt.ticketNumber} (${appt.id})`;
  tdNumber.append(strongNumber);

  // Дата и время
  const tdDate = document.createElement("td");
  const timeEl = document.createElement("time");
  timeEl.setAttribute("datetime", appt.createdAt);
  timeEl.textContent = formatDateTimeRussian(appt.createdAt);
  tdDate.append(timeEl);

  // ФИО Пациента
  const tdPatient = document.createElement("td");
  tdPatient.textContent = appt.patientName;

  // Жалоба / Цель
  const tdComplaint = document.createElement("td");
  tdComplaint.textContent = appt.chiefComplaint;

  // Специалист и кабинет
  const tdDoctor = document.createElement("td");
  tdDoctor.textContent = `${appt.doctor.name} (${appt.doctor.specialty}, каб. ${appt.doctor.roomNumber})`;

  // Назначения
  const tdPrescriptions = document.createElement("td");
  tdPrescriptions.textContent = appt.prescriptions.join("; ");

  // Оплата
  const tdPayment = document.createElement("td");
  tdPayment.textContent = appt.paymentType;

  // Статус
  const tdStatus = document.createElement("td");
  const badgeConfig = getStatusBadgeConfig(appt.status);
  const statusSpan = document.createElement("span");
  statusSpan.className = badgeConfig.className;
  statusSpan.textContent = badgeConfig.label;
  tdStatus.append(statusSpan);

  tr.append(tdNumber, tdDate, tdPatient, tdComplaint, tdDoctor, tdPrescriptions, tdPayment, tdStatus);
  return tr;
}

// 2. Рендер карточки диагноза
export function renderDiagnosisCard(diag) {
  const li = document.createElement("li");
  const article = document.createElement("article");
  article.className = "diagnosis-card";

  // Заголовок с кодом МКБ
  const h3 = document.createElement("h3");
  h3.className = "diagnosis-title";
  h3.textContent = `[${diag.icdCode}] ${diag.diseaseName}`;

  // Описание
  const pDesc = document.createElement("p");
  pDesc.className = "diagnosis-desc";
  pDesc.textContent = diag.clinicalDescription;

  // Пациент
  const pPatient = document.createElement("p");
  pPatient.className = "diagnosis-meta";
  pPatient.textContent = `Пациент: ${diag.patientRef.fullName} (карта ${diag.patientRef.cardId})`;

  // Схема терапии
  const pRegimen = document.createElement("p");
  pRegimen.className = "diagnosis-meta";
  pRegimen.textContent = `Курс: ${diag.treatmentRegimen.regimenType} • ${diag.treatmentRegimen.durationDays} дн. • Степень: ${diag.severity}`;

  // Дата установки
  const pDate = document.createElement("p");
  pDate.className = "diagnosis-meta";
  pDate.textContent = "Диагноз от: ";
  const timeEl = document.createElement("time");
  timeEl.setAttribute("datetime", diag.establishedDate);
  timeEl.textContent = formatDateRussian(diag.establishedDate);
  pDate.append(timeEl);

  // Бейдж статуса
  const badgeConfig = getStatusBadgeConfig(diag.status);
  const statusSpan = document.createElement("span");
  statusSpan.className = badgeConfig.className;
  statusSpan.textContent = badgeConfig.label;

  article.append(h3, pDesc, pPatient, pRegimen, pDate, statusSpan);
  li.append(article);
  return li;
}

// 3. Рендер карточки пациента
export function renderPatientCard(patient) {
  const li = document.createElement("li");
  const article = document.createElement("article");
  article.className = "patient-card";

  // ФИО и номер медкарты
  const h3 = document.createElement("h3");
  h3.className = "patient-name";
  h3.textContent = `${patient.fullName} (${patient.id})`;

  // Анамнез
  const pAnamnesis = document.createElement("p");
  pAnamnesis.className = "patient-text";
  pAnamnesis.textContent = patient.anamnesisNote;

  // Полис и группа крови
  const pPolicy = document.createElement("p");
  pPolicy.className = "patient-text";
  pPolicy.textContent = `${patient.policyNumber} • Группа: ${patient.bloodGroup}`;

  // Адрес
  const pAddress = document.createElement("p");
  pAddress.className = "patient-text";
  pAddress.textContent = `Адрес: ${patient.address.city}, ${patient.address.street}`;

  // Дата прикрепления
  const pDate = document.createElement("p");
  pDate.className = "patient-text";
  pDate.textContent = "Прикреплён с: ";
  const timeEl = document.createElement("time");
  timeEl.setAttribute("datetime", patient.registeredAt);
  timeEl.textContent = formatDateRussian(patient.registeredAt);
  pDate.append(timeEl);

  // Бейдж статуса
  const badgeConfig = getStatusBadgeConfig(patient.status);
  const statusSpan = document.createElement("span");
  statusSpan.className = badgeConfig.className;
  statusSpan.textContent = badgeConfig.label;

  article.append(h3, pAnamnesis, pPolicy, pAddress, pDate, statusSpan);
  li.append(article);
  return li;
}