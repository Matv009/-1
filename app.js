
const ThemeManager = (() => {
  const THEME_KEY = 'mis-theme';
  const THEMES = ['light', 'dark', 'solarized'];
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  function hasManualTheme() {
    try { return THEMES.includes(localStorage.getItem(THEME_KEY)); }
    catch { return false; }
  }

  function systemTheme() {
    return media.matches ? 'dark' : 'light';
  }

  function syncSwitcherUI(activeTheme) {
    document.querySelectorAll('[data-theme-value]').forEach((btn) => {
      btn.setAttribute('aria-checked', String(btn.dataset.themeValue === activeTheme));
    });
  }

  function applyTheme(theme, { persist = false } = {}) {
    if (!THEMES.includes(theme)) return;
    root.setAttribute('data-theme', theme);
    if (persist) {
      try { localStorage.setItem(THEME_KEY, theme); } catch {}
    }
    syncSwitcherUI(theme);
  }

  function setTheme(theme) {
    applyTheme(theme, { persist: true });
  }

  function resetToSystem() {
    try { localStorage.removeItem(THEME_KEY); } catch {}
    applyTheme(systemTheme());
  }

  // 4.4. Реакция на изменение системной темы в реальном времени
  function watchSystem() {
    const handler = (e) => {
      if (!hasManualTheme()) applyTheme(e.matches ? 'dark' : 'light');
    };
    if (media.addEventListener) media.addEventListener('change', handler);
    else if (media.addListener) media.addListener(handler);
  }

  function init() {
    const theme = hasManualTheme() ? localStorage.getItem(THEME_KEY) : systemTheme();
    applyTheme(theme);

    document.querySelectorAll('[data-theme-value]').forEach((btn) => {
      btn.addEventListener('click', () => setTheme(btn.dataset.themeValue));
    });

    const resetBtn = document.getElementById('theme-reset');
    if (resetBtn) resetBtn.addEventListener('click', resetToSystem);

    watchSystem();
  }

  return { init, setTheme, resetToSystem };
})();

/* -------------------------------------------------------------------------
   4.3. ДИНАМИЧЕСКИЙ АКЦЕНТНЫЙ ЦВЕТ
   ------------------------------------------------------------------------- */
const AccentManager = (() => {
  const ACCENT_KEY = 'mis-accent';
  const root = document.documentElement;
  const DEFAULT_ACCENT = '#0284c7';

  function hexToRgb(hex) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(String(hex).trim());
    if (!m) return null;
    return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
  }

  function apply(hex, { persist = false } = {}) {
    const rgb = hexToRgb(hex);
    if (!rgb) return;

    root.style.setProperty('--accent', hex);
    root.style.setProperty('--accent-rgb', rgb.join(', '));

    const picker = document.getElementById('accent-color');
    if (picker && picker.value.toLowerCase() !== hex.toLowerCase()) {
      picker.value = hex;
    }

    if (persist) {
      try { localStorage.setItem(ACCENT_KEY, hex); } catch {}
    }
  }

  function init() {
    const picker = document.getElementById('accent-color');

    let saved = null;
    try { saved = localStorage.getItem(ACCENT_KEY); } catch {}
    if (saved && hexToRgb(saved)) apply(saved);
    else if (picker) apply(picker.value || DEFAULT_ACCENT);

    if (picker) {
      picker.addEventListener('input', (e) => apply(e.target.value, { persist: true }));
    }
  }

  return { init, apply };
})();

/* =========================================================================
   ДАННЫЕ
   ========================================================================= */
const P = [
  ["p1","Иванов","Иван","1985-03-12","active","mid","A+","+7-900-111","Москва",["пенициллин"]],
  ["p2","Петрова","Анна","1992-07-22","active","low","O-","+7-900-222","СПб",[]],
  ["p3","Сидоров","Пётр","1978-11-05","archived","high","B+","+7-900-333","Казань",["аспирин"]],
  ["p4","Кузнецова","Мария","2001-01-30","active","low","AB+","+7-900-444","Москва",[]],
  ["p5","Смирнов","Алексей","1965-09-14","active","high","A-","+7-900-555","Новосибирск",["сульфаниламиды"]],
  ["p6","Фёдорова","Ольга","1988-06-18","active","mid","O+","+7-900-666","Екатеринбург",[]],
  ["p7","Морозов","Денис","1995-12-02","active","low","B-","+7-900-777","Москва",["новокаин"]],
  ["p8","Волкова","Екатерина","1970-04-25","deceased","high","A+","+7-900-888","Самара",[]],
  ["p9","Новиков","Сергей","1983-08-08","active","mid","AB-","+7-900-999","Челябинск",["йод"]],
  ["p10","Егорова","Наталья","1999-10-10","active","low","O+","+7-900-000","Москва",[]],
  ["p11","Павлов","Артём","1975-02-14","active","high","B+","+7-900-123","Ростов",["пенициллин"]],
  ["p12","Романова","Ирина","1990-05-05","active","mid","A-","+7-900-234","Уфа",[]],
  ["p13","Захаров","Михаил","1968-03-19","archived","low","O-","+7-900-345","Пермь",["лидокаин"]],
  ["p14","Белова","Светлана","1997-09-27","active","low","AB+","+7-900-456","Москва",[]],
  ["p15","Титов","Владимир","1981-12-25","active","high","B+","+7-900-567","Воронеж",["аспирин","пенициллин"]]
].map(([id,ln,fn,bd,st,priority,bloodType,phone,city,allergies]) =>
  ({ id, lastName: ln, firstName: fn, birthDate: bd, status: st, priority, bloodType, phone, city, allergies }));

