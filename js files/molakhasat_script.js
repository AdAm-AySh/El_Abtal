function toggleMenu() {
  document.getElementById("mobileLinks").classList.toggle("open");
}

// إظهار تنبيه بسيط للأقسام التي لم يُضف محتواها بعد.
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

const molakhasatData = [
  {
    img: "../images/molakhasat/قوانين شدة التيار.jpg",
    title: "قوانين شدة التيار تجربة",
    kind: "علوم",
  },
  {
    img: "../images/molakhasat/أنواع التفاعلات.png",
    title: "أنواع التفاعلات",
    kind: "علوم"
  }
];
function createMolakhas() {
  const olom = document.querySelector(".molakhasat.olom .content");
  const arabic = document.querySelector(".molakhasat.arabic .content");
  const english = document.querySelector(".molakhasat.english .content");
  const derasat = document.querySelector(".molakhasat.derasat .content");
  const math = document.querySelector(".molakhasat.math .content");

  for (let i = 0; i < molakhasatData.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let top = document.createElement("div");
    top.classList.add("top");

    let img = document.createElement("img");
    img.src = molakhasatData[i].img;
    top.appendChild(img);

    let bottom = document.createElement("div");
    bottom.classList.add("bottom");

    let p = document.createElement("p");
    p.textContent = molakhasatData[i].title;
    bottom.appendChild(p);

    let aInstall = document.createElement("a");
    aInstall.href = molakhasatData[i].img;
    aInstall.classList.add("btn", "download");
    aInstall.download = `${molakhasatData[i].title}.png`;

    let iconDownload = document.createElement("i");
    iconDownload.classList.add("fa-solid", "fa-download");
    aInstall.appendChild(iconDownload);
    bottom.appendChild(aInstall);

    let aShow = document.createElement("a");
    aShow.href = molakhasatData[i].img;
    aShow.classList.add("btn", "download");

    let iconShow = document.createElement("i");
    iconShow.classList.add("fa-solid", "fa-eye");
    aShow.appendChild(iconShow);
    bottom.appendChild(aShow);

    card.appendChild(top);
    card.appendChild(bottom);

    switch (molakhasatData[i].kind) {
      case "دراسات":
        derasat.appendChild(card);
        break;
      case "لغة عربية":
        arabic.appendChild(card);
        break;
      case "english":
        english.appendChild(card);
        break;
      case "رياضيات":
        math.appendChild(card);
        break;
      case "علوم":
        olom.appendChild(card);
        break;
      default:
        break;
    }
  }
}
createMolakhas();

console.log(`${new Date().getDate()}-${(new Date().getMonth() + 1)}-${new Date().getFullYear()}`);
