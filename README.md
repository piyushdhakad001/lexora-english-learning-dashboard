# 📓 Lexora

> **Lingo Notebook**: a handwritten-style English revision journal. Study collocations, connectors, idioms and phrasal verbs with Hindi meanings, and track what you know. A full-stack app built with React, Vite and Express.

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)


## 🖼️ Screenshots

### Dashboard
![Lexora Dashboard](./screenshots/dashboard.png)

### Learning Page
![Lexora Learning Page](./screenshots/learning-page.png)


## 🌐 Live Demo

[View Live Demo](https://lexora-english-learning-dashboard.vercel.app/)

---

## ✨ Features

- 📚 **230 study items** across four categories: collocations, connectors, idioms and phrasal verbs
- 🇮🇳 Every item has an **English phrase, a Hindi meaning and an example sentence**
- 🚦 **Progress tracking**: mark items 🔴 Weak or 🟡 Semi Weak (everything else counts as 🟢 Mastered; click again to clear)
- 📊 **Overview dashboard** with totals, mastered percentage and a progress bar per category
- 🔎 **Debounced search** across Hindi, English and examples
- 🔀 **Shuffle** (Fisher-Yates) with a one-click return to the original order
- 🗑️ **Reset all marks** behind a confirmation modal
- 💾 Progress stored on the server, so it survives refreshes and browser changes
- 📝 "Handwritten paper note" visual theme

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, CSS |
| Backend | Node.js, Express |
| Storage | JSON file (`server/progress.json`) |

## 🧠 Code Highlights

- **Derived state**: dashboard stats are computed from `progress` with `useMemo`, never stored separately
- **Immutable updates**: marks are updated by copying state, not mutating it
- **Performance**: list rows are wrapped in `React.memo`, so only changed rows re-render
- **Custom hooks**: `useDebounce` for search, plus a Fisher-Yates shuffle helper
- **Safe persistence**: progress is only saved after the first load finishes, so saved marks are never overwritten by an empty state

## 🧱 Architecture

```
React + Vite (:5173)  ──/api/progress──▶  Express (:5001)  ──▶  progress.json
```

Only the user's **progress** lives on the server. The word lists are static content kept in `src/data.js`.

Progress shape:

```json
{ "12": "weak", "40": "semi" }
```

An item with no entry is treated as mastered.

## 📁 Project Structure

```
lexora/
├─ server/
│  ├─ index.js          # Express API for progress
│  └─ package.json
├─ src/
│  ├─ App.jsx           # Dashboard, list, modal and app state
│  ├─ data.js           # Categories and study items
│  ├─ hooks.js          # useDebounce, shuffle helper
│  └─ styles.css
├─ vite.config.js       # Dev proxy for /api
└─ package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer

### Installation

```bash
# 1. Install frontend dependencies
npm install

# 2. Install backend dependencies
cd server
npm install
cd ..
```

### Run the app

```bash
npm run dev
```

This starts both the Vite frontend (`http://localhost:5173`) and the Express server (`http://localhost:5001`) in one terminal.

To run them separately:

```bash
# Terminal 1: frontend
npm run client

# Terminal 2: backend
cd server
node index.js
```

The Vite dev server forwards `/api/*` requests to the backend (configured in `vite.config.js`).

## 🔌 API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/progress` | Get all saved marks |
| `PUT` | `/api/progress` | Replace all saved marks |

## ⚠️ Known Limitations

- No user accounts: one shared progress file for everyone using the server
- The whole progress object is saved on every change (fine for ~230 items)
- A JSON file is used instead of a real database to keep the backend minimal

## 🗺️ Roadmap

- [ ] Per-user progress with register / login (JWT)
- [ ] Move storage to MongoDB
- [ ] Show an error when saving fails
- [ ] Study modes: weak-only and semi-weak-only filters
- [ ] Deploy (frontend on Vercel, backend on Render)

## 👤 Author

Built by **Piyush** as part of a self-taught journey into full-stack web development.