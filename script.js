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
const shareBtn = document.getElementById("share-result");

let currentQuestion = 0;
const answers = [];

/* ---------- RESULTS + SERVICE RECOMMENDATIONS ---------- */
const results = {
  Humanity: {
    icon: "❤️",
    description: "You are deeply compassionate and motivated to reduce suffering.",
    trait: "Core strength: Empathy & kindness",
    services: [
      {
        name: "Young Hearts",
        url: "https://www.redcross.sg/young-hearts",
        desc: "The Young Hearts programme fosters self-reliance and empowers Children and Young Persons (CYPs) living in public rental housing by providing them with access to out-of-reach opportunities"
      },
      {
        name: "Meals with Love",
        url: "https://www.redcross.sg/meals-with-love",
        desc: "Alleviate the financial burdens by providing nourishment and care for families in their time of need"
      },
      {
        name: "ElderAid",
        url: "https://www.redcross.sg/elderaid",
        desc: "Support elderly individuals with assistance and companionship"
      },
      {
        name: "HoME+",
        url: "https://redcross.sg/home-monitoring",
        desc: "A 24/7 non-intrusive alert and response system that helps seniors stay safe at home"
      },
      {
        name: "Community Befriending",
        url: "https://redcross.sg/get-assistance/for-persons-with-disabilities.html",
        desc: "Volunteers are paired with disabled seniors to provide friendship and assistance."
      }
    ]
  },

  Impartiality: {
    icon: "⚖️",
    description: "You believe in helping people based on need, without discrimination.",
    trait: "Core strength: Fairness & equality",
    services: [
      {
        name: "TransportAid",
        url: "https://www.redcross.sg/transportaid",
        desc: "Helps older or disabled persons from lower-income homes get to and from their healthcare service facilities"
      },
      {
        name: "ElderAid",
        url: "https://www.redcross.sg/elderaid",
        desc: "Support elderly individuals with assistance and companionship"
      },
      {
        name: "Community Health on Wheels",
        url: "https://redcross.sg/community-health-outreach-for-wellness",
        desc: "Bring basic health services to communities"
      }
    ]
  },

  Neutrality: {
    icon: "🕊️",
    description: "You stay calm, balanced, and objective in difficult situations.",
    trait: "Core strength: Balance & trust",
    services: [
      {
        name: "First Aider on Wheels",
        url: "https://redcross.sg/first-aiders-on-wheels.html",
        desc: "Patrols along the East Coast Park, Pulau Ubin, Jurong Lake Gardens, and Punggol/Coney Island on weekends and public holidays, to provide first aid to those in need"
      },
      {
        name: "Community Health on Wheels",
        url: "https://redcross.sg/community-health-outreach-for-wellness",
        desc: "Bring basic health services to communities"
      },
      {
        name: "TransportAid",
        url: "https://redcross.sg/transportaid",
        desc: "Helps older or disabled persons from lower-income homes get to and from their healthcare service facilities"
      },
      {
        name: "HoME+",
        url: "https://redcross.sg/home-monitoring",
        desc: "A 24/7 non-intrusive alert and response system that helps seniors stay safe at home"
      }
    ]
  },

  Independence: {
    icon: "🧭",
    description: "You act according to strong personal principles and integrity.",
    trait: "Core strength: Integrity & responsibility",
    services: [
      {
        name: "Young Hearts",
        url: "https://www.redcross.sg/young-hearts",
        desc: "The Young Hearts programme fosters self-reliance and empowers Children and Young Persons (CYPs) living in public rental housing by providing them with access to out-of-reach opportunities"
      },
      {
        name: "Overseas Disaster Deployment Training (ODDT)",
        url: "https://redcross.sg/get-assistance/international-services.html",
        desc: "Equips participants with the knowledge, skills, and practical experience necessary to effectively respond to disasters and emergencies in international settings"
      },
      {
        name: "Centre of Excellence for Pandemic Preparedness (CoEPP)",
        url: "https://redcross.sg/centre-of-excellence-for-pandemic-preparedness.html",
        desc: "Provide a platform for the Red Cross Red Crescent Movement to regularly exchange information and best practices"
      }
    ]
  },

  "Voluntary Service": {
    icon: "🤝",
    description: "You help others willingly, without expecting anything in return.",
    trait: "Core strength: Selfless service",
    services: [
      {
        name: "Young Hearts",
        url: "https://www.redcross.sg/young-hearts",
        desc: "The Young Hearts programme fosters self-reliance and empowers Children and Young Persons (CYPs) living in public rental housing by providing them with access to out-of-reach opportunities"
      },
      {
        name: "Meals with Love",
        url: "https://www.redcross.sg/meals-with-love",
        desc: "Alleviate the financial burdens by providing nourishment and care for families in their time of need"
      },
      {
        name: "ElderAid",
        url: "https://www.redcross.sg/elderaid",
        desc: "Support elderly individuals with assistance and companionship"
      },
      {
        name: "Humanitarian Engagement (HE)",
        url: "https://redcross.sg/get-assistance/international-services.html",
        desc: "Encourages people to actively engage with humanitarian issues and activities such as thinking of innovative ideas for specific humanitarian issues"
      }
    ]
  },

  Unity: {
    icon: "👥",
    description: "You believe teamwork and cooperation create the greatest impact.",
    trait: "Core strength: Collaboration & connection",
    services: [
      {
        name: "Young Hearts",
        url: "https://www.redcross.sg/young-hearts",
        desc: "The Young Hearts programme fosters self-reliance and empowers Children and Young Persons (CYPs) living in public rental housing by providing them with access to out-of-reach opportunities"
      },
      {
        name: "Community Befriending",
        url: "https://redcross.sg/get-assistance/for-persons-with-disabilities.html",
        desc: "Volunteers are paired with disabled seniors to provide friendship and assistance"
      },
      {
        name: "Community Health on Wheels",
        url: "https://redcross.sg/community-health-outreach-for-wellness",
        desc: "Bring basic health services to communities"
      },
      {
        name: "HoME+",
        url: "https://redcross.sg/home-monitoring",
        desc: "A 24/7 non-intrusive alert and response system that helps seniors stay safe at home"
      }
    ]
  },

  Universality: {
    icon: "🌍",
    description: "You believe humanitarian care should reach everyone, everywhere.",
    trait: "Core strength: Global & inclusive mindset",
    services: [
      {
        name: "HoME+",
        url: "https://redcross.sg/home-monitoring",
        desc: "A 24/7 non-intrusive alert and response system that helps seniors stay safe at home"
      },
      {
        name: "TransportAid",
        url: "https://www.redcross.sg/transportaid",
        desc: "Helps older or disabled persons from lower-income homes get to and from their healthcare service facilities"
      },
      {
        name: "Overseas Disaster Deployment Training (ODDT)",
        url: "https://redcross.sg/get-assistance/international-services.html",
        desc: "Equips participants with the knowledge, skills, and practical experience necessary to effectively respond to disasters and emergencies in international settings"
      },
      {
        name: "First Aider on Wheels",
        url: "https://redcross.sg/first-aiders-on-wheels.html",
        desc: "Patrols along the East Coast Park, Pulau Ubin, Jurong Lake Gardens, and Punggol/Coney Island on weekends and public holidays, to provide first aid to those in need"
      }
    ]
  }
};


