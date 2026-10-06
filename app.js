const P = [
  ["p1","Иванов","Иван","1985-03-12","active","A+","+7-900-111","Москва",["пенициллин"]],
  ["p2","Петрова","Анна","1992-07-22","active","O-","+7-900-222","СПб",[]],
  ["p3","Сидоров","Пётр","1978-11-05","archived","B+","+7-900-333","Казань",["аспирин"]],
  ["p4","Кузнецова","Мария","2001-01-30","active","AB+","+7-900-444","Москва",[]],
  ["p5","Смирнов","Алексей","1965-09-14","active","A-","+7-900-555","Новосибирск",["сульфаниламиды"]],
  ["p6","Фёдорова","Ольга","1988-06-18","active","O+","+7-900-666","Екатеринбург",[]],
  ["p7","Морозов","Денис","1995-12-02","active","B-","+7-900-777","Москва",["новокаин"]],
  ["p8","Волкова","Екатерина","1970-04-25","deceased","A+","+7-900-888","Самара",[]],
  ["p9","Новиков","Сергей","1983-08-08","active","AB-","+7-900-999","Челябинск",["йод"]],
  ["p10","Егорова","Наталья","1999-10-10","active","O+","+7-900-000","Москва",[]],
  ["p11","Павлов","Артём","1975-02-14","active","B+","+7-900-123","Ростов",["пенициллин"]],
  ["p12","Романова","Ирина","1990-05-05","active","A-","+7-900-234","Уфа",[]],
  ["p13","Захаров","Михаил","1968-03-19","archived","O-","+7-900-345","Пермь",["лидокаин"]],
  ["p14","Белова","Светлана","1997-09-27","active","AB+","+7-900-456","Москва",[]],
  ["p15","Титов","Владимир","1981-12-25","active","B+","+7-900-567","Воронеж",["аспирин","пенициллин"]]
].map(([id,ln,fn,bd,st,bt,ph,ct,al])=>({id,lastName:ln,firstName:fn,birthDate:bd,status:st,bloodType:bt,phone:ph,address:{city:ct},allergies:al}));

const A = Array.from({length:15},(_,i)=>({
  id:"a"+i, patientId:"p"+(i%15+1),
  title:["Первичный приём","Повторный приём","Консультация"][i%3]+" №"+(i+1),
  description:"Описание приёма "+(i+1),
  status:["completed","scheduled","in-progress","cancelled"][i%4],
  scheduledAt:`2024-03-${String(i+1).padStart(2,"0")}T09:00:00Z`,
  doctor:{fullName:"Козлов А.В.",specialty:"Терапевт"}, room:String(200+i)
}));

const D = Array.from({length:15},(_,i)=>({
  id:"d"+i, patientId:"p"+(i%15+1),
  icdCode:"I"+(10+i%10),
  title:"Диагноз №"+(i+1), description:"Описание диагноза "+(i+1),
  status:["confirmed","suspected","chronic","ruled-out"][i%4],
  diagnosedAt:`2024-03-${String(i+1).padStart(2,"0")}T10:00:00Z`,
  symptoms:["симптом A","симптом B"]
}));

const R = Array.from({length:15},(_,i)=>({
  id:"r"+i, patientId:"p"+(i%15+1),
  medication:["Эналаприл","Метформин","Парацетамол","Омепразол","Лоратадин"][i%5],
  dosage:(10+i*5)+" мг", frequency:"2 р/д",
  title:"Назначение №"+(i+1), description:"Описание",
  status:["active","completed","cancelled"][i%3],
  prescribedAt:`2024-03-${String(i+1).padStart(2,"0")}T11:00:00Z`
}));

const byId = Object.fromEntries(P.map(p=>[p.id,p]));
const $ = s => document.querySelector(s);
const E = (t,c,x)=>{const n=document.createElement(t);if(c)n.className=c;if(x!=null)n.textContent=x;return n};
const T = iso => {const t=document.createElement("time");t.dateTime=iso;t.textContent=new Date(iso).toLocaleDateString("ru-RU");return t};
const B = s => E("span","b "+s,{active:"Активен",archived:"Архив",deceased:"Умер",completed:"Завершён",scheduled:"Запланирован","in-progress":"В процессе",cancelled:"Отменён",confirmed:"Подтверждён",suspected:"Подозрение",chronic:"Хронический","ruled-out":"Исключён"}[s]||s);
const L = (arr,fn) => {const ul=E("ul");arr.forEach(x=>{const li=E("li");li.append(fn(x));ul.append(li)});return ul};

$("#pl").replaceWith(L(P,p=>{
  const a=E("article");
  a.append(E("h3",null,`${p.lastName} ${p.firstName}`),B(p.status),
    E("p",null,`Полис: ${p.id} · ${p.bloodType} · ${p.phone}`),
    (()=>{const ad=document.createElement("address");ad.textContent=p.address.city;return ad})(),
    E("p",null,"Дата рождения: "),T(p.birthDate),
    L(p.allergies,x=>E("span","tag",x)));
  return a;
}));

$("#al").replaceWith(L(A,a=>{
  const el=E("article");
  el.append(E("h3",null,a.title),B(a.status),E("p",null,a.description),
    E("p",null,`Пациент: ${byId[a.patientId].lastName} · Врач: ${a.doctor.fullName} · Каб. ${a.room}`),
    T(a.scheduledAt));
  return el;
}));

$("#dl").replaceWith(L(D,d=>{
  const el=E("article");
  el.append(E("h3",null,d.title),B(d.status),E("p",null,`МКБ: ${d.icdCode} · ${d.description}`),
    E("p",null,`Пациент: ${byId[d.patientId].lastName}`),T(d.diagnosedAt),
    L(d.symptoms,s=>E("span","tag",s)));
  return el;
}));

R.forEach(r=>{
  const tr=document.createElement("tr");
  const th=E("th",null,r.medication);th.scope="row";
  const td=E("td",null,`${byId[r.patientId].lastName} · ${r.dosage} · ${r.frequency}`);
  const tdt=document.createElement("td");tdt.append(T(r.prescribedAt));
  tr.append(th,td,tdt);$("#rt").append(tr);
});