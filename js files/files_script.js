function toggleMenu() {
  document.getElementById("mobileLinks").classList.toggle("open");
}

function showNotice(message) {
  alert(message);
}

function switchModels(subject) {
  const derasat = document.querySelector(".molakhasat.derasat");
  const olom = document.querySelector(".molakhasat.olom");
  const arabic = document.querySelector(".molakhasat.arabic");
  const math = document.querySelector(".molakhasat.math");
  const english = document.querySelector(".molakhasat.english");
  const files = document.querySelector(".files");
  const sources = document.querySelector(".sources");
  const body = document.body;
  switch (subject) {
    case "دراسات":
      derasat.style.display = "block";
      break;
    case "علوم":
      olom.style.display = "block";
      break;
    case "لغة عربية":
      arabic.style.display = "block";
      break;
    case "رياضيات":
      math.style.display = "block";
      break;
    case "english":
      english.style.display = "block";
      break;
    case "files":
      files.style.display = "block";
      break;
    case "sources":
      sources.style.display = "block";
      break;
    default:
      break;
  }
  document.querySelectorAll(".molakhasat").forEach((one) => {
    one.style.overflow = "auto";
  });
  files.style.overflow = "auto";
  body.style.overflow = "hidden";
}

function closeSubject() {
  document.querySelectorAll(".molakhasat").forEach((one) => {
    one.style.display = "none";
  });
  document.querySelector(".files").style.display = "none";
  document.querySelector(".sources").style.display = "none";
  document.body.style.overflow = "auto";
}

const filesData = [
  {
    subject: "لغة عربية",
    name: "كتاب التقييمات في اللغة العربية",
    link: "https://drive.google.com/file/d/1AvNiPbf9knM5hzK-zY9-R_t6KZ_Ki_Ts/view?usp=sharing",
    term: "الترم الأول",
  },
];

function createFile() {
  const files = document.querySelector(".files .cards-wrapper");
  for (let i = 0; i < filesData.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("span");
    title.classList.add("title");
    title.textContent = filesData[i].subject;

    let h4 = document.createElement("h4");
    h4.textContent = filesData[i].name;

    let btn = document.createElement("a");
    btn.href = filesData[i].link;
    btn.target = "_blank";
    btn.classList.add("btn-show");
    btn.textContent = "فتح";

    let span = document.createElement("span");
    span.textContent = filesData[i].term;

    card.appendChild(title);
    card.appendChild(h4);
    card.appendChild(btn);
    card.appendChild(span);

    files.appendChild(card);
  }
}

createFile();


const sourcesData = [
  {
    subject: "موقع خارجي",
    name: "موقع قناة مدرستنا (إعدادي)",
    link: "https://madrasetnaplus.eg/",
  },
  {
    subject: "موقع خارجي",
    name: "موقع وزارة التربية والتعليم",
    link: "https://moe.gov.eg/",
  },
]

function createSource() {
  const sources = document.querySelector(".sources .cards-wrapper");
  for (let i = 0; i < sourcesData.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("span");
    title.classList.add("title");
    title.textContent = sourcesData[i].subject;

    let h4 = document.createElement("h4");
    h4.textContent = sourcesData[i].name;

    let btn = document.createElement("a");
    btn.href = sourcesData[i].link;
    btn.target = "_blank";
    btn.classList.add("btn-show");
    btn.textContent = "فتح";

    let span = document.createElement("span");
    span.textContent = "وبالتوفيق";

    card.appendChild(title);
    card.appendChild(h4);
    card.appendChild(btn);
    card.appendChild(span);

    sources.appendChild(card);
  }
}

createSource()