/* ---------- QUIZ FLOW ---------- */
function showQuestion(index) {
  questions.forEach(q => q.style.display = "none");
  questions[index].style.display = "block";
  updateProgress();
  backBtn.style.display = index === 0 ? "none" : "block";
}

questions.forEach((q, i) => {
  q.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      answers[i] = btn.dataset.value;
      nextQuestion();
    });
  });
});

backBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
});

function nextQuestion() {
  currentQuestion++;
  currentQuestion < questions.length ? showQuestion(currentQuestion) : showResult();
}

function updateProgress() {
  progressBar.style.width = (currentQuestion / questions.length) * 100 + "%";
  progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
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

  const finalResult = Object.keys(scores).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  );

  const result = results[finalResult];

  resultIcon.textContent = result.icon;
  resultTitle.textContent = finalResult;
  resultDescription.textContent = result.description;
  resultTrait.textContent = result.trait;

  serviceList.innerHTML = "";
  result.services.forEach(service => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const p = document.createElement("p");

    a.href = service.url;
    a.target = "_blank";
    a.textContent = service.name;
    a.className = "service-link";

    p.textContent = service.desc;
    p.className = "service-desc";

    li.appendChild(a);
    li.appendChild(p);
    serviceList.appendChild(li);
  });
}

/* ---------- SHARE (PNG → SHARE SHEET) ---------- */
shareBtn.addEventListener("click", () => {
  const card = document.getElementById("result-card");

  html2canvas(card, {
    scale: 2,
    backgroundColor: "#ffffff",
    useCORS: true
  }).then(canvas => {
    canvas.toBlob(blob => {
      const file = new File(
        [blob],
        "My-Red-Cross-Principle.png",
        { type: "image/png" }
      );

      // ✅ Mobile native share
      if (navigator.share && navigator.canShare({ files: [file] })) {
        navigator.share({
          files: [file],
          title: "My Red Cross Principle",
          text: "Which Red Cross Principle defines you?"
        }).catch(() => {});
      } 
      // ❌ Fallback
      else {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "My-Red-Cross-Principle.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  });
});


/* ---------- START ---------- */
showQuestion(0);
