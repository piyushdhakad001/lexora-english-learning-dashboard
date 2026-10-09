import { CATEGORIES } from "../data/words";

// 🔝 The row of top buttons.
// PROPS (data coming from App):
//   tab       → which tab is open now
//   onOpenTab → function to call when a tab is clicked
export default function Tabs({ tab, onOpenTab }) {
  return (
    <nav className="tabs">
      {/* Overview button (made by hand) */}
      <button
        className={tab === "overview" ? "tab on" : "tab"}
        onClick={() => onOpenTab("overview")}
      >
        📊 Overview
      </button>

      {/* One button per category (made automatically) */}
      {CATEGORIES.map(function (category) {
        return (
          <button
            key={category.key}
            className={tab === category.key ? "tab on" : "tab"}
            onClick={() => onOpenTab(category.key)}
          >
            {category.name}
          </button>
        );
      })}
    </nav>
  );
}