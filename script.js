/* ---------- SELECT ELEMENTS ---------- */
const questions = document.querySelectorAll(".question");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const backBtn = document.getElementById("back-btn");

const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");

const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");
const resultIcon = document.getElementById("result-icon");
const resultTrait = document.getElementById("result-trait");
const serviceList = document.getElementById("service-list");

let currentQuestion = 0;
const answers = [];

/* ---------- RESULTS + SERVICE RECOMMENDATIONS ---------- */
const results = {
  Humanity: {
    icon: "❤️",
    description: "You are deeply compassionate and motivated to reduce suffering.",
    trait: "Core strength: Empathy & kindness",
    services: [
      { name: "Young Hearts", url: "https://www.redcross.sg/young-hearts", desc: "Engage youth in community and humanitarian projects." },
      { name: "Meals with Love", url: "https://www.redcross.sg/meals-with-love", desc: "Provide nutritious meals to those in need." },
      { name: "ElderAid", url: "https://www.redcross.sg/elderaid", desc: "Support elderly individuals with assistance and companionship." },
      { name: "HoME+", url: "https://redcross.sg/home-monitoring", desc: "Help monitor and care for persons at home." },
      { name: "Community Befriending", url: "https://redcross.sg/get-assistance/for-persons-with-disabilities.html", desc: "Provide social support and friendship to vulnerable community members." }
    ]
  },

  Impartiality: {
    icon: "⚖️",
    description: "You believe in helping people based on need, without discrimination.",
    trait: "Core strength: Fairness & equality",
    services: [
      { name: "TransportAid", url: "https://www.redcross.sg/transportaid", desc: "Assist with transportation for those in need." },
      { name: "ElderAid", url: "https://www.redcross.sg/elderaid", desc: "Support elderly individuals with assistance and companionship." },
      { name: "Community Health on Wheels", url: "https://redcross.sg/community-health-outreach-for-wellness", desc: "Bring basic health services to communities." }
    ]
  },

  Neutrality: {
    icon: "🕊️",
    description: "You stay calm, balanced, and objective in difficult situations.",
    trait: "Core strength: Balance & trust",
    services: [
      { name: "First Aider on Wheels", url: "https://redcross.sg/first-aiders-on-wheels.html", desc: "Provide mobile first aid to those in need." },
      { name: "Community Health on Wheels", url: "https://redcross.sg/community-health-outreach-for-wellness", desc: "Bring basic health services to communities." },
      { name: "TransportAid", url: "https://redcross.sg/transportaid", desc: "Assist with transportation for those in need." },
      { name: "HoME+", url: "https://redcross.sg/home-monitoring", desc: "Help monitor and care for persons at home." }
    ]
  },

  Independence: {
    icon: "🧭",
    description: "You act according to strong personal principles and integrity.",
    trait: "Core strength: Integrity & responsibility",
    services: [
      { name: "Young Hearts", url: "https://www.redcross.sg/young-hearts", desc: "Engage youth in community and humanitarian projects." },
      { name: "Overseas Disaster Deployment Training (ODDT)", url: "https://redcross.sg/get-assistance/international-services.html", desc: "Train to assist in international disaster responses." },
      { name: "Centre of Excellence for Pandemic Preparedness (CoEPP)", url: "https://redcross.sg/centre-of-excellence-for-pandemic-preparedness.html", desc: "Learn and support pandemic readiness programs." }
    ]
  },

  "Voluntary Service": {
    icon: "🤝",
    description: "You help others willingly, without expecting anything in return.",
    trait: "Core strength: Selfless service",
    services: [
      { name: "Young Hearts", url: "https://www.redcross.sg/young-hearts", desc: "Engage youth in community and humanitarian projects." },
      { name: "Meals with Love", url: "https://www.redcross.sg/meals-with-love", desc: "Provide nutritious meals to those in need." },
      { name: "ElderAid", url: "https://www.redcross.sg/elderaid", desc: "Support elderly individuals with assistance and companionship." },
      { name: "Humanitarian Engagement (HE)", url: "https://redcross.sg/get-assistance/international-services.html", desc: "Participate in humanitarian initiatives locally and abroad." }
    ]
  },

  Unity: {
    icon: "👥",
    description: "You believe teamwork and cooperation create the greatest impact.",
    trait: "Core strength: Collaboration & connection",
    services: [
      { name: "Young Hearts", url: "https://www.redcross.sg/young-hearts", desc: "Engage youth in community and humanitarian projects." },
      { name: "Community Befriending", url: "https://redcross.sg/get-assistance/for-persons-with-disabilities.html", desc: "Provide social support and friendship to vulnerable community members." },
      { name: "Community Health on Wheels", url: "https://redcross.sg/community-health-outreach-for-wellness", desc: "Bring basic health services to communities." },
      { name: "HoME+", url: "https://redcross.sg/home-monitoring", desc: "Help monitor and care for persons at home." }
    ]
  },

  Universality: {
    icon: "🌍",
    description: "You believe humanitarian care should reach everyone, everywhere.",
    trait: "Core strength: Global & inclusive mindset",
    services: [
      { name: "HoME+", url: "https://redcross.sg/home-monitoring", desc: "Help monitor and care for persons at home." },
      { name: "TransportAid", url: "https://redcross.sg/transportaid", desc: "Assist with transportation for those in need." },
      { name: "Overseas Disaster Deployment Training (ODDT)", url: "https://redcross.sg/get-assistance/international-services.html", desc: "Train to assist in international disaster responses." },
      { name: "First Aider on Wheels", url: "https://redcross.sg/first-aiders-on-wheels.html", desc: "Provide mobile first aid to those in need." }
    ]
  }
};

