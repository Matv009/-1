const P=[["p1","Иванов","Иван","1985-03-12","active","mid","A+","+7-900-111","Москва",["пенициллин"]],["p2","Петрова","Анна","1992-07-22","active","low","O-","+7-900-222","СПб",[]],["p3","Сидоров","Пётр","1978-11-05","archived","high","B+","+7-900-333","Казань",["аспирин"]],["p4","Кузнецова","Мария","2001-01-30","active","low","AB+","+7-900-444","Москва",[]],["p5","Смирнов","Алексей","1965-09-14","active","high","A-","+7-900-555","Новосибирск",["сульфаниламиды"]],["p6","Фёдорова","Ольга","1988-06-18","active","mid","O+","+7-900-666","Екатеринбург",[]],["p7","Морозов","Денис","1995-12-02","active","low","B-","+7-900-777","Москва",["новокаин"]],["p8","Волкова","Екатерина","1970-04-25","deceased","high","A+","+7-900-888","Самара",[]],["p9","Новиков","Сергей","1983-08-08","active","mid","AB-","+7-900-999","Челябинск",["йод"]],["p10","Егорова","Наталья","1999-10-10","active","low","O+","+7-900-000","Москва",[]],["p11","Павлов","Артём","1975-02-14","active","high","B+","+7-900-123","Ростов",["пенициллин"]],["p12","Романова","Ирина","1990-05-05","active","mid","A-","+7-900-234","Уфа",[]],["p13","Захаров","Михаил","1968-03-19","archived","low","O-","+7-900-345","Пермь",["лидокаин"]],["p14","Белова","Светлана","1997-09-27","active","low","AB+","+7-900-456","Москва",[]],["p15","Титов","Владимир","1981-12-25","active","high","B+","+7-900-567","Воронеж",["аспирин","пенициллин"]]].map(([id,ln,fn,bd,st,priority,bloodType,phone,city,allergies])=>({id,lastName:ln,firstName:fn,birthDate:bd,status:st,priority,bloodType,phone,city,allergies}));

const PRI=["high","mid","low"];
const A=Array.from({length:15},(_,i)=>({id:"a"+i,patientId:"p"+(i%15+1),title:["Первичный приём","Повторный приём","Консультация"][i%3]+" №"+(i+1),description:"Описание "+(i+1),status:["completed","scheduled","in-progress","cancelled"][i%4],priority:PRI[i%3],scheduledAt:`2024-03-${String(i+1).padStart(2,"0")}T09:00:00Z`,doctor:"Козлов А.В.",room:String(200+i)}));
const D=Array.from({length:15},(_,i)=>({id:"d"+i,patientId:"p"+(i%15+1),icdCode:"I"+(10+i%10),title:"Диагноз №"+(i+1),description:"Описание "+(i+1),status:["confirmed","suspected","chronic","ruled-out"][i%4],priority:PRI[i%3],diagnosedAt:`2024-03-${String(i+1).padStart(2,"0")}T10:00:00Z`,symptoms:["A","B"]}));
const R=Array.from({length:15},(_,i)=>({id:"r"+i,patientId:"p"+(i%15+1),medication:["Эналаприл","Метформин","Парацетамол","Омепразол","Лоратадин"][i%5],dosage:(10+i*5)+" мг",frequency:"2 р/д",title:"Назначение №"+(i+1),status:["active","completed","cancelled"][i%3],priority:PRI[i%3],prescribedAt:`2024-03-${String(i+1).padStart(2,"0")}T11:00:00Z`}));

const byId=Object.fromEntries(P.map(p=>[p.id,p])),$=s=>document.querySelector(s);
const E=(t,c,x)=>{const n=document.createElement(t);if(c)n.className=c;if(x!=null)n.textContent=x;return n};
const T=i=>{const t=document.createElement("time");t.dateTime=i;t.textContent=new Date(i).toLocaleDateString("ru-RU");return t};
const S={active:"Активен",archived:"Архив",deceased:"Умер",completed:"Завершён",scheduled:"Запланирован","in-progress":"В процессе",cancelled:"Отменён",confirmed:"Подтверждён",suspected:"Подозрение",chronic:"Хронический","ruled-out":"Исключён"};
const PI={high:"▲",mid:"■",low:"▼"},PL={high:"Высокий",mid:"Средний",low:"Низкий"};
const B=s=>E("span","b "+s,S[s]||s),PR=p=>E("span","pr "+p,PI[p]+" "+PL[p]);
const L=(a,fn)=>{const u=E("ul","cards");a.forEach(x=>{const li=E("li");li.append(fn(x));u.append(li)});return u};

