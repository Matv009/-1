// ============================================================
// МИС — Медицинская информационная система
// Файл данных (требование 1.1)
//
// 4 сущности: пациенты, приёмы, диагнозы, назначения
// Минимум 15 записей для каждой
// Минимум 8 полей, включая: id, заголовок/описание (2+),
// статус, дату (ISO 8601), вложенный массив/объект
// ============================================================

/* ============================================================
   СУЩНОСТЬ 1: ПАЦИЕНТЫ
   Поля:
     - id                — уникальный идентификатор
     - firstName         — имя (заголовок)
     - lastName          — фамилия (заголовок)
     - fullName          — ФИО (описание)
     - birthDate         — дата рождения (ISO 8601)
     - gender            — пол
     - phone             — телефон
     - email             — email
     - address           — адрес
     - status            — статус (fixed set)
     - insurance         — номер полиса
     - bloodType         — группа крови
     - allergies         — вложенный массив аллергий
     - emergencyContact  — вложенный объект
     - createdAt         — дата создания (ISO 8601)
     - notes             — заметки
   ============================================================ */
export const patients = [
  {
    id: "P-001",
    firstName: "Иван",
    lastName: "Петров",
    fullName: "Петров Иван Сергеевич",
    birthDate: "1985-03-12",
    gender: "male",
    phone: "+7-900-100-10-01",
    email: "petrov@example.com",
    address: "г. Москва, ул. Ленина, д. 12, кв. 45",
    status: "active",
    insurance: "ОМС-1234567890",
    bloodType: "A+",
    allergies: ["пенициллин", "пыльца"],
    emergencyContact: { name: "Петрова Анна", phone: "+7-900-200-20-01", relation: "Супруга" },
    createdAt: "2023-01-15T10:00:00Z",
    notes: "Постоянный пациент, наблюдается у терапевта"
  },
  {
    id: "P-002",
    firstName: "Мария",
    lastName: "Сидорова",
    fullName: "Сидорова Мария Ивановна",
    birthDate: "1990-07-22",
    gender: "female",
    phone: "+7-900-100-10-02",
    email: "sidorova@example.com",
    address: "г. Санкт-Петербург, Невский пр., д. 45, кв. 7",
    status: "active",
    insurance: "ОМС-2234567890",
    bloodType: "B-",
    allergies: [],
    emergencyContact: { name: "Сидоров Пётр", phone: "+7-900-200-20-02", relation: "Отец" },
    createdAt: "2023-02-20T11:30:00Z",
    notes: ""
  },
  {
    id: "P-003",
    firstName: "Алексей",
    lastName: "Кузнецов",
    fullName: "Кузнецов Алексей Петрович",
    birthDate: "1978-11-05",
    gender: "male",
    phone: "+7-900-100-10-03",
    email: "kuznetsov@example.com",
    address: "г. Казань, ул. Баумана, д. 7, кв. 12",
    status: "observation",
    insurance: "ОМС-3234567890",
    bloodType: "O+",
    allergies: ["аспирин"],
    emergencyContact: { name: "Кузнецова Ольга", phone: "+7-900-200-20-03", relation: "Супруга" },
    createdAt: "2023-03-10T09:15:00Z",
    notes: "Гипертония, регулярный контроль давления"
  },
  {
    id: "P-004",
    firstName: "Елена",
    lastName: "Морозова",
    fullName: "Морозова Елена Владимировна",
    birthDate: "1995-05-18",
    gender: "female",
    phone: "+7-900-100-10-04",
    email: "morozova@example.com",
    address: "г. Екатеринбург, ул. Мира, д. 33, кв. 88",
    status: "active",
    insurance: "ОМС-4234567890",
    bloodType: "AB+",
    allergies: [],
    emergencyContact: { name: "Морозов Андрей", phone: "+7-900-200-20-04", relation: "Муж" },
    createdAt: "2023-04-05T14:00:00Z",
    notes: ""
  },
  {
    id: "P-005",
    firstName: "Дмитрий",
    lastName: "Волков",
    fullName: "Волков Дмитрий Олегович",
    birthDate: "1982-09-30",
    gender: "male",
    phone: "+7-900-100-10-05",
    email: "volkov@example.com",
    address: "г. Новосибирск, ул. Гоголя, д. 15, кв. 3",
    status: "discharged",
    insurance: "ОМС-5234567890",
    bloodType: "A-",
    allergies: ["латекс"],
    emergencyContact: { name: "Волкова Ирина", phone: "+7-900-200-20-05", relation: "Мать" },
    createdAt: "2023-05-12T08:45:00Z",
    notes: "Выписан после плановой операции"
  },
  {
    id: "P-006",
    firstName: "Ольга",
    lastName: "Соколова",
    fullName: "Соколова Ольга Николаевна",
    birthDate: "1988-12-14",
    gender: "female",
    phone: "+7-900-100-10-06",
    email: "sokolova@example.com",
    address: "г. Нижний Новгород, ул. Горького, д. 22, кв. 15",
    status: "active",
    insurance: "ОМС-6234567890",
    bloodType: "B+",
    allergies: [],
    emergencyContact: { name: "Соколов Игорь", phone: "+7-900-200-20-06", relation: "Муж" },
    createdAt: "2023-06-18T16:20:00Z",
    notes: ""
  },
  {
    id: "P-007",
    firstName: "Сергей",
    lastName: "Лебедев",
    fullName: "Лебедев Сергей Андреевич",
    birthDate: "1975-04-08",
    gender: "male",
    phone: "+7-900-100-10-07",
    email: "lebedev@example.com",
    address: "г. Самара, ул. Победы, д. 8, кв. 41",
    status: "observation",
    insurance: "ОМС-7234567890",
    bloodType: "O-",
    allergies: ["сульфаниламиды"],
    emergencyContact: { name: "Лебедева Наталья", phone: "+7-900-200-20-07", relation: "Супруга" },
    createdAt: "2023-07-22T12:10:00Z",
    notes: "Диабет 2 типа, диета"
  },
  {
    id: "P-008",
    firstName: "Анна",
    lastName: "Новикова",
    fullName: "Новикова Анна Дмитриевна",
    birthDate: "1998-08-25",
    gender: "female",
    phone: "+7-900-100-10-08",
    email: "novikova@example.com",
    address: "г. Ростов-на-Дону, ул. Садовая, д. 50, кв. 21",
    status: "active",
    insurance: "ОМС-8234567890",
    bloodType: "A+",
    allergies: [],
    emergencyContact: { name: "Новиков Дмитрий", phone: "+7-900-200-20-08", relation: "Отец" },
    createdAt: "2023-08-30T13:40:00Z",
    notes: ""
  },
  {
    id: "P-009",
    firstName: "Николай",
    lastName: "Фёдоров",
    fullName: "Фёдоров Николай Игоревич",
    birthDate: "1969-02-17",
    gender: "male",
    phone: "+7-900-100-10-09",
    email: "fedorov@example.com",
    address: "г. Уфа, ул. Ленина, д. 90, кв. 6",
    status: "observation",
    insurance: "ОМС-9234567890",
    bloodType: "AB-",
    allergies: ["йод"],
    emergencyContact: { name: "Фёдорова Татьяна", phone: "+7-900-200-20-09", relation: "Супруга" },
    createdAt: "2023-09-14T10:55:00Z",
    notes: "Хроническая болезнь почек, контроль креатинина"
  },
  {
    id: "P-010",
    firstName: "Татьяна",
    lastName: "Егорова",
    fullName: "Егорова Татьяна Сергеевна",
    birthDate: "1993-06-11",
    gender: "female",
    phone: "+7-900-100-10-10",
    email: "egorova@example.com",
    address: "г. Краснодар, ул. Красная, д. 18, кв. 33",
    status: "active",
    insurance: "ОМС-1034567890",
    bloodType: "O+",
    allergies: [],
    emergencyContact: { name: "Егоров Павел", phone: "+7-900-200-20-10", relation: "Брат" },
    createdAt: "2023-10-20T15:25:00Z",
    notes: ""
  },
  {
    id: "P-011",
    firstName: "Павел",
    lastName: "Козлов",
    fullName: "Козлов Павел Викторович",
    birthDate: "1987-01-29",
    gender: "male",
    phone: "+7-900-100-10-11",
    email: "kozlov@example.com",
    address: "г. Пермь, ул. Мира, д. 44, кв. 9",
    status: "active",
    insurance: "ОМС-1134567890",
    bloodType: "B+",
    allergies: [],
    emergencyContact: { name: "Козлова Екатерина", phone: "+7-900-200-20-11", relation: "Супруга" },
    createdAt: "2023-11-08T09:30:00Z",
    notes: ""
  },
  {
    id: "P-012",
    firstName: "Юлия",
    lastName: "Степанова",
    fullName: "Степанова Юлия Андреевна",
    birthDate: "2000-10-03",
    gender: "female",
    phone: "+7-900-100-10-12",
    email: "stepanova@example.com",
    address: "г. Волгоград, пр. Ленина, д. 60, кв. 17",
    status: "active",
    insurance: "ОМС-1234567891",
    bloodType: "A-",
    allergies: ["пыльца", "шерсть кошек"],
    emergencyContact: { name: "Степанов Андрей", phone: "+7-900-200-20-12", relation: "Отец" },
    createdAt: "2023-12-01T11:00:00Z",
    notes: "Сезонная аллергия"
  },
  {
    id: "P-013",
    firstName: "Артём",
    lastName: "Орлов",
    fullName: "Орлов Артём Максимович",
    birthDate: "1980-07-19",
    gender: "male",
    phone: "+7-900-100-10-13",
    email: "orlov@example.com",
    address: "г. Челябинск, ул. Кирова, д. 5, кв. 62",
    status: "observation",
    insurance: "ОМС-1334567890",
    bloodType: "O+",
    allergies: [],
    emergencyContact: { name: "Орлова Светлана", phone: "+7-900-200-20-13", relation: "Супруга" },
    createdAt: "2024-01-15T14:20:00Z",
    notes: "Аритмия, наблюдение у кардиолога"
  },
  {
    id: "P-014",
    firstName: "Светлана",
    lastName: "Романова",
    fullName: "Романова Светлана Петровна",
    birthDate: "1972-03-27",
    gender: "female",
    phone: "+7-900-100-10-14",
    email: "romanova@example.com",
    address: "г. Воронеж, ул. Плехановская, д. 12, кв. 4",
    status: "discharged",
    insurance: "ОМС-1434567890",
    bloodType: "B-",
    allergies: ["новокаин"],
    emergencyContact: { name: "Романов Виктор", phone: "+7-900-200-20-14", relation: "Муж" },
    createdAt: "2024-02-10T10:10:00Z",
    notes: "Выписана после курса лечения"
  },
  {
    id: "P-015",
    firstName: "Максим",
    lastName: "Григорьев",
    fullName: "Григорьев Максим Олегович",
    birthDate: "1991-11-23",
    gender: "male",
    phone: "+7-900-100-10-15",
    email: "grigorev@example.com",
    address: "г. Тюмень, ул. Республики, д. 88, кв. 51",
    status: "active",
    insurance: "ОМС-1534567890",
    bloodType: "AB+",
    allergies: [],
    emergencyContact: { name: "Григорьева Мария", phone: "+7-900-200-20-15", relation: "Мать" },
    createdAt: "2024-03-05T16:45:00Z",
    notes: ""
  }
];

