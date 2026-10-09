import { memo, useCallback, useMemo, useState } from "react";
import { CATEGORIES, TOTAL_ITEMS } from "./data";
import { usePersistentState, useDebounce, fisherYates } from "./hooks";
import "./styles.css";

const STORAGE_KEY = "lingo-notebook:progress:v1";
// Progress map shape: { [itemId]: "weak" | "semi" }.
// An item with no entry counts as "mastered" (default state).

/* ---------- Dashboard: overall + per-category stats ---------- */
function StatCard({ label, value, tone }) {
  return (
    <div className={`stat ${tone}`}>
      <span className="stat-num">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Dashboard({ progress }) {
  // Derived data: computed from state, never stored separately.
  const rows = useMemo(() => CATEGORIES.map((c) => {
    const weak = c.items.filter((i) => progress[i.id] === "weak").length;
    const semi = c.items.filter((i) => progress[i.id] === "semi").length;
    return { ...c, weak, semi, mastered: c.items.length - weak - semi };
  }), [progress]);

  const sum = (k) => rows.reduce((n, r) => n + r[k], 0);
  const pct = TOTAL_ITEMS ? Math.round((sum("mastered") / TOTAL_ITEMS) * 100) : 0;

  return (
    <section>
      <div className="stats">
        <StatCard label="Weak" value={sum("weak")} tone="weak" />
        <StatCard label="Semi Weak" value={sum("semi")} tone="semi" />
        <StatCard label="Mastered" value={`${pct}%`} tone="ok" />
        <StatCard label="Total items" value={TOTAL_ITEMS} tone="plain" />
      </div>
      <h2 className="scribble">Category progress</h2>
      {rows.map((r) => (
        <div className="cat-row" key={r.key}>
          <div className="cat-name">{r.icon} {r.label}</div>
          <div className="bar" role="img" aria-label={`${r.label} progress`}>
            <i style={{ width: `${(r.mastered / r.items.length) * 100}%`, background: "var(--ok)" }} />
            <i style={{ width: `${(r.semi / r.items.length) * 100}%`, background: "var(--semi)" }} />
            <i style={{ width: `${(r.weak / r.items.length) * 100}%`, background: "var(--weak)" }} />
          </div>
          <div className="cat-meta">🔴 {r.weak} · 🟡 {r.semi} · 🟢 {r.mastered}</div>
        </div>
      ))}
    </section>
  );
}

/* ---------- Reusable list: one row (memoised so only changed rows re-render) ---------- */
const ItemRow = memo(function ItemRow({ item, status, onSet }) {
  return (
    <li className={`row ${status ?? "ok"}`}>
      <div className="row-text">
        <strong className="en">{item.en}</strong>
        <span className="hi">{item.hi}</span>
        <em className="ex">“{item.example}”</em>
      </div>
      <div className="row-btns">
        {/* Clicking the active button again clears it (back to mastered) */}
        <button className={status === "weak" ? "on weak" : ""} onClick={() => onSet(item.id, "weak")}>🔴 Weak</button>
        <button className={status === "semi" ? "on semi" : ""} onClick={() => onSet(item.id, "semi")}>🟡 Semi Weak</button>
      </div>
    </li>
  );
});

/* ---------- Reusable list: toolbar + rows. Works for ANY category. ---------- */
function ItemList({ category, progress, onSet, order, onShuffle, onUnshuffle }) {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 300);

  // Apply the shuffled order (if any), then the search filter.
  const visible = useMemo(() => {
    const byId = new Map(category.items.map((i) => [i.id, i]));
    const ordered = order ? order.map((id) => byId.get(id)) : category.items;
    const q = debounced.trim().toLowerCase();
    if (!q) return ordered;
    return ordered.filter((i) => `${i.en} ${i.hi} ${i.example}`.toLowerCase().includes(q));
  }, [category, order, debounced]);

  return (
    <section>
      <div className="toolbar">
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Hindi, English or examples…" aria-label="Search" />
        <button className="tool" onClick={onShuffle}>🔀 Shuffle</button>
        {order && <button className="tool" onClick={onUnshuffle}>↩ Original order</button>}
      </div>
      <p className="count">{visible.length} of {category.items.length} shown</p>
      <ul className="list">
        {visible.map((item) => (
          <ItemRow key={item.id} item={item} status={progress[item.id]} onSet={onSet} />
        ))}
        {visible.length === 0 && <li className="empty">No matches — try another word ✏️</li>}
      </ul>
    </section>
  );
}

/* ---------- Confirmation modal ---------- */
function ConfirmModal({ onCancel, onConfirm }) {
  return (
    <div className="backdrop" onClick={onCancel}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <h3>Reset all marks?</h3>
        <p>Every item goes back to “Mastered”. This can’t be undone.</p>
        <div className="modal-btns">
          <button className="tool" onClick={onCancel}>Keep my marks</button>
          <button className="tool danger" onClick={onConfirm}>Yes, reset</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- App shell: owns all state ---------- */
export default function App() {
  const [progress, setProgress] = usePersistentState(STORAGE_KEY, {});
  const [tab, setTab] = useState("dashboard");
  const [orders, setOrders] = useState({}); // { [categoryKey]: string[] } shuffled id order
  const [confirming, setConfirming] = useState(false);

  // Immutable update: toggle a status, or clear it if clicked again.
  const setStatus = useCallback((id, status) => {
    setProgress((prev) => {
      const next = { ...prev };
      if (prev[id] === status) delete next[id];
      else next[id] = status;
      return next;
    });
  }, [setProgress]);

  const category = CATEGORIES.find((c) => c.key === tab);

  const shuffle = () =>
    setOrders((o) => ({ ...o, [tab]: fisherYates(category.items.map((i) => i.id)) }));
  const unshuffle = () => setOrders(({ [tab]: _, ...rest }) => rest);

  return (
    <div className="page">
      <header>
        <h1>📓 Lingo Notebook</h1>
        <p>my handwritten English revision journal</p>
      </header>

      <nav className="tabs" aria-label="Categories">
        <button className={tab === "dashboard" ? "tab active" : "tab"} onClick={() => setTab("dashboard")}>📊 Overview</button>
        {CATEGORIES.map((c) => (
          <button key={c.key} className={tab === c.key ? "tab active" : "tab"}
            style={{ "--tab": c.color }} onClick={() => setTab(c.key)}>
            {c.icon} {c.label}
          </button>
        ))}
      </nav>

      <main className="paper">
        {category
          ? <ItemList key={category.key} category={category} progress={progress} onSet={setStatus}
              order={orders[tab]} onShuffle={shuffle} onUnshuffle={unshuffle} />
          : <Dashboard progress={progress} />}
      </main>

      <footer>
        <button className="tool danger" onClick={() => setConfirming(true)}>🗑 Reset marks</button>
      </footer>

      {confirming && (
        <ConfirmModal onCancel={() => setConfirming(false)}
          onConfirm={() => { setProgress({}); setConfirming(false); }} />
      )}
    </div>
  );
}
