let selectedLanguage = "en";

const optionTexts = {
  en: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  ta: ["ஒருபோதும் இல்லை", "அரிதாக", "சில சமயங்களில்", "அடிக்கடி", "எப்போதும்"]
};

function toggleLanguage() {
  selectedLanguage = selectedLanguage === "en" ? "ta" : "en";
  document.getElementById("languageToggle").innerText =
    selectedLanguage === "en" ? "தமிழ் / English" : "English / தமிழ்";

  updateRoleDropdownLabels();
  updateStaticLabels();
  loadQuestions();
}

function updateStaticLabels() {
  const translations = {
    en: {
      selectRoleLabel: "Select Your Role:",
      languageLabel: "Language:",
      submitButton: "Submit",
      toggleDarkModeLabel: "Toggle Dark Mode 🌞",
      ReadAllLabel:"🔊 Read All Questions",
    },
    ta: {
      selectRoleLabel: "உங்கள் வகுப்பைத் தேர்ந்தெடுக்கவும்:",
      languageLabel: "மொழி:",
      submitButton: "சமர்ப்பிக்கவும்",
      toggleDarkModeLabel: "இருள் பயன்முறை 🌙",
      ReadAllLabel:"🔊 அனைத்து கேள்விகளையும் வாசிக்கவும்",
    }
  };

  const trans = translations[selectedLanguage];
  Object.keys(trans).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = trans[id];
  });
}

function updateRoleDropdownLabels() {
  const roleSelect = document.getElementById("roleSelect");
  if (!roleSelect) return;

  const roleLabels = {
    select_now: { en: "<--Select-->", ta: "<--தேர்ந்தெடுக்கவும்-->" },
    student_below18: { en: "Student (Below 18)", ta: "மாணவர் (18க்கு கீழ்)" },
    student_above18: { en: "Student (Above 18)", ta: "மாணவர் (18க்கு மேல்)" },
    parent_father: { en: "Parent (Father)", ta: "தந்தை" },
    parent_mother: { en: "Parent (Mother)", ta: "தாய்" },
    professional_private1: { en: "Private Job (Education Dep)", ta: "தனியார் வேலை (கல்வி துறை)" },
    professional_private2: { en: "Private Job (IT Dep)", ta: "தனியார் வேலை (தொழில்நுட்பத் துறை)" },
    professional_government1: { en: "Government Job (Education Dep)", ta: "அரசு வேலை (கல்வி துறை)" },
    professional_government2: { en: "Government Job (Transport Dep)", ta: "அரசு வேலை (போக்குவரத்து துறை)" },
  };

  for (let i = 0; i < roleSelect.options.length; i++) {
    const opt = roleSelect.options[i];
    if (roleLabels[opt.value]) {
      opt.text = roleLabels[opt.value][selectedLanguage];
    }
  }
}

function loadQuestions() {
  const role = document.getElementById("roleSelect").value;
  const section = document.getElementById("questions-section");
  section.innerHTML = "";

  if (!role || !questionsByRole[role]) return;

  const questions = questionsByRole[role];
  questions.forEach((q, i) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-block");

    const label = document.createElement("label");
    label.innerText = q[selectedLanguage];
    questionDiv.appendChild(label);

    const select = document.createElement("select");
    select.id = `q${i}`;
    optionTexts[selectedLanguage].forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt;
      option.text = opt;
      select.appendChild(option);
    });

    questionDiv.appendChild(select);
    section.appendChild(questionDiv);
  });
}

function submitAnswers() {
  const role = document.getElementById("roleSelect").value;
  if (!role) {
    alert(selectedLanguage === "ta" ? "தயவுசெய்து ஒரு பங்கைத் தேர்ந்தெடுக்கவும்." : "Please select a role.");
    return;
  }

  const questions = questionsByRole[role];
  const copingDiv = document.getElementById("copingStrategies");
  copingDiv.innerHTML = `<h3>${selectedLanguage === "ta" ? "மன அழுத்தத்தைக் குறைக்கும் வழிகள்" : "Coping Strategies:"}</h3>`;

  let stressScore = 0;
  const responseWeights = {
    "Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4,
    "ஒருபோதும் இல்லை": 0, "அரிதாக": 1, "சில சமயங்களில்": 2, "அடிக்கடி": 3, "எப்போதும்": 4
  };

  const selectedAnswers = [];

  questions.forEach((q, i) => {
    const answerText = document.getElementById(`q${i}`).selectedOptions[0].text;
    stressScore += responseWeights[answerText] || 0;

    selectedAnswers.push({
      answerText,
      strategy: q.strategies?.[selectedLanguage]
    });

    // Show strategies immediately
    if (answerText !== optionTexts[selectedLanguage][0] && q.strategies) {
      const strategy = q.strategies[selectedLanguage];
      const para = document.createElement("p");
      para.innerText = strategy;
      copingDiv.appendChild(para);
    }
  });

  const percentage = Math.round((stressScore / (questions.length * 4)) * 100);
  displayResults(percentage); // update UI + pie

  // Speak stress level first
  let level = "";
  if (percentage <= 20)
    level = selectedLanguage === "ta" ? "மிகக் குறைந்த மன அழுத்தம்" : "Very Low Stress";
  else if (percentage <= 40)
    level = selectedLanguage === "ta" ? "லேசான மன அழுத்தம்" : "Mild Stress";
  else if (percentage <= 60)
    level = selectedLanguage === "ta" ? "மிதமான மன அழுத்தம்" : "Moderate Stress";
  else if (percentage <= 80)
    level = selectedLanguage === "ta" ? "உயர்ந்த மன அழுத்தம்" : "High Stress";
  else
    level = selectedLanguage === "ta" ? "தீவிர மன அழுத்தம்" : "Extreme Stress";

  const message = `${selectedLanguage === "ta" ? "மன அழுத்த நிலை" : "Stress Level"}: ${percentage}% - ${level}`;
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = selectedLanguage === "ta" ? "ta-IN" : "en-US";

  utterance.onend = () => {
    // Now speak each coping strategy
    selectedAnswers.forEach(({ answerText, strategy }) => {
      if (answerText !== optionTexts[selectedLanguage][0] && strategy) {
        speak(strategy);
      }
    });
  };

  speechSynthesis.speak(utterance);
}



