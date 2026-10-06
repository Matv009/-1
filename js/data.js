/**
 * js/data.js
 * База данных Медицинской информационной системы (МИС)
 * 3 сущности: appointments (Приёмы), diagnoses (Диагнозы), patients (Пациенты)
 * Каждая сущность содержит ровно 15 записей и 8+ полей
 */

export const misDB = {
  // Сущность 1: Врачебные приёмы (15 записей, 9 полей)
  appointments: [
    {
      id: "APPT-1001",
      ticketNumber: "Т-01",
      patientName: "Алексеев Михаил Юрьевич",
      chiefComplaint: "Первичный осмотр: жалобы на сухой кашель и першение в горле в течение 3 дней.",
      status: "completed", // scheduled | in_progress | completed | cancelled | waiting
      createdAt: "2026-10-06T08:30:00Z",
      paymentType: "ОМС",
      doctor: { name: "Др. Васильева Е.С.", specialty: "Терапевт", roomNumber: "204" },
      prescriptions: ["Парацетамол 500мг", "Грудной сбор №4", "Обильное тёплое питьё"]
    },
    {
      id: "APPT-1002",
      ticketNumber: "Т-02",
      patientName: "Смирнова Ольга Павловна",
      chiefComplaint: "Повторный приём: контроль показателей артериального давления на фоне гипотензивной терапии.",
      status: "in_progress",
      createdAt: "2026-10-06T09:00:00Z",
      paymentType: "ДМС",
      doctor: { name: "Др. Ковалёв А.И.", specialty: "Кардиолог", roomNumber: "312" },
      prescriptions: ["Бисопролол 5мг", "Ведение дневника АД", "ЭКГ в динамике"]
    },
    {
      id: "APPT-1003",
      ticketNumber: "Т-03",
      patientName: "Кузнецов Дмитрий Сергеевич",
      chiefComplaint: "Острая колющая боль в правом подреберье, усиливающаяся после приёма жирной пищи.",
      status: "waiting",
      createdAt: "2026-10-06T09:30:00Z",
      paymentType: "ОМС",
      doctor: { name: "Др. Морозова Т.В.", specialty: "Гастроэнтеролог", roomNumber: "215" },
      prescriptions: ["УЗИ брюшной полости", "Дротаверин 40мг", "Диета Стол №5"]
    },
    {
      id: "APPT-1004",
      ticketNumber: "Т-04",
      patientName: "Иванова Татьяна Николаевна",
      chiefComplaint: "Скрининговый профилактический осмотр, оформление санаторно-курортной карты.",
      status: "scheduled",
      createdAt: "2026-10-06T10:00:00Z",
      paymentType: "ОМС",
      doctor: { name: "Др. Васильева Е.С.", specialty: "Терапевт", roomNumber: "204" },
      prescriptions: ["Клинический анализ крови", "Флюорография ОГК", "Общий анализ мочи"]
    },
    {
      id: "APPT-1005",
      ticketNumber: "Т-05",
      patientName: "Попов Роман Андреевич",
      chiefComplaint: "Пациент отменил визит в связи со срочной командировкой в другой регион.",
      status: "cancelled",
      createdAt: "2026-10-06T10:30:00Z",
      paymentType: "ДМС",
      doctor: { name: "Др. Новиков П.К.", specialty: "Невролог", roomNumber: "408" },
      prescriptions: ["Визит аннулирован по просьбе пациента"]
    },
    {
      id: "APPT-1006",
      ticketNumber: "Т-06",
      patientName: "Федорова Екатерина Викторовна",
      chiefComplaint: "Тянущие боли в поясничном отделе позвоночника с иррадиацией по задней поверхности бедра.",
      status: "completed",
      createdAt: "2026-10-06T11:00:00Z",
      paymentType: "ДМС",
      doctor: { name: "Др. Новиков П.К.", specialty: "Невролог", roomNumber: "408" },
      prescriptions: ["МРТ поясничного отдела", "Мелоксикам 15мг", "Миорелаксанты"]
    },
    {
      id: "APPT-1007",
      ticketNumber: "Т-07",
      patientName: "Морозов Артем Григорьевич",
      chiefComplaint: "Жалобы на повышенную утомляемость, дневную сонливость и выраженную сухость кожных покровов.",
      status: "scheduled",
      createdAt: "2026-10-06T11:30:00Z",
      paymentType: "ОМС",
      doctor: { name: "Др. Орлова Н.А.", specialty: "Эндокринолог", roomNumber: "110" },
      prescriptions: ["Анализ крови на ТТГ, Т4 св.", "УЗИ щитовидной железы"]
    },
    {
      id: "APPT-1008",
      ticketNumber: "Т-08",
      patientName: "Соколова Анна Борисовна",
      chiefComplaint: "Плановая диспансеризация при сахарном диабете 2 типа, коррекция суточной дозы инсулина.",
      status: "completed",
      createdAt: "2026-10-06T12:00:00Z",
      paymentType: "ОМС",
      doctor: { name: "Др. Орлова Н.А.", specialty: "Эндокринолог", roomNumber: "110" },
      prescriptions: ["Гликированный гемоглобин", "Тест-полоски для глюкометра", "Метформин 850мг"]
    },
    {
      id: "APPT-1009",
      ticketNumber: "Т-09",
      patientName: "Лебедев Константин Ильич",
      chiefComplaint: "Снижение остроты зрения вдаль, ощущение рези и сухости в глазах к концу рабочего дня.",
      status: "waiting",
      createdAt: "2026-10-06T12:30:00Z",
      paymentType: "Платные услуги",
      doctor: { name: "Др. Семенова В.Д.", specialty: "Офтальмолог", roomNumber: "305" },
      prescriptions: ["Авторефрактометрия", "Увлажняющие глазные капли", "Подбор очков"]
    },
    {
      id: "APPT-1010",
      ticketNumber: "Т-10",
      patientName: "Волкова Марина Станиславовна",
      chiefComplaint: "Сезонная заложенность носа, зуд век и приступы чихания при выходе на улицу.",
      status: "scheduled",
      createdAt: "2026-10-06T13:00:00Z",
      paymentType: "ДМС",
      doctor: { name: "Др. Павлов С.А.", specialty: "Аллерголог", roomNumber: "220" },
      prescriptions: ["Кожные скарификационные пробы", "Цетиризин 10мг", "Спрей с мометазоном"]
    },
    {
      id: "APPT-1011",
      ticketNumber: "Т-11",
      patientName: "Козлов Никита Вадимович",
      chiefComplaint: "Ноющие боли в коленных суставах при спуске и подъеме по лестнице после тренировок.",
      status: "completed",
      createdAt: "2026-10-06T13:30:00Z",
      paymentType: "ОМС",
      doctor: { name: "Др. Ильин А.М.", specialty: "Травматолог-ортопед", roomNumber: "102" },
      prescriptions: ["Рентгенография суставов", "Хондропротекторы", "Ограничение осевой нагрузки"]
    },
    {
      id: "APPT-1012",
      ticketNumber: "Т-12",
      patientName: "Егорова Светлана Олеговна",
      chiefComplaint: "Острая боль в горле при глотании, увеличение шейных лимфоузлов, температура тела 37.8°C.",
      status: "in_progress",
      createdAt: "2026-10-06T14:00:00Z",
      paymentType: "ОМС",
      doctor: { name: "Др. Васильева Е.С.", specialty: "Терапевт", roomNumber: "204" },
      prescriptions: ["Стрептатест", "Полоскание антисептиком", "Ибупрофен 400мг"]
    },
    {
      id: "APPT-1013",
      ticketNumber: "Т-13",
      patientName: "Зайцев Владимир Кириллович",
      chiefComplaint: "Частые приступы изжоги и кислая отрыжка, возникающие преимущественно в ночные часы.",
      status: "scheduled",
      createdAt: "2026-10-06T14:30:00Z",
      paymentType: "ДМС",
      doctor: { name: "Др. Морозова Т.В.", specialty: "Гастроэнтеролог", roomNumber: "215" },
      prescriptions: ["ЭГДС с биопсией", "Омепразол 20мг утром", "Антацидная суспензия"]
    },
    {
      id: "APPT-1014",
      ticketNumber: "Т-14",
      patientName: "Крылова Лариса Сергеевна",
      chiefComplaint: "Контрольный осмотр после стационарного лечения правосторонней пневмонии.",
      status: "scheduled",
      createdAt: "2026-10-06T15:00:00Z",
      paymentType: "ОМС",
      doctor: { name: "Др. Васильева Е.С.", specialty: "Терапевт", roomNumber: "204" },
      prescriptions: ["Контрольная рентгенография ОГК", "Спирометрия", "Дыхательная гимнастика"]
    },
    {
      id: "APPT-1015",
      ticketNumber: "Т-15",
      patientName: "Беляев Виктор Геннадьевич",
      chiefComplaint: "Сжимающая головная боль в височно-затылочной области после продолжительной работы за ПК.",
      status: "waiting",
      createdAt: "2026-10-06T15:30:00Z",
      paymentType: "Платные услуги",
      doctor: { name: "Др. Новиков П.К.", specialty: "Невролог", roomNumber: "408" },
      prescriptions: ["УЗДГ сосудов шеи и головы", "Массаж ШОЗ", "Магний B6 форте"]
    }
  ],

  // Сущность 2: Клинические диагнозы (15 записей, 9 полей)
  diagnoses: [
    {
      id: "DIAG-501",
      icdCode: "J06.9",
      diseaseName: "Острая инфекция верхних дыхательных путей (ОРВИ)",
      clinicalDescription: "Катаральный синдром, гиперемия зева, ринит лёгкой степени выраженности.",
      status: "active_phase", // active_phase | remission | chronic | cured | observation
      establishedDate: "2026-10-06T08:45:00Z",
      severity: "Лёгкая степень",
      treatmentRegimen: { regimenType: "Амбулаторный", durationDays: 7, isolationRequired: true },
      patientRef: { cardId: "MED-001", fullName: "Алексеев М.Ю." }
    },
    {
      id: "DIAG-502",
      icdCode: "I10",
      diseaseName: "Гипертоническая болезнь II стадии, риск ССО 3",
      clinicalDescription: "Стойкое повышение систолического АД до 160 мм рт. ст., гипертрофия ЛЖ.",
      status: "chronic",
      establishedDate: "2025-04-12T11:20:00Z",
      severity: "Средняя степень",
      treatmentRegimen: { regimenType: "Пожизненный", durationDays: 365, isolationRequired: false },
      patientRef: { cardId: "MED-002", fullName: "Смирнова О.П." }
    },
    {
      id: "DIAG-503",
      icdCode: "K81.0",
      diseaseName: "Острый бескаменный холецистит",
      clinicalDescription: "Утолщение стенок желчного пузыря до 4 мм, локальная болезненность при пальпации.",
      status: "active_phase",
      establishedDate: "2026-10-06T09:40:00Z",
      severity: "Средняя степень",
      treatmentRegimen: { regimenType: "Дневной стационар", durationDays: 14, isolationRequired: false },
      patientRef: { cardId: "MED-003", fullName: "Кузнецов Д.С." }
    },
    {
      id: "DIAG-504",
      icdCode: "Z00.0",
      diseaseName: "Общий медицинский осмотр (Здоров)",
      clinicalDescription: "Патологических изменений внутренних органов и систем не выявлено.",
      status: "cured",
      establishedDate: "2026-10-06T10:15:00Z",
      severity: "Норма",
      treatmentRegimen: { regimenType: "Наблюдение", durationDays: 0, isolationRequired: false },
      patientRef: { cardId: "MED-004", fullName: "Иванова Т.Н." }
    },
    {
      id: "DIAG-505",
      icdCode: "M54.5",
      diseaseName: "Дорсалгия: люмбоишиалгия вертеброгенного генеза",
      clinicalDescription: "Мышечно-тонический синдром поясничной области, корешковый синдром L5-S1.",
      status: "active_phase",
      establishedDate: "2026-10-06T11:15:00Z",
      severity: "Средняя степень",
      treatmentRegimen: { regimenType: "Амбулаторный", durationDays: 14, isolationRequired: false },
      patientRef: { cardId: "MED-006", fullName: "Федорова Е.В." }
    },
    {
      id: "DIAG-506",
      icdCode: "E03.9",
      diseaseName: "Первичный гипотиреоз, субклиническое течение",
      clinicalDescription: "Умеренное повышение уровня ТТГ при нормальной концентрации свободного Т4.",
      status: "observation",
      establishedDate: "2026-10-06T11:45:00Z",
      severity: "Лёгкая степень",
      treatmentRegimen: { regimenType: "Диспансерный", durationDays: 90, isolationRequired: false },
      patientRef: { cardId: "MED-007", fullName: "Морозов А.Г." }
    },
    {
      id: "DIAG-507",
      icdCode: "E11.9",
      diseaseName: "Сахарный диабет 2 типа, целевой HbA1c < 7.0%",
      clinicalDescription: "Субкомпенсация углеводного обмена на фоне диетотерапии и сахароснижающих препаратов.",
      status: "chronic",
      establishedDate: "2024-09-18T10:00:00Z",
      severity: "Средняя степень",
      treatmentRegimen: { regimenType: "Пожизненный", durationDays: 365, isolationRequired: false },
      patientRef: { cardId: "MED-008", fullName: "Соколова А.Б." }
    },
    {
      id: "DIAG-508",
      icdCode: "H52.1",
      diseaseName: "Миопия слабой степени обоих глаз, астенопия",
      clinicalDescription: "Снижение некорригированной остроты зрения до 0.6 на оба глаза, зрительное утомление.",
      status: "remission",
      establishedDate: "2026-10-06T12:45:00Z",
      severity: "Лёгкая степень",
      treatmentRegimen: { regimenType: "Оптическая коррекция", durationDays: 180, isolationRequired: false },
      patientRef: { cardId: "MED-009", fullName: "Лебедев К.И." }
    },
    {
      id: "DIAG-509",
      icdCode: "J30.1",
      diseaseName: "Аллергический ринит, сенсибилизация к пыльце",
      clinicalDescription: "Сезонное обострение: ринорея, отёчность носовых раковин, аллергический конъюнктивит.",
      status: "active_phase",
      establishedDate: "2026-10-06T13:15:00Z",
      severity: "Средняя степень",
      treatmentRegimen: { regimenType: "Амбулаторный", durationDays: 30, isolationRequired: false },
      patientRef: { cardId: "MED-010", fullName: "Волкова М.С." }
    },
    {
      id: "DIAG-510",
      icdCode: "M17.1",
      diseaseName: "Первичный гонартроз двусторонний, I рентген-стадия",
      clinicalDescription: "Начальное сужение суставной щели, крепитация при активных движениях в коленях.",
      status: "chronic",
      establishedDate: "2026-10-06T13:45:00Z",
      severity: "Лёгкая степень",
      treatmentRegimen: { regimenType: "ЛФК и физиотерапия", durationDays: 60, isolationRequired: false },
      patientRef: { cardId: "MED-011", fullName: "Козлов Н.В." }
    },
    {
      id: "DIAG-511",
      icdCode: "J02.9",
      diseaseName: "Острый фарингит стрептококковой этиологии",
      clinicalDescription: "Яркая гиперемия задней стенки глотки с фолликулярными наложениями.",
      status: "active_phase",
      establishedDate: "2026-10-06T14:15:00Z",
      severity: "Средняя степень",
      treatmentRegimen: { regimenType: "Амбулаторный", durationDays: 10, isolationRequired: true },
      patientRef: { cardId: "MED-012", fullName: "Егорова С.О." }
    },
    {
      id: "DIAG-512",
      icdCode: "K21.0",
      diseaseName: "Гастроэзофагеальная рефлюксная болезнь (ГЭРБ)",
      clinicalDescription: "Эрозивные изменения дистального отдела слизистой оболочки пищевода.",
      status: "active_phase",
      establishedDate: "2026-10-06T14:45:00Z",
      severity: "Средняя степень",
      treatmentRegimen: { regimenType: "Амбулаторный", durationDays: 28, isolationRequired: false },
      patientRef: { cardId: "MED-013", fullName: "Зайцев В.К." }
    },
    {
      id: "DIAG-513",
      icdCode: "J18.9",
      diseaseName: "Внебольничная правосторонняя пневмония",
      clinicalDescription: "Фаза разрешения инфильтративных изменений в легочной ткани по данным контрольного КТ.",
      status: "remission",
      establishedDate: "2026-09-15T09:30:00Z",
      severity: "Тяжелая в анамнезе",
      treatmentRegimen: { regimenType: "Реабилитация", durationDays: 45, isolationRequired: false },
      patientRef: { cardId: "MED-014", fullName: "Крылова Л.С." }
    },
    {
      id: "DIAG-514",
      icdCode: "G44.2",
      diseaseName: "Головная боль напряжения (эпизодическая)",
      clinicalDescription: "Двусторонняя сжимающая головная боль умеренной интенсивности по типу «обруча».",
      status: "observation",
      establishedDate: "2026-10-06T15:45:00Z",
      severity: "Лёгкая степень",
      treatmentRegimen: { regimenType: "Амбулаторный", durationDays: 14, isolationRequired: false },
      patientRef: { cardId: "MED-015", fullName: "Беляев В.Г." }
    },
    {
      id: "DIAG-515",
      icdCode: "K29.5",
      diseaseName: "Хронический антральный гастрит (H.pylori +)",
      clinicalDescription: "Очаговая гиперемия слизистой оболочки антрального отдела желудка при гастроскопии.",
      status: "chronic",
      establishedDate: "2025-02-10T12:00:00Z",
      severity: "Лёгкая степень",
      treatmentRegimen: { regimenType: "Эрадикация", durationDays: 14, isolationRequired: false },
      patientRef: { cardId: "MED-003", fullName: "Кузнецов Д.С." }
    }
  ],

  // Сущность 3: Регистр пациентов (15 записей, 9 полей)
  patients: [
    {
      id: "MED-001",
      fullName: "Алексеев Михаил Юрьевич",
      policyNumber: "ОМС 7754-1290-8841-0012",
      bloodGroup: "A (II) Rh+",
      anamnesisNote: "Отягощенный аллергологический анамнез: непереносимость пенициллинового ряда.",
      status: "attached", // attached | dispensary | preferential | archived | temporarily_attached
      registeredAt: "2022-03-15T09:00:00Z",
      birthDate: "1988-06-14",
      address: { city: "Москва", street: "ул. Вавилова, д. 48, кв. 19" }
    },
        {
      id: "MED-002",
      fullName: "Смирнова Ольга Павловна",
      policyNumber: "ДМС СОГАЗ-9941-8812",
      bloodGroup: "O (I) Rh+",
      anamnesisNote: "Состоит на диспансерном учете по гипертонической болезни с 2024 года.",
      status: "dispensary",
      registeredAt: "2021-11-04T10:30:00Z",
      birthDate: "1965-02-21",
      address: { city: "Москва", street: "Ленинский пр-кт, д. 34, кв. 82" }
    },
    {
      id: "MED-003",
      fullName: "Кузнецов Дмитрий Сергеевич",
      policyNumber: "ОМС 7789-2241-0091-3341",
      bloodGroup: "B (III) Rh-",
      anamnesisNote: "Хронический холецистит, регулярные сезонные обострения весной и осенью.",
      status: "dispensary",
      registeredAt: "2023-01-20T14:15:00Z",
      birthDate: "1979-11-08",
      address: { city: "Москва", street: "ул. Профсоюзная, д. 12, кв. 4" }
    },
    {
      id: "MED-004",
      fullName: "Иванова Татьяна Николаевна",
      policyNumber: "ОМС 7712-4401-9981-5512",
      bloodGroup: "AB (IV) Rh+",
      anamnesisNote: "Хронических заболеваний не имеет, проходит регулярные чек-апы.",
      status: "attached",
      registeredAt: "2024-05-18T11:00:00Z",
      birthDate: "1995-09-30",
      address: { city: "Москва", street: "ул. Дмитрия Ульянова, д. 5, кв. 110" }
    },
    {
      id: "MED-005",
      fullName: "Попов Роман Андреевич",
      policyNumber: "ДМС РЕСО-5512-0043",
      bloodGroup: "A (II) Rh-",
      anamnesisNote: "Временное прикрепление по корпоративному полису ДМС.",
      status: "temporarily_attached",
      registeredAt: "2025-02-01T16:45:00Z",
      birthDate: "1992-04-12",
      address: { city: "Москва", street: "пр-кт 60-летия Октября, д. 19, кв. 51" }
    },
    {
      id: "MED-006",
      fullName: "Федорова Екатерина Викторовна",
      policyNumber: "ДМС Альфа-3312-9011",
      bloodGroup: "O (I) Rh-",
      anamnesisNote: "Остеохондроз пояснично-крестцового отдела позвоночника.",
      status: "attached",
      registeredAt: "2023-08-14T08:20:00Z",
      birthDate: "1983-12-05",
      address: { city: "Москва", street: "ул. Кржижановского, д. 15, кв. 36" }
    },
    {
      id: "MED-007",
      fullName: "Морозов Артем Григорьевич",
      policyNumber: "ОМС 7701-9912-3341-7788",
      bloodGroup: "B (III) Rh+",
      anamnesisNote: "Первичное подозрение на эндокринную патологию, направлен на анализы.",
      status: "attached",
      registeredAt: "2024-11-10T12:00:00Z",
      birthDate: "2001-07-19",
      address: { city: "Москва", street: "ул. Ферсмана, д. 3, кв. 14" }
    },
    {
      id: "MED-008",
      fullName: "Соколова Анна Борисовна",
      policyNumber: "ОМС 7733-1122-4455-6677",
      bloodGroup: "A (II) Rh+",
      anamnesisNote: "Сахарный диабет 2 типа, федеральная льгота на лекарства.",
      status: "preferential",
      registeredAt: "2020-04-22T09:15:00Z",
      birthDate: "1958-03-11",
      address: { city: "Москва", street: "Севастопольский пр-кт, д. 22, кв. 7" }
    },
    {
      id: "MED-009",
      fullName: "Лебедев Константин Ильич",
      policyNumber: "ПЛАТ-0091-2026",
      bloodGroup: "AB (IV) Rh-",
      anamnesisNote: "Миопия со школьного возраста, работа за компьютером более 8 часов.",
      status: "attached",
      registeredAt: "2025-06-30T15:10:00Z",
      birthDate: "1990-10-25",
      address: { city: "Москва", street: "ул. Архитектора Власова, д. 8, кв. 42" }
    },
    {
      id: "MED-010",
      fullName: "Волкова Марина Станиславовна",
      policyNumber: "ДМС Ингосстрах-4491-00",
      bloodGroup: "O (I) Rh+",
      anamnesisNote: "Поллиноз весенне-летний, аллергия на пыльцу березы и злаковых трав.",
      status: "dispensary",
      registeredAt: "2022-09-05T13:40:00Z",
      birthDate: "1987-05-14",
      address: { city: "Москва", street: "ул. Гарибальди, д. 17, кв. 88" }
    },
    {
      id: "MED-011",
      fullName: "Козлов Никита Вадимович",
      policyNumber: "ОМС 7745-8899-1122-3344",
      bloodGroup: "B (III) Rh+",
      anamnesisNote: "Травма правого колена в анамнезе (артроскопия в 2021 году).",
      status: "attached",
      registeredAt: "2023-03-12T10:00:00Z",
      birthDate: "1994-08-03",
      address: { city: "Москва", street: "ул. Наметкина, д. 9, кв. 105" }
    },
    {
      id: "MED-012",
      fullName: "Егорова Светлана Олеговна",
      policyNumber: "ОМС 7790-3344-5566-7788",
      bloodGroup: "A (II) Rh+",
      anamnesisNote: "Хронический тонзиллит с частыми обострениями до 3 раз в год.",
      status: "attached",
      registeredAt: "2024-01-25T11:30:00Z",
      birthDate: "1998-12-17",
      address: { city: "Москва", street: "ул. Обручева, д. 28, кв. 64" }
    },
    {
      id: "MED-013",
      fullName: "Зайцев Владимир Кириллович",
      policyNumber: "ДМС Согласие-1102-99",
      bloodGroup: "O (I) Rh-",
      anamnesisNote: "Хронический гастрит с повышенной кислотностью, курение 15 лет.",
      status: "attached",
      registeredAt: "2023-07-19T14:50:00Z",
      birthDate: "1975-01-29",
      address: { city: "Москва", street: "ул. Новаторов, д. 14, кв. 23" }
    },
    {
      id: "MED-014",
      fullName: "Крылова Лариса Сергеевна",
      policyNumber: "ОМС 7721-6677-8899-0011",
      bloodGroup: "B (III) Rh-",
      anamnesisNote: "Перенесла острую пневмонию в сентябре 2026, этап реабилитации.",
      status: "dispensary",
      registeredAt: "2021-05-14T08:45:00Z",
      birthDate: "1968-11-04",
      address: { city: "Москва", street: "Ленинский пр-кт, д. 72, кв. 15" }
    },
    {
      id: "MED-015",
      fullName: "Беляев Виктор Геннадьевич",
      policyNumber: "ПЛАТ-0044-2026",
      bloodGroup: "AB (IV) Rh+",
      anamnesisNote: "Карта переведена в архив в связи со сменой постоянного места жительства.",
      status: "archived",
      registeredAt: "2022-10-11T16:00:00Z",
      birthDate: "1982-04-09",
      address: { city: "Москва", street: "ул. Академика Пилюгина, д. 6, кв. 31" }
    }
  ]
};