/* ============================================================
   СУЩНОСТЬ 2: ПРИЁМЫ
   Поля:
     - id                — уникальный идентификатор
     - patientId         — ссылка на пациента
     - patientName       — имя пациента (заголовок)
     - doctorName        — ФИО врача (заголовок)
     - specialty         — специальность врача
     - date              — дата приёма (ISO 8601)
     - duration          — длительность в минутах
     - room              — кабинет
     - status            — статус (fixed set)
     - reason            — причина обращения
     - notes             — заметки
     - diagnoses         — вложенный массив ID диагнозов
     - prescriptions     — вложенный массив ID назначений
     - vitals            — вложенный объект с показателями
     - createdAt         — дата создания (ISO 8601)
   ============================================================ */
export const appointments = [
  {
    id: "A-001",
    patientId: "P-001",
    patientName: "Петров И.С.",
    doctorName: "Ковалёв А.П.",
    specialty: "Терапевт",
    date: "2024-04-10T09:00:00Z",
    duration: 30,
    room: "101",
    status: "completed",
    reason: "Плановый осмотр",
    notes: "Жалоб нет, состояние удовлетворительное",
    diagnoses: ["D-001"],
    prescriptions: ["R-001"],
    vitals: { pressure: "120/80", pulse: 72, temperature: 36.6 },
    createdAt: "2024-04-01T10:00:00Z"
  },
  {
    id: "A-002",
    patientId: "P-002",
    patientName: "Сидорова М.И.",
    doctorName: "Никитина Е.В.",
    specialty: "Кардиолог",
    date: "2024-04-11T10:30:00Z",
    duration: 45,
    room: "202",
    status: "completed",
    reason: "Боль в груди",
    notes: "Назначено ЭКГ и УЗИ сердца",
    diagnoses: ["D-002"],
    prescriptions: ["R-002", "R-003"],
    vitals: { pressure: "130/85", pulse: 88, temperature: 36.7 },
    createdAt: "2024-04-02T11:00:00Z"
  },
  {
    id: "A-003",
    patientId: "P-003",
    patientName: "Кузнецов А.П.",
    doctorName: "Ковалёв А.П.",
    specialty: "Терапевт",
    date: "2024-04-12T11:00:00Z",
    duration: 30,
    room: "101",
    status: "completed",
    reason: "Контроль давления",
    notes: "Давление 150/90, скорректирована терапия",
    diagnoses: ["D-003"],
    prescriptions: ["R-004"],
    vitals: { pressure: "150/90", pulse: 82, temperature: 36.5 },
    createdAt: "2024-04-03T09:00:00Z"
  },
  {
    id: "A-004",
    patientId: "P-004",
    patientName: "Морозова Е.В.",
    doctorName: "Смирнова О.Л.",
    specialty: "Невролог",
    date: "2024-04-15T14:00:00Z",
    duration: 40,
    room: "305",
    status: "scheduled",
    reason: "Головные боли",
    notes: "",
    diagnoses: [],
    prescriptions: [],
    vitals: null,
    createdAt: "2024-04-05T15:00:00Z"
  },
  {
    id: "A-005",
    patientId: "P-005",
    patientName: "Волков Д.О.",
    doctorName: "Петрова Н.С.",
    specialty: "Хирург",
    date: "2024-04-16T08:30:00Z",
    duration: 60,
    room: "401",
    status: "scheduled",
    reason: "Послеоперационный осмотр",
    notes: "",
    diagnoses: [],
    prescriptions: [],
    vitals: null,
    createdAt: "2024-04-06T10:00:00Z"
  },
  {
    id: "A-006",
    patientId: "P-006",
    patientName: "Соколова О.Н.",
    doctorName: "Ковалёв А.П.",
    specialty: "Терапевт",
    date: "2024-04-17T09:30:00Z",
    duration: 30,
    room: "101",
    status: "scheduled",
    reason: "Профосмотр",
    notes: "",
    diagnoses: [],
    prescriptions: [],
    vitals: null,
    createdAt: "2024-04-07T11:00:00Z"
  },
  {
    id: "A-007",
    patientId: "P-007",
    patientName: "Лебедев С.А.",
    doctorName: "Иванов Д.М.",
    specialty: "Эндокринолог",
    date: "2024-04-18T15:00:00Z",
    duration: 40,
    room: "210",
    status: "scheduled",
    reason: "Контроль диабета",
    notes: "",
    diagnoses: [],
    prescriptions: [],
    vitals: null,
    createdAt: "2024-04-08T12:00:00Z"
  },
  {
    id: "A-008",
    patientId: "P-008",
    patientName: "Новикова А.Д.",
    doctorName: "Смирнова О.Л.",
    specialty: "Невролог",
    date: "2024-04-19T11:30:00Z",
    duration: 45,
    room: "305",
    status: "scheduled",
    reason: "Мигрень",
    notes: "",
    diagnoses: [],
    prescriptions: [],
    vitals: null,
    createdAt: "2024-04-09T13:00:00Z"
  },
  {
    id: "A-009",
    patientId: "P-009",
    patientName: "Фёдоров Н.И.",
    doctorName: "Иванов Д.М.",
    specialty: "Нефролог",
    date: "2024-04-20T10:00:00Z",
    duration: 50,
    room: "215",
    status: "scheduled",
    reason: "Контроль функции почек",
    notes: "",
    diagnoses: [],
    prescriptions: [],
    vitals: null,
    createdAt: "2024-04-10T09:00:00Z"
  },
  {
    id: "A-010",
    patientId: "P-010",
    patientName: "Егорова Т.С.",
    doctorName: "Никитина Е.В.",
    specialty: "Кардиолог",
    date: "2024-04-21T14:30:00Z",
    duration: 40,
    room: "202",
    status: "scheduled",
    reason: "Профилактический осмотр",
    notes: "",
    diagnoses: [],
    prescriptions: [],
    vitals: null,
    createdAt: "2024-04-11T10:00:00Z"
  },
  {
    id: "A-011",
    patientId: "P-011",
    patientName: "Козлов П.В.",
    doctorName: "Ковалёв А.П.",
    specialty: "Терапевт",
    date: "2024-04-22T09:00:00Z",
    duration: 30,
    room: "101",
    status: "scheduled",
    reason: "ОРВИ",
    notes: "",
    diagnoses: [],
    prescriptions: [],
    vitals: null,
    createdAt: "2024-04-12T11:00:00Z"
  },
  {
    id: "A-012",
    patientId: "P-012",
    patientName: "Степанова Ю.А.",
    doctorName: "Смирнова О.Л.",
    specialty: "Аллерголог",
    date: "2024-04-23T13:00:00Z",
    duration: 45,
    room: "308",
    status: "scheduled",
    reason: "Аллергия на пыльцу",
    notes: "",
    diagnoses: [],
    prescriptions: [],
    vitals: null,
    createdAt: "2024-04-13T12:00:00Z"
  },
  {
    id: "A-013",
    patientId: "P-013",
    patientName: "Орлов А.М.",
    doctorName: "Никитина Е.В.",
    specialty: "Кардиолог",
    date: "2024-04-24T10:30:00Z",
    duration: 40,
    room: "202",
    status: "scheduled",
    reason: "Аритмия",
    notes: "",
    diagnoses: [],
    prescriptions: [],
    vitals: null,
    createdAt: "2024-04-14T09:00:00Z"
  },
  {
    id: "A-014",
    patientId: "P-014",
    patientName: "Романова С.П.",
    doctorName: "Петрова Н.С.",
    specialty: "Хирург",
    date: "2024-04-25T08:00:00Z",
    duration: 30,
    room: "401",
    status: "completed",
    reason: "Контрольный осмотр",
    notes: "Заживление хорошее",
    diagnoses: ["D-004"],
    prescriptions: [],
    vitals: { pressure: "125/82", pulse: 74, temperature: 36.6 },
    createdAt: "2024-04-15T10:00:00Z"
  },
  {
    id: "A-015",
    patientId: "P-015",
    patientName: "Григорьев М.О.",
    doctorName: "Ковалёв А.П.",
    specialty: "Терапевт",
    date: "2024-04-26T11:00:00Z",
    duration: 30,
    room: "101",
    status: "completed",
    reason: "Плановый осмотр",
    notes: "Здоров",
    diagnoses: ["D-005"],
    prescriptions: [],
    vitals: { pressure: "118/78", pulse: 68, temperature: 36.5 },
    createdAt: "2024-04-16T12:00:00Z"
  }
];

