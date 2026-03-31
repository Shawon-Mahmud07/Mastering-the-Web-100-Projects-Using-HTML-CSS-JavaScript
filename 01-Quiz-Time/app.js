// // All quiz questions stored in an array

// Round 1 questions
const round1 = [
  {
    q: "বাংলাদেশের রাজধানীর নাম কী?",
    options: ["চট্টগ্রাম", "সিলেট", "ঢাকা", "রাজশাহী"],
    answer: 2,
  },
  {
    q: "বাংলাদেশ কোন তারিখে স্বাধীনতা লাভ করে?",
    options: [
      "২৬ মার্চ, ১৯৭১",
      "১৬ ডিসেম্বর, ১৯৭১",
      "১৫ আগস্ট, ১৯৪৭",
      "১ জানুয়ারি, ১৯৭২",
    ],
    answer: 0,
  },
  {
    q: "বাংলাদেশের জাতীয় ফুলের নাম কী?",
    options: ["গোলাপ", "পদ্ম", "শাপলা", "জুঁই"],
    answer: 2,
  },
  {
    q: "বাংলাদেশের জাতির পিতা কে?",
    options: [
      "জিয়াউর রহমান",
      "শেখ মুজিবুর রহমান",
      "এ. কে. ফজলুল হক",
      "হোসেন শহীদ সোহরাওয়ার্দী",
    ],
    answer: 1,
  },
  {
    q: "বাংলাদেশের মুদ্রার নাম কী?",
    options: ["রুপি", "ডলার", "টাকা", "দিনার"],
    answer: 2,
  },
  {
    q: "সুন্দরবন কোন দেশে অবস্থিত?",
    options: ["ভারত", "মিয়ানমার", "নেপাল", "বাংলাদেশ"],
    answer: 3,
  },
  {
    q: "বাংলাদেশের জাতীয় পাখির নাম কী?",
    options: ["ময়না", "দোয়েল", "শালিক", "কোকিল"],
    answer: 1,
  },
  {
    q: "বাংলাদেশের সর্বোচ্চ পর্বতশৃঙ্গের নাম কী?",
    options: ["কেওক্রাডং", "তাজিনডং (বিজয়)", "চিম্বুক", "নীলগিরি"],
    answer: 1,
  },
];

// Round 2 questions
const round2 = [
  {
    q: "বাংলাদেশের জাতীয় খেলা কী?",
    options: ["ক্রিকেট", "ফুটবল", "হা-ডু-ডু", "কাবাডি"],
    answer: 2,
  },
  {
    q: "বাংলাদেশের প্রথম রাষ্ট্রপতি কে ছিলেন?",
    options: ["শেখ মুজিবুর রহমান", "জিয়াউর রহমান", "সৈয়দ নজরুল ইসলাম", "আবু সাঈদ চৌধুরী"],
    answer: 0,
  },
  {
    q: "বাংলাদেশের জাতীয় গাছের নাম কী?",
    options: ["আম গাছ", "কাঁঠাল গাছ", "নারকেল গাছ", "বট গাছ"],
    answer: 1,
  },
  {
    q: "ঢাকা বিশ্ববিদ্যালয় কত সালে প্রতিষ্ঠিত হয়?",
    options: ["১৯০৫", "১৯২১", "১৯৪৭", "১৯৭১"],
    answer: 1,
  },
  {
    q: "বাংলাদেশের সবচেয়ে বড় নদীর নাম কী?",
    options: ["যমুনা", "মেঘনা", "পদ্মা", "ব্রহ্মপুত্র"],
    answer: 2,
  },
  {
    q: "বাংলাদেশের জাতীয় মাছের নাম কী?",
    options: ["রুই", "কাতলা", "ইলিশ", "চিতল"],
    answer: 2,
  },
  {
    q: "মুক্তিযুদ্ধে বাংলাদেশ কত তারিখে বিজয় লাভ করে?",
    options: ["২৬ মার্চ", "৭ মার্চ", "১৬ ডিসেম্বর", "১৭ এপ্রিল"],
    answer: 2,
  },
  {
    q: "বাংলাদেশের জাতীয় সংগীতের রচয়িতা কে?",
    options: ["কাজী নজরুল ইসলাম", "রবীন্দ্রনাথ ঠাকুর", "জসীম উদ্দীন", "মাইকেল মধুসূদন দত্ত"],
    answer: 1,
  },
];




// Track current question and score
let current = 0;
let score = 0;

// Timer variables
let timer = null;
let timeLeft = 30 ;

// Start with round 1
let questions = round1;
let currentRound = 1;

// Convert English numbers to Bangla
const toBanglaNumber = (num) => {
  const bangla = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).split('').map(d => bangla[d] || d).join('');
};

// Hide a screen
const hide = (id) => {
  document.getElementById(id).style.display = "none";
};

// Show a screen
const show = (id) => {
  document.getElementById(id).style.display = "block";
};

// Start the quiz
const startQuiz = () => {
  hide("start-screen");
  show("quiz-screen");
  loadQuestion();
};

// Load and display current question
const loadQuestion = () => {
  // Get the current question from array
  const q = questions[current];

  // Start timer for each question
  clearInterval(timer);

  // Remove and re-add animate class for replay effect
  const card = document.getElementById("card");
  card.classList.remove("animate");
  void card.offsetWidth; // Force browser to reset animation
  card.classList.add("animate");

  // Show question number
  document.getElementById("q-counter").textContent =
    "প্রশ্ন " + (current + 1) + " / " + questions.length;

  // Show question text
  document.getElementById("question-text").textContent = q.q;

  // Clear old options first
  document.getElementById("options").innerHTML = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";

  // Update progress bar
  const progress = (current / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
  // Update score display
  document.getElementById("score-display").textContent = "স্কোর: " + score;

  // Create a button for each option
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = function () {
      checkAnswer(index);
    };
    document.getElementById("options").appendChild(btn);
  });
  // Start timer after loading question
  startTimer();
};