const PRI = ['high','mid','low'];

const A = Array.from({ length: 15 }, (_, i) => ({
  id: 'a' + i,
  patientId: 'p' + (i % 15 + 1),
  title: ['Первичный приём','Повторный приём','Консультация'][i % 3] + ' №' + (i + 1),
  description: 'Описание ' + (i + 1),
  status: ['completed','scheduled','in-progress','cancelled'][i % 4],
  priority: PRI[i % 3],
  scheduledAt: `2024-03-${String(i + 1).padStart(2, '0')}T09:00:00Z`,
  doctor: 'Козлов А.В.',
  room: String(200 + i)
}));

const D = Array.from({ length: 15 }, (_, i) => ({
  id: 'd' + i,
  patientId: 'p' + (i % 15 + 1),
  icdCode: 'I' + (10 + i % 10),
  title: 'Диагноз №' + (i + 1),
  description: 'Описание ' + (i + 1),
  status: ['confirmed','suspected','chronic','ruled-out'][i % 4],
  priority: PRI[i % 3],
  diagnosedAt: `2024-03-${String(i + 1).padStart(2, '0')}T10:00:00Z`,
  symptoms: ['A','B']
}));

const R = Array.from({ length: 15 }, (_, i) => ({
  id: 'r' + i,
  patientId: 'p' + (i % 15 + 1),
  medication: ['Эналаприл','Метформин','Парацетамол','Омепразол','Лоратадин'][i % 5],
  dosage: (10 + i * 5) + ' мг',
  frequency: '2 р/д',
  title: 'Назначение №' + (i + 1),
  status: ['active','completed','cancelled'][i % 3],
  priority: PRI[i % 3],
  prescribedAt: `2024-03-${String(i + 1).padStart(2, '0')}T11:00:00Z`
}));

/* =========================================================================
   ХЕЛПЕРЫ
   ========================================================================= */
const byId = Object.fromEntries(P.map((p) => [p.id, p]));
const $ = (s) => document.querySelector(s);
const E = (t, c, x) => {
  const n = document.createElement(t);
  if (c) n.className = c;
  if (x != null) n.textContent = x;
  return n;
};
const T = (i) => {
  const t = document.createElement('time');
  t.dateTime = i;
  t.textContent = new Date(i).toLocaleDateString('ru-RU');
  return t;
};

const S = {
  active:'Активен', archived:'Архив', deceased:'Умер',
  completed:'Завершён', scheduled:'Запланирован', 'in-progress':'В процессе', cancelled:'Отменён',
  confirmed:'Подтверждён', suspected:'Подозрение', chronic:'Хронический', 'ruled-out':'Исключён'
};
const PI = { high:'▲', mid:'■', low:'▼' };
const PL = { high:'Высокий', mid:'Средний', low:'Низкий' };

const B = (s) => E('span', 'status-badge status-badge--info', S[s] || s);
const PR = (p) => E('span', 'badge-accent', PI[p] + ' ' + PL[p]);
const L = (a, fn) => {
  const u = E('ul', 'cards-grid');
  a.forEach((x) => {
    const li = E('li');
    li.append(fn(x));
    u.append(li);
  });
  return u;
};

/* =========================================================================
   МОДАЛЬНОЕ ОКНО (dialog)
   ========================================================================= */
const M = $('#m');
let LF;

const open = (t, b) => {
  LF = document.activeElement;
  $('#mt').textContent = t;
  $('#mb').replaceChildren(b);
  document.body.style.overflow = 'hidden';
  M.showModal();
  M.querySelector('button')?.focus();
};
const close = () => {
  M.close();
  document.body.style.overflow = '';
  LF?.focus();
};

if (M) {
  M.onclick = (e) => { if (e.target === M) close(); };
  M.onkeydown = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    const f = M.querySelectorAll('button,[href],input,select,[tabindex]');
    if (!f.length) return;
    const a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  };
  M.querySelector('.bx')?.addEventListener('click', close);
  M.querySelectorAll('[data-c]').forEach((b) => b.addEventListener('click', close));
}