/* ============================================================
   СУЩНОСТЬ 3: ДИАГНОЗЫ
   Поля:
     - id              — уникальный идентификатор
     - patientId       — ссылка на пациента
     - patientName     — имя пациента
     - code            — код по МКБ-10
     - title           — название диагноза (заголовок)
     - description     — описание (описание)
     - severity        — тяжесть (fixed set)
     - status          — статус (fixed set)
     - diagnosedAt     — дата постановки (ISO 8601)
     - doctorName      — ФИО врача
     - symptoms        — вложенный массив симптомов
     - treatmentPlan   — план лечения
     - icdGroup        — группа МКБ
   ============================================================ */
export const diagnoses = [
  {
    id: "D-001",
    patientId: "P-001",
    patientName: "Петров И.С.",
    code: "Z00.0",
    title: "Общий медицинский осмотр",
    description: "Профилактический осмотр, патологий не выявлено",
    severity: "mild",
    status: "resolved",
    diagnosedAt: "2024-04-10T09:30:00Z",
    doctorName: "Ковалёв А.П.",
    symptoms: [],
    treatmentPlan: "Плановый осмотр через год",
    icdGroup: "Z00-Z13"
  },
  {
    id: "D-002",
    patientId: "P-002",
    patientName: "Сидорова М.И.",
    code: "I20.9",
    title: "Стенокардия",
    description: "Боль в груди при физической нагрузке",
    severity: "moderate",
    status: "active",
    diagnosedAt: "2024-04-11T11:00:00Z",
    doctorName: "Никитина Е.В.",
    symptoms: ["боль в груди", "одышка", "тахикардия"],
    treatmentPlan: "Нитраты, бета-блокаторы, контроль ЭКГ",
    icdGroup: "I00-I99"
  },
  {
    id: "D-003",
    patientId: "P-003",
    patientName: "Кузнецов А.П.",
    code: "I10",
    title: "Эссенциальная гипертензия",
    description: "Повышенное артериальное давление",
    severity: "moderate",
    status: "active",
    diagnosedAt: "2024-04-12T11:15:00Z",
    doctorName: "Ковалёв А.П.",
    symptoms: ["головная боль", "головокружение"],
    treatmentPlan: "ИАПФ, диуретики, диета",
    icdGroup: "I00-I99"
  },
  {
    id: "D-004",
    patientId: "P-014",
    patientName: "Романова С.П.",
    code: "Z98.8",
    title: "Послеоперационное состояние",
    description: "Состояние после плановой операции",
    severity: "mild",
    status: "resolved",
    diagnosedAt: "2024-04-25T08:30:00Z",
    doctorName: "Петрова Н.С.",
    symptoms: [],
    treatmentPlan: "Наблюдение, перевязки",
    icdGroup: "Z80-Z99"
  },
  {
    id: "D-005",
    patientId: "P-015",
    patientName: "Григорьев М.О.",
    code: "Z00.1",
    title: "Осмотр здорового пациента",
    description: "Плановый осмотр, здоров",
    severity: "mild",
    status: "resolved",
    diagnosedAt: "2024-04-26T11:15:00Z",
    doctorName: "Ковалёв А.П.",
    symptoms: [],
    treatmentPlan: "",
    icdGroup: "Z00-Z13"
  },
  {
    id: "D-006",
    patientId: "P-007",
    patientName: "Лебедев С.А.",
    code: "E11.9",
    title: "Сахарный диабет 2 типа",
    description: "Инсулинонезависимый сахарный диабет",
    severity: "moderate",
    status: "active",
    diagnosedAt: "2024-03-15T10:00:00Z",
    doctorName: "Иванов Д.М.",
    symptoms: ["жажда", "частое мочеиспускание", "утомляемость"],
    treatmentPlan: "Метформин, диета, контроль глюкозы",
    icdGroup: "E00-E90"
  },
  {
    id: "D-007",
    patientId: "P-009",
    patientName: "Фёдоров Н.И.",
    code: "N18.3",
    title: "Хроническая болезнь почек 3 стадии",
    description: "Умеренное снижение функции почек",
    severity: "severe",
    status: "active",
    diagnosedAt: "2024-02-20T14:00:00Z",
    doctorName: "Иванов Д.М.",
    symptoms: ["отёки", "утомляемость"],
    treatmentPlan: "Нефропротекция, диета, контроль креатинина",
    icdGroup: "N00-N99"
  },
  {
    id: "D-008",
    patientId: "P-013",
    patientName: "Орлов А.М.",
    code: "I49.9",
    title: "Нарушение сердечного ритма",
    description: "Экстрасистолия, требует наблюдения",
    severity: "moderate",
    status: "active",
    diagnosedAt: "2024-01-20T15:00:00Z",
    doctorName: "Никитина Е.В.",
    symptoms: ["перебои в работе сердца", "слабость"],
    treatmentPlan: "Антиаритмики, холтер-мониторинг",
    icdGroup: "I00-I99"
  },
  {
    id: "D-009",
    patientId: "P-012",
    patientName: "Степанова Ю.А.",
    code: "J30.2",
    title: "Сезонный аллергический ринит",
    description: "Аллергия на пыльцу растений",
    severity: "mild",
    status: "active",
    diagnosedAt: "2024-04-01T10:00:00Z",
    doctorName: "Смирнова О.Л.",
    symptoms: ["насморк", "чихание", "зуд в глазах"],
    treatmentPlan: "Антигистаминные, спрей в нос",
    icdGroup: "J00-J99"
  },
  {
    id: "D-010",
    patientId: "P-008",
    patientName: "Новикова А.Д.",
    code: "G43.9",
    title: "Мигрень",
    description: "Периодические интенсивные головные боли",
    severity: "moderate",
    status: "active",
    diagnosedAt: "2024-03-25T11:30:00Z",
    doctorName: "Смирнова О.Л.",
    symptoms: ["головная боль", "тошнота", "светобоязнь"],
    treatmentPlan: "Триптаны, профилактика",
    icdGroup: "G00-G99"
  },
  {
    id: "D-011",
    patientId: "P-011",
    patientName: "Козлов П.В.",
    code: "J06.9",
    title: "ОРВИ",
    description: "Острая респираторная вирусная инфекция",
    severity: "mild",
    status: "resolved",
    diagnosedAt: "2024-04-05T09:00:00Z",
    doctorName: "Ковалёв А.П.",
    symptoms: ["кашель", "насморк", "температура"],
    treatmentPlan: "Противовирусные, симптоматическая терапия",
    icdGroup: "J00-J99"
  },
  {
    id: "D-012",
    patientId: "P-005",
    patientName: "Волков Д.О.",
    code: "K35.8",
    title: "Острый аппендицит",
    description: "Состояние после аппендэктомии",
    severity: "severe",
    status: "resolved",
    diagnosedAt: "2024-03-10T20:00:00Z",
    doctorName: "Петрова Н.С.",
    symptoms: ["боль в животе", "тошнота"],
    treatmentPlan: "Аппендэктомия, антибиотики",
    icdGroup: "K00-K93"
  },
  {
    id: "D-013",
    patientId: "P-004",
    patientName: "Морозова Е.В.",
    code: "G44.2",
    title: "Головная боль напряжения",
    description: "Хроническая головная боль напряжения",
    severity: "mild",
    status: "active",
    diagnosedAt: "     diagnosedAt: "2024-02-28T13:00:00Z",
    doctorName: "Смирнова О.Л.",
    symptoms: ["давящая головная боль", "усталость"],
    treatmentPlan: "Анальгетики, релаксация, режим сна",
    icdGroup: "G00-G99"
  },
  {
    id: "D-014",
    patientId: "P-006",
    patientName: "Соколова О.Н.",
    code: "M54.5",
    title: "Боль в нижней части спины",
    description: "Дорсалгия поясничного отдела",
    severity: "mild",
    status: "active",
    diagnosedAt: "2024-03-18T10:30:00Z",
    doctorName: "Ковалёв А.П.",
    symptoms: ["боль в пояснице", "скованность"],
    treatmentPlan: "НПВС, ЛФК, физиотерапия",
    icdGroup: "M00-M99"
  },
  {
    id: "D-015",
    patientId: "P-010",
    patientName: "Егорова Т.С.",
    code: "Z01.8",
    title: "Профилактический осмотр",
    description: "Комплексное обследование, патологий нет",
    severity: "mild",
    status: "resolved",
    diagnosedAt: "2024-04-21T15:00:00Z",
    doctorName: "Никитина Е.В.",
    symptoms: [],
    treatmentPlan: "Плановый осмотр через год",
    icdGroup: "Z00-Z13"
  }
];

