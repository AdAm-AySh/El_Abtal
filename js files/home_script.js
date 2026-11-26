function toggleMenu() {
  document.getElementById("mobileLinks").classList.toggle("open");
}

// إظهار تنبيه بسيط للأقسام التي لم يُضف محتواها بعد.
function showNotice(message) {
  alert(message);
}

const examsData = [
  {
    img: "images/exams/امتحان دراسات الوحدة التالتة.png",
    title: "امتحان دراسات (الوحدة التالتة)",
    kind: "دراسات",
    link: "https://forms.gle/RQEZa6uAtXrym4wX7",
  },
  {
    img: "images/exams/امتحان علوم الوحدة الأولى.png",
    title: "امتحان علوم (الوحدة الأولى)",
    kind: "علوم",
    link: "https://forms.gle/xVFuwYeK6edVEEDE7",
  },
  {
    img: "images/exams/امتحان إنجليزي على يونت 1-3.png",
    title: "امتحان إنجليزي (الوحدة 1-3)",
    kind: "english",
    link: "https://forms.gle/6pZkci4c7aFTAJeA7",
  },
  {
    img: "images/exams/امتحان رياضيات الوحدة 1-2.png",
    title: "امتحان رياضيات (الوحدة 1-2)",
    kind: "رياضيات",
    link: "https://forms.gle/2t5TCRpnAjFvQGit8",
  },
  {
    img: "images/exams/امتحان عربي (متنوع).png",
    title: "امتحان لغة عربية عربي (متنوع)",
    kind: "لغة عربية",
    link: "https://forms.gle/2X4KCzJUGkUjtoMn9",
  },
  {
    img: "images/exams/امتحان دراسات (الوحدة 1-2).png",
    title: "امتحان دراسات (الوحدة 1-2)",
    kind: "دراسات",
    link: "https://forms.gle/DpGYjBqWjEPJenKU9",
  },
];

const molakhasatData = [
  {
    img: "images/molakhasat/قوانين شدة التيار.jpg",
    title: "قوانين شدة التيار تجربة",
    kind: "علوم",
  },
];

function createMolakhas() {
  const olom = document.querySelector(".molakhasat.olom .content");
  for (let i = 0; i < molakhasatData.length; i++) {
    console.log(olom);
    
  }
}

