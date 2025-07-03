# 🔢 Guess the Number - React Game

Welcome to the **"Guess the Number"** interactive game workshop! This project is built with **React** and is designed to practice key concepts like **conditional rendering**, **component composition**, and **state management** using React hooks.

---

## 🎯 Project Objective

The goal is to create a simple yet interactive game where the application generates a random number, and the user must guess it. Depending on the user’s input, the app provides helpful feedback messages.

---

## 🧩 Features

- Random number generation between 1 and 10 (Future updates dynamic).
- Conditional rendering for feedback messages.
- Modular React component structure.
- Restart button to reset the game.
- Optional improvement: attempt counter.

---

## ⚙️ Technologies Used

- React
- JavaScript (ES6+)
- CSS
- Vite (optional for bundling)
- Bootstrap & Bootstrap-icons

---

## 🛠️ How It Works

1. When the game starts, the `Game` component generates a random number between **1 and 10**.
2. The user's input is managed using `useState`.
3. Each time a number is submitted:
   - If it's correct, it shows “✅ Correct!”.
   - If the guess is too low, it shows “🔻 The number is higher”.
   - If the guess is too high, it shows “🔺 The number is lower”.
4. The `Message` component receives a prop and renders feedback based on the game's state.
5. Components used:
   - `InputNumber`: receives the user's guess.
   - `Message`: displays dynamic feedback.
   - `RestartButton`: resets the game and generates a new number.
6. The design is kept clean and simple, and styled using CSS.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Jcdelega/Conditional-Rendering.git
cd Conditional-Rendering
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

> The app should open at `http://localhost:5173` (or similar port).

---

## 💡 Optional Improvements

- Add a counter for the number of attempts.
- Add animations or transitions for feedback messages.
- Improve mobile responsiveness with media queries.
- Add difficulty levels with different number ranges.

---

## 👨‍💻 Author

Made by **Jcdelega**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