const M=$("#m");let LF;
const open=(t,b)=>{LF=document.activeElement;$("#mt").textContent=t;$("#mb").replaceChildren(b);document.body.style.overflow="hidden";M.showModal();M.querySelector("button").focus()};
const close=()=>{M.close();document.body.style.overflow="";LF?.focus()};
M.onclick=e=>{if(e.target===M)close()};
M.onkeydown=e=>{
  if(e.key==="Escape"){e.preventDefault();close();return}
  if(e.key!=="Tab")return;
  const f=M.querySelectorAll("button,[href],input,select,[tabindex]");
  if(!f.length)return;
  const a=f[0],z=f[f.length-1];
  if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}
  else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}
};
M.querySelector(".bx").onclick=close;
M.querySelectorAll("[data-c]").forEach(b=>b.onclick=close);
const det=rows=>{const d=E("dl","det");rows.forEach(([k,v])=>{d.append(E("dt",null,k));const dd=E("dd");dd.append(v instanceof Node?v:document.createTextNode(v));d.append(dd)});return d};

const card=(id,t,st,pr,meta,iso,cb)=>{const a=E("article","card");a.tabIndex=0;
  const h=E("header","card__h");
  h.append(E("span","card__id","#"+id),E("h3",null,t),B(st),PR(pr));
  const m=E("p","card__meta",meta+" · ");m.append(T(iso));
  const btn=E("button","btn","Открыть");btn.type="button";
  btn.onclick=e=>{e.stopPropagation();cb()};
  a.append(h,m,btn);a.onkeydown=e=>{if(e.key==="Enter")cb()};
  return a;
};

$("#pl").replaceWith(L(P,p=>card(p.id,p.lastName+" "+p.firstName,p.status,p.priority,`${p.bloodType} · ${p.phone} · ${p.city}`,p.birthDate,()=>open(p.lastName+" "+p.firstName,det([["ID",p.id],["Группа",p.bloodType],["Телефон",p.phone],["Город",p.city],["Аллергии",p.allergies.join(", ")||"нет"],["Дата рождения",T(p.birthDate)],["Статус",B(p.status)]])))));
$("#al").replaceWith(L(A,a=>{const p=byId[a.patientId];return card(a.id,a.title,a.status,a.priority,`${p.lastName} ${p.firstName} · ${a.doctor} · каб. ${a.room}`,a.scheduledAt,()=>open(a.title,det([["ID",a.id],["Пациент",p.lastName+" "+p.firstName],["Врач",a.doctor],["Кабинет",a.room],["Дата",T(a.scheduledAt)],["Приоритет",PR(a.priority)],["Статус",B(a.status)]])))}));
$("#dl").replaceWith(L(D,d=>{const p=byId[d.patientId];return card(d.id,d.title,d.status,d.priority,`МКБ ${d.icdCode} · ${p.lastName} ${p.firstName}`,d.diagnosedAt,()=>open(d.title,det([["ID",d.id],["МКБ",d.icdCode],["Пациент",p.lastName+" "+p.firstName],["Симптомы",d.symptoms.join(", ")],["Дата",T(d.diagnosedAt)],["Статус",B(d.status)]])))}));

let sk="date",sd=1;
const tbl=()=>{const tb=$("#rt");tb.replaceChildren();
  [...R].sort((a,b)=>{const k=sk==="date"?"prescribedAt":sk;
    const va=sk==="patient"?byId[a.patientId].lastName:a[k],vb=sk==="patient"?byId[b.patientId].lastName:b[k];
    return va>vb?sd:va<vb?-sd:0}).forEach(r=>{const p=byId[r.patientId];
    const tr=E("tr");tr.tabIndex=0;
    const th=E("th",null,r.medication);th.scope="row";
    const td=E("td");td.append(T(r.prescribedAt));
    tr.append(th,E("td",null,p.lastName+" "+p.firstName),E("td",null,r.dosage),td);
    tr.onclick=()=>open(r.title,det([["ID",r.id],["Препарат",r.medication],["Доза",r.dosage],["Пациент",p.lastName+" "+p.firstName],["Дата",T(r.prescribedAt)],["Статус",B(r.status)]]));
    tb.append(tr)});
  document.querySelectorAll("thead th").forEach(th=>th.setAttribute("aria-sort",th.dataset.k===sk?(sd===1?"ascending":"descending"):"none"));
};
document.querySelectorAll("thead th").forEach(th=>{th.tabIndex=0;th.onclick=()=>{const k=th.dataset.k;if(k===sk)sd*=-1;else{sk=k;sd=1}tbl()}});
tbl();

const F=$("#f");
const apply=()=>{const q=F.q.value.toLowerCase(),st=F.st.value,pr=[...F.querySelectorAll("input[name=pr]:checked")].map(x=>x.value);
  document.querySelectorAll("#al li").forEach((li,i)=>{const a=A[i];
    li.hidden=!((!q||(a.title+a.description+a.status).toLowerCase().includes(q))&&(!st||a.status===st)&&(!pr.length||pr.includes(a.priority)))})};
F.oninput=apply;F.onreset=()=>setTimeout(apply,0);
document.querySelectorAll("input[name=v]").forEach(r=>r.onchange=()=>{document.body.dataset.view=r.value});