/* ---------- DISPLAY LOGIC ---------- */
function showQuestion(index) {
  questions.forEach(q => q.style.display = "none");
  questions[index].style.display = "block";
  updateProgress();
  updateBackButton();
}

/* ---------- EVENTS ---------- */
questions.forEach((question, index) => {
  question.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      answers[index] = button.dataset.value;
      nextQuestion();
    });
  });
});

backBtn.addEventListener("click", previousQuestion);

/* ---------- NAVIGATION ---------- */
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
}

function previousQuestion() {
  if (currentQuestion === 0) return;
  currentQuestion--;
  showQuestion(currentQuestion);
}

/* ---------- UI ---------- */
function updateProgress() {
  const progress = (currentQuestion / questions.length) * 100;
  progressBar.style.width = progress + "%";
  progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function updateBackButton() {
  backBtn.style.display = currentQuestion === 0 ? "none" : "block";
}

/* ---------- RESULT PAGE ---------- */
function showResult() {
  quizPage.classList.add("hidden");
  resultPage.classList.remove("hidden");
  backBtn.style.display = "none";
  progressBar.style.width = "100%";
  progressText.textContent = "Quiz Complete!";

  const scores = {};
  answers.forEach(a => scores[a] = (scores[a] || 0) + 1);

  const maxScore = Math.max(...Object.values(scores));
  const tied = Object.keys(scores).filter(key => scores[key] === maxScore);

  let finalResult = tied[0];
  for (let i = answers.length - 1; i >= 0; i--) {
    if (tied.includes(answers[i])) {
      finalResult = answers[i];
      break;
    }
  }

  const result = results[finalResult];

  resultIcon.textContent = result.icon;
  resultTitle.textContent = finalResult;
  resultDescription.textContent = result.description;
  resultTrait.textContent = result.trait;

  serviceList.innerHTML = "";
  result.services.forEach(service => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const desc = document.createElement("p");

    a.href = service.url;
    a.target = "_blank";
    a.textContent = service.name;
    a.classList.add("service-link");

    desc.textContent = service.desc;
    desc.classList.add("service-desc");

    li.appendChild(a);
    li.appendChild(desc);
    serviceList.appendChild(li);
  });
}

/* ---------- START ---------- */
showQuestion(0);
