# Quiz Time — বাংলাদেশ কুইজ

A fun and interactive quiz app about Bangladesh, built with pure HTML, CSS, and JavaScript.

---

## 🚀 Live Demo

[https://quiz-time-bd.netlify.app/](https://quiz-time-bd.netlify.app/)

---

## ✨ Features

- 🎯 Two rounds of questions about Bangladesh
- ⏱️ 30-second countdown timer per question
- 📊 Real-time score badge
- 📈 Progress bar
- ✅ Correct/wrong answer highlighting
- 📋 Answer review screen after each round
- 🔄 Smooth fade-in animation on each question
- ✅ Bangla numbers and Bangla font (Hind Siliguri)
- 🌌 Animated background with twinkling stars, floating particles, and waves

---

## 🗂️ Project Structure

```plaintext
01-Quiz-Time/
├── index.html      # App structure and screens
├── style.css       # Styling and animations
├── app.js          # Quiz logic, timer, and background animation
└── README.md       # Project documentation
```

---

## 🖥️ Screens

| Screen | Description |
| -------- | ------------- |
| Start Screen | Welcome page with start button |
| Quiz Screen | Question, options, timer, score badge |
| Result Screen | Score summary with next round option |

---

## 🎨 Background Animation

The app features a live canvas-based background animation built with vanilla JavaScript:

| Effect | Description |
| -------- | ------------- |
| ⭐ Twinkling Stars | 80 stars that fade in and out using `Math.sin` |
| 🟡 Floating Particles | 18 gold & blue particles drifting across the screen |
| 〰️ Wave Layers | 3 sine-curve waves flowing across the bottom |

All animation runs at ~60fps using `requestAnimationFrame`.

---

## 🛠️ Built With

- HTML5 (Canvas API)
- CSS3 (Flexbox, CSS Variables, Animations)
- Vanilla JavaScript (Arrow Functions, DOM Manipulation, Math.sin, requestAnimationFrame)
- Google Fonts — [Hind Siliguri](https://fonts.google.com/specimen/Hind+Siliguri)

---

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/Shawon-Mahmud07/Mastering-the-Web-100-Projects-Using-HTML-CSS-JavaScript.git

# Open the project
cd 01-Quiz-Time

# Open in browser
open index.html
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