// Check if selected answer is correct
const checkAnswer = (index) => {
  const q = questions[current];

  // Stop timer when an option is selected
  clearInterval(timer);

  // Disable all option buttons
  const buttons = document.getElementById("options").querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  // Check if answer is correct
  if (index === q.answer) {
    score = score + 1;
    buttons[index].style.borderColor = "#3ecf8e";
    buttons[index].style.color = "#3ecf8e";
    document.getElementById("feedback").textContent = "✅ সঠিক উত্তর!";
  } else {
    buttons[index].style.borderColor = "#f06f6f";
    buttons[index].style.color = "#f06f6f";
    buttons[q.answer].style.borderColor = "#3ecf8e";
    buttons[q.answer].style.color = "#3ecf8e";
    document.getElementById("feedback").textContent = "❌ ভুল হয়েছে!";
  }

  // Update score badge after answer
  document.getElementById("score-display").textContent = "স্কোর: " + score;
  // Show next button
  document.getElementById("next-btn").style.display = "block";
};

// Move to next question or show result
const nextQuestion = () => {
  current = current + 1;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

// Show result screen
const showResult = () => {
  hide("quiz-screen");
  show("result-screen");

  // Show score in Bangla numbers
  document.getElementById("result-score").textContent =
    toBanglaNumber(score) + " / " + toBanglaNumber(questions.length);

  if (currentRound === 1) {
    document.getElementById("result-emoji").textContent = "🎯";
    document.getElementById("result-title").textContent = "রাউন্ড ১ শেষ!";
    document.getElementById("result-sub").textContent =
      "রাউন্ড ২ তে আরও কঠিন প্রশ্ন আসবে!";
    document.getElementById("next-round-btn").style.display = "inline-block";
  } else {
    document.getElementById("next-round-btn").style.display = "none";
    if (score === questions.length) {
      document.getElementById("result-emoji").textContent = "🏆";
      document.getElementById("result-title").textContent = "অসাধারণ!";
      document.getElementById("result-sub").textContent =
        "তুমি সব প্রশ্নের সঠিক উত্তর দিয়েছো!";
    } else if (score >= 5) {
      document.getElementById("result-emoji").textContent = "🎉";
      document.getElementById("result-title").textContent = "দারুণ হয়েছে!";
      document.getElementById("result-sub").textContent =
        "আরও একটু চেষ্টা করলে পারফেক্ট হবে!";
    } else {
      document.getElementById("result-emoji").textContent = "📚";
      document.getElementById("result-title").textContent = "আরও পড়ো!";
      document.getElementById("result-sub").textContent =
        "হতাশ হয়ো না, আবার চেষ্টা করো!";
    }
  }
};;

// Restart the quiz from beginning
const restartQuiz = () => {
  current = 0;
  score = 0;

  // Move to next round
  if (currentRound === 1) {
    currentRound = 2;
    questions = round2;
  } else {
    currentRound = 1;
    questions = round1;
  }
  hide("result-screen");
  show("quiz-screen");

  // Reset score badge
  document.getElementById("score-display").textContent =
    "স্কোর: " + toBanglaNumber(score);
  // Hide next button
  document.getElementById("next-btn").style.display = "none";
  loadQuestion();
};;

// Go back to home screen
const goHome = () => {
  current = 0;
  score = 0;

  hide("result-screen");
  show("start-screen");
};;

// Start countdown timer
const startTimer = () => {
  timeLeft = 30 ;
  document.getElementById("timer").textContent = "⏱ " + timeLeft;
  document.getElementById("timer").classList.remove("danger");

  timer = setInterval(() => {
    timeLeft = timeLeft - 1;
    document.getElementById("timer").textContent = "⏱ " + timeLeft;

    // Turn red when 5 seconds left
    if (timeLeft <= 10) {
      document.getElementById("timer").classList.add("danger");
    }

    // Time is up
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
};


// Background Animation
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const stars = Array.from({length: 80}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.3,
  alpha: Math.random(),
  speed: Math.random() * 0.008 + 0.003,
  phase: Math.random() * Math.PI * 2
}));

const particles = Array.from({length: 18}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 0.4,
  vy: (Math.random() - 0.5) * 0.4,
  r: Math.random() * 2.5 + 1,
  alpha: Math.random() * 0.4 + 0.1,
  gold: Math.random() > 0.5
}));

const waves = Array.from({length: 3}, (_, i) => ({
  offset: i * (Math.PI * 2 / 3),
  speed: 0.003 + i * 0.001,
  amp: 60 + i * 20,
  yRatio: 0.6 + i * 0.1
}));

let t = 0;

function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  waves.forEach(w => {
    const waveY = canvas.height * w.yRatio;
    ctx.beginPath();
    ctx.moveTo(0, waveY);
    for (let x = 0; x <= canvas.width; x += 4) {
      const y = waveY + Math.sin(x * 0.008 + t * w.speed * 60 + w.offset) * w.amp;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = 'rgba(201,168,76,0.025)';
    ctx.fill();
  });

  stars.forEach(s => {
    s.alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.phase));
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
    ctx.fill();
  });

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.gold
      ? `rgba(201,168,76,${p.alpha})`
      : `rgba(122,150,178,${p.alpha})`;
    ctx.fill();
  });

  t += 0.016;
  requestAnimationFrame(drawBackground);
}

drawBackground();