/* ============================================================
   СУЩНОСТЬ 4: НАЗНАЧЕНИЯ
   Поля:
     - id              — уникальный идентификатор
     - patientId       — ссылка на пациента
     - patientName     — имя пациента
     - appointmentId   — ссылка на приём
     - title           — название назначения (заголовок)
     - description     — описание (описание)
     - type            — тип (fixed set): medication / procedure / diet / referral
     - status          — статус (fixed set)
     - priority        — приоритет (fixed set)
     - prescribedAt    — дата назначения (ISO 8601)
     - startDate       — начало (ISO 8601)
     - endDate         — окончание (ISO 8601)
     - doctorName      — ФИО врача
     - medications     — вложенный массив препаратов
     - instructions    — инструкции
   ============================================================ */
export const prescriptions = [
  {
    id: "R-001",
    patientId: "P-001",
    patientName: "Петров И.С.",
    appointmentId: "A-001",
    title: "Витамин D3",
    description: "Профилактический приём витамина D",
    type: "medication",
    status: "completed",
    priority: "low",
    prescribedAt: "2024-04-10T09:30:00Z",
    startDate: "2024-04-10",
    endDate: "2024-07-10",
    doctorName: "Ковалёв А.П.",
    medications: [
      { name: "Витамин D3", dose: "1000 МЕ", frequency: "1 раз в день", duration: "3 месяца" }
    ],
    instructions: "Принимать во время еды"
  },
  {
    id: "R-002",
    patientId: "P-002",
    patientName: "Сидорова М.И.",
    appointmentId: "A-002",
    title: "Нитроглицерин",
    description: "Купирование приступов стенокардии",
    type: "medication",
    status: "active",
    priority: "high",
    prescribedAt: "2024-04-11T11:00:00Z",
    startDate: "2024-04-11",
    endDate: "2024-07-11",
    doctorName: "Никитина Е.В.",
    medications: [
      { name: "Нитроглицерин", dose: "0.5 мг", frequency: "при приступе", duration: "по требованию" }
    ],
    instructions: "Принимать под язык при боли в груди"
  },
  {
    id: "R-003",
    patientId: "P-002",
    patientName: "Сидорова М.И.",
    appointmentId: "A-002",
    title: "Бисопролол",
    description: "Бета-блокатор для контроля ЧСС",
    type: "medication",
    status: "active",
    priority: "high",
    prescribedAt: "2024-04-11T11:05:00Z",
    startDate: "2024-04-11",
    endDate: "2024-10-11",
    doctorName: "Никитина Е.В.",
    medications: [
      { name: "Бисопролол", dose: "5 мг", frequency: "1 раз в день утром", duration: "6 месяцев" }
    ],
    instructions: "Не прекращать резко, контроль пульса"
  },
  {
    id: "R-004",
    patientId: "P-003",
    patientName: "Кузнецов А.П.",
    appointmentId: "A-003",
    title: "Лизиноприл",
    description: "ИАПФ для контроля давления",
    type: "medication",
    status: "active",
    priority: "high",
    prescribedAt: "2024-04-12T11:20:00Z",
    startDate: "2024-04-12",
    endDate: "2024-10-12",
    doctorName: "Ковалёв А.П.",
    medications: [
      { name: "Лизиноприл", dose: "10 мг", frequency: "1 раз в день", duration: "6 месяцев" }
    ],
    instructions: "Контроль АД утром и вечером"
  },
  {
    id: "R-005",
    patientId: "P-007",
    patientName: "Лебедев С.А.",
    appointmentId: "A-007",
    title: "Метформин",
    description: "Сахароснижающий препарат",
    type: "medication",
    status: "active",
    priority: "high",
    prescribedAt: "2024-03-15T10:30:00Z",
    startDate: "2024-03-15",
    endDate: "2024-09-15",
    doctorName: "Иванов Д.М.",
    medications: [
      { name: "Метформин", dose: "850 мг", frequency: "2 раза в день", duration: "6 месяцев" }
    ],
    instructions: "Принимать во время еды, контроль глюкозы"
  },
  {
    id: "R-006",
    patientId: "P-007",
    patientName: "Лебедев С.А.",
    appointmentId: "A-007",
    title: "Диета при диабете",
    description: "Стол №9 — низкоуглеводная диета",
    type: "diet",
    status: "active",
    priority: "medium",
    prescribedAt: "2024-03-15T10:35:00Z",
    startDate: "2024-03-15",
    endDate: null,
    doctorName: "Иванов Д.М.",
    medications: [],
    instructions: "Исключить сахар, ограничить углеводы, 5-6 приёмов пищи"
  },
  {
    id: "R-007",
    patientId: "P-009",
    patientName: "Фёдоров Н.И.",
    appointmentId: "A-009",
    title: "Контроль креатинина",
    description: "Анализ крови на креатинин каждые 3 месяца",
    type: "procedure",
    status: "active",
    priority: "high",
    prescribedAt: "2024-02-20T14:30:00Z",
    startDate: "2024-02-20",
    endDate: "2025-02-20",
    doctorName: "Иванов Д.М.",
    medications: [],
    instructions: "Сдавать кровь натощак"
  },
  {
    id: "R-008",
    patientId: "P-009",
    patientName: "Фёдоров Н.И.",
    appointmentId: "A-009",
    title: "Нефропротективная терапия",
    description: "Препараты для защиты почек",
    type: "medication",
    status: "active",
    priority: "high",
    prescribedAt: "2024-02-20T14:40:00Z",
    startDate: "2024-02-20",
    endDate: "2024-08-20",
    doctorName: "Иванов Д.М.",
    medications: [
      { name: "Эналаприл", dose: "5 мг", frequency: "1 раз в день", duration: "6 месяцев" }
    ],
    instructions: "Контроль АД и креатинина"
  },
  {
    id: "R-009",
    patientId: "P-012",
    patientName: "Степанова Ю.А.",
    appointmentId: "A-012",
    title: "Лоратадин",
    description: "Антигистаминный препарат",
    type: "medication",
    status: "active",
    priority: "medium",
    prescribedAt: "2024-04-01T10:30:00Z",
    startDate: "2024-04-01",
    endDate: "2024-06-01",
    doctorName: "Смирнова О.Л.",
    medications: [
      { name: "Лоратадин", dose: "10 мг", frequency: "1 раз в день", duration: "2 месяца" }
    ],
    instructions: "Принимать утром, не запивать грейпфрутовым соком"
  },
  {
    id: "R-010",
    patientId: "P-012",
    patientName: "Степанова Ю.А.",
    appointmentId: "A-012",
    title: "Направление к аллергологу",
    description: "Углублённое обследование при аллергии",
    type: "referral",
    status: "active",
    priority: "medium",
    prescribedAt: "2024-04-01T10:35:00Z",
    startDate: "2024-04-05",
    endDate: "2024-05-05",
    doctorName: "Смирнова О.Л.",
    medications: [],
    instructions: "Записаться на приём в течение месяца"
  },
  {
    id: "R-011",
    patientId: "P-013",
    patientName: "Орлов А.М.",
    appointmentId: "A-013",
    title: "Холтер-мониторинг ЭКГ",
    description: "Суточный мониторинг сердечного ритма",
    type: "procedure",
    status: "scheduled",
    priority: "high",
    prescribedAt: "2024-04-14T09:30:00Z",
    startDate: "2024-04-25",
    endDate: "2024-04-26",
    doctorName: "Никитина Е.В.",
    medications: [],
    instructions: "Явиться утром натощак, носить 24 часа"
  },
  {
    id: "R-012",
    patientId: "P-013",
    patientName: "Орлов А.М.",
    appointmentId: "A-013",
    title: "Амиодарон",
    description: "Антиаритмический препарат",
    type: "medication",
    status: "active",
    priority: "high",
    prescribedAt: "2024-04-14T09:35:00Z",
    startDate: "2024-04-14",
    endDate: "2024-07-14",
    doctorName: "Никитина Е.В.",
    medications: [
      { name: "Амиодарон", dose: "200 мг", frequency: "1 раз в день", duration: "3 месяца" }
    ],
    instructions: "Контроль ТТГ и функции печени"
  },
  {
    id: "R-013",
    patientId: "P-008",
    patientName: "Новикова А.Д.",
    appointmentId: "A-008",
    title: "Суматриптан",
    description: "Препарат для купирования мигрени",
    type: "medication",
    status: "active",
    priority: "medium",
    prescribedAt: "2024-03-25T12:00:00Z",
    startDate: "2024-03-25",
    endDate: "2024-09-25",
    doctorName: "Смирнова О.Л.",
    medications: [
      { name: "Суматриптан", dose: "50 мг", frequency: "при приступе", duration: "по требованию" }
    ],
    instructions: "Принимать при начале головной боли"
  },
  {
    id: "R-014",
    patientId: "P-006",
    patientName: "Соколова О.Н.",
    appointmentId: "A-006",
    title: "ЛФК при дорсалгии",
    description: "Лечебная физкультура для поясницы",
    type: "procedure",
    status: "active",
    priority: "medium",
    prescribedAt: "2024-03-18T11:00:00Z",
    startDate: "2024-03-20",
    endDate: "2024-06-20",
    doctorName: "Ковалёв А.П.",
    medications: [],
    instructions: "Упражнения 3 раза в неделю, 30 минут"
  },
  {
    id: "R-015",
    patientId: "P-005",
    patientName: "Волков Д.О.",
    appointmentId: "A-005",
    title: "Перевязка послеоперационной раны",
    description: "Ежедневные перевязки",
    type: "procedure",
    status: "completed",
    priority: "high",
    prescribedAt: "2024-03-15T10:00:00Z",
    startDate: "2024-03-15",
    endDate: "2024-03-25",
    doctorName: "Петрова Н.С.",
    medications: [],
    instructions: "Явка в процедурный кабинет ежедневно"
  }
];

