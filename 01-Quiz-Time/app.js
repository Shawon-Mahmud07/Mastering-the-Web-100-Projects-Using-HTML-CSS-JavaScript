// All quiz questions stored in an array
const questions = [
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

// Track current question and score
let current = 0;
let score = 0;

// Hide a screen
function hide(id) {
  document.getElementById(id).style.display = 'none';
}

// Show a screen
function show(id) {
  document.getElementById(id).style.display = 'block';
}

// Start the quiz
function startQuiz() {
  hide('start-screen');
  show('quiz-screen');
  loadQuestion();
}

// Load and display current question
function loadQuestion() {

  // Get the current question from array
  const q = questions[current];

  // Show question number
  document.getElementById('q-counter').textContent = 'প্রশ্ন ' + (current + 1) + ' / ' + questions.length;

  // Show question text
  document.getElementById('question-text').textContent = q.q;

  // Clear old options first
  document.getElementById('options').innerHTML = '';

  // Create a button for each option
  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = function() { checkAnswer(index); };
    document.getElementById('options').appendChild(btn);
  });
}

// Check if selected answer is correct
function checkAnswer(index) {
  const q = questions[current];

  // Disable all option buttons
  const buttons = document.getElementById('options').querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  // Check if answer is correct
  if (index === q.answer) {
    score = score + 1;
    buttons[index].style.borderColor = '#3ecf8e';
    buttons[index].style.color = '#3ecf8e';
    document.getElementById('feedback').textContent = '✅ সঠিক উত্তর!';
  } else {
    buttons[index].style.borderColor = '#f06f6f';
    buttons[index].style.color = '#f06f6f';
    buttons[q.answer].style.borderColor = '#3ecf8e';
    buttons[q.answer].style.color = '#3ecf8e';
    document.getElementById('feedback').textContent = '❌ ভুল হয়েছে!';
  }

  // Show next button
  document.getElementById('next-btn').style.display = 'block';
}

// Move to next question or show result
function nextQuestion() {
  current = current + 1;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show final result screen
function showResult() {
  hide('quiz-screen');
  show('result-screen');

  document.getElementById('result-score').textContent = score + ' / ' + questions.length;

  if (score === questions.length) {
    document.getElementById('result-emoji').textContent = '🏆';
    document.getElementById('result-title').textContent = 'অসাধারণ!';
    document.getElementById('result-sub').textContent = 'তুমি সব প্রশ্নের সঠিক উত্তর দিয়েছো!';
  } else if (score >= 5) {
    document.getElementById('result-emoji').textContent = '🎉';
    document.getElementById('result-title').textContent = 'দারুণ হয়েছে!';
    document.getElementById('result-sub').textContent = 'আরও একটু চেষ্টা করলে পারফেক্ট হবে!';
  } else {
    document.getElementById('result-emoji').textContent = '📚';
    document.getElementById('result-title').textContent = 'আরও পড়ো!';
    document.getElementById('result-sub').textContent = 'হতাশ হয়ো না, আবার চেষ্টা করো!';
  }
}