function createExam() {
  const derasatExams = document.querySelector(
    ".exam-card-wrapper.derasat .content",
  );
  const olomExams = document.querySelector(".exam-card-wrapper.olom .content");
  const arabicExams = document.querySelector(
    ".exam-card-wrapper.arabic .content",
  );
  const englishExams = document.querySelector(
    ".exam-card-wrapper.english .content",
  );
  const mathExams = document.querySelector(".exam-card-wrapper.math .content");
  for (let i = 0; i < examsData.length; i++) {
    if (examsData[i].kind === "دراسات") {
      let a = document.createElement("a");
      a.href = examsData[i].link;
      a.target = "_blank";

      let examCard = document.createElement("div");
      examCard.classList.add("exam-card");

      let top = document.createElement("div");
      top.classList.add("top");

      let img = document.createElement("img");
      img.src = examsData[i].img;

      let bottom = document.createElement("div");
      bottom.classList.add("bottom");

      let h4 = document.createElement("h4");
      h4.textContent = examsData[i].title;

      top.appendChild(img);
      examCard.appendChild(top);

      bottom.appendChild(h4);
      examCard.appendChild(bottom);

      a.appendChild(examCard);

      derasatExams.appendChild(a);
    } else if (examsData[i].kind === "علوم") {
      let a = document.createElement("a");
      a.href = examsData[i].link;
      a.target = "_blank";

      let examCard = document.createElement("div");
      examCard.classList.add("exam-card");

      let top = document.createElement("div");
      top.classList.add("top");

      let img = document.createElement("img");
      img.src = examsData[i].img;

      let bottom = document.createElement("div");
      bottom.classList.add("bottom");

      let h4 = document.createElement("h4");
      h4.textContent = examsData[i].title;

      top.appendChild(img);
      examCard.appendChild(top);

      bottom.appendChild(h4);
      examCard.appendChild(bottom);

      a.appendChild(examCard);

      olomExams.appendChild(a);
    } else if (examsData[i].kind === "لغة عربية") {
      let a = document.createElement("a");
      a.href = examsData[i].link;
      a.target = "_blank";

      let examCard = document.createElement("div");
      examCard.classList.add("exam-card");

      let top = document.createElement("div");
      top.classList.add("top");

      let img = document.createElement("img");
      img.src = examsData[i].img;

      let bottom = document.createElement("div");
      bottom.classList.add("bottom");

      let h4 = document.createElement("h4");
      h4.textContent = examsData[i].title;

      top.appendChild(img);
      examCard.appendChild(top);

      bottom.appendChild(h4);
      examCard.appendChild(bottom);

      a.appendChild(examCard);

      arabicExams.appendChild(a);
    } else if (examsData[i].kind === "english") {
      let a = document.createElement("a");
      a.href = examsData[i].link;
      a.target = "_blank";

      let examCard = document.createElement("div");
      examCard.classList.add("exam-card");

      let top = document.createElement("div");
      top.classList.add("top");

      let img = document.createElement("img");
      img.src = examsData[i].img;

      let bottom = document.createElement("div");
      bottom.classList.add("bottom");

      let h4 = document.createElement("h4");
      h4.textContent = examsData[i].title;

      top.appendChild(img);
      examCard.appendChild(top);

      bottom.appendChild(h4);
      examCard.appendChild(bottom);

      a.appendChild(examCard);

      englishExams.appendChild(a);
    } else if (examsData[i].kind === "رياضيات") {
      let a = document.createElement("a");
      a.href = examsData[i].link;
      a.target = "_blank";

      let examCard = document.createElement("div");
      examCard.classList.add("exam-card");

      let top = document.createElement("div");
      top.classList.add("top");

      let img = document.createElement("img");
      img.src = examsData[i].img;

      let bottom = document.createElement("div");
      bottom.classList.add("bottom");

      let h4 = document.createElement("h4");
      h4.textContent = examsData[i].title;

      top.appendChild(img);
      examCard.appendChild(top);

      bottom.appendChild(h4);
      examCard.appendChild(bottom);

      a.appendChild(examCard);

      mathExams.appendChild(a);
    }
  }
}

createExam();

const examSearch = document.getElementById("examSearch");
const examSearchEmpty = document.getElementById("examSearchEmpty");

examSearch.addEventListener("input", () => {
  const query = examSearch.value.trim().toLocaleLowerCase();
  let visibleExams = 0;

  document.querySelectorAll(".exam-card-wrapper").forEach((wrapper) => {
    const category = wrapper
      .querySelector("h2")
      .textContent.toLocaleLowerCase();
    let visibleInCategory = 0;

    wrapper.querySelectorAll(".content > *").forEach((exam) => {
      const title = exam.textContent.toLocaleLowerCase();
      const matches =
        !query || category.includes(query) || title.includes(query);

      exam.hidden = !matches;
      if (matches) visibleInCategory++;
    });

    wrapper.hidden = visibleInCategory === 0;
    visibleExams += visibleInCategory;
  });

  examSearchEmpty.hidden = visibleExams > 0;
});

// examSearch.addEventListener("input", () => {
//   examSearch.value === "Adam" ? console.log("Yes") : false;

// })

function switchModels(subject) {
  const derasat = document.querySelector(".molakhasat.derasat");
  const olom = document.querySelector(".molakhasat.olom");
  const arabic = document.querySelector(".molakhasat.arabic");
  const math = document.querySelector(".molakhasat.math");
  const english = document.querySelector(".molakhasat.english");
  const files = document.querySelector(".files");
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
  document.body.style.overflow = "auto";
}