function speak(text) {
  const speakWithVoice = () => {
    const voices = speechSynthesis.getVoices();
    const langCode = selectedLanguage === "ta" ? "ta-IN" : "en-US";
    const msg = new SpeechSynthesisUtterance(text);

    msg.lang = langCode;

    const matchedVoice = voices.find(v => v.lang === langCode);
    if (matchedVoice) {
      msg.voice = matchedVoice;
    } else {
      console.warn(`No ${langCode} voice found. Using default.`);
      if (selectedLanguage === "ta") {
        alert("Tamil voice not supported on your browser. You may hear English pronunciation instead.");
      }
    }

    speechSynthesis.speak(msg);
  };

  if (speechSynthesis.getVoices().length === 0) {
  speechSynthesis.onvoiceschanged = () => {
    speakWithVoice();
  };
} else {
  speakWithVoice();
}
}

function displayResults(percentage) {
  const resultText = document.getElementById("results-text");
  let level = "";

  if (percentage <= 20)
    level = selectedLanguage === "ta" ? "மிகக் குறைந்த மன அழுத்தம்" : "Very Low Stress";
  else if (percentage <= 40)
    level = selectedLanguage === "ta" ? "லேசான மன அழுத்தம்" : "Mild Stress";
  else if (percentage <= 60)
    level = selectedLanguage === "ta" ? "மிதமான மன அழுத்தம்" : "Moderate Stress";
  else if (percentage <= 80)
    level = selectedLanguage === "ta" ? "உயர்ந்த மன அழுத்தம்" : "High Stress";
  else
    level = selectedLanguage === "ta" ? "தீவிர மன அழுத்தம்" : "Extreme Stress";

  const message = `${selectedLanguage === "ta" ? "மன அழுத்த நிலை" : "Stress Level"}: ${percentage}% - ${level}`;
  resultText.innerHTML = `<h3>${message}</h3>`;
  renderPieChart(percentage);
}


let chart;

function renderPieChart(percentage) {
  const ctx = document.getElementById("stressChart").getContext("2d");
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Stress %', 'Remaining %'],
      datasets: [{
        data: [percentage, 100 - percentage],
        backgroundColor: ['#ff6384', '#cce5ff'],
      }]
    },
    options: {
      responsive: true,
    }
  });
}

document.getElementById("modeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  this.innerText = document.body.classList.contains("dark-mode") ? "🌙" : "🌞";
});

function speakAllQuestions() {
  const role = document.getElementById("roleSelect").value;
  if (!role || !questionsByRole[role]) return;

  const questions = questionsByRole[role];
  const texts = questions.map(q => q[selectedLanguage]);

  texts.forEach((text) => {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = selectedLanguage === "ta" ? "ta-IN" : "en-US";
    speechSynthesis.speak(msg);
  });
}

function checkTamilVoiceSupport() {
  const voices = speechSynthesis.getVoices();
  const hasTamil = voices.some(v => v.lang === "ta-IN");
  const statusDiv = document.getElementById("voiceStatus");

  if (selectedLanguage === "ta") {
    if (!hasTamil) {
      alert("Tamil voice is not supported on this device/browser. You may hear English pronunciation for Tamil.");
      if (statusDiv) statusDiv.innerText = "🔇 Tamil voice not supported. Using English voice.";
    } else {
      if (statusDiv) statusDiv.innerText = "🔊 Tamil voice available.";
    }
  } else {
    if (statusDiv) statusDiv.innerText = "";
  }
}


window.speechSynthesis.onvoiceschanged = () => {
  checkTamilVoiceSupport();
};