/* ============================================================
   СПРАВОЧНИКИ (для отображения статусов и т.д.)
   ============================================================ */

export const patientStatusLabels = {
  active: "Активный",
  observation: "Наблюдение",
  discharged: "Выписан"
};

export const appointmentStatusLabels = {
  scheduled: "Запланирован",
  completed: "Завершён",
  cancelled: "Отменён"
};

export const diagnosisSeverityLabels = {
  mild: "Лёгкая",
  moderate: "Средняя",
  severe: "Тяжёлая"
};

export const diagnosisStatusLabels = {
  active: "Активный",
  resolved: "Разрешён"
};

export const prescriptionTypeLabels = {
  medication: "Лекарство",
  procedure: "Процедура",
  diet: "Диета",
  referral: "Направление"
};

export const prescriptionStatusLabels = {
  scheduled: "Запланировано",
  active: "Активно",
  completed: "Завершено",
  cancelled: "Отменено"
};

export const prescriptionPriorityLabels = {
  high: "Высокий",
  medium: "Средний",
  low: "Низкий"
};

/* ============================================================
   ОБЪЕДИНЁННЫЙ ЭКСПОРТ
   ============================================================ */
export const DATA = {
  patients,
  appointments,
  diagnoses,
  prescriptions
};

export const LABELS = {
  patientStatus: patientStatusLabels,
  appointmentStatus: appointmentStatusLabels,
  diagnosisSeverity: diagnosisSeverityLabels,
  diagnosisStatus: diagnosisStatusLabels,
  prescriptionType: prescriptionTypeLabels,
  prescriptionStatus: prescriptionStatusLabels,
  prescriptionPriority: prescriptionPriorityLabels
};