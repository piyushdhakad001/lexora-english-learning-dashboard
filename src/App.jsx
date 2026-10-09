import { useState, useEffect } from "react";
import "./App.css";

import { CATEGORIES } from "./data/words";
import { getId, loadList } from "./utils/helpers";

import Tabs from "./components/Tabs";
import Overview from "./components/Overview";
import Toolbar from "./components/Toolbar";
import WordTable from "./components/WordTable";

export default function App() {
  /* ==========================================================
     🧠 STATE: all of it stays here, in the parent
     () => loadList(...) = read localStorage only ONCE
     ========================================================== */

  // 🔴 ids of words marked Weak
  const [weakWords, setWeakWords] = useState(() => loadList("weakList"));

  // 🟡 ids of words marked Semi Weak
  const [semiWords, setSemiWords] = useState(() => loadList("semiList"));

  // 📄 which page is open: "overview" or a category key
  const [tab, setTab] = useState("overview");

  // 🔍 what is typed in the search box
  const [search, setSearch] = useState("");

  // 🎛️ active filter: "all", "weak" or "semi"
  const [filter, setFilter] = useState("all");

  // 🔀 shuffled words (null = normal order)
  const [shuffledWords, setShuffledWords] = useState(null);

  /* ==========================================================
     💾 SAVING: keep marks after refresh
     ========================================================== */

  useEffect(() => {
    localStorage.setItem("weakList", JSON.stringify(weakWords));
  }, [weakWords]);

  useEffect(() => {
    localStorage.setItem("semiList", JSON.stringify(semiWords));
  }, [semiWords]);

  /* ==========================================================
     🔘 ACTIONS: these must live inside App (they use its state)
     ========================================================== */

  // 🔴 Click "Weak": toggle weak, and remove from semi
  function markWeak(id) {
    if (weakWords.includes(id)) {
      setWeakWords(weakWords.filter((wordId) => wordId !== id));
      return;
    }
    setWeakWords([...weakWords, id]);
    setSemiWords(semiWords.filter((wordId) => wordId !== id));
  }

  // 🟡 Click "Semi Weak": toggle semi, and remove from weak
  function markSemi(id) {
    if (semiWords.includes(id)) {
      setSemiWords(semiWords.filter((wordId) => wordId !== id));
      return;
    }
    setSemiWords([...semiWords, id]);
    setWeakWords(weakWords.filter((wordId) => wordId !== id));
  }

  // 🗑️ Reset all marks (ask first)
  function resetAll() {
    if (window.confirm("Reset all marks?")) {
      setWeakWords([]);
      setSemiWords([]);
    }
  }

  // 🔀 Shuffle a COPY of the category's words
  function shuffleWords(category) {
    const copy = [...category.words];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    setShuffledWords(copy);
  }

  // Show every word again, in normal order
  function showAll() {
    setFilter("all");
    setShuffledWords(null);
  }

  // 🔝 Open a tab and start fresh
  function openTab(tabName) {
    setTab(tabName);
    setSearch("");
    setFilter("all");
    setShuffledWords(null);
  }

  /* ==========================================================
     📊 OVERVIEW PAGE
     ========================================================== */

  if (tab === "overview") {
    return (
      <div className="app">
        <Tabs tab={tab} onOpenTab={openTab} />
        <Overview weakWords={weakWords} semiWords={semiWords} />
      </div>
    );
  }

  /* ==========================================================
     📋 WORDS PAGE
     ========================================================== */

  // STEP 1: find the open category
  const category = CATEGORIES.find((item) => item.key === tab);

  // STEP 2: normal order, or shuffled order
  const orderedWords = shuffledWords !== null ? shuffledWords : category.words;

  // STEP 3: keep only words that pass the filter AND the search
  const filteredWords = orderedWords.filter(function (word) {
    const id = getId(category, word);

    // TEST A: filter buttons
    if (filter === "weak" && !weakWords.includes(id)) return false;
    if (filter === "semi" && !semiWords.includes(id)) return false;

    // TEST B: search box
    const wordText = (
      word.hindi +
      " " +
      word.english +
      " " +
      word.example
    ).toLowerCase();

    return wordText.includes(search.toLowerCase());
  });

  // STEP 4: draw the page
  return (
    <div className="app">
      <Tabs tab={tab} onOpenTab={openTab} />

      <div className="hero">
        <h1>{category.name}</h1>
        <p>Hindi → English → Example → Progress</p>
      </div>

      <Toolbar
        search={search}
        onSearch={setSearch}
        filter={filter}
        onSetFilter={setFilter}
        onShuffle={() => shuffleWords(category)}
        onShowAll={showAll}
        onReset={resetAll}
      />

      <WordTable
        category={category}
        words={filteredWords}
        weakWords={weakWords}
        semiWords={semiWords}
        onMarkWeak={markWeak}
        onMarkSemi={markSemi}
      />
    </div>
  );
}