const det = (rows) => {
  const d = E('dl', 'det');
  rows.forEach(([k, v]) => {
    d.append(E('dt', null, k));
    const dd = E('dd');
    dd.append(v instanceof Node ? v : document.createTextNode(v));
    d.append(dd);
  });
  return d;
};

const card = (id, t, st, pr, meta, iso, cb) => {
  const a = E('article', 'diagnosis-card');
  a.tabIndex = 0;

  const h = E('header', 'card__h');
  h.append(E('span', 'card__id', '#' + id), E('h3', null, t), B(st), PR(pr));

  const m = E('p', 'diagnosis-desc', meta + ' · ');
  m.append(T(iso));

  const btn = E('button', 'btn-accent', 'Открыть');
  btn.type = 'button';
  btn.onclick = (e) => { e.stopPropagation(); cb(); };

  a.append(h, m, btn);
  a.onkeydown = (e) => { if (e.key === 'Enter') cb(); };
  return a;
};

/* =========================================================================
   РЕНДЕР ПАЦИЕНТОВ
   ========================================================================= */
const patientsStack = $('#patients-stack');
if (patientsStack) {
  P.forEach((p) => {
    const li = E('li');
    const art = E('article', 'patient-card');
    art.tabIndex = 0;
    art.append(E('h3', 'patient-name', p.lastName + ' ' + p.firstName));
    art.append(E('p', 'patient-text', `${p.bloodType} · ${p.phone}`));
    art.append(E('p', 'patient-text', p.city));
    art.append(B(p.status));
    art.onclick = () => open(
      p.lastName + ' ' + p.firstName,
      det([
        ['ID', p.id],
        ['Группа', p.bloodType],
        ['Телефон', p.phone],
        ['Город', p.city],
        ['Аллергии', p.allergies.join(', ') || 'нет'],
        ['Дата рождения', T(p.birthDate)],
        ['Статус', B(p.status)]
      ])
    );
    art.onkeydown = (e) => { if (e.key === 'Enter') art.click(); };
    li.append(art);
    patientsStack.append(li);
  });
}

/* =========================================================================
   РЕНДЕР ПРИЁМОВ
   ========================================================================= */
const apptGrid = $('#diagnoses-grid');
if (apptGrid) {
  A.forEach((a) => {
    const p = byId[a.patientId];
    const li = E('li');
    li.append(card(
      a.id,
      a.title,
      a.status,
      a.priority,
      `${p.lastName} ${p.firstName} · ${a.doctor} · каб. ${a.room}`,
      a.scheduledAt,
      () => open(a.title, det([
        ['ID', a.id],
        ['Пациент', p.lastName + ' ' + p.firstName],
        ['Врач', a.doctor],
        ['Кабинет', a.room],
        ['Дата', T(a.scheduledAt)],
        ['Приоритет', PR(a.priority)],
        ['Статус', B(a.status)]
      ]))
    ));
    apptGrid.append(li);
  });
}

/* =========================================================================
   ТАБЛИЦА НАЗНАЧЕНИЙ (аппоинтменты)
   ========================================================================= */
let sk = 'date', sd = 1;
const tbl = () => {
  const tb = $('#appointments-table-body');
  if (!tb) return;
  tb.replaceChildren();

  [...R]
    .sort((a, b) => {
      const k = sk === 'date' ? 'prescribedAt' : sk;
      const va = sk === 'patient' ? byId[a.patientId].lastName : a[k];
      const vb = sk === 'patient' ? byId[b.patientId].lastName : b[k];
      return va > vb ? sd : va < vb ? -sd : 0;
    })
    .forEach((r) => {
      const p = byId[r.patientId];
      const tr = E('tr');
      tr.tabIndex = 0;

      const th = E('th', null, r.medication);
      th.scope = 'row';
      const td = E('td');
      td.append(T(r.prescribedAt));

      tr.append(th, E('td', null, p.lastName + ' ' + p.firstName), E('td', null, r.dosage), td);
      tr.onclick = () => open(r.title, det([
        ['ID', r.id],
        ['Препарат', r.medication],
        ['Доза', r.dosage],
        ['Пациент', p.lastName + ' ' + p.firstName],
        ['Дата', T(r.prescribedAt)],
        ['Статус', B(r.status)]
      ]));
      tb.append(tr);
    });

  document.querySelectorAll('thead th').forEach((th) => {
    th.setAttribute('aria-sort', th.dataset.k === sk ? (sd === 1 ? 'ascending' : 'descending') : 'none');
  });
};

document.querySelectorAll('thead th').forEach((th) => {
  th.tabIndex = 0;
  th.onclick = () => {
    const k = th.dataset.k;
    if (k === sk) sd *= -1;
    else { sk = k; sd = 1; }
    tbl();
  };
});
tbl();

/* =========================================================================
   ИНИЦИАЛИЗАЦИЯ
   ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  AccentManager.init();
});